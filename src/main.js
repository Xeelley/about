import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter)

Vue.config.productionTip = false


import PageEducation from './components/pages/Education.vue'
import PageProjects  from './components/pages/Projects.vue'
import PageAboutMe   from './components/pages/AboutMe.vue'
import PageHobbies   from './components/pages/Hobbies.vue'
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
      path: '/projects',
      component: PageProjects,
    },
    {
      path: '/skills',
      component: PageSkills,
    },
    {
      path: '/achievements',
      component: PageHobbies,
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
