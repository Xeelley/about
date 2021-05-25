<template>
  <div class="skills-root">

      <ArticleHeader
        title="Skills"
        backgroundText="What I can?"
      ></ArticleHeader>

      <v-row>
        <v-col sm="6">
          <RatingTable
            title="Languages"
            :rows="skills.languages"
            float="left" no_last_usage_header="true"
          />
        </v-col>
        <v-col sm="6">
          <RatingTable
            title="Programming languages"
            :rows="skills.programming_languages"
            float="left"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="6">
          <RatingTable
            title="Backend"
            :rows="skills.backend"
            float="left"
          />
        </v-col>
        <v-col sm="6">
          <RatingTable
            title="Frontend"
            :rows="skills.frontend"
            float="left"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="6">
          <RatingTable
            title="Databases"
            :rows="skills.databases"
            float="left"
          />
        </v-col>
        <v-col sm="6">
          <RatingTable
            title="Cloud-based"
            :rows="skills.cloud"
            float="left"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="6">
          <RatingTable
            title="Hybrid"
            :rows="skills.hybrid"
            float="left"
          />
        </v-col>
        <v-col sm="6">
          <RatingTable
            title="Testing"
            :rows="skills.testing"
            float="left"
          />
        </v-col>
      </v-row>
      
      <v-row>
        <v-col sm="6">
          <RatingTable
            title="DevTools and Environment"
            :rows="skills.devtools"
            float="left"
          />
        </v-col>
        <v-col sm="6">
          <RatingTable
            title="Technologies"
            :rows="skills.technologies"
            float="left"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="6">
          <RatingTable
            title="Platforms"
            :rows="skills.platforms"
            float="left"
          />
        </v-col>
        <v-col sm="6">
          <RatingTable
            title="Deployment"
            :rows="skills.deployment"
            float="left"
          />
        </v-col>
      </v-row>
      
      <v-row>
        <v-col sm="6">
          <RatingTable
            title="Software"
            :rows="skills.office"
            float="left"
          />
        </v-col>
        <v-col sm="6">
          <RatingTable
            title="Also..."
            :rows="skills.also"
            float="left"
          />
        </v-col>
      </v-row>
      
  </div>
</template>

<script>

import ArticleHeader from '../ArticleHeader'
import RatingTable   from '../RatingTable'

import ContentSkills from '../../content/skills'

export default {
  name: 'Skills',
  components: {
    ArticleHeader,
    RatingTable,
  },

  data: () => ({
    skills: ContentSkills,
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

.skills-root {
  margin-top: 0vh;
  animation: slideup 1s ease;
  padding-bottom: 200px;
}

</style>
