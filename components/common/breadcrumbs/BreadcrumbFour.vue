
<script setup>
// import bg_img from "~/assets/img/project/project-brdcrmb-bg.jpg";

// spahe import here 
import shape_1 from "~/assets/img/breadcrumb/breadcrumb-shape-2-2.png";
import shape_2 from "~/assets/img/breadcrumb/breadcrumb-sub-2.png";
import shape_3 from "~/assets/img/breadcrumb/breadcrumb-sub-3.png";

onMounted(() => {
  useCharAnimation();
})

 
</script>



<template>
  <!-- breadcrumb-area-start -->
  <div class="breadcrumb__area breadcrumb-height-2 breadcrumb-overlay p-relative fix" :style="{backgroundImage: `url(${bg_img})`}">
    <div class="breadcrumb__shape-2 z-index-4">
      <img :src="shape_1" alt="image-here">
    </div>
    <div class="breadcrumb__shape-3 z-index-4">
      <img :src="shape_2" alt="image-here">
    </div>
    <div class="breadcrumb__shape-4 z-index-4">
      <img :src="shape_3" alt="image-here">
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-10">
          <div class="breadcrumb__content z-index-3 text-center">
            <h3 class="breadcrumb__title tp-char-animation text-black">Our Projects</h3>
            <div class="breadcrumb__text wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".6s">
              <p>We have an experienced team of production and inspection personnel <br> to ensure
                quality</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- breadcrumb-area-end -->
</template>

 