

<script setup>
import MobileMenu from "~/layouts/headers/MobileMenu.vue";


const props = defineProps({
  toggleMenu: Function,
  openMenu: Boolean,
})


</script>


<template>
  <!-- tp-offcanvus-area-start -->
  <div class="tpoffcanvas-area">
    <div :class="`tpoffcanvas ${openMenu ? 'opened' : ''}`">
      <div class="tpoffcanvas__close-btn" @click="toggleMenu">
        <button class="close-btn"><i class="fal fa-times"></i></button>
      </div>
      <div class="tpoffcanvas__logo text-center">
        <NuxtLink to="/"  @click="toggleMenu">
          <img src="~/assets/img/logo/logo-white.png" alt="image-here">
        </NuxtLink>
      </div>
      <div class="mobile-menu mean-container">
        <MobileMenu /> 
      </div> 

      <div class="tpoffcanvas__instagram text-center">
        <div class="tpoffcanvas__instagram-title">
          <h4>instagram</h4>
        </div>
        <!-- <a href="#"><img src="~/assets/img/project/project-inner-4.jpg" alt="image-here"></a>
        <a href="#"><img src="~/assets/img/project/project-inner-5.jpg" alt="image-here"></a>
        <a href="#"><img src="~/assets/img/project/project-inner-6.jpg" alt="image-here"></a>
        <a href="#"><img src="~/assets/img/project/project-inner-7.jpg" alt="image-here"></a> -->
      </div>
      <div class="tpoffcanvas__info text-center">
        <h4 class="offcanva-title">we are here</h4>
        <a href="https://www.google.com/maps/@23.506657,90.3443647,7z" target="_blank">
          27 Division St, New York, <br> NY 10002, USA
        </a>
      </div>
      <div class="tpoffcanvas__social">
        <div class="social-icon text-center">
          <a target="_blank" href="http://twitter.com"><i class="fab fa-twitter"></i></a>
          <a target="_blank" href="http://instagram.com"><i class="fab fa-instagram"></i></a>
          <a target="_blank" href="http://facebook.com"><i class="fab fa-facebook-square"></i></a>
          <a target="_blank" href="http://dribbble.com"><i class="fab fa-dribbble"></i></a>
        </div>
      </div>
    </div>
    <!-- body-overlay -->
    <div :class="`body-overlay ${openMenu ? 'apply' : ''}`" @click="toggleMenu"></div>
    <!-- body-overlay -->
  </div>
  <!-- tp-offcanvus-area-end -->
</template>

 