import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Work from '@/components/Work'
import Contact from '@/components/Contact'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: About 
    },
    {
      path: '/about',
      name: 'About',
      component: About 
    },
    {
      path: '/work',
      name: 'Work',
      component: Work 
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact 
    }
  ]
})
