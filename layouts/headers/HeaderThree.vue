
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
  <header class="tp-header-height">
    <!-- tp-header-area-start -->
    <div id="header-sticky"
      :class="`header-bottom__area header__space header-sticky-bg-2 header-bottom__transparent z-index-5 ${isSticky ? 'header-sticky' : ''}`">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
            <div class="header-bottom__logo">
              <NuxtLink to="/"><img src="~/assets/img/logo/logo-black.png" alt="image-here"></NuxtLink>
            </div>
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-6 d-none d-lg-block">
            <div class="header-bottom__main-menu header-bottom__main-menu-3">
              <nav id="mobile-menu">
                <Navbar />
              </nav>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-8 col-6">
            <div class="header-bottom__right d-flex align-items-center justify-content-end">

              <div class="header-bottom__btn d-flex align-items-center">
                <NuxtLink class="tp-btn-blue-sm d-none d-md-inline-block tp-btn-hover alt-color-black"
                  to="/contact">
                  <span>Get Started Now</span>
                  <b></b>
                </NuxtLink>
                <NuxtLink class="header-bottom__bar tp-menu-bar d-lg-none" to="#" @click="toggleMenu" >
                  <i class="fal fa-bars"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- tp-header-area-end -->
  </header>

  <CommonOffcanvus :openMenu="openMenu" :toggleMenu="toggleMenu" />

</template>

 