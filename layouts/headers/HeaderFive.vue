
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
      :class="`header-bottom__area header-bottom__plr-5 header-bottom__transparent z-index-3 white-bg ${isSticky ? 'header-sticky' : ''}`">
      <div class="container-fluid p-0">
        <div class="row g-0 align-items-center">
          <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
            <div class="header-bottom__logo">
              <NuxtLink to="/"><img src="~/assets/img/logo/logo-black.png" alt="image-here"></NuxtLink>
            </div>
          </div>
          <div class="col-xxl-8 col-xl-7 col-lg-8 d-none d-lg-block">
            <div class="header-bottom__main-menu header-bottom__main-menu-5 text-center">
              <nav id="mobile-menu">
                <Navbar />
              </nav>
            </div>
          </div>
          <div class="col-xxl-2 col-xl-3 col-lg-2 col-md-8 col-6">
            <div class="header-bottom__right header-five__btn d-flex align-items-center justify-content-end">
              <div class="header-bottom__btn d-flex align-items-center">
                <NuxtLink class="tp-btn-yellow inner-color tp-btn-hover alt-color-black d-none d-md-inline-block" to="/register">
                  <span class="white-text">Sign up Now</span>
                  <b></b>
                </NuxtLink>
                <a class="header-bottom__bar tp-menu-bar d-lg-none" href="#" @click="toggleMenu"><i
                    class="fal fa-bars"></i></a>
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

 