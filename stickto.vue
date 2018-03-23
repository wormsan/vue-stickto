/*
 * @Author: zhaoye 
 * @Date: 2018-03-23 20:03:12 
 * @Last Modified by: zhaoye
 * @Last Modified time: 2018-03-23 20:04:34
 */
<template>
    <div :class="className" v-stickto>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: ['className'],
}
</script>
