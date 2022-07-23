import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'



const routes = [

  //dynamic routing
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
       component: () => import('../views/DestinationView.vue')
  },

  //static routing

  // {
  //   path: '/brazil',
  //   name: 'brazil',
  //   component: () => import(/* webpackChunkName: "brazil" */'../views/BrazilView.vue')
  // },
  // {
  //   path: '/hawaii',
  //   name: 'hawaii',
  //   component:  () => import('../views/HawaiiView.vue')
  // },
  // {
  //   path: '/jamaica',
  //   name: 'jamaica',
  //   component: () => import('../views/JamaicaView.vue')
  // },
  // {
  //   path: '/panama',
  //   name: 'panama',
  //   component: () => import('../views/PanamaView.vue')
  // },  
  
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
// linkActiveClass : 'vue-school-active-link'
})

export default router
