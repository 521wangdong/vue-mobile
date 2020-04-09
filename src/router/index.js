import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/basics',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/basics',
    name: 'Basics',
    component: () => import( /* webpackChunkName: "basics" */ '../views/basics/index.vue')
  },
  {
    path: '/advance',
    name: 'Advance',
    component: () => import( /* webpackChunkName: "advance" */ '../views/advance/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router