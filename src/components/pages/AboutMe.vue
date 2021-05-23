<template>
  <div class="about-me-root">

    <ArticleHeader
      title="About Me"
      backgroundText="Who I Am?"
    ></ArticleHeader>

    <table class="top-table">
      <tr>
        <td class="icon-td"><font-awesome-icon :icon="iconUser" /></td>
        <td>24.01.1998</td>
      </tr>
      <tr>
        <td class="icon-td"><font-awesome-icon :icon="iconGlobe" /></td>
        <td>Ukraine, Kiev</td>
      </tr>
    </table>
    <br><br>
    <p class="info-box">
      Hi there, I'm a full stack developer with <span class="accent-span">{{years}} years+ experience</span> 
      developing different projects (web mostly).
      I like what I do 'cause I <span class="accent-span">enjoy</span> building <span class="accent-span">cool</span> things that everyone
      can see. It's more like lifestyle, not just a job.
      <br><br><br>
      Feel free to contact me with any question:
    </p>

    <table class="contacts-table">
      <tr>
        <td class="icon-td"><font-awesome-icon :icon="iconPhone" /></td>
        <td><a href="tel:+380635243678" target="_blank">+38(063)52-43-678</a></td>
      </tr>
      <tr>
        <td class="icon-td"><font-awesome-icon :icon="iconMail" /></td>
        <td><a href="mailto:i.am.hrypak@gmail.com" target="_blank">i.am.hrypak@gmail.com</a></td>
      </tr>
      <tr>
        <td class="icon-td"><font-awesome-icon :icon="iconTelegram" /></td>
        <td><a href="https://t.me/xeelley" target="_blank">@xeelley</a></td>
      </tr>
      <tr>
        <td class="icon-td"><font-awesome-icon :icon="iconLinkedin" /></td>
        <td><a href="https://www.linkedin.com/in/xeelley/" target="_blank">Ivan Hrypak</a></td>
      </tr>
    </table>
    
  </div>
</template>

<script>

import ArticleHeader from '../ArticleHeader'

import { faUser, faGlobe, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'AboutMe',
  components: {
    ArticleHeader
  },
  data: () => ({
    years: new Date().getFullYear() - 2016,
  }),
  computed: {
    iconUser()     { return faUser },
    iconMail()     { return faEnvelope },
    iconGlobe()    { return faGlobe },
    iconPhone()    { return faPhoneAlt },
    iconTelegram() { return faTelegram },
    iconLinkedin() { return faLinkedin },
  },
}

</script>

<style lang="scss" scoped>
@import '../../assets/palette.scss';

@keyframes slideup
{
from { margin-top: 100vh; }
to   { margin-top: 0vh; }
}

.about-me-root {
  padding: 100px 0;
  margin-top: 0vh;
  animation: slideup 1s ease;
  padding-bottom: 200px;

  .info-box {
    text-align: justify;
    font-size: 20px;

    span.accent-span {
      color: $b-pink;
      font-weight: bold;
    }
  }

  a {
    color: $b-white;
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
      color: $b-pink;
    }
  }

  table {
    td {
      font-size: 20px;
    }
    .icon-td {
      width: 30px;
      text-align: left;
    }

    &.contacts-table {
      td {
        padding: 5px 0;
      }
    }

    &.top-table {
      td {
        font-size: 16px;
      }
    }
  }

}

</style>
