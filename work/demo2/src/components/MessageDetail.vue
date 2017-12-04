<template>
  <div>
    <p>ID: {{message.id}}</p>
    <p>title: {{message.title}}</p>
    <p>conent: {{message.content}}</p>
  </div>
</template>

<script>
  // 模拟后台数据
  const allMessages = [
    {id: 1, title: 'message01', content: '我是message011111的详情内容'},
    {id: 2, title: 'message02', content: '我是message022222的详情内容'},
    {id: 3, title: 'message03', content: '我是message033333的详情内容'},
    {id: 4, title: 'message04', content: '我是message044444的详情内容'},
    {id: 5, title: 'message05', content: '我是message055555的详情内容'},
    {id: 6, title: 'message06', content: '我是message066666的详情内容'}
  ]

  export default {

    data () {
      return {
        message: {}
      }
    },

    mounted () {
      const id = this.$route.params.id * 1
      // 模拟从后台查询得到对应的message
      this.message = allMessages.find(message => message.id===id)
    },

    watch: {
      // 监视路由的变化
      '$route' (to, from) {
        const id = to.params.id * 1
        // 模拟从后台查询得到对应的message
        this.message = allMessages.find(message => message.id===id)
      }
    }
  }
</script>

<style>

</style>