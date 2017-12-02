<template>
  <ul>
    <li v-for="(message, index) in messages" :index="index">
      <router-link to="???">{{message.title}}</router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        messages: []
      }
    },

    mounted () {
      //模拟ajax请求获取数据
      setTimeout(() => {
        this.messages = [
          {id: 1, title: 'message01'},
          {id: 3, title: 'message03'},
          {id: 5, title: 'message05'},
        ]
      }, 1000)
    }
  }
</script>

<style>

</style>