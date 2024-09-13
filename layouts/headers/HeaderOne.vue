<script setup>
import Navbar from './Navbar.vue';

const open = ref(false)
const handleOpen = () => {
  open.value = !open.value
}

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
  <!-- tp-header-area-start -->
  <header class="header-bottom__transparent z-index-6 tp-header-height">

    <!-- header top area -->
    <div class="header-top__area header-top__space z-index-3 d-none d-md-block tp-header-top-animation">
      <div class="container">
        <div class="row align-items-start">
          <div class="col-6">
            <div class="header-top__link">
              <span>Offer <i>is going on till Friday, $2.99/mo.</i></span>
              <a href="#">
                <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.40918 9L5.591 5L1.40918 1" stroke="white" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <div class="col-6">
            <div class="header-top__support text-end">
              <span>Get Support: <a href="tel:806(000)88899">+806 (000) 888 99</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- header bottom -->
    <div id="header-sticky"
      :class="`header-bottom__area header-mob-space header-bottom__area-2 header-bottom__transparent z-index-5 ${isSticky ? 'header-sticky' : ''}`">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
            <div class="header-bottom__logo">
              <NuxtLink to="/"><img src="~/assets/img/logo/logo-black.png" alt="image-here"></NuxtLink>
            </div>
          </div>
          <div class="col-xxl-6 col-xl-5 col-lg-5 d-none d-lg-block">
            <div class="header-bottom__main-menu">
              <nav id="mobile-menu">
                <Navbar />
              </nav>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-8 col-6">
            <div class="header-bottom__right d-flex align-items-center justify-content-end">
              <div class="header-bottom__action">
                <a class="d-none d-md-inline-block search-open-btn" @click="handleOpen" style="cursor: pointer;">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.6 16.2C12.7974 16.2 16.2 12.7974 16.2 8.6C16.2 4.40264 12.7974 1 8.6 1C4.40264 1 1 4.40264 1 8.6C1 12.7974 4.40264 16.2 8.6 16.2Z"
                      stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16.9999 17L15.3999 15.4" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </a>
                <NuxtLink class="d-none d-lg-inline-block last-child" to="/register">
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 8C8.92882 8 10.4924 6.433 10.4924 4.5C10.4924 2.567 8.92882 1 7 1C5.07118 1 3.50757 2.567 3.50757 4.5C3.50757 6.433 5.07118 8 7 8Z"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13 15C13 12.291 10.3108 10.1 7 10.1C3.68917 10.1 1 12.291 1 15" stroke="currentColor"
                      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span>Log In</span>
                </NuxtLink>
              </div>
              <div class="header-bottom__btn d-flex align-items-center">
                <NuxtLink class="tp-btn-white tp-btn-hover alt-color-black d-none d-md-inline-block"
                  to="/service-details">
                  <span class="white-text">Get Started</span>
                  <b></b>
                </NuxtLink>
                <a class="header-bottom__bar d-lg-none tp-menu-bar" @click="toggleMenu" href="#"><i
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

  <!-- Common Search Popup -->
  <CommonSearchPopup :open="open" :handleOpen="handleOpen" />
</template>

 