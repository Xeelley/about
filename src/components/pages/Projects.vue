<template>
  <div class="projects-root">
    <ArticleHeader
        title="Projects"
        backgroundText="What I did?"
    ></ArticleHeader>

    <p>Comming soon...</p>
  </div>
</template>

<script>

import ArticleHeader from '../ArticleHeader'

export default {
  name: 'Skills',
  components: {
    ArticleHeader,
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

.projects-root {
  margin-top: 0vh;
  animation: slideup 1s ease;
  padding-bottom: 200px;
}

</style>
