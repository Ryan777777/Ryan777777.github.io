---
layout:     post
title:       Linux中进入Docker的方法
subtitle:   
date:       2020-06-17
author:     Linz
header-img: img/Background/b2.jpg
catalog: true
tags:
    - Docker
---


### Linux中进入Docker的方法

1. 使用docker attach
2. 使用SSH
3. 使用nsenter 
4. 使用exec



#### docker attach

``` text
$ sudo docker attach containerID   
``` 

使用该命令有一个问题。当多个窗口同时使用该命令进入该容器时，所有的窗口都会同步显示。如果有一个窗口阻塞了，那么其他窗口也无法再进行操作。


因为这个原因，docker attach命令不太适合于生产环境，平时自己开发应用时可以使用该命令。


#### SSH

不建议使用
- [为什么不需要在 Docker 容器中运行 sshd](https://www.oschina.net/translate/why-you-dont-need-to-run-sshd-in-docker?cmp)



#### nsenter

``` text
安装
$ wget https://www.kernel.org/pub/linux/utils/util-linux/v2.24/util-linux-2.24.tar.gz  
$ tar -xzvf util-linux-2.24.tar.gz  
$ cd util-linux-2.24/  
$ ./configure --without-ncurses  
$ make nsenter  
$ sudo cp nsenter /usr/local/bin   

测试
$ sudo docker inspect --help   

进入
$ sudo docker inspect containerID  
``` 


#### 使用exec

``` text
进入
$ sudo docker ps  
$ sudo docker exec -it 775c7c9ee1e1 /bin/bash
``` 
