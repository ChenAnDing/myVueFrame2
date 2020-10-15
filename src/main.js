import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import store from '@/store/index'
import ENV from '@/config/env'
import '@/assets/style/reset.scss'
import '@/config/axios.js'
import '@/utils/EventBus'
import '@/plugins/index.js'
Vue.mixin({
    data() {
        return {
            ENV
        }
    }
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


