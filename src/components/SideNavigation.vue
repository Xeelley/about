<template>
  <div class="side-nav-root">
    
    <v-card
      class="pa-12"
      flat
    >
      <v-card
        elevation="12"
        width="256"
      >
        <v-navigation-drawer
          floating
          permanent
        >
          <v-list
            dense
            rounded
          >
            <router-link to="/about" class="router-link">
              <v-list-item
                link
              >
                <v-list-item-icon>
                  <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>About Me</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>

            <router-link to="/career" class="router-link">
              <v-list-item
                link
              >
                <v-list-item-icon>
                  <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Education &#38; Career</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>

            <router-link to="/skills" class="router-link">
              <v-list-item
                link
              >
                <v-list-item-icon>
                  <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>Skills</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>
            

          </v-list>
        </v-navigation-drawer>
      </v-card>
    </v-card>

    
  </div>
</template>


<script>
  export default {
    name: 'SideNavigation',

    data: () => ({
      items: [
        {
          title: 'First',
          icon: 'mdi-view-dashboard'
        },
        {
          title: 'Second',
          icon: 'mdi-view-dashboard'
        },
      ]
    }),
  }
</script>

<style lang="scss">
.side-nav-root {
  position: fixed;
}

.router-link {
  color: inherit !important;
  text-decoration: none;
}
</style>
