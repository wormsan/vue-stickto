/*
 * @Author: zhaoye 
 * @Date: 2018-03-23 18:06:08 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2018-03-23 19:04:44
 */
let cid = 0
export default class Sticker {
    constructor ($el, useClass, zIndex) {
        cid++
        this.$el = $el
        const $elStyle = window.getComputedStyle($el)
        this.zIndex = '20'
        if (zIndex) {
            this.zIndex = zIndex
        }
        this.classCache = ''
        if (useClass) {
            this.classCache = useClass
        } else {
            this.styleCache = {
                position: $elStyle.position,
                top: $elStyle.top,
                zIndex: $elStyle.zIndex,
            }
        }
        this.$holder = document.createElement('div')
        this.$holder.className = `auto-generated-stick-holder auto-generated-stick-holder-${cid}`

        this.$el.parentNode.insertBefore(this.$holder, this.$el)
    }
    getBoundingClientRect () {
        return this.$el.getBoundingClientRect()
    }
    getHeight () {
        return Number(window.getComputedStyle(this.$el).height.split('px')[0])
    }
    smoothSwitch (replacer) {
        this.$el.style.transform = `translateY(${replacer.getBoundingClientRect().top - replacer.getHeight()}px)`
    }
    copyStyle (style1, style2, name) {
        if (style1[name] != style2[name]) {
            style1[name] = style2[name]
        }
    }
    destroy () {
        this.$holder.parentNode.removeChild(this.$holder)
        this.$holder = null
        this.styleCache = null
        this.$el = null
        cid--
    }
    isInDangerZone () {
        let $el = this.$el
        if (this.$holder.style.position == 'fixed') 
            $el = this.$holder
        const holderRect = $el.getBoundingClientRect()
        if (holderRect.top > 0 && holderRect.top < Number(window.getComputedStyle($el).height.split('px')[0]))
            return true
        else
            return false
    }
    shouldStick () {
        const holderRect = this.$holder.getBoundingClientRect()
        if (holderRect.top <= 0)
            return true
        else
            return false
    }
    stick () {
        const stickyStyle = {
            position: 'fixed',
            top: '0px',
            zIndex: this.zIndex,
        }
        this.copyStyle(this.$holder.style, window.getComputedStyle(this.$el), 'height')
        this.copyStyle(this.$el.style, stickyStyle, 'position')
        this.copyStyle(this.$el.style, stickyStyle, 'top')
        this.copyStyle(this.$el.style, stickyStyle, 'zIndex')
    }
    unstick () {
        this.copyStyle(this.$el.style, this.styleCache, 'position')
        this.copyStyle(this.$el.style, this.styleCache, 'top')
        this.copyStyle(this.$el.style, this.styleCache, 'zIndex')
        this.copyStyle(this.$holder.style, {height: '0px'}, 'height')
        this.copyStyle(this.$el.style, {transform: 'translateY(0px)'}, 'transform')
    }
}