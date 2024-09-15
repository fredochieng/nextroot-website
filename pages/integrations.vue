

<script setup>
import { gsap } from 'gsap';
const { $ScrollSmoother,$ScrollTrigger } = useNuxtApp();
gsap.registerPlugin($ScrollTrigger, $ScrollSmoother);

import HeaderSix from "~/layouts/headers/HeaderSix.vue";
import FooterFive from "~/layouts/footers/FooterFive.vue";


// useHead
useHead({title: "Integrations Softec - Growing Ideas, Building Futures"});


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
          <CommonBreadcrumbsBreadcrumbSeven />
          <FeatureAreaHomeFive :style_2="true" />
          <IntegrationAreaHomeThree :style_2="true" />
        </main>
        <FooterFive :style_contact="true" :style_team="true" :bg_style="true" />
      </div>
    </div>
  </div>
</template>

 