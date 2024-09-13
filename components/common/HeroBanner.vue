
<script setup>

const props = defineProps({
  bg_img: String,
  title: String,
  innerTitle: String,
});

</script>



<template>
  <!-- tp-breadcrumb-header-area-start -->
  <div class="about-img-area mb-100 z-index-3">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="about-img about-img-height p-relative" :style="{ backgroundImage: `url(${bg_img})` }">
            <div class="about-img-content">
              <h4 class="about-img-title">
                <span>{{ title }}</span> <br />
                <span>{{ innerTitle }}</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-breadcrumb-header-area-end -->
</template>
 