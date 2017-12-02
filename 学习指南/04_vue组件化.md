# 1. vue组件的定义与使用
## 1). 一个.vue文件就是一个vue组件

## 2). 组成(3个部分)
	1.模板页面: 
      <template>
        页面模板
      </template>
    2.JS模块对象: 
      <script>
        export default {
          data() {return {}},
          methods: {},
          computed: {},
          components: {}
        }
      </script>
    3.样式: 
      <style>  
        样式定义
      </style>

## 3). 基本使用
	1. 引入组件
	2. 映射成标签
	3. 使用标签
	    <template>
	      <hello>
	    </template>
	    <script>
	      import Hello from './components/Hello'
	      export default {
	        components: {
	          Hello
	        }
	      }
	    </script>

## 4). 关于标签名与标签属性名书写问题:
	写法一: 一模一样
	写法二: 大写变小写, 并用-连接 
  
# 2. 组件化编码的基本流程
	1). 拆分界面, 抽取组件
	2). 编写静态组件
	3). 编写动态组件
    	初始化数据, 动态显示初始化界面
    	实现与用户交互功能
    
# 3. 组件间通信
## 1). 组件通信的5种方式
	props
		函数: 子组件向父组件传递数据
		非函数(基本/对象/数组): 父组件向子组件传递数据
	vue的自定义事件
	pubsub第三方库
	slot
	vuex(后面单独讲)
## 2). 基本原则: 
	不要在子组件中直接修改父组件的状态数据
## 3). 通信方式1: props
	1. 注意: 此方式用于父组件向子/孙组件传递数据
	2. 使用组件标签时: 
		<my-component name='tom' :age='3' :set-name='setName'></my-component>
	3. 定义组件MyComponent时:
		* 在组件内声明所有的props
		    //方式一: 只指定名称
		    props: ['name', 'age', 'setName']
		    //方式二: 指定名称和类型
		    props: {
		      name: String,
		      age: Number,
		      setNmae: Function
		    }
		    //方式三: 指定名称/类型/必要性/默认值
		    props: {
		      name: {type: String, required: true, default:xxx},
		    }
		* 所有props的属性都会成为component对象的属性, 模板页面可以直接引用
		
## 4). 通信方式2: vue自定义事件
	1. 绑定事件监听
		// 方式一: 通过v-on绑定
		@delete_todo="deleteTodo"
		// 方式二: 通过$on()
		this.$refs.xxx.$on('delete_todo', function (todo) {
		  this.deleteTodo(todo)
		})
	2. 触发事件
		this.$emit(eventName, data): 触发事件(只能在父组件中接收)
	3. 注意: 
		此方式用于子组件向父组件发送消息(数据)

## 5). 通信方式3: 消息订阅与发布/全局事件总线
	1. 使用第三方库: PubSubJS
	2. 订阅消息
		PubSub.subscribe('msg', function(msg, data){})
	3. 发布消息
		PubSub.publish('msg', data)
	4. 注意
		此方式可实现任意组件间通信(数据)
	
## 6). 通信方式4: 使用slot实现父子组件通信
	1. 注意: 此方式用于父组件向子组件传递`标签数据`
	2. 子组件: child.vue
		<template>
			<div>
				<slot name="xxx">不确定的标签结构1</slot>
				<div>组件确定的标签结构</div>
				<slot name="yyy">不确定的标签结构2</slot>
			</div>
		</template>
	3. 父组件: parent.vue
		<child>
			<div slot="xxx">xxx对应的标签结构</div>
			<div slot="yyy">yyyy对应的标签结构</div>
		</child>

# 4. 事件的2个概念
## 1). 绑定事件监听 (订阅)
	目标: 标签元素  <button>
	事件名(类型): click/focus/自定义事件名
	回调函数: function(event){}  处理事件

## 2). 触发事件 (发布)
	事件名: click/自定义名称
	数据: 传递给回调函数
	触发方式:
		DOM事件: 用户在浏览器上对应的界面上做对应的操作
		自定义: 编码手动触发

# 5. 数组常用的方法
	1. push()/shift()/unshift()就不说了
	2. 说几个开发非常好用的方法(声明式)
		map(): 在react开发中经常用来根据数据数组生成标签的数组
		filter(): 在开发中实现商品过滤显示
		reduce(): 根据数组进行统计
		find()/findIndex(): 在数组中查找某个元素或某个元素的下标