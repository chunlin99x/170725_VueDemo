<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :addTodo="addTodo"/>
      <todo-main :todos="todos"/>
      <todo-footer/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Main from './components/Main.vue'
  import Footer from './components/Footer.vue'

  export default {
    data () {
      return {
        todos: [
          {text: '吃饭', completed: false},
          {text: '睡觉', completed: true},
          {text: '打代码', completed: false},
        ]
      }
    },

    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
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