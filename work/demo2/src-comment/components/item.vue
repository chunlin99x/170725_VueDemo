<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="deleteComment">删除4</a>
    </div>
    <p class="user"><span >{{comment.name}}</span><span>说:</span></p>
    <p class="centence">{{comment.content}}</p>
  </li>
</template>

<script>
  export default {
    //声明接收属性
    props: {
      comment: Object, // 限制属性名和属性值的类型
      del: Function,
      index: Number
    },

    methods: {
      deleteComment () {
        const {comment, del, index} = this
        if(confirm(`确定删除${comment.name}的评论?`)) {
          del(index)
        }
      }
    }
  }
</script>

<style>
  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    width: 40px;
    border: 1px solid #ccc;
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0px 50px;
  }

  .user {
    font-size: 22px;
  }
</style>