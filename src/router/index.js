import Vue from 'vue'
import Router from 'vue-router'
import top from '../Top.vue'
import VueParticles from 'vue-particles'
import VuePrlx from 'vue-prlx'
import loading from '../components/loading.vue'
Vue.use(VueParticles)
Vue.use(Router)
Vue.use(VuePrlx)
export default new Router({
  routes: [
    {
      path: '/',
      component: loading
    },
    {
      path: '/main',
      component: top
    }
  ]
})
