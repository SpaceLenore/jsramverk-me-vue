import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Reports from './views/Reports.vue'
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
            path: '/reports/week/:1',
            name: 'Reports',
            component: Reports
        },
        {
            path: '*',
            name: 'Not Found',
            component: NotFound

        }
  ]
})
