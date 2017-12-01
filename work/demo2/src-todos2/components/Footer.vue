<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheck"/>
    </label>
    <span>
          <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger"
            @click="clearCompletedTodos"
            v-show="completeSize">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    props: {
      todos: Array,
      clearCompletedTodos: Function,
      selectAll: Function
    },

    computed: {
      completeSize () {
        // 根据数组进行统计
        /*
        let size = 0
        this.todos.forEach(todo => {
          if(todo.completed) {
            size++
          }
        })
        return size
        */
        return this.todos.reduce((preTotal, todo) => {
          return preTotal + (todo.completed ? 1 : 0)
        }, 0)

        // return this.todos.filter(todo => todo.completed).length
      },
      isCheck: {
        get () {
          return this.todos.length===this.completeSize &&  this.completeSize>0 // 这里不能调用completeSize()
        },
        set (value) {
          this.selectAll(value)
        }

      }
    }
  }
</script>

<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>