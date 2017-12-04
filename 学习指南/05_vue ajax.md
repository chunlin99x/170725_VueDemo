# 1. 2个常用的库
## 1). vue-resource
	vue插件, 非官方库, vue1.x使用广泛
## 2). axios
	通用的ajax请求库, 官方推荐, vue2.x使用广泛

# 2. vue-resource基本使用
## 1). 在线文档
	https://github.com/pagekit/vue-resource/blob/develop/docs/http.md
## 2). 下载: 
	npm install vue-resource --save
## 3). 编码
    // 引入模块
    import VueResource from 'vue-resource'
    // 使用插件
    Vue.use(VueResource)
   
    // 通过vue/组件对象发送ajax请求
    this.$http.get('/someUrl').then((response) => {
      // success callback
      console.log(response.data) //返回结果数据
    }, (response) => {
      // error callback
      console.log(response.statusText) //错误信息
    })

# 3. axios基本使用
## 1). axios在线文档
	https://github.com/mzabriskie/axios
## 2). 下载axios: 
	npm install axios --save
## 3). 编码:
    // 引入模块
    import axios from 'axios'

    // 发送ajax请求
    axios.get(url)
      .then((response) => {
        console.log(response.data) // 得到返回结果数据
      })

# 4. 在哪去发请求
	1. 初始化
		mounted() {}
	2. 响应事件更新
		事件回调函数或相关数据监视函数中