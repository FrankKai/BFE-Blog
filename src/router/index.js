import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from '../page/home.vue'
import User from '../components/hdu.vue'

export default new Router({
    routes:[
        {
            path: '/',
            name: 'index',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        { 
            path: '/home/:id', 
            component: User
        }
    ]
})