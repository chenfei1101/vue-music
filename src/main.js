import Vue from 'vue'
import App from './App'
import router from './router'
import Fastclick from 'fastclick'
import setREM from './rem/config' // 设置rem 可用 flexable 插件代替
import i18n from './local/index'
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
  i18n,
  render: h => h(App)
})
setREM()

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.getElementById('Title').innerHTML = this.$t(`pageTitle.login`)
  }
  next()
})
