<template>
  <div>
    <ul>
      <li v-for="(message, index) in messages" :index="index">
        <router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
        <button @click="showDetail(message.id)">使用按钮跳转</button>
      </li>
    </ul>
    <input type="text">
    <router-view></router-view>
  </div>
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
    },

    methods: {
      showDetail (id) {
        this.$router.push(`/home/message/detail/${id}`)
      }
    }
  }
</script>

<style>

</style>