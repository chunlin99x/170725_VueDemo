/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../components/About.vue'
import Home from '../components/Home.vue'
import News from '../components/News.vue'
import Message from '../components/Message.vue'
import MessageDetail from '../components/MessageDetail.vue'

Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass: 'active',
  // 注册应用中所有的路由
  routes: [
    {
      path: '/',  // 匹配的是根路由路径
      redirect: '/about'  // 重定向
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          // path: '/home/news',
          path: 'news',
          component: News
        },
        {
          path: 'message',
          component: Message,
          children: [
            {
              path: 'detail/:id',  // /home/message/detail/3
              component: MessageDetail
            }
          ]
        }
      ]
    }
  ]
})