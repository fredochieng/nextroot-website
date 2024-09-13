
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


const props = defineProps({
  style_error: Boolean,
})

</script>

<template>
  <header :class="`${style_error ? '' : 'tp-header-height'}`">
    <!-- tp-header-area-start -->
    <div id="header-sticky"
      :class="`header-bottom__area ${style_error ? 'header-sticky-bg-2 tp-error-header z-index-5' : 'header-blur header-bottom__plr-4 z-index-3'}  header-bottom__transparent ${isSticky ? 'header-sticky' : ''}`">
      <div :class="`${style_error ? 'container' : 'container-fluid p-0'}`">
        <div class="row g-0 align-items-center">
          <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
            <div class="header-bottom__logo">
              <NuxtLink v-if="style_error" to="/"><img src="~/assets/img/logo/logo-black.png" alt=""></NuxtLink>
              <NuxtLink v-if="!style_error" class="white-logo" to="/"><img src="~/assets/img/logo/logo-white.png" alt="image-here"></NuxtLink>
              <NuxtLink v-if="!style_error" class="black-logo" to="/"><img src="~/assets/img/logo/logo-black.png" alt="image-here"></NuxtLink>
            </div>
          </div>
          <div class="col-xxl-7 col-xl-7 col-lg-7 d-none d-lg-block">
            <div class="header-bottom__main-menu header-bottom__main-menu-4">
              <nav id="mobile-menu">
                <Navbar />
              </nav>
            </div>
          </div>
          <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-8 col-6">
            <div class="header-bottom__right d-flex align-items-center justify-content-end">
              <div :class="`header-bottom__action ${style_error ? '' : 'header-bottom__action-4'}`">
                <NuxtLink class="d-none d-lg-inline-block header-bottom__action-2 border-none" to="/register">
                  <span>Log In</span>
                </NuxtLink>
              </div>
              <div class="header-bottom__btn d-flex align-items-center">
                <NuxtLink :class="`tp-btn-yellow ${style_error ? 'inner-color alt-color-black' : 'alt-color-white'} tp-btn-hover d-none d-md-inline-block`" to="/contact">
                  <span>Get in Touch</span>
                  <b></b>
                </NuxtLink>
                <NuxtLink class="header-bottom__bar tp-menu-bar d-lg-none" to="#" @click="toggleMenu">
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

 