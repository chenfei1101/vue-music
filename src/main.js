import Vue from 'vue'
import App from './App'
import router from './router'
import Fastclick from 'fastclick'
import setREM from './rem/config' // 设置rem 可用 flexable 插件代替

if ('addEventListener' in document) {
  document.addEventListener('DOMcontentLoaded', function () {
    Fastclick.attach(document.body)
  }, false)
}
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
setREM()
