
<script setup>

import feature_img_1 from "~/assets/img/feature/fea-icon-5-1.png"
import feature_img_2 from "~/assets/img/feature/fea-icon-5-2.png"
import feature_img_3 from "~/assets/img/feature/fea-icon-5-3.png"
import feature_img_4 from "~/assets/img/feature/fea-icon-5-4.png"

const feature_data = [
  {
    id: 1,
    color: "1",
    img: feature_img_1,
    title: "Hubspot <br /> Contacts Sync",
    description: "Transfer contacts information <br /> between MailChimp",

  },
  {
    id: 2,
    color: "2",
    img: feature_img_2,
    title: "Mailchimp <br /> Contacts Sync",
    description: "Transfer contacts information <br /> between MailChimp",

  },
  {
    id: 3,
    color: "3",
    img: feature_img_3,
    title: "Salesforce <br /> Contacts Sync",
    description: "Transfer contacts information <br /> between MailChimp",

  },
  {
    id: 4,
    color: "4",
    img: feature_img_4,
    title: "Zendesk <br /> Contacts Sync",
    description: "Transfer contacts information <br /> between MailChimp",

  },
]


const feature_content = {
  title: `About Customer <span>Stories</span>`,
  des: `Take your business to the next level with <span>09</span> accessible premium  extensions <br /> & different features`,
  integraton_title: "What you will get",
  integraton_des: `Take your business to the next level with  <span> 09</span> accessible premium  extensions <br /> & different features`,
}
const { title, des, integraton_title, integraton_des } = feature_content


const props = defineProps({
  style_2: Boolean,
})

</script>


<template>
  <!-- tp-feature-area-start -->
  <div :class="`tp-feature-area ${style_2 ? 'pt-100 pb-30' : 'grey-bg-3 pt-120 pb-110'}`">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="tp-feature-five-section-box text-center mb-40">

            <template v-if="!style_2">
              <h3 class="tp-section-title-5 text-black" v-html="title"></h3>
              <p v-html="des"></p>
            </template>

            <template v-if="style_2">
              <h3 class="tp-section-title-5 text-black">
                <span>{{ integraton_title }}</span>
              </h3>
              <p v-html="integraton_des"></p>
            </template>

          </div>
        </div>
      </div>
      <div class="row gx-0 tp-feature-five-wrapper-main">

        <div v-for="(item, i) in feature_data" :key="i" class="col-xl-3 col-lg-6 col-md-6">
          <div class="tp-feature-five-wrapper">
            <div :class="`tp-feature-five-item tp-feature-five-item-${item.color} text-center z-index`">
              <div class="tp-feature-five-icon p-relative">
                <img :src="item.img" alt="image-here">
                <div :class="`tp-feature-five-shape-color tp-feature-five-shape-color-${item.color}`"></div>
              </div>
              <div class="tp-feature-five-content">
                <h4 class="tp-feature-five-title-sm" v-html="item.title"></h4>
                <p v-html="item.description"></p>
              </div>
              <div class="tp-feature-five-btn">
                <NuxtLink class="tp-btn-purple" to="/service-details">Learn More</NuxtLink>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="row" v-if="!style_2">
        <div class="col-12">
          <div class="tp-feature-five-link text-center">
            <span>Check out all of our <NuxtLink to="/service-details">All features</NuxtLink></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-feature-area-end -->
</template>

 