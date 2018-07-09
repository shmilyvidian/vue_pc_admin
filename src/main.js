// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routers from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/reset.css' 

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter({
  routes:routers,
  linkExactActiveClass: 'active'  
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
