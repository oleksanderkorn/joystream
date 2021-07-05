import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import VueRouter from 'vue-router'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueRouter)
Vue.config.productionTip = false

import Joystream from './components/Joystream.vue'
import JoystreamLive from './components/JoystreamLive.vue'

const routes = [
    { path: '/', component: Joystream },
    { path: '/live', component: JoystreamLive }
]

const router = new VueRouter({
    routes // short for `routes: routes`
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')