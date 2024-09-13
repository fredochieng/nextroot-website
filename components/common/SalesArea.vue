

<script setup>


import sales_img_1 from "~/assets/img/card/sale-1.png"
import sales_img_2 from "~/assets/img/card/sale-2.png"
import sales_img_3 from "~/assets/img/card/sale-3.png"

const sales_content = {
  title: "Track and <span>Analyze Sales</span> in Real time",
  dub_title: "Track and Analyze Sales in Real time",
  description: "Centralize and simplify payments, and get comprehensive <br /> insights on your financials softuch.!",

  sales_feature: [
    {
      id: 1,
      color: "yellow-1",
      list: "No hidden fees."
    },
    {
      id: 2,
      color: "purple-2",
      list: "100% security. Guaranteed."
    },
    {
      id: 3,
      color: "green-3",
      list: "No training or maintenance needed"
    },
  ],

  sales_img: [
    {
      id: 1,
      cls: "main-thumb",
      img: sales_img_1,
    },
    {
      id: 2,
      cls: "sub-img-1",
      img: sales_img_2,
    },
    {
      id: 3,
      cls: "sub-img-2 d-none d-sm-block",
      img: sales_img_3,
    },
  ],


}
const { title, dub_title, description, sales_feature, sales_img } = sales_content



const props = defineProps({
  style_service: Boolean,
})
const { style_service } = props
const commontitle = style_service ? dub_title : title;

onMounted(() => {
  useTitleAnimation();
})


</script>


<template>
  <!-- tp-sales-area-start -->
  <div class="tp-sales-area tp-sales-space">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-6 col-lg-6 order-1 order-md-1 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
          <div class="tp-sales-section-box pb-20">
            <h3 class="tp-section-title-3 pb-15" v-html="commontitle"></h3> 
            <p class="tp-title-anim" v-html="description"></p>
          </div>
          <div class="tp-sales-feature">
            <ul>
              <li v-for="(item, i) in sales_feature" :key="i" :class="item.color">
                <span><i class="far fa-check"></i> <em>{{ item.list }}</em></span>
              </li> 
            </ul>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 order-0 order-md-2 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
          <div class="tp-sales-img-wrapper p-relative text-end">
            
            <div v-for="(item, i) in sales_img" :key="i" :class="`tp-sales-${item.cls}`">
              <img :src="item.img" alt="image-here">
            </div> 

          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-sales-area-end -->
</template>

 