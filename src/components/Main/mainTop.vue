<template>
  <div class="">
    <img src="../../assets/temporyPic/Index/banner0803.jpg" class="img-responsive">
    <div class="maginAuto">
      <div class="row">
        <router-link to="/Product/1">
        <div class="col-md-3 col-xs-6 padding5">
          <img src="../../assets/temporyPic/Index/floor.jpg" class="img-responsive imgHover">
        </div>
        </router-link>
        <router-link to="/Product/2">
        <div class="col-md-3 col-xs-6 padding5">
          <img src="../../assets/temporyPic/Index/led_lighting.jpg" class="img-responsive imgHover">
        </div>
        </router-link>
        <router-link to="/Product/8">
        <div class="col-md-3 col-xs-6 padding5">
          <img src="../../assets/temporyPic/Index/wallpaper2.jpg" class="img-responsive imgHover">
        </div>
        </router-link>
        <router-link to="/Product/3">
        <div class="col-md-3 col-xs-6 padding5">
          <img src="../../assets/temporyPic/Index/samll7.jpg" class="img-responsive imgHover">
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {}

</script>
<style>
.padding5 {
  padding: 10px 5px;
}

@media (max-width:768px) {
  .maginAuto {
    margin-left: auto;
    margin-right: auto;
    padding-right: 15px;
    padding-left: 15px;
  }
}

</style>
