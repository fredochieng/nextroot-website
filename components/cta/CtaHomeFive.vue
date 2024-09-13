
<script setup>

import plan_img_1 from "~/assets/img/plan/plan-1.png"
import plan_img_2 from "~/assets/img/plan/plan-2.png"
import plan_img_3 from "~/assets/img/plan/plan-3.png"
import plan_img_4 from "~/assets/img/plan/plan-4.png"
import plan_img_5 from "~/assets/img/plan/plan-5.png"
import plan_img_6 from "~/assets/img/plan/plan-6.png"

import img from "~/assets/img/cta/cta-title-icon-1.png";

const cta_content = {
  img_box: [
    { id: 1, img: plan_img_1, cls: "1", },
    { id: 2, img: plan_img_2, cls: "2 d-none d-sm-block", },
    { id: 3, img: plan_img_3, cls: "3 d-none d-sm-block", },
    { id: 4, img: plan_img_4, cls: "4", },
    { id: 5, img: plan_img_5, cls: "5", },
    { id: 6, img: plan_img_6, cls: "6", },
  ],
  sub_title: "What we Offer",
  title: "<span>Enterprise</span><br />Resource Planning.",
  des: "Simple and intuitive time tracking. Run the tracker or <br />enter your times manually.",
  feature_list: [
    "Billable",
    "Manual time entries",
    "Services",
  ]

}
const { img_box, sub_title, title, des, feature_list } = cta_content
</script>


<template>
  <!-- tp-cta-area-start -->
  <div class="tp-plan-area tp-plan-space">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-7 col-lg-7 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
          <div class="tp-plan-img-box p-relative">
            <div v-for="(item, i) in img_box" :key="i" :class="`tp-plan-img-${item.cls}`">
              <img :src="item.img" alt="image-here">
            </div>
          </div>
        </div>
        <div class="col-xl-5 col-lg-5 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
          <div class="tp-plan-section-box">
            <div class="tp-plan-section-icon pb-30">
              <img :src="img" alt="image-here">
            </div>
            <span class="tp-section-subtitle-5 text-black">{{ sub_title }}</span>
            <h3 class="tp-section-title-5 text-black pb-15" v-html="title"></h3>
            <p class=" mb-0 pb-30" v-html="des"></p>
            <div class="tp-plan-feature">
              <ul>
                <li v-for="(feature, i) in feature_list" :key="i"><i class="far fa-check"></i>{{ feature }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-cta-area-end -->
</template>

 