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
            <div class="tp-cta-content tp-inner-font text-center">
              <h3 class="tp-section-title text-white">Ready to elevate your business?</h3>
              <p>Don't hesitate. Contact Us today and let's create something exceptional together by bringing ideas into life. Your success story begins here.</p>
              <NuxtLink class="tp-btn-inner white-bg text-black" to="/contact">
                Contact Us Now
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-cta-area-end -->
</template>

 