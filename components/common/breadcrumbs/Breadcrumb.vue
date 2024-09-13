
<script setup>

const props = defineProps({
  title: String,
  innertitle: String,
})
 


const offset = ref(0);
const handleScroll = () => {
  offset.value = window.scrollY;
};
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});


</script>


<template>
  <!-- tp-breadcrumb-area-start -->
  <div class="about-banner-area p-relative">
    <div class="about-shape-1 z-index-3">
      <img src="~/assets/img/breadcrumb/breadcrumb-shape-1.png" alt="image-here">
    </div>
    <div class="about-shape-2 z-index-3">
      <img src="~/assets/img/breadcrumb/breadcrumb-shape-2.png" alt="image-here">
    </div>
    <div class="about-banner p-relative z-index fix">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="about-banner-content z-index-5">
              <h4 class="about-banner-title" :style="`transform: translateY(${offset * 0.9})`">
                <span>{{ title }}</span> <br />
                <span>{{ innertitle }}</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-breadcrumb-area-end -->
</template>

 