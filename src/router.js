import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // name: 'index',
      component: () => import('./views/index.vue'),
      children:[
        {
          path: '',
          redirect: '/home'
        },
        {
          path: '/home',
          home: 'home',
          component: ()=> import('./views/Home.vue')
        },
        {
          path: '/order',
          home: 'order',
          component: ()=> import('./views/Order.vue')
        },
        {
          path: '/me',
          home: 'me',
          component: ()=> import('./views/Me.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/'
    }
  ]
})
//路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.ele_login ? true : false;
  if (to.path == '/login') {
    next()
  } else {
    //判断是否登录状态
    isLogin ? next() : next('/login')
  }
})


export default router;