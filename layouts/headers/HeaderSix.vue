
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


const props = defineProps({
  style_2: Boolean,
})


const openMenu = ref(false)
const toggleMenu = () => {
  openMenu.value = !openMenu.value  
}


</script>


<template>
  <header>
    <!-- tp-header-area-start -->
    <div id="header-sticky"
      :class="`header-bottom__area header-sticky-bg-2 header-bottom__transparent header-bottom__bdr z-index-5 ${isSticky ? 'header-sticky' : ''} ${style_2 ? 'inner-header-2' : ''}`">
      <div class="container">
        <div class="row g-0 align-items-center">
          <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
            <div class="header-bottom__logo">

              <NuxtLink to="/" v-if="style_2  === true"><img src="~/assets/img/logo/logo-black.png" alt="image-here"></NuxtLink>

              <NuxtLink v-if="style_2  === false" class="white-logo" to="/"><img src="~/assets/img/logo/logo-black.png" alt="image-here"></NuxtLink>
              <NuxtLink v-if="style_2  === false" class="black-logo" to="/"><img src="~/assets/img/logo/logo-black.png" alt="image-here"></NuxtLink>
            </div>
          </div>
          <div class="col-xxl-7 col-xl-7 col-lg-7 d-none d-lg-block">
            <div class="header-bottom__main-menu header-bottom__main-menu-4 header-bottom__main-menu-inner">
              <nav id="mobile-menu">
                <Navbar />
              </nav>
            </div>
          </div>
          <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-8 col-6">
            <div class="header-bottom__right d-flex align-items-center justify-content-end">
              <!-- <div class="header-bottom__action header-bottom__action-4 d-none d-xl-block">
                <NuxtLink class="d-none d-lg-inline-block header-bottom__action-2 border-none" to="/register">
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 8C8.92882 8 10.4924 6.433 10.4924 4.5C10.4924 2.567 8.92882 1 7 1C5.07118 1 3.50757 2.567 3.50757 4.5C3.50757 6.433 5.07118 8 7 8Z"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13 15C13 12.291 10.3108 10.1 7 10.1C3.68917 10.1 1 12.291 1 15" stroke="currentColor"
                      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span>Log In</span>
                </NuxtLink>
              </div> -->
              <div class="header-bottom__btn d-flex align-items-center">
                <NuxtLink :class="`${style_2 ? 'tp-btn-inner alt-color-orange' : 'tp-btn-white alt-color-black'} tp-btn-hover d-none d-md-inline-block`"
                  to="/contact">
                  <span class="white-text">Get Started Now</span>
                  <b></b>
                </NuxtLink>
                <a class="header-bottom__bar tp-menu-bar d-lg-none" href="#" @click="toggleMenu"><i class="fal fa-bars"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- tp-header-area-end -->

    <!-- offcanvus  -->
    <CommonOffcanvus :openMenu="openMenu" :toggleMenu="toggleMenu" />
    <!-- offcanvus  -->
  </header>
  

</template>

 