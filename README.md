# vue-music

> 移动端音乐项目

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### vue + vue-router vuex axios vue-i18n
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
