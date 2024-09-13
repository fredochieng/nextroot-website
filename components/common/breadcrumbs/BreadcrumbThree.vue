

<script setup>

import img_1 from "~/assets/img/breadcrumb/breadcrumb-shape-1.png";
import img_2 from "~/assets/img/breadcrumb/breadcrumb-shape-2.png";
import img_3 from "~/assets/img/blog/blog-avata-1.png";
import img_4 from "~/assets/img/blog/blog-details-1.jpg";


const breadcrumb_content = {
  sub_title: "Resources",
  title: "Developing Privacy User Centric Apps",
  author_name: "Rudra Ghosh",
  author_info: "CEO Dulalix  •   April 24,",

}
const { sub_title, title, author_name, author_info } = breadcrumb_content



</script>



<template>
  <!-- breadcrumb-area-start -->
  <div class="breadcrumb__area breadcrumb-ptb-4 p-relative blue-bg-2">
    <div class="breadcrumb__shape-1">
      <img :src="img_1" alt="image-here">
    </div>
    <div class="breadcrumb__shape-2">
      <img :src="img_2" alt="image-here">
    </div>
    <div class="container">
      <div class="row align-items-end">
        <div class="col-xl-9 col-lg-9 col-md-9">
          <div class="blog-details-banner z-index-2">
            <div class="blog-details-title-box">
              <span>{{ sub_title }}</span>
              <h3 class="blog-details-banner-title">{{ title }}</h3>
            </div>
            <div class="tp-blog-author-info-box d-flex align-items-center">
              <div class="tp-blog-avata">
                <img :src="img_3" alt="image-here">
              </div>
              <div class="tp-blog-author-info">
                <h5>{{ author_name }}</h5>
                <span>{{ author_info }} {{ new Date().getFullYear() }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-3">
          <div class="blog-details-social-box z-index-3 text-md-end text-start">
            <NuxtLink target="_blank" to="http://facebook.com"><i class="fab fa-facebook-f"></i></NuxtLink>
            <NuxtLink target="_blank" to="http://twitter.com"><i class="fab fa-twitter"></i></NuxtLink>
            <NuxtLink target="_blank" to="http://linkedin.com"><i class="fab fa-linkedin-in"></i></NuxtLink>
            <NuxtLink target="_blank" to="http://vimeo.com"><i class="fab fa-vimeo-v"></i></NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- breadcrumb-area-end -->

  <!-- breadcrumb-banner-start -->
  <div class="blog-details-img-area mb-80">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="blog-details-big-img z-index-2">
            <img :src="img_4" alt="image-here">
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- breadcrumb-banner-end -->
</template>

 