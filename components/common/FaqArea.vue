
<script setup>
// accordion data 
const faq_data = [
  {
    id: 1,
    question: "Why should I choose Softec?",
    answer: "The Softec Shop is built right into your account dashboard, and is accessible immediately after signing up.",
    accordion_id: "One",
  },
  {
    id: 2,
    question: "Do I need to change banks??",
    answer: "The Softec Shop is built right into your account dashboard, and is accessible immediately after signing up.",
    accordion_id: "Two",
  },
  {
    id: 3,
    question: "How can I order equipment?",
    answer: "The Softec Shop is built right into your account dashboard, and is accessible immediately after signing up.",
    accordion_id: "Three",
  },
  {
    id: 4,
    question: "Do you offer volume discounts?",
    answer: "The Softec Shop is built right into your account dashboard, and is accessible immediately after signing up.",
    accordion_id: "Four",
  },
  {
    id: 5,
    question: "How does signing up work?",
    answer: "The Softec Shop is built right into your account dashboard, and is accessible immediately after signing up.",
    accordion_id: "Five",
  },
];

// active function
const active = ref(2)

const hendleActive = (id) => {
  active.value = id
}

if (typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap");
}

</script>


<template>
  <div class="tp-custom-accordion">
    <div class="accordion tp-inner-font" id="accordionExample">

      <div v-for="(item, i) in faq_data" :key="i" :class="`accordion-items  ${active === item.id ? 'tp-faq-active' : ''}`"
        @click="hendleActive(item.id)">
        <h2 class="accordion-header" :id="`heading${item.accordion_id}`">
          <button :class="`accordion-buttons ${i === 1 ? '' : 'collapsed'}`" type="button" data-bs-toggle="collapse"
            :data-bs-target="`#collapse${item.accordion_id}`" :aria-expanded="`${i === 1 ? 'false' : 'true'}`"
            :aria-controls="`collapse${item.accordion_id}`">
            {{ item.question }}
            <span class="accordion-btn"></span>
          </button>
        </h2>
        <div :id="`collapse${item.accordion_id}`" :class="`accordion-collapse collapse ${i === 1 ? 'show' : ''}`"
          :aria-labelledby="`heading${item.accordion_id}`" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            {{ item.answer }}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

 