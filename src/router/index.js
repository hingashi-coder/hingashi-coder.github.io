import Vue from 'vue'
import Router from 'vue-router'
import top from '../Top.vue'
import VueParticles from 'vue-particles'
import VuePrlx from 'vue-prlx'
import loading from '../components/loading.vue'
import intro from '@/intro.vue'
import blog from '@/components/blog/top.vue'
import detail from '@/components/blog/detail.vue'

Vue.use(VueParticles)

Vue.use(VuePrlx)
export default new Router({
  routes: [
    {
      path: '/',
      component: loading
    },
    {
      name: 'main',
      path: '/main',
      component: top,
      children: [
        {
          path: '',
          component: intro
        },
        {
          name: 'blog',
          path: 'blog',
          component: blog
        },
        {
          path: 'detail',
          component: detail,
          name: 'detail'
        }
      ]
    }
  ]
})
