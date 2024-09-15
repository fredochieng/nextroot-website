<script setup>
import { gsap } from 'gsap';
const { $ScrollSmoother,$ScrollTrigger } = useNuxtApp();
gsap.registerPlugin($ScrollTrigger, $ScrollSmoother);

import HeaderOne from "~/layouts/headers/HeaderOne.vue";
import FooterOne from "~/layouts/footers/FooterOne.vue";
// useHead
useHead({
  title: "Softec - Growing Ideas, Building Futures",
});

if (typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap");
}
onMounted(async () => {
  const wow = await import("wow.js");
  new wow.default().init();
});
onMounted(() => {
  $ScrollSmoother.create({
    wrapper : '#smooth-wrapper',
    content : '#smooth-content',
    smooth: 2,
    effects: true   
  })

  useTitleAnimation();
})
</script>

<template>
  <div>
    <CommonScrollTop />
    <HeaderOne />
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main class="fix">
          <HeroBannerHeroAreaHomeOne />
          <FeatureAreaHomeOne />
          <AboutArea :style_2="true" />
          <ServicesAreaHomeOne />
          <ProjectAreaHomeOne />
          <TestimonialAreaHomeOne />
          <RankAreaHomeOne />
          <PriceAreaHomeOne />
        </main>
        <FooterOne />
      </div>
    </div>
  </div>
</template>
