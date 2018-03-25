/*
 * @Author: zhaoye 
 * @Date: 2018-03-23 20:01:50 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2018-03-25 16:06:59
 */
import {stick} from 'stickto/index.js'

export default {
    install: function (Vue, options) {
        Vue.directive('stickto', {
            inserted (el) {
                stick(el)
            },
        })
    },
}