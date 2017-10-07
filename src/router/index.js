import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from '../page/home.vue'
// import User from '../components/hdu.vue'
import Article from '../page/article.vue'
import Blog from '../page/blog.vue'

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
        // { 
        //     path: '/home/:id', 
        //     component: User
        // },
        {
            path: '/article',
            name: 'article',
            component: Article 
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        }
    ]
})