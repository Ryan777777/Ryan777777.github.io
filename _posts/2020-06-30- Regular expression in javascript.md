---
layout:     post
title:      Regular expression and generate random strings in javascript
subtitle:   
date:       2020-06-30
author:     Linz
header-img: img/Background/b2.jpg
catalog: true
tags:
    - JavaScript
---

## 1. Regular expression in javascript

***String example:***
var regularExpression = "(b)+bab(babab)+[a+b]-{ab}";

#### Parentheses ()
```javascript 
var regex1 = /\((.+?)\)/g;  
console.log(regularExpression.match(regex1)); 
```
#### Square brackets []
```javascript 
var regex2 = /\[(.+?)\]/g; 
console.log(regularExpression.match(regex2)); 
```

#### big parantheses {}
```javascript 
var regex3 = /\{(.+?)\}/g; 
console.log(regularExpression.match(regex3)); 
```

## 2. Generate random string
Goal: 
1. Generate a fix length random string.
2. Generate a random length rangom string.
3. Provides a Letter pool.
```javascript 
function randomStringGenerate(flag, min, max){
  var str = "";
  var letterPool = ["a","b","c"];
  var stringLength = 0;
  if(flag){
    stringLength = Math.round(Math.random() * (max-min)) + min; // generate a number
  }
  //generate string
  for(var a = 0; a <stringLength ; a++ ){
      pos = Math.round(Math.random() * (arr.length-1)); // same logic, generate a number
      str += arr[pos]; // add position char to str
  }
}
```

## 3 
1. .*

. 表示 匹配除换行符 \n 之外的任何单字符，*表示零次或多次。所以.*在一起就表示任意字符出现零次或多次。没有?表示贪婪模式。比如a.*b，它将会匹配最长的以a开始，以b结束的字符串。如果用它来搜索aabab的话，它会匹配整个字符串aabab。这被称为贪婪匹配。


2. .*?

?跟在*或者+后边用时，表示懒惰模式。也称非贪婪模式。就是匹配尽可能少的字符。就意味着匹配任意数量的重复，但是在能使整个匹配成功的前提下使用最少的重复。
a.*?b匹配最短的，以a开始，以b结束的字符串。如果把它应用于aabab的话，它会匹配aab（第一到第三个字符）和ab（第四到第五个字符）。

3. .+?

同上，?跟在*或者+后边用时，表示懒惰模式。也称非贪婪模式。就意味着匹配任意数量的重复，但是在能使整个匹配成功的前提下使用最少的重复。
a.+?b匹配最短的，以a开始，以b结束的字符串，但a和b中间至少要有一个字符。如果把它应用于ababccaab的话，它会匹配abab（第一到第四个字符）和aab（第七到第九个字符）。注意此时匹配结果不是ab,ab和aab。因为a和b中间至少要有一个字符。


## 4 元字符

？表示匹配一个任意字符位

. 匹配除了换行以外任意字符，任意长度

*表示0个或者多个

.?d 长度为1的任意字符串,并且后面跟随一个d

.*d 长度为任意的任意字符串，并且后面跟随一个d

\b\b 单词开始到结束，单词限定 (匹配单词good： \bgood\b)

\w 字母,数字,下划线,汉字

\d 数字

\s 匹配任意的空白符

^ 匹配位置是整个字符串的开始！！整个字符串，不允许从中间 (匹配数字23236：^\d+$ 开始和结束之间智能有数字)

$ 匹配字符串的结束 

[^abc] 匹配除了abc以外的任意字符


## 5 重复

*重复0次或者多次

+重复一次或者多次

?重复0次或者1次或

{n} 重复n次

{n,} 重复n次或者更多次

{n,m} 重复n到m次

\| 分支条件,如果满足了其中某一个分支条件，那么就不会去管其他的条件 0\d{2}-\d{8}\|0\d{3}-\d{7}


## 5 字符类

[0-9] = \d

[a-z0-9A-Z] = \w

[&?.] = & or ? or .

\(?0\d{2}[) -]?\d{8}

121? = 12, 或者121


## 6 分组()

(\d{1,3}\.){3}\d{1,3}

分组命名(?<groupname>exp)

(?:exp) 匹配exp，但是不捕获文本，也不给此分组标记号

## 7 贪婪，懒惰

贪婪，尽可能多 a.*b -> (aabab) -> aabab

懒惰，尽可能少 a.*?b -> (aabab) -> aab

*? 重复0次或者多次，尽可能少

+? 重复1次或者多次，尽可能少

?? 重复0次或者1次，尽可能少

{n,m}? 重复n次到m次，尽可能少

{n,}？ 重复n次或者多次，尽可能少


## 8 后向引用

匹配 home home -> \b(\w+)\b\s+\1\b -> "\1" 就是引用前面的(\w+)

匹配 home home -> \b(?<word>\w+)\b\s+\k<word>\b -> "\k<word>" 就是引用前面的word组



## 9 零宽断言 T/F (前或者后必须有某个exp，但是提取的时候，这个exp不占位)

?=exp -> 零宽度，自身出现的位置前面能匹配表达式

I am singing while you are dancing -> \b\w+(?=ing\b) -> 会匹配出 sing, danc

?<=exp -> 零宽度，自身出现的位置后面能匹配表达式

reading a book -> (?<=\bre>)\w+\b -> ading



## 10 负向零宽断言 T/F (前或者后必须没有某个exp，但是提取的时候，这个exp不占位)

(?!exp) 后面必须没有

(?<!exp) 前面必须没有




