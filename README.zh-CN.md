# vue-stickto

一个支持多DOM元素自动吸顶的vue指令

[在线demo](http://docs.gomeminus.com/vue-stickto/examples/dist/index.html)

![demo.gif](demo.gif)

# 安装

```
npm install vue-stickto
```

# 使用

1. 引用
```js
import Vue from 'vue'
import VueStickto from 'vue-stickto'
Vue.use(VueStickto)
```

2. 把指令加到标签上即可

```html
<div v-stickto>
    
</div>
```

3. 查看效果

# 如果你没有使用commonjs

把`dist/VueStickto.js`复制到你需要的地方，然后通过标签引入`<script src="[path]Vuestickto.js"/>`