
<script setup>
import { gsap } from 'gsap';
const { $ScrollSmoother,$ScrollTrigger } = useNuxtApp();
gsap.registerPlugin($ScrollTrigger, $ScrollSmoother);

import HeaderSeven from "~/layouts/headers/HeaderSeven.vue";

// useHead
useHead({title: "Register Softec - Growing Ideas, Building Futures"});

onMounted(() => {
  $ScrollSmoother.create({
    wrapper : '#smooth-wrapper',
    content : '#smooth-content',
    smooth: 2,
    effects: true   
  });
})
</script>

<template>
  <div>
    <CommonScrollTop />
    <HeaderSeven />
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          <AuthRegister />
        </main>
      </div>
    </div>
  </div>
</template>

 