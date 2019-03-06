import Vue from 'vue'
import Router from 'vue-router'
import firstPage from '../page/firstPage'
import itemList from '../page/itemList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'firstPage',
      component: firstPage
    },
    {
      path: '/s',
      name: 'itemList',
      component: itemList
    }
  ]
})
