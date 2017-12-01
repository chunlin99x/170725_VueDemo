<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="name">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="addComment">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    // 声明接收属性
    props: {
      add: {  // 限制属性名, 属性值类型, 必要性
        type: Function,
        required: true
      }
    },

    data () {
      return {
        name: '',
        content: ''
      }
    },
    methods: {
      addComment () {
        // 得到输入数据
        // const {name, content} = this
        const name = this.name.trim()
        const content = this.content.trim()

        // 检查数据
        if(!name || !content) {
          alert('请输入数据!')
          return
        }

        // 封装成comment对象
        const comment = {
          name,
          content
        }

        // 添加到comments
        this.add(comment)

        // 清空输入数据
        this.name = ''
        this.content = ''
      }
    }
  }
</script>

<style>

</style>