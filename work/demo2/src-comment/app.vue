<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <add :add="add"/>
      <list :comments="comments" :del="del"/>
    </div>
  </div>
</template>

<script>
  import add from './components/add.vue'
  import list from './components/list.vue'

  export default {
    // 初始化数据
    data () {
      return {
        comments: [
          {
            name: 'DAMU',
            content: 'I love pink'
          },
          {
            name: 'SADAMU',
            content: 'Vue SO Easy'
          },
          {
            name: 'xfzhang',
            content: 'Vue SO SO'
          }
        ]
      }
    },

    methods: {
      add (comment) {
        this.comments.unshift(comment)
      },

      del (index) {
        this.comments.splice(index, 1)
      }
    },

    components: {
      add,
      list
    }
  }
</script>

<style>

</style>