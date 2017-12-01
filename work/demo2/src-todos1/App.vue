<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :addTodo="addTodo"/>
      <todo-main :todos="todos" :removeTodo="removeTodo"/>
      <todo-footer :todos="todos" :clearCompletedTodos="clearCompletedTodos" :selectAll="selectAll"/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Main from './components/Main.vue'
  import Footer from './components/Footer.vue'
  import storageUtil from './util/storageUtil'

  export default {
    data () {
      return {
        todos: storageUtil.readTodos()
      }
    },

    watch: {
      todos: {
        deep: true,  // 深度监视
        /*handler: function (todos) {
          // 保存最新的todos
          storageUtil.saveTodos(todos)
        }*/
        handler: storageUtil.saveTodos
      }
    },

    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      },

      removeTodo (index) {
        this.todos.splice(index, 1)
      },

      clearCompletedTodos () {
        this.todos = this.todos.filter(todo => !todo.completed)
      },

      // 全选或全不选
      selectAll (isSelectAll) {
        this.todos.forEach(todo => {
          todo.completed = isSelectAll
        })
      }
    },

    components: {
      'todo-header': Header,
      'todo-main': Main,
      'todo-footer': Footer
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>