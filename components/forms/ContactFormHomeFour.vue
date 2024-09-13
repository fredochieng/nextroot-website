

<script setup>


import NiceSelect from '~/components/ui/NiceSelect.vue';
const changeHandler = (value) => { };

onMounted(() => {
  useTitleAnimation();
})

</script>


<template>
  <!-- tp-contact-area-start -->
  <div class="tp-contact-area tp-contact-overlay pt-120 pb-120 blue-bg z-index p-relative fix">
    <div class="tp-contact-glob-img">
      <img src="~/assets/img/hero/hero-4-3.png" alt="image-here">
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xl-5 col-12 z-index-3 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
          <div class="tp-contact-section-box pb-25">
            <h5 class="tp-section-subtitle-4 pb-10 ">CONTACT US</h5>
            <h3 class="tp-section-title-4">Request Free Consultancy</h3>
          </div>
          <div class="tp-contact-info-box tp-title-anim">
            <ul>

              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.2227 1C13.2227 1 15.9115 1.24444 19.3336 4.66659C22.7558 8.08874 23.0002 10.7776 23.0002 10.7776"
                    stroke="#F8FF35" stroke-width="1.5" stroke-linecap="round" />
                  <path
                    d="M13.4756 5.32031C13.4756 5.32031 14.6855 5.666 16.5004 7.48087C18.3152 9.29574 18.6609 10.5056 18.6609 10.5056"
                    stroke="#F8FF35" stroke-width="1.5" stroke-linecap="round" />
                  <path
                    d="M1.00801 8.25232C0.919597 10.5844 1.50981 14.545 5.48265 18.5178C6.44111 19.4762 7.39885 20.2378 8.33317 20.8405M2.8795 4.59079C4.58196 2.88834 7.29819 3.11708 8.37912 5.05393L9.17234 6.47526C9.88818 7.75793 9.60081 9.44058 8.47337 10.568C8.47337 10.568 8.47337 10.568 8.47337 10.568C8.47325 10.5681 7.10592 11.9357 9.58533 14.4151C12.0641 16.8939 13.4316 15.5279 13.4324 15.5271C13.4324 15.527 13.4324 15.5271 13.4325 15.527C14.5599 14.3996 16.2425 14.1123 17.5252 14.8281L18.9465 15.6213C20.8834 16.7023 21.1121 19.4185 19.4097 21.1209C18.3867 22.1439 17.1335 22.9399 15.7481 22.9924C14.7532 23.0302 13.4619 22.9444 11.9998 22.5251"
                    stroke="#F8FF35" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                <a href="tel:(+806)0008899">(+806) 000 88 99</a>
              </li>

              <li>
                <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.6 8.99922C6.6 9.44105 6.24183 9.79922 5.8 9.79922C5.35817 9.79922 5 9.44105 5 8.99922C5 8.55739 5.35817 8.19922 5.8 8.19922C6.24183 8.19922 6.6 8.55739 6.6 8.99922Z"
                    fill="#F8FF35" />
                  <path
                    d="M9.8 8.99922C9.8 9.44105 9.44183 9.79922 9 9.79922C8.55817 9.79922 8.2 9.44105 8.2 8.99922C8.2 8.55739 8.55817 8.19922 9 8.19922C9.44183 8.19922 9.8 8.55739 9.8 8.99922Z"
                    fill="#F8FF35" />
                  <path
                    d="M13 8.99922C13 9.44105 12.6418 9.79922 12.2 9.79922C11.7582 9.79922 11.4 9.44105 11.4 8.99922C11.4 8.55739 11.7582 8.19922 12.2 8.19922C12.6418 8.19922 13 8.55739 13 8.99922Z"
                    fill="#F8FF35" />
                  <path
                    d="M13 2.07026C11.8233 1.38958 10.4571 1 9 1C4.58172 1 1 4.58172 1 9C1 10.2797 1.30049 11.4893 1.83477 12.562C1.97675 12.847 2.02401 13.1729 1.94169 13.4805L1.46521 15.2613C1.25836 16.0344 1.96561 16.7416 2.73868 16.5348L4.51951 16.0583C4.82715 15.976 5.15297 16.0233 5.43802 16.1652C6.51069 16.6995 7.72025 17 9 17C13.4183 17 17 13.4183 17 9C17 7.54285 16.6104 6.17669 15.9297 5"
                    stroke="#F8FF35" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                <a href="mailto:contact@info.com">contact@info.com</a>
              </li>

              <li>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.69922 6.86317C3.69922 3.62503 6.51983 1 9.99922 1C13.4786 1 16.2992 3.62503 16.2992 6.86317C16.2992 10.0759 14.2885 13.8249 11.1513 15.1656C10.4199 15.4781 9.57849 15.4781 8.84716 15.1656C5.70996 13.8249 3.69922 10.0759 3.69922 6.86317Z"
                    stroke="#F8FF35" stroke-width="1.5" />
                  <path
                    d="M11.7992 7.3C11.7992 8.29411 10.9933 9.1 9.99922 9.1C9.00511 9.1 8.19922 8.29411 8.19922 7.3C8.19922 6.30589 9.00511 5.5 9.99922 5.5C10.9933 5.5 11.7992 6.30589 11.7992 7.3Z"
                    stroke="#F8FF35" stroke-width="1.5" />
                  <path
                    d="M18.0645 13.1504C18.6633 13.6926 19 14.3038 19 14.9504C19 17.1871 14.9706 19.0004 10 19.0004C5.02944 19.0004 1 17.1871 1 14.9504C1 14.3038 1.33671 13.6926 1.93552 13.1504"
                    stroke="#F8FF35" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                <a href="https://www.google.com/maps/place/Argentina,+Santiago+del+Estero+Province,+Argentina/@-28.9465488,-65.3732971,7.53z/data=!4m5!3m4!1s0x9436ede70248f47b:0x3bdbc4e928700c2a!8m2!3d-29.5355289!4d-62.2664853"
                  target="_blank">1811 Silverside Rd, Wilmington, <br> DE 19810, USA</a>
              </li>

            </ul>
          </div>
        </div>
        <div class="col-xl-7 col-12 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
          <div class="tp-contact-input-wrapper p-relative">
            <div class="tp-contact-shape">
              <img src="~/assets/img/contact/shape-4-1.png" alt="image-here">
            </div>
            <div class="row">
              <div class="col-xl-6">
                <div class="tp-contact-input mb-20">
                  <input type="text" placeholder="Full name">
                </div>
              </div>
              <div class="col-xl-6">
                <div class="tp-contact-input mb-20">
                  <input type="email" placeholder="Email address">
                </div>
              </div>
              <div class="col-xl-12">
                <div class="tp-contact-select">
                  <div class="tp-select-icon"> 
                    <NiceSelect :options="[
                      { value: '1', text: 'Hack Protection' },
                      { value: '2', text: 'Online Support' },
                      { value: '3', text: 'Live Security' },
                      { value: '4', text: 'Hack Protection' },
                    ]" :defaultCurrent="0" name="Choose Your Topic" @onChange="changeHandler"
                      placeholder="Choose Your Topic" className="nice-select" />

                  </div>
                </div>
              </div>
              <div class="col-xl-12">
                <div class="tp-contact-input mb-20">
                  <textarea placeholder="Enter your message"></textarea>
                </div>
              </div>
              <div class="col-xl-12">
                <div class="tp-contact-btn">
                  <button type="submit" class="tp-btn-yellow-lg yellow-bg w-100">Get a free consultation</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- tp-contact-area-end -->
</template>
 