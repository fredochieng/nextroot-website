<template>
  <div>
    <div
        ref="eRef"
        :class="`mouseCursor cursor-outer ${mouse?'cursor-big':''}`"
        style="visibility: visible"
      ></div>
      <div
        ref="tRef"
        :class="`mouseCursor cursor-inner ${mouse?'cursor-big':''}`"
        style="visibility: visible"
      >
         <a href="#"><i class="fas fa-play"></i></a>
      </div>
  </div>
</template>

<script setup>
const mouse = useBigMouse();
const eRef = ref(null);
const tRef = ref(null);
const nRef = ref(0);
const iRef = ref(0);
const oRef = ref(false);

onMounted(() => {
  const handleMouseMove = (s) => {
      if (!oRef.value) {
        if (tRef.value) {
          tRef.value.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
        }
      }
      if (eRef.value) {
        eRef.value.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
      }
      nRef.value = s.clientY;
      iRef.value = s.clientX;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
    
});
</script>
