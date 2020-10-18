---
layout:     post
title:      HTML and JavaScript
subtitle:   
date:       2020-07-12
author:     Linz
header-img: img/Background/b1.jpg
catalog: true
tags:
    - HTML&Js&css
---

## HTML

###### send info between two html
```html
HTML1：
    <form action="..\OpenFLAP\target.html" name="myform" method="get">
      <input type="text" name="inputString" id="inputStringid" placeholder="Customize testing string!"/>
      <button type="submit">Submit</button>
    </form>

HTML2：
<script type="text/javascript" charset="utf-8">
    window.onload = function() {
        var url = window.location.search;//location.search是从当前URL的?号开始的字符串
        var Request = new Object();
        if (url.indexOf('?') != -1) {
            var a = '';
            var str = url.substr(1)　 //remove '?'
            strs = str.split('&');
            for (var i = 0; i < strs.length; i++) {
                a = strs[i].split('=')[0]；
                Request[a] = decodeURI(strs[i].split('=')[1]);//decode
                alert(Request[a]);
            }
        }
```
###### <Select>
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>

</head>
<body>
<select onchange="test()" id="info">
   <option value="1">name</option>
   <option value="2">colllege</option>
   <option value="3">address</option>
</select>
 </body>
 <Script>
function test(){
  var myselect= document.getElementById('info');   //Get Dom
  var index = myselect.selectedIndex;                  //Get Index
  var text  = myselect.options[index].text;            //Get Text
  var value = myselect.options[index].value;           //Get value
alert(text)
}
 </Script>
 </html>
```

###### button click

```html
    <p><input type=submit value=Submit id="submit" >

    //option 1
    <script>
        $(document).ready(function() {
            $("#submit").click(function(event){
            })
        });
    </script>
    
    //option 2 
    <script>
        document.getElementById('#submit').addEventListener('click', function() {
        });
    </script> 

    //option 3  js代码：
    function btn(){
    }
```

###### get user inpiut in js from html

```html
    <script>
        $("#textId").val() //方法1 textId为文本框的id
        document.getElementById("textId").value  //方法2 textId为文本框的id
    <script>
```




## HTML和js

###### 引用js方法
```html

方法一：直接在html文件中插入js代码
<script type="text/javascript">
	//function
</script>

方法二：单独写一个js文件，再引入到html中。
<!--html页面中引入-->
<script src="{{ url_for('static', filename='js/jsFileName.js') }}"></script>

<!--调用方式参考-->
<a href='#' data-toggle='modal' data-target='#myModal' onclick='function()'>点击</a>
```

## HTML和CSS

###### 直接插入

```html
<table  bgcolor="black" cellspacing="1px" width="600">
```

###### 直接嵌入

在title标签后添加<style type="text/css"></style>

注意：需要将样式放入<head></head>中

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Example</title>
    <style type="text/css">
        body{
            background-color: antiquewhite;
        }
        p{
            background-color: aqua;
        }
    </style>
</head>
<body>
</body>
```

###### 直接导入

创建css样式表如mystyle.css，再在HTML中链接此mystyle.css样式表.

``` html
<style type="text/css">
      @import"mystyle.css"
</style>

```

###### 直接链入

创建css样式表如style.css，再在HTML中链接此style.css样式表。

<link rel="stylesheet" type="text/css" href="style.css">

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Example</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
</html>

CSS：
body{
    background-color: antiquewhite;
    font-size: 30px;
}
```


