<template>
  <div>
    <h2 v-if="!repoName">Loading....</h2>
    <p v-else>
      most star repo is
      <a :href="repoUrl">{{repoName}}</a>
    </p>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        repoName: null,
        repoUrl: null
      }
    },

    mounted () {
      // 使用vue-resource发送ajax请求
      /*this.$http.get('https://api.github.com/search/repositories?q=vu&sort=stars')
        .then(response => {
          const result = response.data
          console.log('vue-resource 成功 ', result)
          const repo = result.items[0]
          this.repoName = repo.name
          this.repoUrl = repo.html_url
        }, response => {
          alert('请求失败了')
        })
*/
      axios.get('https://api.github.com/search/repositories?q=re&sort=stars')
        .then(response => {
          const result = response.data
          console.log('axios 成功 ', result)
          const repo = result.items[0]
          this.repoName = repo.name
          this.repoUrl = repo.html_url
        })
        .catch(error => {
          alert('请求失败了2')
        })
    }
  }
</script>

<style>

</style>