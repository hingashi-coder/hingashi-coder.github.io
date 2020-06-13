// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Router from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css' // add
import 'bootstrap-vue/dist/bootstrap-vue.css' // add
import VueScrollTo from 'vue-scrollto'
import VueAnalytics from 'vue-analytics'
// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-169326771-1',
  Router
})
Vue.use(VueScrollTo)
export default function vueScrollTo (context, inject) {
  inject('scrollTo', vueScrollTo.scrollTo)
}

Vue.config.productionTip = false
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(Router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
