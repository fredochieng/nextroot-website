
<script setup>
import Navbar from './Navbar.vue';

// menu sticky 
const isSticky = ref(false);
const handleSticky = () => {
  if (window.scrollY > 80) {
    isSticky.value = true;
  } else {
    isSticky.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleSticky);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleSticky);
});


const openMenu = ref(false)
const toggleMenu = () => {
  openMenu.value = !openMenu.value  
}



</script>

<template>
  <!-- <header class="tp-header-height"> -->
    <header class="header-bottom__transparent z-index-6 tp-header-height">
    <!-- tp-header-area-start -->
    <div id="header-sticky"
      :class="`tp-header-2__area header-sticky-bg-2 tp-header-2__transparent tp-header-2__plr z-index-3 ${isSticky ? 'header-sticky' : ''}`">
      <div class="container-fluid g-0">
        <div class="row g-0 align-items-center">
          <div class="col-xl-2 col-lg-2 col-md-6 col-6">
            <div class="tp-header-2__logo">
              <NuxtLink class="white-logo" to="/"><img src="~/assets/img/logo/logo-white.png" alt="image-here"></NuxtLink>
              <NuxtLink class="black-logo" to="/"><img src="~/assets/img/logo/logo-black.png" alt="image-here"></NuxtLink>
            </div>
          </div>
          <div class="col-xl-7 col-lg-7 d-none d-lg-block">
            <div class="tp-header-2__main-menu text-center">
              <nav id="mobile-menu">
                <Navbar />
              </nav>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6 col-6">
            <div class="tp-header-2__right d-flex align-items-center justify-content-end">
              <!-- <NuxtLink class="tp-header-2__login d-none d-md-block" to="/register">Login</NuxtLink> -->
              <NuxtLink class="tp-btn-green-sm d-none d-md-block" to="/contact">Get Started Now</NuxtLink>
              <NuxtLink class="header-bottom__bar tp-menu-bar d-lg-none" to="#" @click="toggleMenu">
                <i class="fal fa-bars"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- tp-header-area-end -->
  </header>

  <CommonOffcanvus :openMenu="openMenu" :toggleMenu="toggleMenu" />



</template>
 