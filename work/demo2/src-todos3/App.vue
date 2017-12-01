<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header @addTodo="addTodo"/> <!--给todo-header绑定了自定义事件监听-->
     <!-- <todo-header ref="header"/>-->
      <todo-main :todos="todos"/>
      <todo-footer>
        <input type="checkbox" v-model="isCheck" slot="isCheck"/>
        <span slot="size">--已完成{{completeSize}} / 全部{{todos.length}} </span>
        <button class="btn btn-danger"
                @click="clearCompletedTodos"
                v-show="completeSize" slot="clearBtn">清除已完成任务</button>
      </todo-footer>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
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

    mounted () {
      // this.$refs.header.$on('addTodo', this.addTodo)
      //订阅消息(removeTodo)
      PubSub.subscribe('removeTodo', (message, index) => {
        this.removeTodo(index)
      })
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