<template>
  <v-app>
    <ComponentSideNavigation />
    <div class="router-wrapper">
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>

import ComponentSideNavigation from './components/SideNavigation'

export default {
  name: 'App',

  components: {
    ComponentSideNavigation,
  },

  data: () => ({
    
  }),
};
</script>

<style lang="scss">

  .router-wrapper {
    border: 1px dotted #f00;
    height: 3000px;
    width: 300px;
    margin: 0 auto;
  }
</style>
