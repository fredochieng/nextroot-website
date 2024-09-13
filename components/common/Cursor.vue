
<script setup>

const eRef = ref(null);
const tRef = ref(null);

let n, i = 0, o = false;

const handleMouseMove = (s) => {
  if (!o) {
    tRef.value.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
  }
  eRef.value.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
  n = s.clientY;
  i = s.clientX;
};

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", handleMouseMove);
});


</script>

<template>
  <div ref="eRef" :class="{ 'mouseCursor': true, 'cursor-outer': true, 'cursor-big': isEnter }"
    :style="{ visibility: 'visible' }"></div>
  <div ref="tRef" :class="{ 'mouseCursor': true, 'cursor-inner': true, 'cursor-big': isEnter }"
    :style="{ visibility: 'visible' }">
    <NuxtLink to="#"><i class="fas fa-play"></i></NuxtLink>
  </div>
</template>

 