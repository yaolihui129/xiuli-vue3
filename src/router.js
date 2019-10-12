import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import First from './views/First.vue'
import A from './components/A.vue'
import A1 from './components/A1.vue'
import B from './components/B.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: First,
      children:[
        {
          path: '/a',
          component: A,
          children:[
            {
              path: '/a1',
              component: A1
            }
          ]
        },
        {
          path: '/b',
          component: B
        }
      ]
    }
  ]
})
