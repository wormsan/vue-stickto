import Vue from 'vue'
import VueStickto from 'vue-stickto'

Vue.use(VueStickto)

import App from './app.vue'

new Vue({
    el: '#app',
    render: h => h(App),
})