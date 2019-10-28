import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const demo = () => import('../components/demo')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: demo
    }
  ]
})

