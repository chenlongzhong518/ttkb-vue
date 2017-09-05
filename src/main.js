//导入，文件，来自，哪里
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

//Vue，使用，文件
Vue.use(VueRouter);
Vue.use(VueResource);

// 导入，组件，来自，哪里
import home from './component/home.vue';
import download from './component/download.vue';

//生成路由
const router=new VueRouter({
    //配置路由
    routes:[
        {path:'/home',component:home},	//关联路由
        {path:'/download',component:download},	//关联路由
        {path:'*',redirect:'/home'}		//重定向
    ]
});
router.push('/');
//规定范围
new Vue({
    router,		//路由和vue关联
    el: '#app',	//规定vue的使用范围
    render: h => h(App)
});
