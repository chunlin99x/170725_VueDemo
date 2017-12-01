<template>
  <ul class="todo-main">
    <Item v-for="(todo, index) in todos" :key="index"
          :todo="todo" :index="index" :removeTodo="removeTodo"/>
  </ul>
</template>

<script>
  import Item from './Item.vue'

  export default {
    props: {
      todos: Array,
      removeTodo: Function
    },
    components: {
      Item
    }
  }
</script>

<style>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>