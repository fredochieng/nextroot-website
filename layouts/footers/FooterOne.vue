
<script setup>
import { gsap } from 'gsap';
import { useIntersectionObserver } from '@vueuse/core';
const gsap_bg = ref(null);

const footer_lisks = [
  {
    id: 1,
    cls_1: "col-xl-3 col-lg-3 col-md-5",
    cls_2: "footer-col-2",
    title: "What We Do",
    delay: ".7s",
    links: [
      { name: "Software Development", link: "#" },
      { name: "Web Application Development", link: "#" },
      { name: "Mobile Application Development", link: "#" },
      { name: "Business & Data Analytics", link: "#" },
    ]
  },
  {
    id: 2,
    cls_1: "col-xl-2 col-lg-2 col-md-6",
    cls_2: "footer-col-3",
    title: "Important Links",
    delay: ".9s",
    links: [
      { name: "About", link: "/about" },
      { name: "Services", link: "/service" },
      { name: "Contact", link: "/contact" },
    ]
  },
]

const active = ref(false)
// handle active function   
const hendleActive = () => {
  active.value = !active.value
}

const animateBg = () => {
		gsap.set('.tp-gsap-bg', {scaleX : 1} );
		let mm = gsap.matchMedia();
		mm.add("(min-width:1400px)", () => {
			gsap.to('.tp-gsap-bg', {
				scrollTrigger: {
					trigger: '.tp-gsap-bg',
					scrub: 0.02,
					start:"top bottom",
					end: "bottom bottom",
				},
				scaleX: .95,
				borderRadius: "30px",
				transformOrigin: "center center", 
				ease: "none",
			});
		})
};


const isView = ref(false)
const target = ref(null)
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
      targetIsVisible.value = isIntersecting;
      if (isIntersecting) {
        isView.value = true;
      }
  },
)

watch(isView, (newValue) => {
  if (newValue) {
    animateBg()
  }
})

</script>



<template>
  <footer class="pb-50">
    <!-- tp-footer-area-start -->
    <div class="tp-footer__pl-pr p-relative">
      <div ref="target" class="footer-black-bg tp-gsap-bg"></div>
      <div class="tp-footer__area pt-50">
        <div class="container">
          <div class="tp-footer__border-bottom">
            <div class="row align-items-center">
              <div class="col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                <div class="tp-footer__top-text">
                  <span>Get Our Latest's News <br /> & Updates</span>
                </div>
              </div>
              <div class="col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                <div class="tp-footer__input p-relative">
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
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.00098 7H13.001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round" />
                        <path d="M7.00098 1L13.001 7L7.00098 13" stroke="currentColor" stroke-width="1.5"
                          stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="tp-footer__top-space">
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-7 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                <div class="tp-footer__widget footer-col-1">
                  <NuxtLink to="/" class="tp-footer__widget-logo mb-10">
                    <img src="~/assets/img/logo/logo-white.png" alt="image-here">
                  </NuxtLink>
                  <div class="tp-footer__text">
                    <p>We bring your ideas to life by transforming your vision into innovative, functional, and user-friendly software solutions <br />
                      </p>
                  </div>
                  <div class="tp-footer__social">
                    <NuxtLink target="_blank" to="https://www.facebook.com"><i class="fab fa-facebook-f"></i></NuxtLink>
                    <NuxtLink target="_blank" to="https://www.twitter.com"><i class="fab fa-twitter"></i></NuxtLink>
                    <NuxtLink target="_blank" to="https://www.linkedin.com"><i class="fab fa-linkedin-in"></i></NuxtLink>
                    <NuxtLink target="_blank" to="https://www.vimeo.com"><i class="fab fa-vimeo-v"></i></NuxtLink>
                  </div>
                </div>
              </div>

              <div v-for="(item, i) in footer_lisks" :key="i" :class="`${item.cls_1} pb-30 wow tpfadeUp`"
                data-wow-duration=".9s" :data-wow-delay="item.delay">
                <div :class="`tp-footer__widget ${item.cls_2}`">
                  <h4 class="tp-footer__widget-title">{{ item.title }}</h4>
                  <div class="tp-footer__content">
                    <ul>
                      <li v-for="(link, index) in item.links" :key="index">
                        <NuxtLink :to="link.link">{{ link.name }}</NuxtLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1s">
                <div class="tp-footer__widget footer-col-4">
                  <h4 class="tp-footer__widget-title">Contact Us</h4>
                  <div class="tp-footer__contact-info tp-footer__icon-space">
                    <ul>
                      <li>
                        <span>
                          <svg width="22" height="22" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M14.332 1C14.332 1 17.2651 1.26664 20.9981 4.99966C24.7311 8.73267 24.9978 11.6658 24.9978 11.6658"
                              stroke="#FF3C82" stroke-width="2" stroke-linecap="round" />
                            <path
                              d="M14.6079 5.71289C14.6079 5.71289 15.9277 6.08998 17.9075 8.06971C19.8872 10.0494 20.2643 11.3693 20.2643 11.3693"
                              stroke="#FF3C82" stroke-width="2" stroke-linecap="round" />
                            <path opacity="0.5"
                              d="M9.04943 5.42369L9.91471 6.97413C10.6956 8.37332 10.3821 10.2088 9.15225 11.4387C9.15225 11.4387 9.15225 11.4387 9.15225 11.4387C9.15213 11.4388 7.66057 12.9306 10.3652 15.6352C13.0692 18.3392 14.561 16.849 14.5618 16.8482C14.5618 16.8482 14.5618 16.8482 14.5618 16.8482C15.7917 15.6183 17.6271 15.3049 19.0263 16.0857L20.5768 16.951C22.6896 18.1301 22.9391 21.0931 21.082 22.9502C19.9661 24.0661 18.599 24.9344 17.0878 24.9917C14.5439 25.0882 10.2236 24.4443 5.88985 20.1106C1.55612 15.7769 0.912294 11.4566 1.00873 8.91261C1.06602 7.40143 1.93432 6.03439 3.05023 4.91848C4.90734 3.06137 7.87031 3.31089 9.04943 5.42369Z"
                              stroke="#FF3C82" stroke-width="2" stroke-linecap="round" />
                          </svg>
                        </span>
                        <a href="tel:+44 7459 520489">+44 7459 520489</a>
                      </li>
                      <li>
                        <span>
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 10.2797 1.30049 11.4893 1.83477 12.562C1.97675 12.847 2.02401 13.1729 1.94169 13.4805L1.46521 15.2613C1.25836 16.0344 1.96561 16.7416 2.73868 16.5348L4.51951 16.0583C4.82715 15.976 5.15297 16.0233 5.43802 16.1652C6.51069 16.6995 7.72025 17 9 17Z"
                              stroke="#FF3C82" stroke-width="1.5" />
                            <path opacity="0.5" d="M5.7998 7.80078H12.1998" stroke="#FF3C82" stroke-width="1.5"
                              stroke-linecap="round" />
                            <path opacity="0.5" d="M5.7998 10.6006H10.1998" stroke="#FF3C82" stroke-width="1.5"
                              stroke-linecap="round" />
                          </svg>
                        </span>
                        <a href="mailto:info@nextroot.co.uk">info@nextroot.co.uk</a>
                      </li>
                      <li>
                        <span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5"
                              d="M3.7002 6.86317C3.7002 3.62503 6.5208 1 10.0002 1C13.4796 1 16.3002 3.62503 16.3002 6.86317C16.3002 10.0759 14.2895 13.8249 11.1523 15.1656C10.4209 15.4781 9.57947 15.4781 8.84814 15.1656C5.71094 13.8249 3.7002 10.0759 3.7002 6.86317Z"
                              stroke="#FF3C82" stroke-width="1.5" />
                            <path
                              d="M11.8002 7.3C11.8002 8.29411 10.9943 9.1 10.0002 9.1C9.00608 9.1 8.2002 8.29411 8.2002 7.3C8.2002 6.30589 9.00608 5.5 10.0002 5.5C10.9943 5.5 11.8002 6.30589 11.8002 7.3Z"
                              stroke="#FF3C82" stroke-width="1.5" />
                            <path
                              d="M18.0645 13.1504C18.6633 13.6926 19 14.3038 19 14.9504C19 17.1871 14.9706 19.0004 10 19.0004C5.02944 19.0004 1 17.1871 1 14.9504C1 14.3038 1.33671 13.6926 1.93552 13.1504"
                              stroke="#FF3C82" stroke-width="1.5" stroke-linecap="round" />
                          </svg>
                        </span>
                        <a href="https://www.google.com/maps/@41.6758525,-86.2531698,18.17z" target="_blank">Nottingham, United Kingdom</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tp-copyright__area pt-20 pb-20">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
              <div class="tp-copyright__text">
                <span>Designed and developed by<a href="#"> Innovate Experts</a> - {{ new Date().getFullYear() }}</span>
              </div>
            </div>
            <div class="col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
              <div class="tp-copyright__lang-box  d-flex align-items-center justify-content-md-end justify-content-start">
                <div class="tp-copyright__lang">
                  <ul>
                    <li>
                      <button id="tp-copyright__lang-toggle" @click="hendleActive">
                        <span>English (US)<i class="fal fa-angle-down"></i></span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- tp-footer-area-end -->
  </footer>
</template>

 