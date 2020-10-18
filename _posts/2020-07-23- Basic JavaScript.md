---
layout:     post
title:      Basic JavaScript
subtitle:   
date:       2020-07-23
author:     Linz
header-img: img/Background/b2.jpg
catalog: true
tags:
    - JavaScript
---

## Basic JavaScript


#### 0. Basic 
- ***A***  Recommend to use ***'*** instad of ***"*** , but both work. (HTML use ***"*** , so try to use ***'*** in javascript)

- ***B*** 

```javascript
x="123"+10 //12310
x=("123"*1)+10 //133 *1 will change str to int
x=("gred"*1) //NaN
isNaN(x) //True
```

#### 1. Script property

```javascript
async = "async" // Download scripts asynchronously, does not affect html 
defer = "defer" // Delay loading script
charset = "utf-8" // Character Encoding
src = "URL" // Link
```

#### 2. Undefined and null

```javascript
undefined == null //true (both empty)
undefined === null //false
```

#### 3. JavaScript Object and function

```javascript
var a = {} // Object

function f(){} // function
```


#### 4. Syntax error

```html
 <p>Text1</p>
 <Script type="text/javascript">
 alert('test1");
 alert("test2");
 </Script>

 <p>Text2</p>
 <Script type="text/javascript">
 alert("test3");
 </Script>
```
 What is the output? And: test3

 Reason: There is a syntax error in first alert between " and '. This will block the first script and run the second script only.


#### 5. GetElementById

 ```html
<p>Hello <b><span id="person">Tom</span></b></p>
<Script>
st = document.getElementById("person").innerHTML;
//document.getElementById("person") --> <span id="person">Tom</span>
//.innerHTML --> Tom
</Script>
 ```

 Use getElementById

  ```html
<p>
    <a href="#" onclick="add()">Add More<a>
</p>
<ul id="thelist">
    <li>First Item</li>
</ul>

<Script>
var counter=1;
function add(){
    var x = document.createElement('li');   // --> <li></li>
    x.className = "list-item";  // --> <li class="list-item"></li>
    x.innerHTML = "The counter"+ counter;   //--> <li class="list-item">The counter 1</li>
    document.getElementById("thelist").appendChild(x);  //append
}
</Script>
 ```

#### 6. Jquery

  - ***A. Document***

```html
Load library
<Script type="text/javascript" src="jquery.min.js"></Script>

<Script>
$(document).ready(function(){});
</Script>
```

***$(document).ready(function(){})***   

***$*** is a name of an object(defined in jquery). 

***()*** Calling the object with the parentheses.

***(document)*** document is the DOM that predefined in Javascript.

***ready()*** function will register event after jquery think the DOM fully load.


 - ***B. Windows***

```html
Load library
<Script type="text/javascript" src="jquery.min.js"></Script>

<Script>
$(window).resize(function(){
    console.log('resize called and width='+
    $(window).width()+'height='+$(window).hight()); //jquery build in method
});
</Script>
```


 - ***C. Change HTML element***

```html
<Script>
<a href='#' onclick="$('#eleID').css('background-color', 'red');">Red</a>
<a href='#' onclick="$('#eleID').hide();">Hide</a>
</Script>
```
***$*** is a name of an object(defined in jquery). 

***('#para')*** element ID;

***.css*** jquery build in function: change css;

***.hide*** jquery build in function: hide elements;


 
 - ***D. Jquery sends to server***

 ```html
<form id="target">
    <input type="text" name="one" value="Hello" >
    <img id="spinner" src="spinner.gif" hightr="25" sytle="display:none;">
</form>
<div id="result"></div>


<Script>
$('#target').change(function(event){ 
    //change is a jquery build in function: listen to the changes
    $('#spinner').show; //show the spinner
    var form = $(#'target'); //find the form
    var txt = form.find('input[name="one"]').var; //find the value changes
    $.post(
        'server.php', //call the server
        {'var':txt}, //send the variable 
        function(data){ //when variable returns, what jquery will do.
            $('#result').empty().append(data);
            &('#spinner').hide(); //hide the spinner since we finish.
        }
    ).error(
        function(){ //when return 404 error.
            alert("error")
        }
    ) 
})
</Script>
```

#### 7. ajax
 ```javascript
//read a object using ajax
var htmlobj= $.ajax({url:url,async:false});
```