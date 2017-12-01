import Vue from 'vue'
import App from './App.vue'

import './base.css' // 引入的样式对所有组件都可见

new Vue({
  el: '#app',
  render: h => h(App)
})
