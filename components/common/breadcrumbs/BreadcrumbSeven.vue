

<script setup>

// import shap img 
import shape_1 from "~/assets/img/breadcrumb/breadcrumb-shape-1.png";
import shape_2 from "~/assets/img/breadcrumb/breadcrumb-shape-2.png";
import shape_3 from "~/assets/img/breadcrumb/breadcrumb-4.png";

onMounted(() => {
  useCharAnimation();
})


</script>


<template>
  <!-- breadcrumb-area-start -->
  <div class="breadcrumb__area breadcrumb-ptb-3 p-relative blue-bg-2">
    <div class="breadcrumb__shape-1">
      <img :src="shape_1" alt="image-here">
    </div>
    <div class="breadcrumb__shape-2">
      <img :src="shape_2" alt="image-here">
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xl-5 col-lg-7">
          <div class="breadcrumb__content z-index-1">
            <h3 class="breadcrumb__title tp-char-animation">Integrations</h3>
            <div class="breadcrumb__list wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".4s">
              <span class="child-one"><NuxtLink to="/">Home</NuxtLink></span>
              <span class="dvdr"><i class="fal fa-angle-right"></i></span>
              <span>Integrations</span>
            </div>
          </div>
        </div>
        <div class="col-xl-7 col-lg-5 col-lg-4 text-center text-md-end">
          <div class="breadcrumb__img p-relative text-start z-index">
            <img class="z-index-3" :src="shape_3" alt="image-here">
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- breadcrumb-area-end -->
</template>

 