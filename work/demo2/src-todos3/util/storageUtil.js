/*
存储的工具模块
模块是什么类型的?
  对象: 包含多个功能
  函数: 只有一个功能

  如果保存对象或数组到localStorage, 只能存储它的json
 */
const TODOS_KEY = 'todos_key'

export default {
  saveTodos (todos) {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  },

  readTodos () { // 如果没有返回[]
    return JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
  }
}
