import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Reports from './views/Reports.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
    mode: "hash",
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/reports/week/:id',
            name: 'Reports',
            component: Reports
        },
        {
            path: '*',
            name: 'Not Found',
            component: NotFound

        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
  ]
})
