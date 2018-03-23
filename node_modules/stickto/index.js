/*
 * @Author: zhaoye 
 * @Date: 2018-01-17 15:06:07 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2018-03-23 19:42:18
 */
import Sticker from './Sticker.js'

const stickQueue = []

function juedge () {
    if (stickQueue.length == 0) return
    let sticking
    let danger
    for (let i = 0; i < stickQueue.length; i++) {
        const sticker = stickQueue[i]
        if (sticker.shouldStick(sticker)) {
            sticking = sticker
            break
        }
    }
    stickQueue.forEach(sticker => {
        sticker.unstick()
        if (sticker.isInDangerZone())
            danger = sticker
    })
    if (sticking) {
        sticking.stick()
    }
    if (sticking && danger) {
        sticking.smoothSwitch(danger)
    }
}

function stick ($el, {
    useClass,
    zIndex,
} = {}) {
    juedge()
    const sticker = new Sticker($el, useClass, zIndex)
    stickQueue.unshift(sticker)
}

function unstick (sticker) {
    if (sticker instanceof Sticker) {
        sticker.destroy()
        stickQueue.pop(sticker)
    } else {
        for (let i = 0; i < stickQueue.length; i++) {
            if (sticker.$el == sticker) {
                const sticker = stickQueue[i]
                sticker.destroy()
                stickQueue.pop(sticker)
                break
            }
        }
    }
}

document.addEventListener('scroll', juedge)

export {
    stick,
    unstick,
}