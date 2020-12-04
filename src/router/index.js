import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Login'
    },
    {
      path:'/homePage',
      component:() => import('../components/homePage'),
      meta:{title:'主页面文件'},
      children:[]
    },
    {
      path:'/Login',
      component:() => import('../views/login'),
      meta:{title:'登录页面'}
    }
  ]
})
