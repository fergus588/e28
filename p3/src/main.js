import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import home from './components/home.vue';
import alfa from './components/alfa.vue';
import ferrari from './components/ferrari.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
    { path: '/', component: home },
    { path: '/alfa', component: alfa },
    { path: '/ferrari', component: ferrari }
]

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})

new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app')