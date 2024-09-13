

<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Navigation} from "swiper/modules";


import brand_img_1 from "~/assets/img/hero/hero-slider-icon-2.jpg";
import brand_img_2 from "~/assets/img/hero/hero-slider-icon-3.jpg";
import brand_img_3 from "~/assets/img/hero/hero-slider-icon-4.jpg";
import brand_img_4 from "~/assets/img/hero/hero-slider-icon-5.jpg";
import brand_img_5 from "~/assets/img/hero/hero-slider-icon-3.jpg";
import shape_1 from "~/assets/img/brand/image_01.png";
import shape_2 from "~/assets/img/hero/hero-slider-icon-1.jpg";

 

const brand_data = [
  brand_img_1,
  brand_img_2,
  brand_img_3,
  brand_img_4,
  brand_img_5,
]

</script>


<template>
  <!-- tp-brand-area-start -->
  <div class="tp-barnd-area tp-barnd-plr blue-bg z-index-3 fix">
    <div class="tp-barnd-main-wrapper p-relative">
      <div class="tp-barnd-shape-1">
        <img src="~/assets/img/brand/image_01.png" alt="image-here">
      </div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-4 col-lg-4">
            <div class="tp-barnd-left-item d-flex align-items-center">
              <div class="tp-barnd-icon">
                <img src="~/assets/img/hero/hero-slider-icon-1.jpg" alt="image-here">
              </div>
              <h5 class="tp-barnd-title-sm">2k Companies <br /> Trusted in the world</h5>
            </div>
          </div>
          <div class="col-xl-8 col-lg-8">
            <div class="tp-barnd-slider-wrapper">

              <button type="button" class="slick-prev slick-arrow" style=""><i class="fal fa-angle-left"></i></button>
              <button type="button" class="slick-next slick-arrow" style=""><i class="fal fa-angle-right"></i></button>

              <Swiper 
              :loop="true" 
              :slidesPerView="4" 
              :space-between="10" 
              :modules="[Navigation]"
              :navigation="{
                nextEl: '.slick-next',
                prevEl: '.slick-prev',
              }"
              :breakpoints="{
                '1400': {
                  slidesPerView: 4,
                },
                '1200': {
                  slidesPerView: 3,
                },
                '992': {
                  slidesPerView: 3,
                },
                '768': {
                  slidesPerView: 3,
                },
                '480': {
                  slidesPerView: 1,
                },
                '320': {
                  slidesPerView: 1,
                },
                '0': {
                  slidesPerView: 1,
                },
              }"
              class="tp-barnd-slider-active p-relative">               
                <SwiperSlide v-for="(item, i) in brand_data" :key="i" class="tp-brand-item">
                  <img :src="item" alt="image-here">
                </SwiperSlide> 

              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-brand-area-end -->
</template>
 