import { createRouter,createWebHistory} from "vue-router";

  // Importation des pages
  import Home from './pages/Home.vue'
  import AddArticle from './pages/AddArticle.vue'
  import EditArticle from './pages/EditArticle.vue'
  import Login from './pages/Login.vue'
  import Register from './pages/Register.vue'

  const routes = [
    { path: '/', component: Home },
    { path: '/add', component: AddArticle },
    { path: '/edit', component: EditArticle },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes
  })

  export default router