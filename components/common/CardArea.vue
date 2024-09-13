

<script setup>

import card_img_1 from "~/assets/img/card/card-bg.png";
import card_img_2 from "~/assets/img/card/card-shape-1.png";
import card_img_3 from "~/assets/img/card/card-img-1.png";
import card_img_4 from "~/assets/img/card/card-img-2.png";
import card_img_5 from "~/assets/img/card/card-img-3.png";
import card_img_6 from "~/assets/img/card/card-img-4.png";


const card_content = {
  card_images: [
    {
      id: 1,
      cls: "main-img",
      data_parallax: "",
      img: card_img_1,
    },
    {
      id: 2,
      cls: "img-1 d-none d-sm-block",
      data_parallax: "",
      img: card_img_2,
    },
    {
      id: 3,
      cls: "img-2 d-none d-sm-block",
      data_parallax: '{"x": 50, "smoothness": 30}',
      img: card_img_3,
    },
    {
      id: 4,
      cls: "img-3 d-none d-sm-block",
      data_parallax: '{"x": -50, "smoothness": 30}',
      img: card_img_4,
    },
    {
      id: 5,
      cls: "img-4 d-none d-sm-block",
      data_parallax: "",
      img: card_img_5,
    },
    {
      id: 6,
      cls: "img-5 d-none d-sm-block",
      data_parallax: "",
      img: card_img_6,
    },
  ],

  title: "Ready <span>to transform</span> your digital strategy",
  description: "Contact us today to discuss your project and discover how Innovate Experts can help you achieve your goals. Let's innovate together!",
  btn_text: "Contact Us Now",
}
const { card_images, title, description, btn_text } = card_content

const props = defineProps({
  style_service: Boolean,
})

</script>

<template>
  <!-- tp-card-area-start -->
  <div :class="`tp-card-area tp-card-space ${style_service ? 'pt-100 pb-175' : 'pt-105 pb-185'}`">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
          <div class="tp-card-thumb-wrapper p-relative">

            <div v-for="(item, i) in card_images" :key="i" :class="`tp-card-${item.cls}`"
              :data-parallax="item.data_parallax">
              <img :src="item.img" alt="image-here">
            </div>

          </div>

        </div>
        <div class="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
          <div class="tp-card-title-box">
            <h5 class="tp-section-title pb-15" v-html="title"></h5>
            <p v-html="description"></p>
            <NuxtLink :class="`${style_service ? 'tp-btn-inner' : 'tp-btn-blue-lg'} tp-btn-hover alt-color-black`"
              to="/service-details">
              <span>{{ btn_text }}</span>
              <b></b>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-card-area-end -->
</template>
 