import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue';
import Category from '../views/Category/index.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    }
  ]
})

export default router
