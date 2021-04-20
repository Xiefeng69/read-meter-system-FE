import Vue from 'vue';
import VueRouter from 'vue-router'
import controlPanel from '../views/pages/control-panel.vue';

Vue.use(VueRouter)
const router = new VueRouter({
    // linkActiveClass: 'router-active',
    routes: [
        {
            path: '/',
            name: 'controlPanel',
            component: controlPanel
        },
        {
            path: '/stastic-panel',
            name: 'stasticPanel',
            component: () => import('../views/pages/stastic-panel.vue')
        },
        {
            path: '/info-panel',
            name: 'infoPanel',
            component: () => import('../views/pages/info-panel.vue')
        },
        {
            path: '/about-system',
            name: 'aboutSystem',
            component: () => import('../views/pages/about-system.vue')
        },
        {
            path: '/meter-detail/:id',
            name: 'meterDetail',
            component: () => import('../views/pages/meter-detail.vue')
        }
    ]
})

export default router;
