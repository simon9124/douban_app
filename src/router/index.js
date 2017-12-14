import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index/index.vue'
import Broadcast from '../pages/Broadcast/Broadcast'
import AudioBook from '../pages/AudioBook/AudioBook'
import Group from '../pages/Group/Group'
import Mine from '../pages/Mine/Mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname ,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/audioBook',
      name: 'AudioBook',
      component: AudioBook
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {    //重定向
      path: '/Index',
      redirect : '/'
    },
    {    //重定向
      path: '*',
      redirect : '/'
    },
  ]
})
