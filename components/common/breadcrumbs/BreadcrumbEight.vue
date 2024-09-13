
<script setup>

// shape import 
import shape_1 from "~/assets/img/breadcrumb/breadcrumb-shape-1.png";
import shape_2 from "~/assets/img/breadcrumb/breadcrumb-shape-2.png";

onMounted(() => {
  useCharAnimation();
})


</script>



<template>
  <!-- breadcrumb-area-start -->
  <div class="breadcrumb__area breadcrumb-ptb-5 p-relative blue-bg-2">
    <div class="breadcrumb__shape-1">
      <img :src="shape_1" alt="image-here">
    </div>
    <div class="breadcrumb__shape-2">
      <img :src="shape_2" alt="image-here">
    </div>
    <div class="container">
      <div class="row align-items-end">
        <div class="col-xl-9 col-lg-7 col-md-7">
          <div class="price-banner z-index-3">
            <div class="price-banner-title-box">
              <h3 class="price-banner-title tp-char-animation">Pricing plans</h3>
              <p>Clear, affordable plans for every team and requirement.</p>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-5 col-md-5">
          <div class="tp-price__btn-box tp-price__btn-inner">
            <div class="tp-price__btn-line d-none d-md-block">
              <svg width="56" height="58" viewBox="0 0 56 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.164835 56.549C40.9814 63.3663 32.9699 -14.7417 50.2037 30.0803C67.4374 74.9024 -21.1494 2.27453 55.6761 0.848635"
                  stroke="white" stroke-dasharray="3 3" />
              </svg>
            </div>
            <div class="tp-price__btn-offer-tag d-none d-md-block">
              <span>SAVE <br> 35%</span>
            </div>
            <nav>
              <div class="nav nav-tab tp-price__btn-bg" id="nav-tab" role="tablist">
                <button class="nav-link active monthly" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                  type="button" role="tab" aria-controls="nav-home" aria-selected="true">Monthly</button>
                <button class="nav-link yearly" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                  type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Yearly</button>
                <span class="test"></span>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- breadcrumb-area-end -->
</template>
 