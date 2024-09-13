

<script setup>

import CountUp from 'vue-countup-v3'

// fun fact data 
const fun_fact_data = [
  {
    id: 1,
    cls: "1",
    count: 23,
    simble: "+",
    description: "Years <br /> Of Experience"
  },
  {
    id: 2,
    cls: "2",
    count: 30,
    simble: "%",
    description: "Year on <br /> year Growth"
  },
  {
    id: 3,
    cls: "3",
    count: 12,
    simble: "+",
    description: "Countries <br /> Of Operation"
  },
]


</script>


<template>
  <!-- tp-fun-fact-area-start -->
  <div class="tp-fun-fact-area tp-fun-fact-2 pt-100 pb-60">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="tp-fun-fact-section-title text-center pb-60">
            <h4 class="tp-fun-fact-title">Manufacturing software that goes beyondthe benchmark</h4>
          </div>
        </div>
      </div>
      <div class="row">

        <div v-for="(item, i) in fun_fact_data" :key="i" class="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-60 tp-counter-br">
          <div class="tp-fun-fact-item bg-color-1 tp-fun-fact-space-1 d-flex align-items-center">
            <h4><count-up :end-val="item.count" class="d-inline"></count-up> {{ item.simble }} </h4>
            <p v-html="item.description"></p>
          </div>
        </div> 

      </div>
    </div>
  </div>
  <!-- tp-fun-fact-area-end -->
</template>

 