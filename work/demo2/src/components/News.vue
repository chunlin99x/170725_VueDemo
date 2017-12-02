<template>
  <div>
    <ul>
      <li v-for="(news, index) in newsArr" :index="index">{{news}}</li>
    </ul>

    <hr>
    <button @click="test1">转向About</button>
    <button @click="test3">转向About2</button>
    <button @click="test2">回退</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        newsArr: ['news01', 'news02', 'news03']
      }
    },

    methods: {
      test1 () {
        this.$router.push('/about')
      },

      test2 () {
        // this.$router.go(-1)
        this.$router.back()
      },

      test3 () {
        this.$router.replace('/about')
      }
    }
  }
</script>

<style>

</style>