# vue-dynamic-dialog

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 使用说明
#### 安装
```js
npm i vue-dynamic-dialog -D
```
#### 在 main.js 中写入以下内容：
```js
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueDynamicDialog from 'vue-dynamic-dialog'
import 'vue-dynamic-dialog/lib/vue-dynamic-dialog.css'
Vue.use(VueDynamicDialog)
Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
```
#### 使用与el-dialog的使用方法一致，只是增加了滑出效果的属性
* 默认显示方式，居中显示：center 
* 从顶部滑出，居中显示：top
* 从底部滑出，居中显示：bottom 
* 从右侧滑出，居中显示：right
* 从左侧滑出，居中显示：left 
* 从右侧滑出，贴近边缘：rightSide
* 从左侧滑出，贴近边缘：leftSide 
* 从顶部滑出，贴近边缘：topSide