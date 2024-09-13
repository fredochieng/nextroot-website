
<script setup>
import img_1 from "~/assets/img/about/about-4-3.png";
import img_2 from "~/assets/img/about/about-4-1.png";
import img_3 from "~/assets/img/about/about-4-2.png";

// about content here
const about_content = {
  sub_title: "Who we are",
  title: "Confidence in Your Security",
  des: "These cyberattacks are usually aimed at accessing, changing,or destroying sensitive information normal business processes.!",
  feature_1: "High-Performance <br /> Solutions",
  feature_2: "Best Cyber Security <br /> Solutions.",
  btn_text: "About Us",
}

const { sub_title, title, des, feature_1, feature_2, btn_text } = about_content

</script>



<template>
  <!-- tp-about-area-start -->
  <div class="tp-about-area pb-135 blue-bg p-relative">
    <div class="tp-about-top-img-2">
      <img :src="img_1" alt="image-here">
    </div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
          <div class="tp-about-left-img text-md-center p-relative text-start z-index">
            <img :src="img_2" alt="image-here">
            <div class="tp-about-top-img">
              <img :src="img_3" alt="image-here">
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
          <div class="tp-security-section-wrapper">
            <div class="tp-security-section-box mb-45">
              <h5 class="tp-section-subtitle-4 pb-10">{{ sub_title }}</h5>
              <h3 class="tp-section-title-4 pb-25">{{ title }}</h3>
              <p>{{ des }}</p>
            </div>
            <div class="tp-security-feature">
              <ul>
                <li><i class="far fa-check"></i> <span v-html="feature_1"></span></li>
                <li><i class="far fa-check"></i> <span v-html="feature_2"></span></li> 
              </ul>
            </div>
            <div class="tp-security-btn">
              <NuxtLink class="tp-btn-yellow-border" to="/about">About Us <i class="far fa-angle-right"></i></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-about-area-end -->
</template>

 