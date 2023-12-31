import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import UserIndex from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
import Login from '@/components/Login'
import Homepage from '@/components/Homepage'

import BlogIndex from '@/components/Blogs/Index'
import BlogCreate from '@/components/Blogs/CreateBlog'
import BlogEdit from '@/components/Blogs/EditBlog'
import BlogShow from '@/components/Blogs/ShowBlog'

import OrderIndex from '@/components/Orders/Index'
import OrderCreate from '@/components/Orders/CreateOrder'
import OrderEdit from '@/components/Orders/EditOrder'
import OrderShow from '@/components/Orders/ShowOrder'

import ProductIndex from '@/components/Products/Index'
import ProductCreate from '@/components/Products/CreateProduct'
import ProductEdit from '@/components/Products/EditProduct'
import ProductShow from '@/components/Products/ShowProduct'

import CommentIndex from '@/components/Comments/Index'

import Upload from '@/components/Utils/Upload'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogIndex
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/blog/create',
      name: 'blog-create',
      component: BlogCreate
    },{
      path: '/blog/edit/:blogId',
      name: 'blog-edit',
      component: BlogEdit
    },
    {
      path: '/blog/:blogId',
      name: 'blog',
      component: BlogShow
    },
    {
      path: '/comments',
      name: 'comments',
      component: CommentIndex
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrderIndex
    },
    {
      path: '/order/create',
      name: 'order-create',
      component: OrderCreate
    },
    {
      path: '/order/edit/:orderId',
      name: 'order-edit',
      component: OrderEdit
    },
    {
      path: '/order/:orderId',
      name: 'order',
      component: OrderShow
    },
    {
      path: '/products',
      name : 'products',
      component: ProductIndex
    },
    {
      path: '/product/create',
      name: 'product-create',
      component: ProductCreate
    },
    {
      path: '/product/edit/:productId',
      name: 'product-edit',
      component: ProductEdit
    },
    {
      path: '/product/:productId',
      name: 'product',
      component: ProductShow
    }
  ]
})
