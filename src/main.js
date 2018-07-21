import Vue from 'vue'
import App from './App'
import router from './router'
import Fastclick from 'fastclick'
import setREM from './rem/config' // 设置rem 可用 flexable 插件代替
import I18N from 'vue-i18n'
import vuex from 'vuex'

if ('addEventListener' in document) {
  document.addEventListener('DOMcontentLoaded', function () {
    Fastclick.attach(document.body)
  }, false)
}
Vue.config.productionTip = false
Vue.use(vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  I18N,
  render: h => h(App)
})
setREM()
