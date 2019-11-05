import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import main from '@/view/main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'main',
      component: main,
      redirect:'/main/index',
      children:[{
        path:'index',
        name:index,
        component:index
      }]
    }
  ]
})
