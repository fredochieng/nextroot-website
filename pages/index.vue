
<script setup>
import { gsap } from "gsap";
const { $ScrollSmoother, $ScrollTrigger } = useNuxtApp();
gsap.registerPlugin($ScrollTrigger, $ScrollSmoother);

import HeaderThree from "~/layouts/headers/HeaderThree.vue";
import FooterOne from "~/layouts/footers/FooterOne.vue";

// useHead
useHead({ title: "Nextroot Solutions - Growing Ideas, Building Futures" });

if (typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap");
}

onMounted(async () => {
  const wow = await import("wow.js");
  new wow.default().init();
});

onMounted(() => {
  $ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2,
    effects: true,
  });
  useTitleAnimation();
});
</script>


<template>
  <CommonScrollTop />
  <HeaderThree />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main class="fix">
        <HeroBannerHeroAreaHomeThree />
        <CounterAreaHomeThree />
        <PaymentTpPaymentAreaHomeTwo />
        <BusinessBoxHomeFive />
      </main>
      <FooterOne />
    </div>
  </div>
</template>

 