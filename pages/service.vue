
<script setup>
import { gsap } from 'gsap';
const { $ScrollSmoother,$ScrollTrigger } = useNuxtApp();
gsap.registerPlugin($ScrollTrigger, $ScrollSmoother);

import HeaderSix from "~/layouts/headers/HeaderSix.vue";
import FooterFive from "~/layouts/footers/FooterFive.vue";

import bg_img from "~/assets/img/breadcrumb/breadcrumb-2.jpg";

// useHead
useHead({title: "Service Softec - Growing Ideas, Building Futures"});

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
          <CommonBreadcrumbsBreadcrumb title="Our Top" innertitle="Service" />
          <CommonHeroBanner :bg_img="bg_img" title="Our Top" innerTitle="Service" />
          <ServicesServiceArea />
          <CommonCardArea :style_service="true" />
          <CommonSalesArea :style_service="true" />
          <TestimonialArea /> 
          <FaqHomeTwo :style_service="true" />
          <CtaAbout />
        </main>
        <FooterFive :style_contact="true" :style_team="true" :bg_style="true" />
      </div>
    </div>
  </div>
</template>

 