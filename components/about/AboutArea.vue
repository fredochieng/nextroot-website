

<script  setup>


// images import 
import about_img_1 from "~/assets/img/about/about-bg-shape.png"
import about_img_2 from "~/assets/img/about/about-2.jpg"
import about_img_3 from "~/assets/img/about/about-1.jpg"
import about_img_4 from "~/assets/img/about/about-3.jpg"
import about_img_5 from "~/assets/img/about/about-5.png"

// about data
const about_data = [
  {
    id: 1,
    cls: "bg-shape",
    img: about_img_1
  },
  {
    id: 2,
    cls: "main-img z-index",
    img: about_img_2
  },
  {
    id: 3,
    cls: "sub-img-1 d-none d-sm-block z-index-3",
    img: about_img_3
  },
  {
    id: 4,
    cls: "sub-img-2 d-none d-sm-block",
    img: about_img_4
  },
  {
    id: 5,
    cls: "sub-img-3 d-none d-sm-block z-index-3",
    img: about_img_5
  },
]

// about content
const about_content = {
  title: "OVER 150K+ CLIENT",
  sub_title: "We Offer Real Time Data Solutions",
  des: "Excepteur sint occaecat cupidatat officia non proident <br />  sunt in culpa qui deserunt.!",

  about_list: [
    "Various analysis options.",
    "Page Load (time, size, number of requests).",
    " Big data analysis.",
  ],
  btn_text: "About Us",

}
const { title, sub_title, des, about_list, btn_text } = about_content

const props = defineProps({
  style_2: Boolean
})

</script>


<template>
  <!-- tp-about-area-start -->
  <div :class="`tp-about__area tp-about__pt-pb pb-160 ${style_2 ? 'pt-100' : ''}`">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".2s">
          <div class="tp-about__img-wrapper text-center text-lg-end p-relative">

            <div v-for="(item, i) in about_data" :key="i" :class="`tp-about__${item.cls}`">
              <img :src="item.img" alt="image-here">
            </div>

          </div>
        </div>
        <div class="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".6s">
          <div class="tp-about__right">
            <div class="tp-about__section-box">
              <h4 class="tp-section-subtitle">{{ title }}</h4>
              <h3 class="tp-section-title mb-15">{{ sub_title }}</h3>
              <p v-html="des"></p>
            </div>
            <div class="tp-about__list">
              <ul>
                <li v-for="(feature, i) in about_list" :key="i"><i class="fal fa-check"></i>{{ feature }}</li>
              </ul>
            </div>
            <div class="tp-about__btn">
              <NuxtLink class="tp-btn tp-btn-inner tp-btn-hover alt-color-black" to="/about">
                <span>About Us</span>
                <b></b>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-about-area-end -->
</template>

 