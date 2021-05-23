<template>
  <div class="education-root">

      <Timeline :years="years"/>

      <v-divider></v-divider>
      <p class="projects-arrow"><font-awesome-icon :icon="iconArrowDown" /></p>
    
      <ArticleHeader
        title="Projects"
        backgroundText="What I did?"
      ></ArticleHeader>

  </div>
</template>

<script>

import ArticleHeader from '../ArticleHeader'
import Timeline      from '../Timeline'

import ContentTimeline from '../../content/timeline'

import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'Education',
  components: {
    ArticleHeader,
    Timeline,
  },
  computed: {
    iconArrowDown() { return faArrowDown },
  },
  data: () => ({
    years: ContentTimeline,
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

.education-root {
  padding: 100px 0;
  margin-top: 0vh;
  animation: slideup 1s ease;
}

.projects-arrow {
  color: $b-pink;
  text-align: center;
  font-size: 72px;
  padding: 10px 0;
}


</style>
