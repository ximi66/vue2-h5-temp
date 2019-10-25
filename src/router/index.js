import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const HelloWorld = () => import('../components/HelloWorld')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

