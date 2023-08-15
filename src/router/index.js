import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../components/SignUp.vue'
import Home from '../components/Home.vue'
import Edit from '../components/Edit.vue'

const routes = [
  { path: '/', component: SignUp },
  { path: '/home', component: Home },
  { path: '/edit', component: Edit },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
