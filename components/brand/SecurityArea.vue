

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';


import security_img_1 from "~/assets/img/security/security-1.png";
import security_img_2 from "~/assets/img/security/security-2.png";
import security_img_3 from "~/assets/img/security/security-3.png";
import security_img_4 from "~/assets/img/security/security-4.png";
// import security_img_5 from "~/assets/img/security/security-5.png";
import security_img_6 from "~/assets/img/security/security-3.png"; 

// const setting = {
//   speed: 7000,
//   autoplay: true,
//   autoplaySpeed: 0,
//   centerMode: true,
//   cssEase: 'linear',
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   variableWidth: true,
//   infinite: true,
//   initialSlide: 1,
//   arrows: false,
//   buttons: false,
//   focusOnSelect: true,
//   pauseOnHover: true,
//   responsive: [
//     {
//       breakpoint: 1200,
//       settings: {
//       }
//     },
//     {
//       breakpoint: 992,
//       settings: {
//       }
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//       }
//     }
//   ]
// }

const settings = {
  speed: 7000,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  centerMode: true,
  cssMode: true, // Use CSS transitions
  slidesPerView: 1,
  spaceBetween: 0,
  variableWidth: true,
  loop: true,
  initialSlide: 1,
  navigation: {
    nextEl: null, // No arrows
    prevEl: null,
  },
  pagination: {
    clickable: true,
  },
  breakpoints: {
    1200: {},
    992: {},
    768: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
  },
};


// security data
const security_data = [
  {
    id: 1,
    img: security_img_1,
    title: `Business <br /> Security`,
  },
  {
    id: 2,
    img: security_img_2,
    title: `Logistics <br /> Security`,
  },
  {
    id: 3,
    img: security_img_3,
    title: `Education <br /> Security`,
  },
  {
    id: 4,
    img: security_img_4,
    title: `Food <br /> & Beverage`,
  },
  {
    id: 5,
    img: security_img_1,
    title: `Media & <br /> Entertainment`,
  },
  {
    id: 6,
    img: security_img_6,
    title: `Business <br /> Security`,
  },
]

</script>



<template>
  <!-- tp-Security-area-end -->
  <div class="tp-security-area blue-bg pb-180 fix z-index">
    <div class="container-fluid g-0">
      <div class="row justify-content-center">
        <div class="col-xl-8">
          <div class="tp-security-section-box text-center pb-100">
            <h5 class="tp-section-subtitle-4 both pb-10 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">Explore
              Our Level</h5>
            <h3 class="tp-section-title-4">Security by Industry</h3>
          </div>
        </div>
      </div>
      <div class="tp-security-slider-wrapper wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
        <Swiper 
        :speed="700"
        :autoplay="true"
        :autoplaySpeed="0"
        :centerMode="true"
        :cssEase="'linear'"
        :slidesToShow="1"
        :slidesToScroll="1"
        :variableWidth="true"
        :infinite="true"
        :initialSlide="1"
        :arrows="false"
        :buttons="false"
        :focusOnSelect="true"
        :pauseOnHover="true"
        :slidesPerView="5"
        :breakpoints="{
          '1600': {
            slidesPerView: 5,
          },
          '1400': {
            slidesPerView: 4,
          },
          '1200': {
            slidesPerView: 4,
          },
          '992': {
            slidesPerView: 3,
          },
          '768': {
            slidesPerView: 2,
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

        class="tp-security-slider-active">

          <SwiperSlide v-for="(item, i) in security_data" :key="i" class="tp-security-main">
            <div id="slideshow" class="tp-security-wrapper d-flex align-items-center justify-content-between">
              <div class="tp-security-item d-flex align-items-center">
                <div class="tp-security-img">
                  <img :src="item.img" alt="image-here">
                </div>
                <div class="tp-security-content">
                  <h4 class="tp-security-title-sm" v-html="item.title"></h4>
                </div>
              </div>
              <div class="tp-security-link">
                <a href="#">
                  <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 17.0112L9 9.01123L1 1.01123" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </SwiperSlide>


          <!-- <div class="tp-security-main">
            <div id="slideshow" class="tp-security-wrapper d-flex align-items-center justify-content-between">
              <div class="tp-security-item d-flex align-items-center">
                <div class="tp-security-img">
                  <img src="~/assets/img/security/security-1.png" alt="image-here">
                </div>
                <div class="tp-security-content">
                  <h4 class="tp-security-title-sm">Business <br> Security</h4>
                </div>
              </div>
              <div class="tp-security-link">
                <a href="#">
                  <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 17.0112L9 9.01123L1 1.01123" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="tp-security-main">
            <div class="tp-security-wrapper d-flex align-items-center justify-content-between">
              <div class="tp-security-item d-flex align-items-center">
                <div class="tp-security-img">
                  <img src="~/assets/img/security/security-2.png" alt="image-here">
                </div>
                <div class="tp-security-content">
                  <h4 class="tp-security-title-sm">Logistics <br> Security</h4>
                </div>
              </div>
              <div class="tp-security-link">
                <a href="#">
                  <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 17.0112L9 9.01123L1 1.01123" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="tp-security-main">
            <div class="tp-security-wrapper d-flex align-items-center justify-content-between">
              <div class="tp-security-item d-flex align-items-center">
                <div class="tp-security-img">
                  <img src="~/assets/img/security/security-3.png" alt="image-here">
                </div>
                <div class="tp-security-content">
                  <h4 class="tp-security-title-sm">Education <br> Security</h4>
                </div>
              </div>
              <div class="tp-security-link">
                <a href="#">
                  <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 17.0112L9 9.01123L1 1.01123" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="tp-security-main">
            <div class="tp-security-wrapper d-flex align-items-center justify-content-between">
              <div class="tp-security-item d-flex align-items-center">
                <div class="tp-security-img">
                  <img src="~/assets/img/security/security-4.png" alt="image-here">
                </div>
                <div class="tp-security-content">
                  <h4 class="tp-security-title-sm">Food <br> & Beverage</h4>
                </div>
              </div>
              <div class="tp-security-link">
                <a href="#">
                  <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 17.0112L9 9.01123L1 1.01123" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="tp-security-main">
            <div class="tp-security-wrapper d-flex align-items-center justify-content-between">
              <div class="tp-security-item d-flex align-items-center">
                <div class="tp-security-img">
                  <img src="~/assets/img/security/security-5.png" alt="image-here">
                </div>
                <div class="tp-security-content">
                  <h4 class="tp-security-title-sm">Media & <br> Entertainment</h4>
                </div>
              </div>
              <div class="tp-security-link">
                <a href="#">
                  <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 17.0112L9 9.01123L1 1.01123" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="tp-security-main">
            <div class="tp-security-wrapper d-flex align-items-center justify-content-between">
              <div class="tp-security-item d-flex align-items-center">
                <div class="tp-security-img">
                  <img src="~/assets/img/security/security-3.png" alt="image-here">
                </div>
                <div class="tp-security-content">
                  <h4 class="tp-security-title-sm">Business <br> Security</h4>
                </div>
              </div>
              <div class="tp-security-link">
                <a href="#">
                  <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 17.0112L9 9.01123L1 1.01123" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div> -->


        </Swiper>
      </div>
    </div>
  </div>
  <!-- tp-Security-area-end -->
</template>

 