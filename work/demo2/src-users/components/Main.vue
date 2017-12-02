<template>
  <div>
    <h2 v-if="firstView">enter name search</h2>
    <h2 v-if="loading">LOADING....</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>

    <div class="row" v-if="users">
      <div class="card" v-for="(user, index) in users" :key="index">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.login}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    props: {
      searchName: String
    },
    data () {
      return {
        firstView: true,
        loading: false,
        users: null,
        errorMsg: null
      }
    },

    watch: {
      searchName (value) {  // 点击了搜索, 传入一个新的搜索名
        // 更新状态(请求中)
        this.firstView = false
        this.loading = true
        this.users = null
        this.errorMsg = null
        // 发ajax请求
        const url = `https://api.github.com/search/users?q=${value}`
        axios.get(url)
          .then(response => {
            const result = response.data
            // 更新状态(请求成功)
            this.loading = false
            this.users = result.items.map(({login, avatar_url, html_url}) => {
              return {
                login,
                avatar_url,
                html_url
              }
            })
          })
          .catch( error => {
            // 更新为请求失败的状态
            this.loading = false
            this.errorMsg = '请求失败'
          })
      }
    }
  }
</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>