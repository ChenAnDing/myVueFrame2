import VueRouter from 'vue-router'
import Vue from 'vue'

import demo from './modules/demo'

Vue.use(VueRouter)

const routes = [
  ...demo
]

const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            } else {
                return { x: 0, y: 0 }
            }
    }
})

export default router