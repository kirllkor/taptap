import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../components/Main.vue'
import Order from '../components/Order.vue'
import Find from '../components/Find.vue'
import Forum from '../components/Forum.vue'
import Mine from '../components/Mine.vue'
import MainGames from '../components/main/MainGames.vue'
import MainVideo from '../components/main/MainVideo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/main',
        redirect: '/maingames',
        name: 'Main',
        component: Main,
        children: [
          {
            path: '/maingames',
            name: 'MainGames',
            component: MainGames
          },
          {
            path: '/mainvideo',
            name: 'MainVideo',
            component: MainVideo
          }
        ]
      },
      {
        path: '/find',
        name: 'Find',
        component: Find
      },
      {
        path: '/order',
        name: 'Order',
        component: Order
      },
      {
        path: '/forum',
        name: 'Forum',
        component: Forum
      },
      {
        path: '/mine',
        name: 'Mine',
        component: Mine
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
