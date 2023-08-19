import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "cv" */ '../views/Home.vue')
  },
  {
    path: '/cv',
    name: 'CV',
    component: () => import(/* webpackChunkName: "cv" */ '../views/CV.vue')
  },
  {
    path: '/publications',
    name: 'Publications',
    component: () => import(/* webpackChunkName: "publications" */ '../views/Publications.vue')
  },
  {
    path: '/hobbies',
    name: 'Hobbies',
    component: () => import(/* webpackChunkName: "hobbies" */ '../views/Hobbies.vue')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
