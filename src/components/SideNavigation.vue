<template>
  <div class="side-nav-root">
    
    <div class="list-wrapper">

      <div class="list-header">
        <img class="list-header-img" src="@/assets/avatar.jpg" alt="Ivan Hrypak">
        <p class="list-header-name">Ivan Hrypak</p>
      </div>

      <v-list
        dense
        rounded
        color="transparent"
      >
        <router-link to="/about" class="router-link">
          <v-list-item
            link
          >
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
                <div class="router-link-text">About Me</div>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/career" class="router-link">
          <v-list-item
            link
          >
            <v-list-item-icon>
              <v-icon>mdi-briefcase</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
                <div class="router-link-text">Education &#38; Career</div>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/skills" class="router-link">
          <v-list-item
            link
          >
            <v-list-item-icon>
              <v-icon>mdi-star-four-points</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
                <div class="router-link-text">Skills</div>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/achievements" class="router-link">
          <v-list-item
            link
          >
            <v-list-item-icon>
              <v-icon>mdi-medal</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
                <div class="router-link-text">Achievements &#38; Hobbies</div>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

      </v-list>
    </div>

    <div class="side-nav-footer">
      {{ currentYear }}
    </div>
    
  </div>
</template>


<script>
  export default {
    name: 'SideNavigation',

    data: () => ({
      currentYear: new Date().getFullYear(),
    }),
  }
</script>

<style lang="scss">
@import '../assets/palette.scss';

.side-nav-root {
  position: fixed;
  height: 100%;
  width: 300px;
  top: 0;
  background: $b-black-dark;

  .list-wrapper {
    margin-top: calc(50vh - 350px);

    .list-header {
      text-align: center;
      border-bottom: 10px solid $b-black;
      padding: 20px;
      margin-bottom: 20px;
      user-select: none;

      .list-header-img {
        width: 200px;
        border-radius: 100px;
        box-shadow: 0 0 20px 0 $b-pink;
      }
      .list-header-name {
        font-family: 'Montserrat', sans-serif;
        font-weight: bolder;
        color: $b-pink;
        font-size: 2rem;
      }
    }
  }

  .side-nav-footer {
    position: absolute;
    bottom: 0;
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    color: $b-white;
    padding: 10px;
    text-align: center;
  }

}

.router-link {
  color: inherit !important;
  text-decoration: none;
}

.router-link-text {
  font-family: 'Montserrat', sans-serif;
  font-weight: bolder;
  color: $b-white;
  font-size: 1rem;
}

.v-icon {
  color: $b-white !important;
}

</style>
