---
layout:     post
title:      Basic Java
subtitle:   
date:       2020-07-05
author:     Linz
header-img: img/Background/b2.jpg
catalog: true
tags:
    - Java
---

## Java
## 0. java 接口，类
###  接口（interface）
interface Alram {
}
接口不能实（implements)接口,只能继承（extend）多个多个其它的接口
Java接口必须通过类来实现它的抽象方法;
类实现了某个Java接口时,它必须实现接口中的所有抽象方法,否则这个类必须声明为抽象类;
一个类只能继承一个直接的父类,但可以实现多个接口
  // ps： 因为如果支持多继承的话，假设多个父类中有相同的成员，那么其子类就不搞清楚到底使用哪个父类的同名成员了.


			   
### 抽象类（abstract）
【类可以extend 抽象类】
abstract class Door {
}
1）抽象方法必须为public或者protected（因为如果为private，则不能被子类继承，子类便无法实现该方法），缺省情况下默认为public。

　　2）抽象类不能用来创建对象；

　　3）如果一个类继承于一个抽象类，则子类必须实现父类的抽象方法。如果子类没有实现父类的抽象方法，则必须将子类也定义为为abstract类。

#### 区别：
interface 只能extend（可以多个）
			   不能implements

class       可以extend（一个）抽象类
			   可以implements（多个）
			 （abstract class 跟class一样）
			   

## 转换
###### String to int:
``` java
int num = Integer.parseInt(string);
```
###### int to String :
``` java
String.valueOf(res)  
String a = res+“”；
``` 
#### string to char
``` java
string .toCharArray();
char c=s.charAt(0);
```
#### char to string
```java
String a = String(char[]);  （构造函数)
String a = String(char[],offset,count);（构造函数)
static string copyValueOf(char[]);(静态方法)
copyValueOf(char[] data,int offset,int count); (静态方法)
String.valueOf(res) ；（可以将基本数据类型转换成字符串）
```


## String
###### String to int:
```java
int num = Integer.parseInt(string);
```
###### substring:
```java
S.substring(position1, position2+1)// 这个是包含头，不包含尾，所以+1
```
###### 切割
```java
String[] a = s.split("xxx");
```
###### 去除两边空格
```java
String[] a = s.trim();
```
## Int
###### find Max:
```java
 Math.max(a, b);
```
###### int to String :
```java
String.valueOf(res)
```
#### char to String
```java
String a = Character.toString(tempKey)
```
#### string to char
```java
char c=s.charAt(0);
```

#### 交集：
```java
set1.retainAll(set2);
```
#### 并集
```java
set1.addAll(set2);
```
#### 差集
```java
set1.removeAll(set2);
```

#### 读文件
```java
	import java.io.File; 
	import java.util.*;
	import java.io.FileNotFoundException; 
	  File myObj = new File("2.txt");
	   Scanner myReader = new Scanner(myObj);
	   while (myReader.hasNextLine()) {
	                    String data = myReader.nextLine();
	                    }
	   myReader.close();
```
#### 写文件
```java
	import java.io.PrintWriter;
	PrintWriter writer = new PrintWriter("2_out.txt");
	writer.println(info);
	writer.close();
```
#### Iterator 的使用方法
```java
需要先建立一个Iterator对象，对应(list,set·····)
		Iterator iterator = list.iterator(); 
	  
	        System.out.println("List elements : "); 
	  
	        while (iterator.hasNext()) 
	            System.out.print(iterator.next() + " "); 
	  
	        System.out.println();
```
-----------------
	#### Set接口
  ```java
	Set<String> currentSet = new HastSet<String>();
	Set<String> currentSet = new LinkedHashSet<String>();
	Set<String> currentSet = new TreeSet<String>();
	```
	#### List接口:
  ```java
	List<String> currentList = new ArrayList<String>();
	List<String> currentList = new Vector<String>();
	List<String> currentList = new LinkedList<String>();
	```
	#### Map接口:
  ```java
	Map<Character,Integer> curmap = new HashMap<Character,Integer> ();
	Map<Character,Integer> curmap = new TreeMap<Character,Integer> ();
	Map<Character,Integer> curmap = new HashTable<Character,Integer> ();
  ```
##### -------------------------

## 1.Set in java
An unordered collection of objects in which duplicate values cannot be stored.
Basically, Set is implemented by HashSet, LinkedHashSet or TreeSet (sorted representation).
Set has various methods to add, remove clear, size, etc.
```java
// Java code for adding elements in Set 
import java.util.*; 
public class Set_example 
{ 
    public static void main(String[] args) 
    { 
        // Set deonstration using HashSet 
        Set<Character> hash_Set = new HashSet<Character>(); 
        hash_Set.add("G"); 
        hash_Set.add("F"); 
        hash_Set.add("G"); 
        hash_Set.add("E"); 
        hash_Set.add("S"); 
        System.out.print("Set output without the duplicates"); 
  
        System.out.println(hash_Set); 
  
        // Set deonstration using TreeSet 
        System.out.print("Sorted Set after passing into TreeSet"); 
        Set<String> tree_Set = new TreeSet<String>(hash_Set); 
        System.out.println(tree_Set); 
    } 
}  
Set output without the duplicates[G, E, F, S]
Sorted Set after passing into TreeSet[E, F, G, S]
```
```java
1.Set<String> test1 =  new HashSet<String>()
//去除重复的内容
2Set<String> test2 = new TreeSet<String>(test1).
//对去重复之后的内容进行字母数字order排序
3.Function:
###### import java.util.*;
test1.contains();
test1.size();
test1.isEmpty();
test1.iterator();
test1.remove();
test1.clear();
test1.equal();
```

## 2.List in java
```java
     List<Integer> intList = new ArrayList<Integer>();
     size();
     indexOf(77)
     contains();
     toArray();
     add();
     remove();
     removeAll();
     replaceAll();
     sort();
     clear();
     indexOf();
     get();
```
## 3.Array in java
```java
       int[] arr = {13, 7, 6, 45, 21, 9, 2, 100}; 
       int[] intArray = new int[20];     //数据不明确，new是建在堆内存中
       int[] intArray = new int[] {13, 7, 6, 45, 21, 9, 2, 100}; 
       
		System.out.println(arr);
		output: [I@de6ced
	    // [ 表示是一个数组。 I 表示是int 值  后面是哈希算法array地址 

        int min = Arrays.stream(arr).min().getAsInt();
        int max = Arrays.stream(arr).max().getAsInt();
        
       Arrays.sort(arr); 
       Arrays.sort(arr, 1, 5); 
       Arrays.sort(arr, Collections.reverseOrder()); 
       Arrays.binarySearch(array,key);
       Arrays.equals(arr1, arr2);
       arr.fill(87);   // all change to 87
       Arrays.toString(arr);
       
  ### Array to list, toArrayList
  	import java.util.ArrayList;
      ArrayList<Integer> list = new ArrayList<>(Arrays.asList(a));
 	
 	import java.util.List;
       Integer[] spam = new Integer[] { 1, 2, 3 };
	   List<Integer> list = Arrays.asList(spam);
	   
	   int[] spam = new int[] { 1, 2, 3 };
	   List<int[]> list = Arrays.asList(spam);

```

## 4.HashMap in java
hashmap里查找元素的时间复杂度近似常数
```java
 HashMap<Integer, String> map;
 Map<Integer,Integer> map = new HashMap<>();
 
     map.put( k, v);
     map.containsKey(k);
     map.get( k );    
     map.size();
     map.remove(k);
     map.replace(k,oldV,newV);     
```

## 5BufferedReader
``` java
 BufferedReader reader=new BufferedReader(new FileReader(filePath)	

int read()					读取单个字符。
int read(char[] cbuf, int off, int len)	将字符读入数组的某一部分。
String readLine()			读取一个文本行。
long skip(long n)				跳过字符。
boolean ready()				判断此流是否已准备好被读取。
void close()				关闭该流并释放与之关联的所有资源。
void reset()					将流重置到最新的标记。
```