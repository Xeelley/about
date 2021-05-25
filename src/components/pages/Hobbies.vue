<template>
  <div class="hobbies-root">

      <ArticleHeader
        title="Achievements"
        backgroundText="What I did?"
      ></ArticleHeader>

      <div class="info-box">
        <p>- Led a team up-to 4 developers.</p>
        <p>- Developed own <a href="https://www.npmjs.com/package/ant-telegram" target="_blank">Node.js framework for Telegram bot</a> creating with 1000+ NPM downloads and 20+ production bots running on it.</p>
        <p>- Developed the technical skills of new joiners (3 Node.js junior devs).</p>
        <p>- Worked on the project for <a href="https://mtu.gov.ua/en/" target="_blank">Ministry of Infrastructure of Ukraine</a>: road repairing works monitoring bot, open for all ukrainians.</p>
      </div>

      <ArticleHeader
        title="Hobbies"
        backgroundText="What I like?"
      ></ArticleHeader>

      <div class="hobby-showcase">
        <v-row>
          <v-col sm="3">
            <HobbyCart
              title="Gastro<br>Traveling"
              :icon="iconFood"
            />
          </v-col>
          <v-col sm="3">
            <HobbyCart
              title="8-Ball<br>Snooker"
              :icon="iconBall"
            />
          </v-col>
          <v-col sm="3">
            <HobbyCart
              title="Video<br>Games"
              :icon="iconGamepad"
            />
          </v-col>
          <v-col sm="3">
            <HobbyCart
              title="Movies"
              :icon="iconMovie"
            />
          </v-col>
        </v-row>
        
        <v-row>
          <v-col sm="3">
          </v-col>
          <v-col sm="3">
            <HobbyCart
              title="Tabletop<br>Games"
              :icon="iconChess"
            />
          </v-col>
          <v-col sm="3">
            <HobbyCart
              title="Cooking"
              :icon="iconCooking"
            />
          </v-col>
          <v-col sm="3">
          </v-col>
        </v-row>
      </div>
    
  </div>
</template>

<script>
import ArticleHeader from '../ArticleHeader'
import HobbyCart     from '../HobbyCart'

import { faHamburger, faDotCircle, faGamepad, faVideo, faChessKing, faBlenderPhone } from '@fortawesome/free-solid-svg-icons'


export default {
  name: 'Hobbies',
  components: {
    ArticleHeader,
    HobbyCart,
  },

  computed: {
    iconFood()    { return faHamburger },
    iconBall()    { return faDotCircle },
    iconGamepad() { return faGamepad },
    iconChess()   { return faChessKing },
    iconMovie()   { return faVideo },
    iconCooking() { return faBlenderPhone },
  },
  data: () => ({
    
  }),
}
</script>

<style lang="scss" scoped>
@import '../../assets/palette.scss';

@keyframes slideup
{
from { margin-top: 100vh; }
to   { margin-top: 0vh; }
}

.hobbies-root {
  margin-top: 0vh;
  animation: slideup 1s ease;
  padding-top: 50px;
  padding-bottom: 200px;

  .info-box {
    text-align: left;
    font-size: 20px;

    a {
      color: $b-white;
      text-decoration: underline;
      transition: all 0.3s;
      text-decoration-thickness: 1px;

      &:hover {
        color: $b-pink;
      }
    }
  }

  .hobby-showcase {
    margin: 20px auto;
    max-width: 600px;
  }

}

</style>
