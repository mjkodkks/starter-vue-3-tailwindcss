import { createRouter, createWebHistory} from 'vue-router'
import LoginView from '/src/views/LoginView.vue'
import Login from '/src/components/Login.vue'

const routes = [
    { 
    path: '/', 
    name: 'Login View',
    component: LoginView,
    children: [
        {
          path: '/',
          name: 'Login component',
          component: Login,
        },
    ]
}]

const router = createRouter({
    history: createWebHistory(),
    routes, 
})

export default router