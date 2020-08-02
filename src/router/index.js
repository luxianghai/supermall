import Vue from 'vue'
import VueRouter from 'vue-router'

// 1. 安装 vue-router
Vue.use(VueRouter);

// 1.1 以懒加载的形式导入 组件
const Home = ()=> import('@views/home/Home')
const Category = ()=> import('@views/category/Category')
const Cart = ()=> import('@views/cart/Cart')
const Profile = ()=> import('@views/profile/Profile')

// 2. 创建路由与组件的映射关系
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    component:Home,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/profile',
    component: Profile,
  }
];

// 3. 创建 router 对象
const router = new VueRouter({
  routes,
  mode:'history'
});

// 4. 导出 路由对象
export default router;
