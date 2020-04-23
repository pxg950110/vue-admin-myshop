import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/404',
      name: '404',
      component: () => import('@/views/404'),
      hidden: true}
  ]
})
