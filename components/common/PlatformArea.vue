
<script setup>

import bg_shape from "~/assets/img/platform/p-bg.png";
import platform_img from "~/assets/img/payment/platform-1.png";

const platform_content = {
  sub_title: "What we offer",
  title: "Our Platform",
  description: `Explore how Avalance can help you toassess security controls continuously.`,

}
const { sub_title, title, description } = platform_content

// plat form data 
const platform_data = [
  {
    id: 1,
    cls: "one",
    count: "01",
    title: "Firewall & VPN",
    sub_title: "Live Security",
    des: `Blocks infected website tracking programs and annoying.`,

  },
  {
    id: 2,
    cls: "two",
    count: "02",
    title: "Hack Protection",
    sub_title: "Hack Protection",
    des: `Blocks infected website tracking programs and annoying.`,

  },
  {
    id: 3,
    cls: "three",
    count: "03",
    title: "Live Security",
    sub_title: "Live Security",
    des: `Blocks infected website tracking programs and annoying.`,

  },
  {
    id: 4,
    cls: "four",
    count: "04",
    title: "Online Support",
    sub_title: "Online Support",
    des: `Blocks infected website tracking programs and annoying.`,

  },
]


import { ref, onMounted, onBeforeUnmount } from 'vue';

const active = ref(3);

const handleToggle = (id) => {
  active.value = id;
};

const handleAll = () => {
  active.value = 'all';
};

const mediaSize = () => {
  if (window.matchMedia('(max-width: 768px)').matches) {
    active.value = 'all';
  } else {
    active.value = 3;
  }
};

onMounted(() => {
  mediaSize();
  window.addEventListener('resize', mediaSize, false);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', mediaSize, false);
});

const props = defineProps({
  style_2: Boolean
})

</script>


<template>
  <!-- tp-platform-area-start -->
  <div :class="`fix tp-platform-area ${style_2 ? 'tp-platform-inner pt-120' : 'border-tb blue-bg pt-115 pb-105'} p-relative z-index`">
    <div v-if="!style_2" class="tp-platform-bg-shape">
      <img :src="bg_shape" alt="image-here">
    </div>
    <div class="container">
      <div :class="`row align-items-end ${style_2 ? 'mb-60' : 'mb-40'} `">
        <div :class="`col-xl-7 col-lg-6 ${style_2 ? 'wow tpfadeLeft' : ''}`">
          <div class="tp-platform-section-box">
            <h5 :class="`${style_2 ? 'inner-section-subtitle' : 'tp-section-subtitle-4'} pb-10`">{{ sub_title }}</h5>
            <h3 :class="`${style_2 ? 'tp-section-title' : 'tp-section-title-4'}`">{{ title }}</h3>
          </div>
        </div>
        <div class="col-xl-5 col-lg-6  wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
          <div class="tp-platform-text">
            <p>{{ description }}</p>
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-xl-2 col-lg-2 d-none d-xl-block">
          <div class="tp-platform-img-box">
            <img :src="platform_img" alt="image-here">
          </div>
        </div>
        <div class="col-xl-10 col-lg-12">
          <div class="row-custom-wrapper">
            <div class="row-custom">

              <div v-for="(item, i) in platform_data" :key="i"
                :class="`col-custom ${active === 'all' ? 'active' : item.id === active ? 'active' : ''}`"
                @click='`${active !== "all" ? handleToggle(item.id) : handleAll()}`'>
                <div class="tp-panel-item">
                  <div class="tp-panel-content">
                    <span>{{ item.count }}.</span>
                    <h4 class="tp-panel-title child-one">{{ item.title }}</h4>
                  </div>
                </div>
                <div class="tp-panel-item-2">
                  <div class="tp-panel-content-2">
                    <span>{{ item.count }}.</span>
                    <h4 class="tp-panel-title-2">{{ item.sub_title }}</h4>
                    <p>{{ item.des }}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-platform-area-end -->
</template>

 