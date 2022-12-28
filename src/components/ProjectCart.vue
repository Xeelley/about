<template>
  <div class="project-cart-wrapper">
    <table>
      <tr class="header"><td>{{ title }}</td></tr>
      <tr class="underline"><td><font-awesome-icon :icon="iconCalendar" class="underline-label" />{{ underline }}</td></tr>
      <tr class="description"><td v-html="description"></td></tr>
      <tr class="position"><td><span class="position-label">Position:</span> {{ position }}</td></tr>
      <tr class="technologies"><td><span class="technologies-label">Core technologies:</span> {{ technologies }}</td></tr>
    </table>
  </div>
</template>


<script>
import { faCalendar } from '@fortawesome/free-solid-svg-icons'


export default {
  name: 'ProjectCart',
  props: [ 'title', 'underline', 'description', 'position', 'technologies' ],
  computed: {
    iconCalendar() { return faCalendar; },
  },
  data: () => ({
    
  }),
}

</script>


<style lang="scss" scoped>

@import '../assets/palette.scss';

.project-cart-wrapper {

  margin: 50px auto;

  table {
    border-left: 1px solid $b-white;
    width: 100%;
  }

  td {
    padding: 0 20px;
  }

  tr {
    &.header {
      color: $b-pink;
      font-weight: 600;
      font-size: 24px;
    }

    &.underline td {
      font-weight: 600;
      font-size: 14px;
      padding-bottom: 10px;
    }

    &.description td {
      border-top: 1px solid $b-white;
      border-bottom: 1px solid $b-white;
      padding: 10px 20px;
      text-align: justify;
    }

    &.position td {
      padding-top: 10px;
      font-weight: 600;

      span {
        color: $b-pink;
        font-weight: 600;
      }
    }

    &.technologies {

      span {
        color: $b-pink;
        font-weight: 600;
      }
    }

  }

  .underline-label {
    margin-right: 10px;
  }

}

</style>


<style lang="scss">

@import '../assets/palette.scss';

.project-in-link {
  color: $b-white !important;
  transition: all 0.5s;

  &:hover {
    color: $b-pink !important;
  }
}

</style>