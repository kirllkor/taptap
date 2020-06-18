import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入vuex
import store from '../store/index.js'
import Home from '../views/Home.vue'
import Main from '../components/Main.vue'
import Order from '../components/Order.vue'
import Find from '../components/Find.vue'
import Forum from '../components/Forum.vue'
import Mine from '../components/Mine.vue'
import MainGames from '../components/main/MainGames.vue'
import MainVideo from '../components/main/MainVideo.vue'
import GameInfo from '../views/GameInfo.vue'
import ScreenShot from '../views/gameinfo/ScreenShot.vue'
import Vedio from '../views/gameinfo/Vedio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main',
    name: 'Home',
    component: Home,
    meta: {
      keep: true
    },
    children: [
      {
        path: '/main',
        redirect: '/maingames',
        name: 'Main',
        component: Main,
        meta: {
          keep: true
        },
        children: [
          {
            path: '/maingames',
            name: 'MainGames',
            component: MainGames,
            meta: {
              keep: true
            }
          },
          {
            path: '/mainvideo',
            name: 'MainVideo',
            component: MainVideo,
            meta: {
              keep: true
            }
          }
        ]
      },
      {
        path: '/find',
        name: 'Find',
        component: Find,
        meta: {
          keep: true
        }
      },
      {
        path: '/order',
        name: 'Order',
        component: Order,
        meta: {
          keep: true
        }
      },
      {
        path: '/forum',
        name: 'Forum',
        component: Forum,
        meta: {
          keep: true
        }
      },
      {
        path: '/mine',
        name: 'Mine',
        component: Mine,
        meta: {
          keep: true
        }
      }
    ]
  },
  {
    path: '/gameinfo/:id',
    name: 'GameInfo',
    component: GameInfo,
    meta: {
      keep: true,
      x: 0,
      y: 0
    }
  },
  {
    path: '/screenshot',
    name: 'ScreenShot',
    component: ScreenShot,
    props: {
      id: 0,
      name: ''
    },
    meta: {
      keep: false
    }
  },
  {
    path: '/vedio',
    name: 'Vedio',
    component: Vedio,
    props: {
      id: 0,
      name: ''
    },
    meta: {
      keep: false
    }
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
  routes,
  // 切换路由,回到顶部
  scrollBehavior (to, from, savedPosition) {
    if (to.path.indexOf('/screenshot') !== -1) {
      return { x: 0, y: 0 }
    }
  }
})

// 设置路由守卫,绑定路由与选项卡的current值
router.beforeEach((to, from, next) => {
  if (to.path === '/maingames') {
    store.commit('changePage', 0)
    store.commit('changeMainCurrent', 0)
    next()
  } else if (to.path === '/mainvideo') {
    store.commit('changeMainCurrent', 1)
    next()
  } else if (to.path === '/find') {
    store.commit('changePage', 1)
    next()
  } else if (to.path === '/forum') {
    store.commit('changePage', 2)
    next()
  } else if (to.path === '/order') {
    store.commit('changePage', 3)
    next()
  } else if (to.path === '/mine') {
    store.commit('changePage', 4)
    next()
  } else if (to.path.indexOf('/gameinfo') !== -1) {
    console.log('进入gameinfo')
    next()
  } else {
    next()
  }
})

// 路由跳转后的钩子函数
// router.afterEach((to, from) => {
//   if (/^\/gameinfo\/[0-9]+/.test(to.path)) {
//     window.scrollTo(0, to.meta.y)
//     console.log('切换成功')
//   }
// })

export default router
