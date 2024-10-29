
<script setup>
import bg_img from "~/assets/img/cta/cta-bg.jpg";


</script>


<template>
  <!-- tp-cta-area-start -->
  <div class="tp-cta-area p-relative">
    <div class="tp-cta-grey-bg grey-bg-2"></div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="tp-cta-bg" :style="{ backgroundImage: `url(${bg_img})` }">
            <div class="tp-cta-content text-center">
              <h3 class="tp-section-title-lg text-white">Try our service now!</h3>
              <p>Eyerything you need to accept cord payments and grow your business <br />
                anywhere on the planet.</p>
              <NuxtLink class="tp-btn-green" to="/contact">Get Started Now</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-cta-area-end -->
</template>

< 