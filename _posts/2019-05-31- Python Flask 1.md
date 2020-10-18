---
layout:     post
title:      Python Flask 1
subtitle:   
date:       2019-05-31
author:     Linz
header-img: img/Background/b2.jpg
catalog: true
tags:
    - Flask
---

## Python中Flask框架的使用

### Flask的目录结构
```
| - projectName
	| - app  //程序包
		| - templates //jinjia2模板
		| - static //静态文件
		| - main  //py程序包 ，可以有多个这种包。
			| - __init__.py
			|- errors.py
			|- forms.py
			|- views.py
		|- __init__.py
		|- models.py //数据库模型
		|- __init__.py
	|- venv  //虚拟环境
	|- requirements.txt //列出了所有依赖包以及版本号
	|- config.py //全局配置文件，配置全局变量
	|- manage.py //启动程序
```

### Flask参数传递

**session：** 只要设置，在任意请求中都能拿到，无论你拿多少次

    在flask当中使用 session 时，必须要做一个配置,即 flask的session中需要用到的秘钥字符串，可以是任意值
    flask默认把数据存放到了cookie中


```
app.config["SECRET_KEY"] = "renyizifuchuan"
session.pop('username', None) //从session中移除username，如果存在的话
session["name"] = "python" //加入
name = session.get("name") //取出

```

**flash：** 一旦设置，可在任意一次请求中获取，但是只能取一次
```
待定
```
**g：** 在A路由中设置设置，只能在A路由请求中请求中获取，其它的请求都不能获取
```
待定
```

### HTML前端传数据到后端（重点）
``` HTML
前端
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Flask示例</title>
</head>
   <body>

      <form action = "http://localhost:5000/result" method = "POST">
         <p>姓名 <input type = "text" name = "Name" /></p>
         <p><input type = "submit" value = "提交" /></p>
      </form>

   </body>
</html>
```
``` python
后端
@app.route('/result',methods = ['POST', 'GET'])
def result():
    if request.method == 'POST':
        result = request.form /取得整个提交的表格
        result2 = request.form.get("Name", type=str,default=None)
        print(result2+ "test")
        return render_template("result.html",result = result)
```

### HTML后端传数据到前端（重点）
``` HTML
前端
      <th> {{ result }} </th>
```
``` python
后端
@app.route('/result',methods = ['POST', 'GET'])
def result():
        return render_template("result.html",result = result)
```


### API接入
Ensembl API的接入. 如何构建URL.

``` Python
@app.route('/Ensembl', methods=['GET', 'POST'])
def index():
    server = "http://rest.ensembl.org"
    ext = "/archive/id/ENSG00000157764?"

    r = requests.get(server + ext, headers={"Content-Type": "application/json"})

    if not r.ok:
        r.raise_for_status()
        sys.exit()

    decoded = r.json()
    //返回打印json文件到网页
    return json.dumps(decoded ,ensure_ascii=False)
```

### 重定向到前端

多个URL对应一个function, 转到新的html (render_template)

``` python
@app.route('/hello/')
@app.route('/hello/<name>')
def hello(name=None):
    return render_template('hello.html', name=name)
```

### 前端转后端function

``` Python
<button onclick="window.location.href='{{ url_for("后端function名字") }}'">Button名字</button>
```

### 读取URL中值作为输入
``` Python
//String
@app.route('/user/<username>')
def show_user_profile(username):
    # show the user profile for that user
    return 'User %s' % username

//Int
@app.route('/post/<int:post_id>')
def show_post(post_id):
    # show the post with the given id, the id is an integer
    return 'Post %d' % post_id

//以URL的值作为传递方法
@app.route('/upload', methods=['POST', 'GET'])
def upload():
    filename = 'NewFile'
    return redirect(url_for('show', filename=filename))
@app.route('/show?filename=<filename>')
def show(filename):
    return filename
```



### Debug模式

注意在Pycharm中需要手动开启debug模式
```
-- Run/Debug Configurations
      FLASK_DEBUG 打勾
```    
``` Python
if __name__ == '__main__':
    app.debug = True
    app.run()
```
