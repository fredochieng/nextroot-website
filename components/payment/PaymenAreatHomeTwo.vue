
<script setup>

// payment img import 
import logo from "~/assets/img/payment-logo/logo-main.png";
import payment_img_1 from "~/assets/img/payment-logo/logo-3.png";
import payment_img_2 from "~/assets/img/payment-logo/logo-1.png";
import payment_img_3 from "~/assets/img/payment-logo/logo-2.png";
import payment_img_4 from "~/assets/img/payment-logo/logo-4.png";
import payment_img_5 from "~/assets/img/payment-logo/logo-5.png";
import payment_img_6 from "~/assets/img/payment-logo/logo-6.png";
import payment_img_7 from "~/assets/img/payment-logo/logo-7.png";
import payment_img_8 from "~/assets/img/payment-logo/logo-16.png";
import payment_img_9 from "~/assets/img/payment-logo/logo-15.png";
import payment_img_10 from "~/assets/img/payment-logo/logo-14.png";
import payment_img_11 from "~/assets/img/payment-logo/logo-13.png";
import payment_img_12 from "~/assets/img/payment-logo/logo-12.png";
import payment_img_13 from "~/assets/img/payment-logo/logo-11.png";
import payment_img_14 from "~/assets/img/payment-logo/logo-10.png";
import payment_img_15 from "~/assets/img/payment-logo/logo-9.png";
import payment_img_16 from "~/assets/img/payment-logo/logo-8.png";

// payment_method data
const payment_method = [
  {
    id: 1,
    line_circle: 1,
    cls: "",
    img: payment_img_1,
  },
  {
    id: 2,
    line_circle: 2,
    cls: "d-none d-lg-block",
    img: payment_img_2,
  },
  {
    id: 3,
    line_circle: 3,
    cls: "",
    img: payment_img_3,
  },
  {
    id: 4,
    line_circle: 4,
    cls: "d-none d-lg-block",
    img: payment_img_4,
  },
  {
    id: 5,
    line_circle: 5,
    cls: "",
    img: payment_img_5,
  },
  {
    id: 6,
    line_circle: 6,
    cls: "d-none d-lg-block",
    img: payment_img_6,
  },
  {
    id: 7,
    line_circle: 7,
    cls: "",
    img: payment_img_7,
  },
  {
    id: 8,
    line_circle: 8,
    cls: "d-none d-lg-block",
    img: payment_img_8,
  },
  {
    id: 9,
    line_circle: 9,
    cls: "",
    img: payment_img_9,
  },
  {
    id: 10,
    line_circle: 10,
    cls: "d-none d-lg-block",
    img: payment_img_10,
  },
  {
    id: 11,
    line_circle: 11,
    cls: "",
    img: payment_img_11,
  },
  {
    id: 12,
    line_circle: 12,
    cls: "d-none d-lg-block",
    img: payment_img_12,
  },
  {
    id: 13,
    line_circle: 13,
    cls: "",
    img: payment_img_13,
  },
  {
    id: 14,
    line_circle: 14,
    cls: "d-none d-lg-block",
    img: payment_img_14,
  },
  {
    id: 15,
    line_circle: 15,
    cls: "",
    img: payment_img_15,
  },
  {
    id: 16,
    line_circle: 16,
    cls: "",
    img: payment_img_16,
  },
]


</script>


<template>
  <!-- tp-payment-method-area-start -->
  <div class="tp-payment-method__area tp-payment-method__space">
    <div class="container-fluid g-0">
      <div class="row g-0 justify-content-center">
        <div class="col-xl-7">
          <div class="tp-payment-method__title-box text-center mb-20">
            <h3 class="tp-section-title-lg pb-10">All major <br /> payment methods</h3>
            <p>We've got all your payments covered</p>
          </div>
        </div>
      </div>
      <div class="row g-0">
        <div class="col-12">
          <div class="tp-payment-method__wrapper text-center p-relative">
            <div class="tp-payment-method__main-circle p-relative z-index">


              <div class="tp-payment-method__main-img z-index-3">
                <img :src="logo" alt="image-here">
              </div>

              <div v-for="(item, i) in payment_method" :key="i"
                :class="`tp-payment-method__line-${item.line_circle} ${item.cls}`">
                <div :class="`tp-payment-method__circle circle-${item.line_circle}`"></div>
                <span><img :src="item.img" alt="image-here"></span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-payment-method-area-end -->
</template>

 