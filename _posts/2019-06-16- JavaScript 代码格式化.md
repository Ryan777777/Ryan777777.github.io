---
layout:     post
title:      JavaScript 代码格式化
subtitle:   
date:       2019-06-16
author:     Linz
header-img: img/Background/b2.jpg
catalog: true
tags:
    - JavaScript
---

### Vscode 

Vscode 插件

1. ESLint
2. Prettier - Code formatter
3. Vetur




### 打开 settings json 文件

File --> preferences -->setting

选择右上角 Open Setting (Json)



### 配置

``` javascript
{

  // tab 大小为2个空格

  "editor.tabSize": 2,

  // 100 列后换行

  "editor.wordWrapColumn": 100,

  // 保存时格式化

  "editor.formatOnSave": true,

  // 开启 vscode 文件路径导航

  "breadcrumbs.enabled": true,

  // prettier 设置语句末尾不加分号

  "prettier.semi": false,

  // prettier 设置强制单引号

  "prettier.singleQuote": true,

  // 选择 vue 文件中 template 的格式化工具

  "vetur.format.defaultFormatter.html": "prettyhtml",

  // 显示 markdown 中英文切换时产生的特殊字符

  "editor.renderControlCharacters": true,

  // 设置 eslint 保存时自动修复

  "eslint.autoFixOnSave": true,

  // eslint 检测文件类型

  "eslint.validate": [

    "javascript",

    "javascriptreact",

    {

      "language": "html",

      "autoFix": true

    },

    {

      "language": "vue"

      "autoFix": true

    }

  ],

  // vetur 的自定义设置

  "vetur.format.defaultFormatterOptions": {

    "prettier": {

      "singleQuote": true,

      "semi": false

    }

  }

}


```

参考链接：http://www.imooc.com/article/288073?block_id=tuijian_wz