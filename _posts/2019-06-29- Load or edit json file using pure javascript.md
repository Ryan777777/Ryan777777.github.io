---
layout:     post
title:      Load or edit json file using pure javascript
subtitle:   
date:       2020-06-29
author:     Linz
header-img: img/Background/b2.jpg
catalog: true
tags:
    - JavaScript
---

Json example:
***Name: testJson.json***
```json 
json on Server
[{
    "name": "AA",
    "email": "zhangguoli@123.com",
    "pets":[
        { "animal":"hamster", "name":"Lightning" }
    ]
  },
  {
    "name": "cc",
    "email": "zhenjie@123.com",
    "pets":[
        { "animal":"dog", "name":"Fido" },
        { "animal":"cat", "name":"Felix" },
        { "animal":"hamster", "name":"Lightning" }
    ]
  }
]
```


## 1. Load

#### Wrong way
```Javascript

   data = '[{"test1" : "50", "test2" : "90"}]';

   function load() {
    var someData = JSON.parse(data);
    console.log(someData[0].test2); // Log "90"
    }
```

This is not a correct way to load a json file. It creates a json formate variable then access the variable in the same file scope. No data request between different files.

#### Local (request) 
Load a local json file is not very useful, but good to know.
```js
const json = require('./testJson.json')
console.log(json)
```
#### Server (Directly)
``` javascript
  $.getJSON("./testJson.json", function (json) {
    console.log(json); // this will show the info it in firebug console
  });
```

#### Server (AJAX) 

```Html
<!DOCTYPE html>
<html>
<p id="demo"></p>   //text will shows here
<script>
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var obj = JSON.parse(this.responseText);
    document.getElementById("demo").innerHTML = obj[0].email;
  }
};
xmlhttp.open("GET", "file.txt", true);
xmlhttp.send();
<script>

```

## 2. Add

#### Server (AJAX) 

``` javascript
function append() {
  $.getJSON("./testJson.json", function (json) {
    json[0].push({
      "sex": "male",
    });
    txt = JSON.stringify(json);
  });
```