import { createRouter,createWebHistory } from "vue-router";

import MainLayout from '@/layout/MainLayout.vue'

import HomePage from '@/view/HomePage.vue'
import MovieDetail from '@/view/MovieDetail.vue'
import Trailer from '@/view/Trailer.vue'

import PostMovie from '@/view/PostMovie.vue'
import ListMovie from '@/view/ListMovie.vue'

import LoginPage from '@/view/LoginPage.vue'
import RegisterPage from '@/view/RegisterPage.vue'

import AboutUs from '@/view/AboutUs.vue'
import store from '@/store'

const routes = [
    { 
        path: '/', 
        component: HomePage,
        name: 'home',
        meta: {
            layout: MainLayout
        }
    },
    {
        path: '/movie-detail/:id',
        component: MovieDetail,
        name:"moviedetail",
        meta: {
            layout: MainLayout
        }
    },
    {
        path: '/trailer',
        component: Trailer,
        name:"trailer",
        meta: {
            layout: MainLayout
        }
    },
    {
        path: '/aboutus',
        component: AboutUs,
        name:"aboutus",
        meta: {
            layout: MainLayout
        }
    },
    {
        path: '/login',
        component: LoginPage,
        name:"login",
    },
    {
        path: '/register',
        component: RegisterPage,
        name:"register",
    },
    {
        path: '/post-movie',
        component: PostMovie,
        name:"postmovie",
        meta: {
            layout: MainLayout
        }
    },
    {
        path: '/update-movie/:id',
        component: PostMovie,
        name:"updatemovie",
        meta: {
            layout: MainLayout
        }
    },
    {
        path: '/list-movie',
        component: ListMovie,
        name: 'listmovie',
        meta: {
            layout: MainLayout
        }
    }
]
  
 
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes, // 
})

const array_router_admin = ['postmovie','updatemovie','listmovie']
  
router.beforeEach((to, from, next) => {
    if (array_router_admin.includes(to.name) && store.state.isAuthentication == false) next({ name: 'login' })
    // if the user is not authenticated, `next` is called twice
    next()
  })
export default router
