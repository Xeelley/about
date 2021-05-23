<template>
  <div class="app-root">
    <div class="show-root">
      <v-app>
        <ComponentSideNavigation />
        <div class="router-wrapper">
          <div class="router-inner">
            <router-view></router-view>
          </div>
        </div>
      </v-app>
    </div>
    
    <div class="hide-root">
      <h1>:(</h1>
      <p>Sorry, but this page for desktop only :(</p>
    </div>
  </div>
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

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
@import './assets/palette.scss';

#app {
  background-color: $b-black;
}

.router-wrapper {
  padding-left: 300px;

  .router-inner {
    border: 1px dotted #f00;
    min-height: 1000px;
    max-width: 900px;
    margin: 0px auto;
    font-family: 'Montserrat', sans-serif;
    color: $b-white;
  }
}

::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: $b-black;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $b-pink;
  border-radius: 3px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: $b-pink-light;
}

@media only screen and (min-width: 900px) {
  .show-root {
    display: block;
  }
  .hide-root {
    display: none;
  }
}
@media only screen and (max-width: 899px) {
  .show-root {
    display: none;
  }
  .hide-root {
    display: block;
  }
}

.hide-root {
  background: #0D47A1;
  padding: 30px;
  height: 100vh;

  h1 {
    color: white;
    font-size: 10em;
  }
  p {
    color: white;
    font-size: 2em;
  }
}

</style>
