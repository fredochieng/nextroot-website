

<template>
  <div id="video-overlay" class="video-overlay" @click="closeVideo"> 
    <a class="video-overlay-close" @click.prevent="closeVideo"> × </a>    
  </div>
</template>

<script setup>

const videoUrl = ref('https://www.youtube.com/embed/EW4ZYb3mCZk');

const playVideo = () => {
  const videoOverlay = document.querySelector("#video-overlay");
  let iframeElement = document.createElement("iframe");

  iframeElement.setAttribute("src", videoUrl.value);
  iframeElement.style.width = "60%";
  iframeElement.style.height = "80%";

  videoOverlay?.classList.add("open");
  videoOverlay.appendChild(iframeElement);
};

const closeVideo = () => {
  const videoOverlay = document.querySelector("#video-overlay.open"),
    iframeElement = document.querySelector("#video-overlay.open iframe");

  videoOverlay?.classList.remove("open");
  iframeElement?.remove();
};
</script>
