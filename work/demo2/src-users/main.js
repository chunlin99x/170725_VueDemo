import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

// 声明使用插件
Vue.use(VueResource) // 内部给vm/组件对象添加了一个属性$http对象

new Vue({
  el: '#app',
  render: h => h(App)
})
