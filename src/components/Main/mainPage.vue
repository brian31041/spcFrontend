<template>
  <div id="mainpage">
    <mainTop></mainTop>
    <mainIntro></mainIntro>
    <mainPromotion></mainPromotion>
    <!-- <mainArtical></mainArtical> -->
    <mainAllProduct></mainAllProduct>
    <mainIgFrame></mainIgFrame>
  </div>
</template>

<script>
  import mainTop from './mainTop'
  import mainIntro from './mainIntro'
  import mainPromotion from './mainPromotion'
  // import mainArtical from './mainAtrical.vue'
  import mainAllProduct from './mainAllProduct'
  import mainIgFrame from './mainIgFrame.vue'
  export default {
    components: {
      mainTop,
      mainIntro,
      mainPromotion,
      // mainArtical,
      mainAllProduct,
      mainIgFrame
    }
  }
</script>
<style>
.imgHover:hover{
    background-color: #FFC442;
    padding: 5px;
    display: inline-block;

}
.style_intro {
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 15px;
  margin-top: 35px;
}
</style>
