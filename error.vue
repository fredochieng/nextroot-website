<script setup>
import HeaderFour from "~/layouts/headers/HeaderFour.vue";
import FooterOne from "~/layouts/footers/FooterOne.vue";

const props = defineProps({
  error: Object,
});


useHead({title: "404 - Nextroot Solutions Limited"});

</script>

<template>
  <div>
    <HeaderFour :style_error="true" />
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <ErrorArea />
        <h5>{{ error?.message }}</h5>
        <FooterOne />
      </div>
    </div>
  </div>
</template>

 