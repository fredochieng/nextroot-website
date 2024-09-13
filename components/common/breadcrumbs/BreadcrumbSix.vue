

<script setup>

import shape_1 from "~/assets/img/breadcrumb/breadcrumb-shape-1.png";
import shape_2 from "~/assets/img/breadcrumb/breadcrumb-shape-2.png";

import img_1 from "~/assets/img/career/image-1.png";
import img_2 from "~/assets/img/career/image-2.png";
import img_3 from "~/assets/img/career/image-3.png";
import img_4 from "~/assets/img/career/image-4.png";


</script>

<template>
  <!-- breadcrumb-area-start -->
  <div class="breadcrumb__area breadcrumb-height-3 p-relative blue-bg-2 fix">
    <div class="breadcrumb__shape-1">
      <img :src="shape_1" alt="image-here">
    </div>
    <div class="breadcrumb__shape-2">
      <img :src="shape_2" alt="image-here">
    </div>
    <div class="container">
      <div class="breadcrumb__content-wrap">
        <div class="row justify-content-center">
          <div class="col-xl-12">
            <div class="breadcrumb__content text-center z-index-3 mb-60">
              <h3 class="breadcrumb__title">Build Your Career With <br> The Lemon Team</h3>
              <div class="breadcrumb__text">
                <p>Work without distraction on your own or with your team.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- breadcrumb-area-end -->


  <!-- carrer-banner-area-start -->
  <div class="carrer-banner-area carrer-banner-space">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-3 col-lg-3 col-md-6">
          <div class="carrer-banner-img-item">
            <img :src="img_1" alt="image-here">
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6">
          <div class="carrer-banner-img-item parallax-main">
            <img class="parallax-img" :src="img_2" alt="image-here" data-parallax='{"y": 300, "smoothness": 10}'>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 d-none d-lg-block">
          <div class="carrer-banner-img-item mb-20">
            <img :src="img_3" alt="image-here">
          </div>
          <div class="carrer-banner-img-item">
            <img :src="img_4" alt="image-here">
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- carrer-banner-area-end -->
</template>

 