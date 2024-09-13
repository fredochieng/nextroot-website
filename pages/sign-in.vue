


<script setup>
import { gsap } from 'gsap';
const { $ScrollSmoother,$ScrollTrigger } = useNuxtApp();
gsap.registerPlugin($ScrollTrigger, $ScrollSmoother);

import HeaderSeven from "~/layouts/headers/HeaderSeven.vue";
import FooterFive from "~/layouts/footers/FooterFive.vue";

// useHead
useHead({title: "Register Softec - Data analytics Vue Nuxt Template"});

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
    <HeaderSeven />
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <AuthSingnIn />
        </main>
        <FooterFive :style_contact="true" :style_team="true" :bg_style="true" />
      </div>
    </div>
  </div>
</template>

 