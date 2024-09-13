
<script setup>


import integration_img_1 from "~/assets/img/feature/fea-circle-5-1.png";
import integration_img_2 from "~/assets/img/feature/fea-circle-5-2.png";
import integration_img_3 from "~/assets/img/feature/fea-circle-5-3.png";
import integration_img_4 from "~/assets/img/feature/fea-circle-5-4.png";
import integration_img_5 from "~/assets/img/feature/fea-circle-5-5.png";
import integration_img_6 from "~/assets/img/feature/fea-circle-5-6.png";
import integration_img_7 from "~/assets/img/feature/fea-circle-5-7.png";
import integration_img_8 from "~/assets/img/feature/fea-circle-5-8.png";
import integration_img_9 from "~/assets/img/feature/fea-circle-5-9.png";
import integration_img_10 from "~/assets/img/feature/fea-circle-5-10.png";
import integration_img_11 from "~/assets/img/feature/fea-circle-5-11.png";
import integration_img_12 from "~/assets/img/feature/fea-circle-5-12.png";
import integration_img_13 from "~/assets/img/feature/fea-circle-5-13.png";
import integration_img_14 from "~/assets/img/feature/fea-circle-5-14.png";


const integration_content = {
  title: "<span>Featured</span> <br /> In all Over the World",
  des: "WP ERP has been already featured in many resourceful and <br /> popular media all over the world.",

  integration_img: [
    { id: 1, img: integration_img_1, cls: "1 d-none d-lg-block" },
    { id: 2, img: integration_img_2, cls: "2 d-none d-lg-block" },
    { id: 3, img: integration_img_3, cls: "3 d-none d-lg-block" },
    { id: 4, img: integration_img_4, cls: "4 d-none d-lg-block" },
    { id: 5, img: integration_img_5, cls: "5 d-none d-lg-block" },
    { id: 6, img: integration_img_6, cls: "6 d-none d-lg-block" },
    { id: 7, img: integration_img_7, cls: "7 d-none d-lg-block" },
    { id: 8, img: integration_img_8, cls: "8 d-none d-lg-block" },
    { id: 9, img: integration_img_9, cls: "9 d-none d-lg-block" },
    { id: 10, img: integration_img_10, cls: "10 d-none d-lg-block" },
    { id: 11, img: integration_img_11, cls: "11" },
    { id: 12, img: integration_img_12, cls: "12" },
    { id: 13, img: integration_img_13, cls: "13" },
    { id: 14, img: integration_img_14, cls: "14" },
  ]
}
const { title, des, integration_img } = integration_content


</script>



<template>
  <!-- tp-integration-area-start -->
  <div class="tp-intigration-area tp-intigration-five-space fix">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="tp-intigration-five-wrapper p-relative">
            <div class="tp-intigration-five-section-box text-center">
              <h3 class="tp-section-title-5 pb-10 text-black" v-html="title"> </h3>
              <p v-html="des"></p>
              <div class="tp-intigration-five-btn">
                <NuxtLink class="tp-btn-blue-lg purple-bg circle-effect-black" to="/service-details">Explore All</NuxtLink>
              </div>
            </div>

            <div 
            v-for="(item, i) in integration_img" :key="i"
            :class="`tp-intigration-five-circle-img-${item.cls}`">
              <img :src="item.img" alt="image-here">
            </div> 

          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-integration-area-end -->
</template>

 