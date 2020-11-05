import Vue from 'vue'
import Router from 'vue-router'
import BookList from '@/components/BookList'
import BookInformation from '@/components/BookInformation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BookList',
      component: BookList,
      meta: { title: '综合推荐' }
    },{
      path: '/BookInformation',
      name: 'BookInformation',
      component: BookInformation,
      meta: { title: '图书详情信息' }
    }
  ]
})
