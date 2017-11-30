import Vue from 'vue'
import app from './app.vue'
/*
new Vue({
  el: '#app',
  components: {app},
  template: '<app />'
})*/

/*new Vue({
  el: '#app',
  render: function (createElement) {
    return createElement(app)   // 根据组件创建一个组件标签
  }
})*/

new Vue({
  el: '#app',
  render: h => h(app)
})
