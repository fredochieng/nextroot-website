
<script setup>

import img_1 from "~/assets/img/hero/browser-icon-1.png";
import img_2 from "~/assets/img/hero/browser-icon-2.png";
import img_3 from "~/assets/img/hero/browser-icon-3.png";
import img_4 from "~/assets/img/hero/browser-icon-4.png";
import img_5 from "~/assets/img/hero/browser-icon-5.png";

const brwoser_data = [
  { img: img_1, title: "Windows", link: "https://www.microsoft.com" },
  { img: img_2, title: "Firefox", link: "https://www.mozilla.org" },
  { img: img_3, title: "Chrome", link: "https://www.chrome.com" },
  { img: img_4, title: "macOS", link: "https://www.apple.com" },
  { img: img_5, title: "Linux", link: "https://www.linux.org" },
]
</script>



<template>
  <div class="tp-hero-browser-wrapper d-flex align-items-center justify-content-center wow tpfadeUp"
    data-wow-duration=".9s" data-wow-delay=".9s">

    <div v-for="(item, i) in brwoser_data" :key="i" class="tp-hero-browser-item">
      <NuxtLink :to="item.link" target="_blank">
        <img :src="item.img" alt="image-here">
      </NuxtLink>
      <p class="d-none d-sm-block">{{ item.title }}</p>
    </div> 

  </div>
</template>
 