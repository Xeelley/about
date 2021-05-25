<template>
  <div class="projects-root">
    <ArticleHeader
        title="Projects"
        backgroundText="What I did?"
    ></ArticleHeader>

    <div class="projects-header">
      Some of my projects: 
    </div>

    <ProjectCart 
      v-for="project in projects" v-bind:key="project.description"
      :title="project.title"
      :underline="project.underline"
      :description="project.description"
      :position="project.position"
      :technologies="project.technologies"
    />

    <div class="projects-footer">
      And more...
    </div>

  </div>
</template>

<script>

import ArticleHeader from '../ArticleHeader'
import ProjectCart   from '../ProjectCart'

import ContentProjects from '../../content/projects'


export default {
  name: 'Skills',
  components: {
    ArticleHeader,
    ProjectCart,
  },

  data: () => ({
    projects: ContentProjects,
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

.projects-header {
  font-size: 18px;
  padding: 10px 0;
  text-align: left;
}

.projects-footer {
  font-size: 18px;
  padding: 10px 0;
  text-align: center;
}

</style>
