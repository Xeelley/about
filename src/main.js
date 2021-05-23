import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.use(VueRouter)

Vue.config.productionTip = false


import PageEducation from './components/pages/Education.vue'
import PageAboutMe   from './components/pages/AboutMe.vue'
import PageSkills    from './components/pages/Skills.vue'

const router = new VueRouter({
  routes: [
    {
      path: '/about',
      component: PageAboutMe,
    },
    {
      path: '/career',
      component: PageEducation,
    },
    {
      path: '/skills',
      component: PageSkills,
    },
    {
      path: '/',
      redirect: '/about',
    }
  ]
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
