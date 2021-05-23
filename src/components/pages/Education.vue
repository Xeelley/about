<template>
  <div class="education-root">

    <ArticleHeader
      title="Education and Career"
      backgroundText="Where I began?"
    ></ArticleHeader>

    <Timeline :years="years"/>

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
  margin-top: 0vh;
  animation: slideup 1s ease;
  padding-bottom: 150px;
}

.projects-arrow {
  color: $b-pink;
  text-align: center;
  font-size: 72px;
  padding: 10px 0;
}


</style>
