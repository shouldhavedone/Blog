import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'
import './assets/style/reset.css'
import './assets/style/common.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import httpPlugin from '@/utils/http'
import qs from 'qs'
import VueCookie from 'vue-cookie'

Vue.prototype.$qs = qs

Vue.config.productionTip = false

const moment = require('moment')
require('moment/locale/zh-cn')

Vue.use(require('vue-moment'), {
  moment
})
Vue.use(ElementUI)
Vue.use(httpPlugin)
Vue.use(VueCookie)

// router.beforeEach((to, from, next) => {
//   let token = store.state.token
//   if (!token && to.path !== '/login') {
//     next({
//       path: '/login'
//     })
//     return;
//   }
//   next()
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')