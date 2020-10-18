---
layout:     post
title:      Python Flask 2
subtitle:   
date:       2019-06-24
author:     Linz
header-img: img/Background/b2.jpg
catalog: true
tags:
    - Flask
---

## Flask
Continue "Python Flask 1"

### Basic Structure
```
| - projectName
	| - app  //app
		| - templates //jinjia2 templates
		| - static // static files
		| - main  
			| - __init__.py
			|- errors.py
			|- forms.py
			|- views.py
		|- __init__.py
		|- models.py //database
		|- __init__.py
	|- venv  //python env
	|- requirements.txt //requirements
	|- config.py //Global configuration file
	|- manage.py //start file
```

### Flask html template links css or image file


<!-- **session：** 只要设置，在任意请求中都能拿到，无论你拿多少次

    在flask当中使用 session 时，必须要做一个配置,即 flask的session中需要用到的秘钥字符串，可以是任意值
    flask默认把数据存放到了cookie中 -->


```
Regular
<link rel="stylesheet" type="text/css" href="template/bootstrap/css/bootstrap.min.css">

Flask css：

<link rel="stylesheet" type="text/css" href="{{ url_for('static', filename='template/bootstrap/css/bootstrap.min.css') }}">


```

