
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

import bg_img from "~/assets/img/footer/overly.png";
import footer_logo from "~/assets/img/logo/logo-black.png";

const footer_content = { 
  title: "Get Early Access to Softuch. <br /> <span>Close Your Books Faster and Grow.</span>",
  btn_text: "Try it on Browser",
  phone: "+806(000)8899",
  email: "contact@info.com",
  description: "Build a modern and creative website with crealand",

  footer_lisks: [
    {
      id: 1,
      cls_1: "col-xl-3 col-lg-3",
      cls_2: "footer-col-3-2",
      title: "Navigation",
      delay: ".7s",
      links: [
        { name: "Damo page", link: "#" },
        { name: "About", link: "/about" },
        { name: "Pricing Plan", link: "/price" },
        { name: "Integrations", link: "/integrations" },
        { name: "Blog", link: "/blog" },
        { name: "Contact", link: "/contact" },
      ]
    },
    {
      id: 2,
      cls_1: "col-xl-2 col-lg-2",
      cls_2: "footer-col-3-3",
      title: "Other Pages",
      delay: ".9s",
      links: [
        { name: "Features", link: "#" },
        { name: "Team", link: "/team" },
        { name: "Careers", link: "#" },
        { name: "Login", link: "/sign-in" },
        { name: "Register", link: "/register" },
        { name: "404 Not found", link: "/404" },
      ]
    },

  ],

  social_links: [
    {
      link: "http://facebook.com",
      icon: "fab fa-facebook-f",
    },
    {
      link: "http://twitter.com",
      icon: "fab fa-twitter",
    },
    {
      link: "http://www.vimeo.com",
      icon: "fab fa-vimeo-v",
    },
    {
      link: "http://www.instagram.com",
      icon: "fab fa-instagram",
    },
  ],
}
const { title, btn_text, footer_lisks, social_links, phone, email, description } = footer_content


// footer slider data 
const footer_slider_data = [
  "Free trial",
  "Lightning-fast.",
  "All-in-one CRM",
  "Cards for your",
  "Free trial",
  "Free migrations",
  "Incredible support",
  "Lightning-fast.",
  "Cards for your.",
  "Free trial",
  "Free migrations",
  "Free trial",
  "Lightning-fast.",
  "All-in-one CRM",
  "Cards for your.",
  "Free trial",
  "Free migrations",
  "Incredible support",
  "Lightning-fast.",
  "Cards for your",
  "Free trial",
  "Free migrations",
]

const setting =  {
		loop: true,
		freemode: true,
		slidesPerView: 1,
		spaceBetween: 0,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 2000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
		breakpoints: {
			'1400': {
				slidesPerView: 7,
			},
			'1200': {
				slidesPerView: 6,
			},
			'992': {
				slidesPerView: 5,
			},
			'768': {
				slidesPerView: 5,
			},
			'576': {
				slidesPerView: 4,
			},
			'0': {
				slidesPerView: 2,
			},
		},
		a11y: false,
	}

</script>




<template>
  <div class="footer-bottom-content tp-browser-bg-shape" :style="{ backgroundImage: `url(${bg_img})` }">

    <!-- tp-browser-area-start -->
    <div class="tp-browser-details-area pt-110 pb-30 p-relative">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-9 col-lg-9">
            <div class="tp-browser-section-box d-flex justify-content-between align-items-center mb-30">
              <h3 class="tp-section-title-3">Get Early Access to Softuch. <br /> <span>Close Your Books Faster and
                  Grow.</span></h3>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3">
            <div class="tp-browser-btn text-lg-end text-start mb-40">
              <a class="tp-btn-blue-lg tp-btn-hover" href="#">
                <span>Try it on Browser</span>
                <b></b>
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="tp-hero-browser-wrapper footer-browser-item d-flex align-items-center">
              <CommonBrwoser /> 

            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- tp-browser-area-end -->

    <footer>
      <!-- tp-footer-feature-slide-start -->
      <div class="tp-footer-slide pb-80">
        <div class="container-fluid g-0">
          <div class="row g-0 justify-content-center">
            <Swiper 
             :loop="true"
             :freeMode="true"
             :slidesPerView="7"  
             :spaceBetween="0"  
             :speed="2000" 
             :autoplay="{
               delay: 1,
               disableOnInteraction: true,
             }"
             :modules="[Autoplay]"
             :breakpoints="{
               '1400': {
                 slidesPerView: 7,
               },
               '1200': {
                 slidesPerView: 6,
               },
               '992': {
                 slidesPerView: 5,
               },
               '768': {
                 slidesPerView: 5,
               },
               '576': {
                 slidesPerView: 4,
               },
               '0': {
                 slidesPerView: 2,
               },
             }"
           
             class="footer-slide-active">

              <SwiperSlide v-for="(item, i) in footer_slider_data" :key="i" class="footer-slide-wrapper">
                <div class="footer-slide-item">
                  <i class="fal fa-check"></i>
                  <span>{{ item }}</span>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>
      <!-- tp-footer-feature-slide-end -->

      <!-- tp-footer-area-start -->
      <div class="tp-footer__pl-pr">
        <div class="tp-footer__area tp-footer__tp-border-bottom">
          <div class="container">
            <div class="row">
              <div class="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                <div class="tp-footer__widget footer-widget-3 footer-col-3-1">
                  <div class="tp-footer__logo mb-25">
                    <NuxtLink to="/">
                      <img :src="footer_logo" alt="image-here">
                    </NuxtLink>
                  </div>
                  <div class="tp-footer__contact-info">
                    <p>Build a modern and creative website with crealand</p>
                    <ul>
                      <li>
                        <span>
                          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3"
                              d="M7.08443 4.76996L7.84597 6.13453C8.53323 7.36598 8.25734 8.98143 7.17492 10.0639C7.17492 10.0639 7.17492 10.0639 7.17492 10.0639C7.1748 10.064 5.86209 11.3769 8.24247 13.7573C10.6222 16.137 11.9351 14.8257 11.9359 14.8249C11.936 14.8248 11.9359 14.8248 11.936 14.8248C13.0184 13.7424 14.6338 13.4666 15.8653 14.1538L17.2298 14.9153C19.0893 15.9531 19.3089 18.5609 17.6745 20.1953C16.6923 21.1775 15.4892 21.9417 14.1592 21.9921C11.9202 22.077 8.11782 21.5103 4.30364 17.6961C0.489452 13.882 -0.0771917 10.0796 0.00768762 7.84062C0.0581084 6.5106 0.822313 5.30745 1.80444 4.32532C3.43891 2.69085 6.04667 2.91046 7.08443 4.76996Z"
                              fill="#01103D" />
                            <path
                              d="M10.8646 0.739036C10.9423 0.25925 11.3959 -0.0662177 11.8757 0.0114575C11.9054 0.0171423 12.0009 0.0350017 12.051 0.046152C12.1511 0.0684501 12.2908 0.102781 12.4649 0.153502C12.8132 0.254933 13.2996 0.422028 13.8835 0.689721C15.0526 1.22567 16.6083 2.16321 18.2226 3.77756C19.8369 5.3919 20.7745 6.9476 21.3104 8.11662C21.5781 8.70051 21.7452 9.187 21.8467 9.53524C21.8974 9.70938 21.9317 9.84904 21.954 9.94917C21.9652 9.99923 21.9733 10.0394 21.979 10.0691L21.9857 10.1057C22.0634 10.5855 21.7409 11.0578 21.2611 11.1355C20.7827 11.213 20.332 10.8891 20.2524 10.4115C20.25 10.3987 20.2432 10.3643 20.236 10.3318C20.2215 10.2668 20.1965 10.1637 20.1568 10.0274C20.0774 9.75482 19.9395 9.34961 19.7105 8.85013C19.2531 7.85239 18.4305 6.47462 16.978 5.02212C15.5255 3.56963 14.1478 2.74709 13.15 2.28967C12.6505 2.06068 12.2453 1.92277 11.9727 1.84336C11.8364 1.80366 11.6651 1.76434 11.6001 1.74987C11.1226 1.67029 10.7872 1.21745 10.8646 0.739036Z"
                              fill="#01103D" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M11.1301 4.78659C11.2636 4.31926 11.7507 4.04866 12.2181 4.18218L11.9763 5.02836C12.2181 4.18218 12.2181 4.18218 12.2181 4.18218L12.2198 4.18266L12.2216 4.18318L12.2255 4.18433L12.2346 4.18704L12.2578 4.19427C12.2755 4.19993 12.2976 4.2073 12.3239 4.21665C12.3766 4.23535 12.4463 4.26194 12.5317 4.29856C12.7026 4.37182 12.9362 4.48496 13.2231 4.65476C13.7975 4.99467 14.5815 5.55928 15.5026 6.48035C16.4236 7.40143 16.9883 8.18547 17.3282 8.7598C17.498 9.04671 17.6111 9.28029 17.6844 9.45123C17.721 9.53666 17.7476 9.60631 17.7663 9.65901C17.7756 9.68535 17.783 9.70745 17.7887 9.72514L17.7959 9.74836L17.7986 9.75745L17.7997 9.76137L17.8003 9.76316C17.8003 9.76316 17.8007 9.76485 16.9546 10.0066L17.8007 9.76485C17.9343 10.2322 17.6637 10.7193 17.1963 10.8528C16.733 10.9852 16.2502 10.7203 16.1119 10.2602L16.1075 10.2476C16.1013 10.23 16.0883 10.1953 16.0666 10.1446C16.0232 10.0433 15.9445 9.87754 15.8135 9.65625C15.5519 9.21418 15.0793 8.54623 14.258 7.72492C13.4367 6.9036 12.7687 6.43107 12.3267 6.16944C12.1054 6.03847 11.9397 5.95974 11.8384 5.91633C11.7877 5.8946 11.753 5.88165 11.7353 5.8754L11.7227 5.87106C11.2626 5.73274 10.9977 5.24996 11.1301 4.78659Z"
                              fill="#01103D" />
                          </svg>
                        </span>
                        <a class="first-child" href="tel:+806(000)8899">+806 (000) 88 99</a>
                      </li>
                      <li>
                        <span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3"
                              d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 11.5997 0.375616 13.1116 1.04346 14.4525C1.22094 14.8088 1.28001 15.2161 1.17712 15.6006L0.581511 17.8267C0.322954 18.793 1.20701 19.677 2.17335 19.4185L4.39939 18.8229C4.78393 18.72 5.19121 18.7791 5.54753 18.9565C6.88836 19.6244 8.40032 20 10 20Z"
                              fill="#01103D" />
                            <path
                              d="M5.825 10.85C5.36937 10.85 5 11.2194 5 11.675C5 12.1306 5.36937 12.5 5.825 12.5H11.875C12.3306 12.5 12.7 12.1306 12.7 11.675C12.7 11.2194 12.3306 10.85 11.875 10.85H5.825Z"
                              fill="#1C274C" />
                            <path
                              d="M5.825 7C5.36937 7 5 7.36937 5 7.825C5 8.28063 5.36937 8.65 5.825 8.65H14.625C15.0806 8.65 15.45 8.28063 15.45 7.825C15.45 7.36937 15.0806 7 14.625 7H5.825Z"
                              fill="#1C274C" />
                          </svg>
                        </span>
                        <a href="mailto:contact@info.com">contact@info.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>


              <div
              v-for="(item, i) in footer_lisks" :key="i" 
              :class="`${item.cls_1} col-md-6 pb-30 wow tpfadeUp`" 
              data-wow-duration=".9s" :data-wow-delay="item.delay">
                <div :class="`tp-footer__widget footer-widget-3 ${item.cls_2}`">
                  <h4 class="tp-footer__widget-title">{{ item.title }}</h4>
                  <div class="tp-footer__content">
                    <ul>
                      <li v-for="(link,  index) in item.links" :key="index">
                        <NuxtLink :to="link.link">{{ link.name }}</NuxtLink>
                      </li> 
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-lg-4 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                <div class="tp-footer__widget footer-widget-3 footer-col-3-4">
                  <h4 class="tp-footer__widget-title">Our Newsletter</h4>
                  <div class="tp-footer__input mb-35 p-relative">
                    <form @submit.prevent>
                      <input type="text" placeholder="Business email adress">
                      <span>
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M13 14.6H5C2.6 14.6 1 13.4 1 10.6V5C1 2.2 2.6 1 5 1H13C15.4 1 17 2.2 17 5V10.6C17 13.4 15.4 14.6 13 14.6Z"
                            stroke="#5F6168" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path opacity="0.4"
                            d="M13 5.39993L10.496 7.39993C9.672 8.05593 8.32 8.05593 7.496 7.39993L5 5.39993"
                            stroke="#5F6168" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                      </span>
                      <button>
                        <svg width="14" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.00098 7H13.001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path d="M7.00098 1L13.001 7L7.00098 13" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </button>
                    </form>
                  </div>
                  <div class="tp-footer__social-3">
                    <h4>Social media</h4>
                    <NuxtLink target="_blank" to="https://www.facebook.com"><i class="fab fa-facebook-f"></i></NuxtLink>
                    <NuxtLink target="_blank" to="https://www.twitter.com"><i class="fab fa-twitter"></i></NuxtLink>
                    <NuxtLink target="_blank" to="https://www.instagram.com"><i class="fab fa-instagram"></i></NuxtLink>
                    <NuxtLink target="_blank" to="https://www.vimeo.com"><i class="fab fa-vimeo-v"></i></NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tp-copyright__area pt-25 pb-40">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-4 col-lg-6 col-md-6">
                <div class="tp-copyright__text tp-copyright__text-3 text-center">
                  <span>Full Copyright & Design By <a href="#">@Theme pure</a> - {{ new Date().getFullYear() }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- tp-footer-area-end -->
    </footer>
  </div>
</template>
 