<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-if="comments.length===0">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <item v-for="(comment, index) in comments"
            :key="index" :comment="comment" :del="del" :index="index"/>
    </ul>
  </div>
</template>

<script>
  import item from './item.vue'

  export default {
    // 声明接收属性    所有属性都会成为组件对象的属性
    props: ['comments', 'del'],  // 只是限定的属性名
    components: {
      item
    }
  }
</script>

<style>
  .reply {
    margin-top: 0px;
  }
</style>