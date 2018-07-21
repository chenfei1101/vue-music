#### vue-music

> 移动端音乐项目
##### 项目结构
```
|-- build                           // webpack配置文件
|-- config                          // 项目打包路径
|-- node_modules
|-- src                             // 源码目录
|   |-- assets                      // 静态文件
|       |-- css
|           |-- common.css          // 初始化css
|   |-- components                  // 组件
|   |-- local                       // 语言包
|       |-- index.js                //
|       |-- en.js                   // 英文
|       |-- zh.js                   // 中文
|   |-- rem                         // rem配置
|   |-- router                      // 路由文件
|   |-- store                       // 状态管理
|   |-- view                        // 页面
|   |-- App.vue                     // 入口
|   |-- main.js                     // 入口js
|-- static                          // 静态文件
```

##### 运行 和 打包
```
    bash
    # install dependencies
    npm install

    # serve with hot reload at localhost:1104
    npm run dev

    # build for production with minification
    npm run build

    # build for production and view the bundle analyzer report
    npm run build --report
```

##### vue + vue-router vuex axios vue-i18n
* [vue-i18n](https://github.com/kazupon/vue-i18n) 中英文切换
* [vuex](https://github.com/vuejs/vuex) 状态管理
* [axios](https://github.com/axios/axios) 数据请求
* fastclick 处理移动端click事件300毫秒延迟
```
    当页面的DOM树解析好并且需要等待JS执行完才触发
    if ('addEventListener' in document) {
      document.addEventListener('DOMcontentLoaded', function () {
        Fastclick.attach(document.body)
      }, false)
    }
```
