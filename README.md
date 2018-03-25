# vue-stickto

[简体中文](./README.zh-CN.md)

A vue directive that support multiple DOM Node stick to top automatically (一个支持多DOM元素自动吸顶的vue指令)

[Online Demo Here](http://docs.gomeminus.com/vue-stickto/examples/dist/index.html)

![demo.gif](demo.gif)

# Install

```
npm install vue-stickto
```

# use

1. import
```js
import Vue from 'vue'
import VueStickto from 'vue-stickto'
Vue.use(VueStickto)
```

2. simply add the directive into a tag

```html
<div v-stickto>
    
</div>
```

3. see the result


# If you're using script tag to import

copy the `dist/VueStickto.js` to the place wherever you want and `<script src="[path]Vuestickto.js"/>`