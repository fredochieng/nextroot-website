
<script setup>

import bg_img from '~/assets/img/cta/cta-bg-5-1.png';


</script>

<template>
  <!-- tp-cta-area-start -->
  <div class="tp-cta-area pt-120 pb-120 mb-120 tp-cta-five-bg p-relative" :style="{ backgroundImage: `url(${bg_img})` }">
    <div class="tp-cta-five-shape-1 d-none d-md-block">
      <img src="~/assets/img/cta/cta-shape-5-1.png" alt="image-here">
    </div>
    <div class="tp-cta-five-shape-2 d-none d-md-block">
      <img src="~/assets/img/cta/cta-shape-5-2.png" alt="image-here">
    </div>
    <div class="container-fluid g-0">
      <div class="row g-0">
        <div class="col-12">
          <div class="tp-cta-five-section-box text-center">
            <span class="tp-section-subtitle-5">Having something in mind?</span>
            <h3 class="tp-section-title-5 pb-30">Supercharge Your Growing <br /> <span>Business</span> </h3>
            <div class="tp-cta-five-btn">
              <NuxtLink class="tp-btn-yellow-lg circle-effect" to="/contact">Contact Us Now</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-cta-area-end -->
</template>

 