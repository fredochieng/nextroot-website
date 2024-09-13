

<script setup>
import CountUp from 'vue-countup-v3'

const company_content = {
  sub_title: "About Nextroot Solutions",
  title: "Nextroot Solutions is <br /> Made For the Creator.",
  info_1: "Welcome to Nextroot Solutions, where innovation meets expertise. We are a forward-thinking technology company dedicated to transforming ideas into powerful digital solutions. Our passion for technology drives us to deliver cutting-edge services in Software, Mobile, and Web Application Development, Seamless Third-Party Integrations, and Business Intelligence & Data Analytics.",
  info_2: "At Nextroot Solutions, we are a team of dedicated professionals with a shared vision: to empower businesses with innovative, reliable, and scalable technology solutions. With years of industry experience, we combine technical expertise with deep domain knowledge to help our clients navigate the complexities of the digital landscape.",
  info_3: "Our mission is simple yet ambitious: to create digital experiences that drive growth and efficiency for our clients. We strive to build lasting partnerships by delivering tailored solutions that address the unique challenges of each business we work with.",
  counter_data: [
    {
      id: 1,
      sub_title: "Clients",
      count: 200,
      title: "Clients",
      symble: "+",
      cls: "d-flex justify-content-start",
    },
    {
      id: 2,
      sub_title: "VALUE",
      count: 120,
      title: "Completed Projects",
      symble: "+",
      cls: "d-flex justify-content-md-center justify-content-left",
    },
    {
      id: 3,
      sub_title: "IN",
      count: 4,
      title: "Countries",
      symble: "+",
      cls: "ab-company-border-none d-flex justify-content-md-center justify-content-left",
    },
  ]
}
const { sub_title, title, info_1, info_2, info_3, counter_data } = company_content


</script>



<template>

  <!--ab-company-area-start -->
  <div class="ab-company-area pt-105 pb-100">
    <div class="container">
      <div class="row ab-company-section-space">
        <div class="col-xl-6">
          <div class="ab-company-section-box">
            <h4 class="inner-section-subtitle">{{ sub_title }}</h4>
            <h3 class="tp-section-title" v-html="title"></h3>
          </div>
        </div>
        <div class="col-xl-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
          <div class="ab-company-right">
            <div class="ab-company-section-text">
              <p class="pb-10">{{ info_1 }}</p>
              <p class="pb-10">{{ info_2 }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-xl-4">
          <div class="ab-company-video">
            <!-- <span> Our Impressive Numbers</span> -->
            <p class="tp-section-title"> Our Impressive Numbers</p>
            <!-- <a class="popup-video" 
            @click="playVideo(videoUrl)" :style="{ cursor: 'pointer' }" 
            ><i class="fas fa-play"></i></a>
            <span>Watch Demo</span> -->
          </div>
        </div>
        <div class="col-xl-8">
          <div class="row">

            <div
            v-for="(item, i) in counter_data" :key="i"
             class="col-md-4 col-sm-4 mb-40">
              <div :class="`ab-company-fun-fact-wrap ${item.cls}`">
                <div class="ab-company-fun-fact">
                  <!-- <span>{{ item.sub_title }}</span>  -->
                  <h4> 
                    <count-up :end-val="item.count" class="d-inline"></count-up>
                    <em>{{ item.symble }}</em>
                  </h4>
                  <p>{{ item.title }}</p>
                </div>
              </div>
            </div> 

          </div>
        </div>
      </div>
    </div>
  </div>
  <!--ab-company-area-end -->

</template>
 