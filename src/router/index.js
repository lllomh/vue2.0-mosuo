import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

//export default new Router({
//  routes: [
//    {
//      path: '/',
//      name: 'Hello',
//      component: Hello
//    }
//  ]
//})

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
//import Foo from '@/components/Foo.vue'
import Bar from '@/components/Bar.vue'
import Home from '@/components/Home.vue'


const Foo = r => require.ensure([], () => r(require('@/components/Foo')), 'Foo');

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
//const routes = [
//    { path: '/foo', component: Foo },
//    { path: '/bar', component: Bar }
//]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。



export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: Home },
        { path: '/Foo', component: Foo },
        { path: '/Bar', component: Bar }
    ]

    //routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
// const app = new Vue({
//     router
// }).$mount('#app')

// 现在，应用已经启动了！