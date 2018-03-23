/*
 * @Author: zhaoye 
 * @Date: 2018-03-23 20:01:50 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2018-03-23 20:05:37
 */
import Vue from 'vue'
import {stick} from 'stickto'
import stickto from './stickto.vue'
Vue.directive('stickto', {
    inserted (el) {
        stick(el)
    },
})
export default stickto