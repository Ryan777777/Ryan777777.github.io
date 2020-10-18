---
layout:     post
title:      Dynamic Programming
subtitle:   
date:       2019-05-01
author:     Linz
header-img: img/about_bg.jpeg
catalog: true
tags:
    - Algorithm
---
# Dynamic Programming

### What is  Dynamic Programming

**It is an algorithm, that will save current unique result in order to avoid repeat calculation. In general, we save the result to a one dimensional array or two dimensional array.**

##### Step 1  #####
**Defines the meaning of array-elements**. As we mention before, we need a one dimensional array to save the result. This is important by understanding the question and have a general about how to solve the problem.

##### Step 2  #####
**Find the relationship between elements**. This likes a recursive function. When we want to calculate f(n), we can use f(n-1),f(n-2),f(n-3)···.

##### Step 3  #####
**Find the initial value**. This is the stat value. We can consider as the end condition in recursive function. Is shows where the dynamic programming should start at.

##### One dimensional array #####

Q1 A frog can jump 1 step or 2 step each time. How many possible ways to jump N steps?

```
step1:
Defines the meaning of array-elements: In this problem, we can defines dp[n] means how many possible ways to jump. For example dp[1] = 1 means there are 1 choices to jump 1 steps. As well as dp[2] = 2

stpe2
Find relationship, this is the hardest part in dynamic programming. In this example, Our goal is to find dp[n], which can jump from dp[n-1] and dp[n-2]. What is the relationship between dp[3], dp[2], dp[1]?
Case 1, jump once from steps 1 to steps 3.   
Case 2, jump once from steps 2 to steps 3.
Therefore, the possible ways to jump to steps 3 is the sum of the possible ways jump to steps 2 and the possible ways jump to step 1.
So we have dp[n] = dp[n-1] + dp[n-2]

stpe3
Initial value: No negative jump. dp[0] = 0, dp[1] = 1, dp[2] = 2.  
```

```java
 public int fast( int n ){
      if(n <= 1)
          return n;
      // create an one dimensional array to save data. Since dp[0],
      // so the size will be int[n+1]
      int[] dp = new int[n+1];
      // give the initial value
      dp[0] = 0;
      dp[1] = 1;
      dp[2] = 2;
      // relationship between elements
      for(int i = 3; i <= n; i++){
          dp[i] = dp[i-1] + dp[i-2];
      }
      return dp[n];
  }
 ```


 | Index | 0 | 1 | 2 | 3 | 4 | 5 |
 |-------|---|---|---|---|---|---|
 | value | 0 | 1 | 2 | 3 | 5 | 8 |


 In general, this likes a recursion function. The only different is we save the intermediate results to an array to avoid repeat calculations.


##### Two dimensional array: #####


 A robot is located at the top-left corner of a m x n grid. The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (n, m less than 100).

   How many possible unique paths are there? [Source: Leecode 62](https://leetcode.com/problems/unique-paths/)


 ![](https://miro.medium.com/max/764/1*csZyGQGnyAsZdZhG5yEqmg.png)


 ```
 step1:
 Defines the meaning of array-elements: In this problem, we can defines dp[i][j] means how many possible ways to position(i, j). Our goal is to find dp[i-1][j-1], since it start at dp[0][0].
 stpe2
 Find relationship, We can imaging for each position (a, b). There are two possible, one is from dp[a-1][b], and another is from dp[a][b-1]. So we need to sum them up. That is it.
 dp[i][j] = dp[i-1][j] + dp[i][j-1]
 stpe3
 Initial value: if i or j is 0. We do not need to count the relationship dp[i][j] = dp[i-1][j] + dp[i][j-1], since i-1 or j-1 will be negative.
 Therefore:
 dp[0] [0….n-1] = 1; // directly go first row
 dp[0…m-1] [0] = 1; // directly go downward
 ```

 ```java
 public static int uniquePaths(int m, int n) {
     if (m <= 0 || n <= 0) {
         return 0;
     }
    //initial array
    int[][] dp = new int[m][n];
    //initial condition
    for(int i = 0; i < m; i++){
       dp[i][0] = 1;
     }
    for(int i = 0; i < n; i++){
       dp[0][i] = 1;
     }
     //relationship
     for (int i = 1; i < m; i++) {
         for (int j = 1; j < n; j++) {
             dp[i][j] = dp[i-1][j] + dp[i][j-1];
         }
     }
     return dp[m-1][n-1];
 }
 ```
>This is O(n*m), we can improve to O(min(n,m)). Not here.

##### Minimum Path Sum #####


 Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
 Note: You can only move either down or right at any point in time. [Source: Leecode 64](https://leetcode.com/problems/minimum-path-sum/)


 ![](https://miro.medium.com/max/746/1*xFEcuAYzHR5J_r60z-os4A.png)


 ```
 step1:
 Defines the meaning of array-elements: In this problem, we can defines dp[i][j] means how many possible ways to position(i, j). Our goal is to find dp[i-1][j-1], since it start at dp[0][0].
 stpe2
 Find relationship, We can imaging for each position (a, b). There are two possible, one is from dp[a-1][b], and another is from dp[a][b-1]. So instead sum them up, we need to find the minimum first.
 dp[i][j] = min(dp[i-1][j]，dp[i][j-1]) + arr[i][j];//arr[i][j] means the value in the current cell.
 stpe3
 Initial value: if i or j is 0. We do not need to count the relationship dp[i][j] = min(dp[i-1][j]，dp[i][j-1]) + arr[i][j];, since i-1 or j-1 will be negative.
 Therefore:
 dp[0][j] = arr[0][j] + dp[0][j-1]; // directly go first row
 dp[i][0] = arr[i][0] + dp[i-1][0]; // directly go downward
 ```


 ```java
 public static int uniquePaths(int[][] arr) {
   	int m = arr.length;
   	int n = arr[0].length;
     if (m <= 0 || n <= 0) {
         return 0;
     }
     int[][] dp = new int[m][n]; //
   	// initial array
   	dp[0][0] = arr[0][0];
   	// first row
   	for(int i = 1; i < m; i++){
       dp[i][0] = dp[i-1][0] + arr[i][0];
     }
   	// first column
   	for(int j = 1; j < n; j++){
       dp[0][j] = dp[0][j-1] + arr[0][j];
     }
 		// double for loop since it is a two dimensional matrix
     for (int i = 1; i < m; i++) {
         for (int j = 1; j < n; j++) {
             dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + arr[i][j];
         }
     }
     return dp[m-1][n-1];
 }
 ```

>This is O(n*m), we can improve to O(min(n,m)). Not here.


##### Edit Distance #####

 Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.
 You have the following 3 operations permitted on a word:

 Insert a character

 Delete a character

 Replace a character [Source: Leecode 72](https://leetcode.com/problems/edit-distance/)

![](https://miro.medium.com/max/608/1*3l5oNS3mEKTcEWtyX6xixw.jpeg)

 **90% of string problems can be solved by dynamic programming, and 90% by two-dimensional arrays.**
 ```
 step1:
 Defines the meaning of array-elements: In this problem, we can defines dp[i][j]. i is the length of word 1 and j is the length of the word 2. The minimum ways to transfer word 1 to word 2 will represent by dp[i][j].
 stpe2
 Equal char dp[i][j] = dp[i-1][j-1]
 Insert a character dp[i][j] = dp[i][j-1] + 1;
 Delete a character dp[i][j] = dp[i-1][j] + 1;
 Replace a character dp[i][j] = dp[i-1][j-1] + 1;
 There are 4 cases, see image below and we should take the minimum approach.
 Therefore:
 dp[i][j] = min(dp[i-1][j-1]，dp[i][j-1]，dp[[i-1][j]]) + 1;

 stpe3
 Initial value: if i or j is 0. We do not need to count the relationship.
 When one string is 0 length, the only way to transform is take remove step and the numbers
 of the minimum step is the length of the remaining string.
 ```

![](https://miro.medium.com/max/427/1*55vXMSE72YYkkB0MuxBKwg.jpeg)


 ```java
 public int minDistance(String word1, String word2) {
     int n1 = word1.length();
     int n2 = word2.length();
     int[][] dp = new int[n1 + 1][n2 + 1];
     // Initial value dp[0][0...n2]
     for (int j = 1; j <= n2; j++)
     	dp[0][j] = dp[0][j - 1] + 1;
     // Initial value dp[0...n1][0]
     for (int i = 1; i <= n1; i++) dp[i][0] = dp[i - 1][0] + 1;
 		// Calculate dp[n-1][n-2]
     for (int i = 1; i <= n1; i++) {
         for (int j = 1; j <= n2; j++) {
             if (word1.charAt(i - 1) == word2.charAt(j - 1)){
             	p[i][j] = dp[i - 1][j - 1];
             }else {
             dp[i][j] = Math.min(Math.min(dp[i - 1][j - 1], dp[i][j - 1]), dp[i - 1][j]) + 1;
             }         
         }
     }
     return dp[n1][n2];  
 }
 ```
 > This is O(n*m), we can improve to O(min(n,m)). Not here.
