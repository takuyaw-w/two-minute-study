import { createWebHistory, createRouter } from "vue-router"
import Home from "../views/Home.vue"
import Setting from "../views/Setting.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/setting",
    name: "Setting",
    component: Setting
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
