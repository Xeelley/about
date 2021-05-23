<template>
<v-timeline>
    <v-timeline-item
    v-for="(year, i) in years"
    :key="i"
    small
    >
    <template v-slot:opposite>
        <span
        :class="`headline font-weight-bold pink--text`"
        v-text="year.year"
        ></span>
    </template>
    <div class="py-4">
        <h2 :class="`headline font-weight-light mb-4 pink--text`">{{year.title}}</h2>
        <div v-html="year.text"></div>
    </div>
    </v-timeline-item>
</v-timeline>
</template>

<script>
  export default {
    name: 'Timeline',
    props: ['years'],
    data: () => ({
      
    }),
  }
</script>

<style lang="scss" scoped>

@import '../assets/palette.scss';

.pink--text {
  color: $b-pink !important;
}

pre {
    font-family: 'Montserrat', sans-serif;
}

</style>

<style lang="scss">

@import '../assets/palette.scss';

.a-inline {
    color: $b-white !important;
    text-decoration: underline;
    transition: all 0.5s;

    &:hover {
        color: $b-pink !important;
    }
}
</style>