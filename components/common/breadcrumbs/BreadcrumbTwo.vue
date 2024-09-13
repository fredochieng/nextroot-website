

<script setup>

const props = defineProps({
  title: String,
  innertitle: String,
  team_details: Boolean,
  career_details: Boolean,
})

onMounted(() => {
  useCharAnimation();
})


</script>


<template>
  <!-- breadcrumb-area-start -->
  <div class="breadcrumb__area breadcrumb-height p-relative blue-bg-2">
    <div class="breadcrumb__shape-1">
      <img src="~/assets/img/breadcrumb/breadcrumb-shape-1.png" alt="image-here">
    </div>
    <div class="breadcrumb__shape-2">
      <img src="~/assets/img/breadcrumb/breadcrumb-shape-2.png" alt="image-here">
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xl-9 col-lg-7">
          <div class="breadcrumb__content">
            <h3 class="breadcrumb__title tp-char-animation">{{ title }}</h3>
            <div class="breadcrumb__list wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".4s">
              <span class="child-one">
                <NuxtLink to="/">Home</NuxtLink>
              </span>
              
              <template v-if="career_details">
                <span class="dvdr"><i class="fal fa-angle-right"></i></span>
                <span class="child-one"><a href="#">Careers page</a></span>
              </template>

              <span class="dvdr"><i class="fal fa-angle-right"></i></span>
              <span :class="`${team_details ? 'child-one' : ''}`">{{ innertitle }}</span>
              <template v-if="team_details">
                <span class="dvdr"><i class="fal fa-angle-right"></i></span>
                <span>Imdat Cimsit</span>
              </template>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-5 col-lg-4 text-center text-md-end">
          <div class="breadcrumb__img p-relative text-start z-index">
            <img class="z-index-3" src="~/assets/img/breadcrumb/breadcrumb-3.png" alt="image-here">
            <div class="breadcrumb__sub-img wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".4s">
              <img src="~/assets/img/breadcrumb/breadcrumb-sub-1.png" alt="image-here">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- breadcrumb-area-end -->
</template>

 