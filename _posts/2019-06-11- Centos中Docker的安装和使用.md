---
layout:     post
title:      Centos中Docker的安装和使用(待续)
subtitle:   
date:       2019-06-11
author:     Linz
header-img: img/Background/b2.jpg
catalog: true
tags:
    - Docker
---

### Docker 
Docker 是个划时代的开源项目，它释放了计算虚拟化的能力，极大提高了应用的维护效率，降低了云计算应用开发的成本。使用 Docker，可以让应用的部署、测试和分发都变得高效和轻松！

![](https://docs.microsoft.com/en-us/virtualization/windowscontainers/deploy-containers/media/docker-on-linux.png)

Docker 在容器的基础上，进行了进一步的封装，从文件系统、网络互联到进程隔离等等，极大的简化了容器的创建和维护。使得 Docker 技术比虚拟机技术更为轻便、快捷。

下面的图片比较了 Docker 和传统虚拟化方式的不同之处。传统虚拟机技术是虚拟出一套硬件后，在其上运行一个完整操作系统，在该系统上再运行所需应用进程；而容器内的应用进程直接运行于宿主的内核，容器内没有自己的内核，而且也没有进行硬件虚拟。因此容器要比传统虚拟机更为轻便。

![](https://gblobscdn.gitbook.com/assets%2F-M5xTVjmK7ax94c8ZQcm%2F-M5xT_hHX2g5ldlyp9nm%2F-M5xTdXNYDmRWNH-Lqez%2Fvirtualization.png?alt=media)

![](https://gblobscdn.gitbook.com/assets%2F-M5xTVjmK7ax94c8ZQcm%2F-M5xT_hHX2g5ldlyp9nm%2F-M5xTdXP2scg0hxytUHA%2Fdocker.png?alt=media)

### Docker 的优势

1. 更高效的利用系统资源
2. 更快速的启动时间
3. 一致的运行环境
4. 持续交付和部署
5. 更轻松的迁移
6. 更轻松的维护和扩展

### 开始部署

### 卸载旧版本Docker

``` text
$ sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
``` 


### 设置仓库
``` text
$ sudo yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2
```

### 设置稳定的仓库

``` text
$ sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```


### 安装 Docker Engine-Community

``` text
$ sudo yum install docker-ce docker-ce-cli containerd.io
``` 

### 启动 Docker
``` text
// service 命令的用法
$ sudo service docker start

// systemctl 命令的用法
$ sudo systemctl start docker
``` 

### 验证安装
``` text
// 运行程序
$ docker run hello-world
// 查看版本
$ docker version
// 查看信息
$ docker info
```

### 查看已有 image 文件
``` text
// 列出本机的所有 image 文件。
$ docker image ls

// 删除 image 文件
$ docker image rm [imageName]
```

### 抓取 image (例：官方仓库)
``` text
// 官方镜像都在library下面。
// docker image pull 是抓取 image.
$ docker image pull library/hello-world
```


### 执行 image
``` text
//两种方法。docker container run 命令具有自动抓取 image 文件的功能。如果发现本地没有指定的 image 文件，就会从仓库自动抓取。
$ docker container run hello-world
$ docker run hello-world

```

### 终止执行中的container
``` text
//一些container是不会停止的，所以需要手动停止
$ docker container kill [containID]
```


### 容器文件
image 文件生成的容器实例(image gen 容器实例的关系比较像Java中 class 和 object 之间的关系). 一旦容器生成，就会同时存在两个文件： image 文件和容器文件。而且关闭容器并不会删除容器文件，只是容器停止运行而已。
``` text

// 列出本机正在运行的容器 (获取container ID，可以用于 kill)
$ docker container ls

// 列出本机的所有 image 文件。
$ docker image ls

// 删除容器文件
$ docker container rm [containerID]
```

### 什么是Dockerfile 文件

Docker 的优势就是方便迁移，所以如何用已经有的仓库生成 image 文件。

这就需要用到 Dockerfile 文件。它是一个文本文件，用来配置 image。Docker 根据 该文件生成二进制的 image 文件。

### Dockerfile 制作，生成image， 删除image

1. 忽略directory
在项目的根目录下，新建一个文本文件.dockerignore，
``` text
.git
node_modules
npm-debug.log

// 表示路径要被排除，不打包进 image。如果没有路径要排除，这个文件可以不新建
```



2. Dockerfile
在项目的根目录下，新建一个文本文件 Dockerfile
``` text
FROM node:8.4
COPY . /app
WORKDIR /app
RUN npm install --registry=https://registry.npm.taobao.org
EXPOSE 3000

// FROM node:8.4：该 image 文件继承官方的 node image，冒号表示标签，这里标签是8.4，即8.4版本的 node。
// COPY . /app：将当前目录下的所有文件（除了.dockerignore排除的路径），都拷贝进入 image 文件的/app目录。
// WORKDIR /app：指定接下来的工作路径为/app。
// RUN npm install：在/app目录下，运行npm install命令安装依赖。注意，安装后所有的依赖，都将打包进入 image 文件。
// EXPOSE 3000：将容器 3000 端口暴露出来， 允许外部连接这个端口。
```

3. 创建 image 文件

有了 Dockerfile 文件以后，就可以使用docker image build命令创建 image 文件了。
``` text
$ docker image build -t koa-demo .
$ docker image build -t koa-demo:0.0.1 .

// 上面代码中，-t参数用来指定 image 文件的名字，后面还可以用冒号指定标签。
// 如果不指定，默认的标签就是latest。最后的那个点表示 Dockerfile 文件所在的路径，上例是当前路径，所以是一个点。

$ docker image ls

// 如果运行成功，就可以看到新生成的 image 文件了。
```

4. 删除image

普通删除和强制执行
``` text
$ docker image rm imageName

$ docker image rm --force imageName
```

### image迁移生成容器并运行

``` text
$ docker container run -p 8000:3000 -it koa-demo /bin/bash

$ docker container run -p 8000:3000 -it koa-demo:0.0.1 /bin/bash

$ docker container run --rm -p 8000:3000 -it koa-demo /bin/bash

// --rm参数，在容器终止运行后自动删除容器文件。
// -p参数：容器的 3000 端口映射到本机的 8000 端口。
// -it参数：容器的 Shell 映射到当前的 Shell，然后你在本机窗口输入的命令，就会传入容器。
// koa-demo:0.0.1：image 文件的名字（如果有标签，还需要提供标签，默认是 latest 标签）。
// /bin/bash：容器启动以后，内部第一个执行的命令。这里是启动 Bash，保证用户可以使用 Shell。
```
上面的command会启动容器之后运行bash界面。之后在bash界面可以手动输入命令。比如说 node demos/01.js

a. 链接两个容器
```text
$ docker container run \
  --rm \
  --name wordpress \
  --volume "$PWD/":/var/www/html \
  --link wordpressdb:mysql \
  phpwithmysql
```
跟上一次相比，上面的命令多了一个参数--link wordpressdb:mysql，表示 WordPress 容器要连到wordpressdb容器，冒号表示该容器的别名是mysql。

b. 修改容器权限

```text
$ chmod -R 777 wordpress
```

### 终止和删除容器

在容器的命令行，按下 Ctrl + c 停止进程，然后按下 Ctrl + d （或者输入 exit）退出容器。此外，也可以用docker container kill终止容器运行

``` text
// 在本机的另一个终端窗口，查出容器的 ID
$ docker container ls

// 停止指定的容器运行
$ docker container kill [containerID]
```

容器停止运行之后，并不会消失，用下面的命令删除容器文件。
``` text
// 查出容器的 ID
$ docker container ls --all

// 删除指定的容器文件
$ docker container rm [containerID]

//也可以使用docker container run命令的--rm参数，在容器终止运行后自动删除容器文件。
$ docker container run --rm -p 8000:3000 -it koa-demo /bin/bash
```

### 容器启用之后自动执行命令
``` text
//修改dockerfile

FROM node:8.4
COPY . /app
WORKDIR /app
RUN npm install --registry=https://registry.npm.taobao.org
EXPOSE 3000
CMD node demos/01.js
```

上面的 Dockerfile 里面，多了最后一行CMD node demos/01.js，它表示容器启动后自动执行node demos/01.js。

你可能会问，RUN命令与CMD命令的区别在哪里？简单说，RUN命令在 image 文件的构建阶段执行，执行结果都会打包进入 image 文件；CMD命令则是在容器启动后执行。另外，一个 Dockerfile 可以包含多个RUN命令，但是只能有一个CMD命令。

注意，指定了CMD命令以后，docker container run命令就不能附加命令了（比如前面的/bin/bash），否则它会覆盖CMD命令。现在，启动容器可以使用下面的命令

``` text
//启动并运行
$ docker container run --rm -p 8000:3000 -it koa-demo:0.0.1
```

### 使用docker-compose build image像并启动应用

docker-compose：定义和运行多个 Docker 容器的应用

add docker-compose to path
``` text
1. sudo curl -L https://github.com/docker/compose/releases/download/1.21.0/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose

2. sudo chmod +x /usr/local/bin/docker-compose

3. sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

4. docker-compose --version
```

docker-compose 使用

``` text
docker-compose up -d 
# 后台运行
docker-compose stop
# 停止正在运行的服务
docker-compose down
# 关闭所有容器并删除，默认保留 数据卷
docker-compose p
# 列出当前运行的服务状态和相关信息
docker-compose run web env
# 一次性命令，例如查看 web 服务的环境变量


docker-compose命令运行报错
``` text
Couldn't connect to Docker daemon at http+docker://localhost - is it running?
If it's at a non-standard location, specify the URL with the DOCKER_HOST environment variable.

解决方法：
service docker restart
```

docker-compose 使用

``` text

```




### 发布image
容器运行成功后，就确认了 image 文件的有效性。这时，我们就可以考虑把 image 文件分享到网上，让其他人使用。

首先，去 hub.docker.com 或 cloud.docker.com 注册一个账户。然后，用下面的命令登录。

``` text
$ docker login
```

接着，为本地的 image 标注用户名和版本
。
``` text
$ docker image tag [imageName] [username]/[repository]:[tag]
# 实例
$ docker image tag koa-demos:0.0.1 ruanyf/koa-demos:0.0.1
```

也可以不标注用户名，重新构建一下 image 文件
``` text
$ docker image build -t [username]/[repository]:[tag] .
```

最后，发布 image 文件。
``` text
$ docker image push [username]/[repository]:[tag]
```
发布成功以后，登录 hub.docker.com，就可以看到已经发布的 image 文件。

### 容器的应用
（1）docker container start

前面的docker container run命令是新建容器，每运行一次，就会新建一个容器。同样的命令运行两次，就会生成两个一模一样的容器文件。如果希望重复使用容器，就要使用docker container start命令，它用来启动已经生成、已经停止运行的容器文件。

``` text
$ docker container start [containerID]
```

（2）docker container stop
前面的docker container kill命令终止容器运行，相当于向容器里面的主进程发出 SIGKILL 信号。而docker container stop命令也是用来终止容器运行，相当于向容器里面的主进程发出 SIGTERM 信号，然后过一段时间再发出 SIGKILL 信号。

这两个信号的差别是，应用程序收到 SIGTERM 信号以后，可以自行进行收尾清理工作，但也可以不理会这个信号。如果收到 SIGKILL 信号，就会强行立即终止，那些正在进行中的操作会全部丢失。

``` text
$ bash container stop [containerID]
```

（3）docker container logs
docker container logs命令用来查看 docker 容器的输出，即容器里面 Shell 的标准输出。如果docker run命令运行容器的时候，没有使用-it参数，就要用这个命令查看输出。
或者如果容器是在后台运行的，前台看不见它的输出，必须使用下面的命令查看。

``` text
$ docker container logs [containerID]
```

（4）docker container exec

docker container exec命令用于进入一个正在运行的 docker 容器。如果docker run命令运行容器的时候，没有使用-it参数，就要用这个命令进入容器。一旦进入了容器，就可以在容器的 Shell 执行命令了。

``` text
$ docker container exec -it [containerID] /bin/bash
```


（5）docker container cp

docker container cp命令用于从正在运行的 Docker 容器里面，将文件拷贝到本机。下面是拷贝到当前目录的写法。

``` text
$ docker container cp [containID]:[/path/to/file] .
```

### 常用操作

开启docker服务

```
sudo service docker status
sudo service docker start

```


重启服务

```
systemctl daemon-reload && systemctl restart docker

```

列出所有的容器 ID

```
docker ps -aq
```

停止所有的容器

```text
docker stop $(docker ps -aq)
```

删除所有的容器

```text
docker rm $(docker ps -aq)
```

删除所有的镜像

```text
docker rmi $(docker images -q)
```


官方文档：https://docs.docker.com/engine/install/centos/

参考链接：https://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html