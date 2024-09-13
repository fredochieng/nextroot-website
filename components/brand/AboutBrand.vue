
<script setup>

// brand img import here 
import brand_img_1 from "~/assets/img/brand/brand-inner-1.png"
import brand_img_2 from "~/assets/img/brand/brand-inner-2.png"
import brand_img_3 from "~/assets/img/brand/brand-inner-3.png"
import brand_img_4 from "~/assets/img/brand/brand-inner-4.png"
import brand_img_5 from "~/assets/img/brand/brand-inner-5.png"
import brand_img_6 from "~/assets/img/brand/brand-inner-6.png"
import brand_img_7 from "~/assets/img/brand/brand-inner-7.png"
import brand_img_8 from "~/assets/img/brand/brand-inner-8.png"
import brand_img_9 from "~/assets/img/brand/brand-inner-9.png"

const brand_content = {
  titel: "Trusted by Many Businesses",
  description: "More than 200 clients are engaging Nextroot Solutions",

  brand_img: [
    { img: brand_img_1, delay: ".2s" },
    { img: brand_img_2, delay: ".4s" },
    { img: brand_img_3, delay: ".6s" },
    { img: brand_img_4, delay: ".8s" },
    { img: brand_img_5, delay: ".9s" },
    { img: brand_img_6, delay: "1s" },
    { img: brand_img_7, delay: "1.1s" },
    { img: brand_img_8, delay: "1.2s" },
    { img: brand_img_9, delay: "1.3s" },

  ]
}
const { titel, description, brand_img } = brand_content 
</script>


<template>
  <!--ab-brand-area-start -->
  <div class="ab-brand-area">
    <div class="container">
      <div class="ab-brand-border-bottom pb-90">
        <div class="row">
          <div class="col-12">
            <div class="ab-brand-section-box text-center mb-50">
              <h4 class="ab-brand-title">{{ titel }}</h4>
              <p>{{ description }}</p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-xl-10">
            <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 justify-content-center">

              <div 
              v-for="(item, i) in brand_img" :key="i" 
              class="col wow tpfadeUp" data-wow-duration=".9s" :data-wow-delay="item.delay">
                <div class="ab-brand-item mb-25">
                  <img :src="item.img" alt="image-here">
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--ab-brand-area-end -->
</template>

 