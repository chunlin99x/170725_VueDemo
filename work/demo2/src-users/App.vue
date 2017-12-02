<template>
  <div class="container">
    <Search :setSearchName="setSearchName"/>
    <MyMain :searchName="searchName"/>
  </div>
</template>

<script>
  import Search from './components/Search.vue'
  import Main from './components/Main.vue'

  export default {
    data () {
      return {
        searchName: ''
      }
    },

    methods: {
      setSearchName (searchName) {
        this.searchName = searchName
      }
    },

    components: {
      Search,
      'MyMain': Main
    }
  }
</script>

<style>

</style>