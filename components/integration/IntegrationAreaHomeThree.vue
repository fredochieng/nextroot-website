
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

import bg_img from "~/assets/img/integration/integration-bg.jpg";


// slider img import here
import slider_img_1_1 from "~/assets/img/integration/integration-1.png";
import slider_img_1_2 from "~/assets/img/integration/integration-2.png";
import slider_img_1_3 from "~/assets/img/integration/integration-3.png";
import slider_img_1_4 from "~/assets/img/integration/integration-4.png";
import slider_img_2_1 from "~/assets/img/integration/integration-5.png";
import slider_img_2_2 from "~/assets/img/integration/integration-6.png";
import slider_img_2_3 from "~/assets/img/integration/integration-7.png";
import slider_img_2_4 from "~/assets/img/integration/integration-8.png";




const slider_one_data = [
  slider_img_1_1,
  slider_img_1_2,
  slider_img_1_3,
  slider_img_1_4,
]
const slider_two_data = [
  slider_img_2_1,
  slider_img_2_2,
  slider_img_2_3,
  slider_img_2_4,
]


const integration_content ={
    sub_title: "Integration",
    title: `Integrated with Your <span>Favourite Apps</span>`,
    int_title: `Integrated with Your Favourite Apps`, 
}
const {sub_title, title, int_title}  = integration_content



const props = defineProps({
  style_2: Boolean,
})



</script>

<template>
  <!-- tp-integration-area-start -->
  <div class="tp-integration-area pb-110 tp-integration-mlr">
    <div class="container">
      <div class="row align-items-end tp-integration-section-space">
        <div class="col-xl-6 col-lg-8 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
          <div class="tp-integration-section-box"> 
           
            <template v-if="style_2">
              <h5 className="tp-integration-subtitle">{{sub_title}}</h5>
              <h3 className="tp-section-title-3">{{int_title}}</h3>
            </template>
            
            <template v-if="!style_2">
              <h5 className="tp-integration-subtitle">{{sub_title}}</h5>
              <h3 className="tp-section-title-3" v-html="title"></h3>
            </template>
           


          </div>
        </div>
        <div class="col-xl-6 col-lg-4 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
          <div class="tp-integration-btn text-lg-end text-start">
            <NuxtLink class="tp-btn-blue-lg tp-btn-hover alt-color-black" to="/integrations">
              <span>See all Integrations</span>
              <b></b>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="tp-integration-slider-wrapper pt-50 pb-50" :style="{ backgroundImage: `url(${bg_img})` }">

      <Swiper 
      :loop="true"
      :speed=12000  
      :autoplaySpeed='0'
      :centerMode='true'
      :modules="[Autoplay]"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }" 
      :slidesToShow=3
        :slidesToScroll=1 :variableWidth=true :infinite=true :initialSlide=1 :arrows=false :buttons=false
        :slidesPerView="3" :space-between="30" class="tp-integration-slider-active">

        <SwiperSlide v-for="(item, i) in slider_one_data" :key="i" class="tp-integration-slider-main">
          <div class="tp-integration-slider-item">
            <img :src="item" alt="image-here">
          </div>
        </SwiperSlide>

      </Swiper>

      <Swiper 
      :speed=12000  
      :slidesPerView="3" 
      :space-between="30" 
      :loop="true"
      :modules="[Autoplay]"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      class="tp-integration-slider-active-2 carousel-rtl" dir="rtl">

        <SwiperSlide v-for="(item, i) in slider_two_data" :key="i" class="tp-integration-slider-main">
          <div class="tp-integration-slider-item">
            <img :src="item" alt="image-here">
          </div>
        </SwiperSlide>
 
      </Swiper>

    </div>
  </div>
  <!-- tp-integration-area-end -->
</template>

 