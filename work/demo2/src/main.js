import Vue from 'vue'
import App from './App.vue'

// 创建Vue实例对象
new Vue({
  el: '#app',
  components: { // 将组件映射成标签
    App
  },
  template: '<App />'   // 当前标签会被插入到el对应的div中
})