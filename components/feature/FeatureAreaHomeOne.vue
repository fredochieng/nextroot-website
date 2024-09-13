

<script setup>

// icon import 
import icon_1 from "~/assets/img/feature/fea-icon-1.png";
import icon_2 from "~/assets/img/feature/fea-icon-2.png";
import icon_3 from "~/assets/img/feature/fea-icon-3.png";
import feature_bottom_shape from "~/assets/img/feature/fea-bg-shape-1.png";

// feature data
const feature_data = [
  {
    id: 1,
    img: icon_1,
    title: "A Unified View of The Customer",
    delay: ".4s",
  },
  {
    id: 2,
    img: icon_2,
    title: "Industry Leading Procedures",
    delay: ".6s",
  },
  {
    id: 3,
    img: icon_3,
    title: "Collaboration Across <br /> All Areas",
    delay: ".8s",
  },
]

</script>


<template>
  <!-- tp-feature-area-start -->
  <div class="tp-feature__area tp-feature__pt-pb pt-165 pb-170 p-relative">
    <div class="tp-feature__bottom-shape">
      <img :src="feature_bottom_shape" alt="image-here">
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".2s">
          <div class="tp-feature__section-box text-center mb-55 tp-title-anim">
            <h2 class="tp-section-title tp_title_anim d-flex justify-content-center">Our Exciting Features</h2>
            <p>More than 15,000 companies trust and choose Itech</p>
          </div>
        </div>
      </div>
      <div class="row">

        <div v-for="(item, i) in feature_data" :key="i" class="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp"
          data-wow-duration=".9s" :data-wow-delay="item.delay">
          <div id="divtest" class="tp-feature__item">
            <div class="tp-feature__icon">
              <img :src="item.img" alt="image-here">
            </div>
            <h3 class="tp-feature__title-sm" v-html="item.title"></h3>
            <div class="tp-feature__link">
              <NuxtLink to="/service-details">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.00098 7H13.001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M7.00098 1L13.001 7L7.00098 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  <!-- tp-feature-area-end -->
</template>
 