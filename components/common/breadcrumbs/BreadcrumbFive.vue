

<script setup>

import shape_1 from "~/assets/img/breadcrumb/breadcrumb-shape-1.png";
import shape_2 from "~/assets/img/breadcrumb/breadcrumb-shape-2.png";



// breadcrumb our_service data
const our_service = [
  {
    id: 1,
    cls: "space-left-1",
    title: "CLIENT",
    description: `Microsoft App Holing Ltd, <br /> Australia Area`,
  },
  {
    id: 2,
    cls: "space-left-2",
    title: "Services",
    description: `October 23th, 2022 <br /> Release Started`,
  },
  {
    id: 3,
    cls: "space-left-3",
    title: "Project Date",
    description: `October 23th, 2022 <br /> Release Started`,
  },

]

onMounted(() => {
  useCharAnimation();
})

</script>




<template>
  <!-- breadcrumb-area-start -->
  <div class="breadcrumb__area breadcrumb-height-3 p-relative blue-bg-2 fix">
    <div class="breadcrumb__shape-1">
      <img :src="shape_1" alt="image-here">
    </div>
    <div class="breadcrumb__shape-2">
      <img :src="shape_2" alt="image-here">
    </div>
    <div class="container">
      <div class="breadcrumb__content-wrap">
        <div class="row justify-content-center">
          <div class="col-xl-12">
            <div class="breadcrumb__content z-index-3 mb-60">
              <div class="breadcrumb__text wow tpfadeIn" data-wow-duration=".9s" data-wow-delay=".6s">
                <span>Development, App Design</span>
              </div>
              <h3 class="breadcrumb__title tp-char-animation">Mobile App Design</h3>
            </div>
          </div>
        </div>
        <div class="row g-0 z-index-3">



          <div v-for="(item, i)  in our_service" :key="i" class="col-xl-3 col-lg-3 col-md-6 mb-40 pd-border-right">
            <div :class="`breadcrumb__client-info space-left-${item.id}`">
              <span>{{ item.title }}</span>
              <p v-html="item.description"></p>
            </div>
          </div>

          <div class="col-xl-3 col-lg-3 col-md-6 mb-40 pd-border-right">
            <div class="breadcrumb__client-info space-left-4">
              <span>Project Date</span>
              <div class="breadcrumb__live-btn">
                <a class="tp-btn-inner-border" href="#">See live <i class="fal fa-arrow-up"></i></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <!-- breadcrumb-area-end -->


  <!-- project-img-area-start -->
  <div class="pd-thumb-area">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="pd-thumb">
            <img :src="thumb_img" alt="image-here">
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- project-img-area-end -->
</template>

 