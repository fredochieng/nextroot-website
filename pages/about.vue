

<script setup>
import { gsap } from 'gsap';
const { $ScrollSmoother,$ScrollTrigger } = useNuxtApp();
gsap.registerPlugin($ScrollTrigger, $ScrollSmoother);

import HeaderSix from "~/layouts/headers/HeaderSix.vue";
import FooterFour from "~/layouts/footers/FooterFour.vue";

import bg_img from "~/assets/img/breadcrumb/breadcrumb-2.jpg";
 
// useHead
useHead({title: "About Nextroot Solutions- "});


if (typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap");
}

onMounted(() => {
  $ScrollSmoother.create({
    wrapper : '#smooth-wrapper',
    content : '#smooth-content',
    smooth: 2,
    effects: true   
  });
});
</script>



<template>
  <div>
    <CommonScrollTop />
    <HeaderSix />
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <CommonBreadcrumbsBreadcrumb title="About" innertitle="Nextroot" />
          <CommonHeroBanner :bg_img="bg_img" title="About" innerTitle="Nextroot" />
          <BrandAboutBrand />
          <CounterAboutCounterArea />
          <!-- <AboutArea /> -->
          <!-- <TeamAreaHomeFour :style_2="true" /> -->
          <!-- <TestimonialJourneyArea /> -->
          <!-- <JobArea /> -->
          <CtaAbout />
        </main>
        <FooterFour :style_contact="true" :style_team="true" :bg_style="true" />
      </div>
    </div>
  </div>
</template>

 