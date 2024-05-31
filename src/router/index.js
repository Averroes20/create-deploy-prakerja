import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoDetail from '@/views/TodoDetail.vue'
import NewsDetail from '@/components/NewsDetail.vue'
import WireframeView from '@/views/WireframeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: () => import('../views/TodoListView.vue')
  },
  { path: '/todo/:index', name: 'TodoDetail', component: TodoDetail, props: true },
  {
    path: '/news-api',
    name: 'news-api',
    component: () => import('../views/NewsApiView.vue')
  },
  {
    path: '/detail/:id',
    name: 'NewsDetail',
    component: NewsDetail,
    props: true,
  },
  {
    path: '/wireframe-view',
    name: 'wireframe-view',
    component: WireframeView,
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
