<template>
  <div class="article-header-root">
    <p class="title">{{title}}</p>
    <p class="bg-text">{{backgroundText}}</p>
  </div>
</template>


<script>
export default {
    name: 'ArticleHeader',
    props: [ 'title', 'backgroundText' ],
    data: () => ({
        
    }),
}
</script>

<style lang="scss">
@import '../assets/palette.scss';

.article-header-root {

    height: 150px;
    position: relative;
    margin: 40px 0;

    .title {
        font-family: "Montserrat", sans-serif !important;
        font-size: 48px !important;
        color: $b-pink;
        font-weight: bolder;
        bottom: 0;
        position: absolute;
        line-height: 10px;
        z-index: 2;
        user-select: none;
    }

    .bg-text {
        font-size: 120px;
        font-family: 'Roboto', sans-serif;
        color: $b-black-dark;
        font-weight: bold;
        bottom: 0;
        position: absolute;
        line-height: 50px;
        z-index: 1;
        user-select: none;
    }
}

</style>
