import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ceshi from '@/components/ceshi'
import user from '@/components/user'
import Article from '@/components/Article'
import SideBar from '@/components/SideBar'

Vue.use(Router)

export default new Router({
  // routes: [
  //   {
  //     path: '/',
  //     name: 'HelloWorld',
  //     component: HelloWorld
  //   }
  // ]
  mode: 'history', //去掉路由地址的#
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        main:HelloWorld
      }
    },
    {
    	path:'/topic/:id&auther=:name', //内容
    	name:'content',
    	components:{
    		main:Article, //加载文章
    		sidebar:SideBar //加载文章简介
    	},
    },
    {
      path:'/user/:name',
      name: 'user',
      components: {
        main:user,
      }
    }
  ]
})
