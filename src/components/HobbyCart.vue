<template>
  <div class="hobby-cart-wrapper">
    <div class="hobby-cart-icon-box">
      <font-awesome-icon :icon="icon" />
    </div>
    <p class="cart-title" v-html="title"></p>
  </div>
</template>

<script>
  export default {
    name: 'HobbyCart',
    props: ['title', 'icon'],
    data: () => ({
      
    }),
  }
</script>

<style lang="scss" scoped>

@import '../assets/palette.scss';

.hobby-cart-wrapper {
  padding: 20px 12px 0 12px;

  .hobby-cart-icon-box {
    font-size: 36px;
    text-align: center;
  }

  .cart-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    text-align: center;
    padding-top: 10px;
  }

}


</style>
