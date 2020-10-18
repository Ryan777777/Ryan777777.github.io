---
layout:     post
title:      Object property in javascript
subtitle:   
date:       2019-07-01
author:     Linz
header-img: img/Background/b2.jpg
catalog: true
tags:
    - JavaScript
---

#### My question
Goal: add property { "aabb" : true } to an exist object. 

```javascript 
var str = "aabb"
function test(){
  var obj = {
    str : true
  }
}
test()
console.log(obj.str) // true 
```
This means obj has property {str:true} rather than {"aabb":true).

 Properties between "{ }" will be added as ***variable name***  "str", rather than ***variable itself***.


#### Simple solution (Trade off)
```javascript 
var str = "aabb"
function test(){
  var obj = {};
  obj[str] = true;
}
test()
```
create a variable ***var obj = {};***, and then add correct str value to obj by using ***"[ ]"***. In javascript, all variables betweem [] will be replace by it's value, so this works. 


#### Add a property to existing properties (Complex situation)

![](https://miro.medium.com/max/552/1*aCCN53g4HRsGa9nZ4ONWaQ.png "example")

This is the real problem I am running into. My goal is adding a test cast to ***obj[0].testCases***

The solution is create a ***"var current = {}"*** first (Reason: see Simple solution above). Then go inside the object and resign the value.
```javascript
function addtoTestCase(str, obj) {
  var current = {}
  var inobj = obj[0].testCases
  current[str] = true
  inobj[1] = current
}
```
![](https://miro.medium.com/max/552/1*nldxdC9Mn7Zgm-TfqxTLJg.png "example2")

#### Other concepts:

#### Get object property names in javascript
```javascript
const object1 = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.getOwnPropertyNames(object1));
// expected output: Array ["a", "b", "c"]
```

#### Error:  “ Uncaught TypeError: Cannot convert undefined or null to object ”
```javascript
if (typeof Object.keys(objValue) !== 'undefined'
  && Object.keys(objValue).length > 0) {
    
}
 // one more step to check key and length to avoid undefined error
```