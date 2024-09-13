<script setup>

import icon_1 from "~/assets/img/contact/contact-icon-sm-1.png";
import icon_2 from "~/assets/img/contact/contact-icon-sm-2.png";
import icon_3 from "~/assets/img/contact/contact-icon-sm-3.png";


const contact_data = {
  social_links: [
    {
      link: "http://facebook.com",
      icon: "fab fa-facebook-f",
    },
    {
      link: "http://twitter.com",
      icon: "fab fa-twitter",
    },
    {
      link: "http://www.linkedin.com",
      icon: "fab fa-linkedin-in",
    },
    {
      link: "http://www.instagram.com",
      icon: "fab fa-instagram",
    },
  ],
  contact: [
    {
      id: 1,
      icon: icon_1,
      title: "info@nextroot.co.uk",
      link: "mailto:info@nextroot.co.uk",
    },
    {
      id: 2,
      icon: icon_2,
      title: "+44 7459 520489",
      link: "tel:+44 7459 520489",
    },
    {
      id: 3,
      icon: icon_3,
      title: "35Park Avenue, Uk",
      link: "https://www.google.com.bd/maps/@23.7806365,90.4193257,12z",
    },
  ],

}
const { social_links, contact } = contact_data
const changeHandler = (value) => { };

</script>


<template>
  <div class="contact-form-area pb-120">
    <div class="container">
      <div class="row gx-0">
        <div class="col-xl-5 col-lg-6">
          <div class="contact-form-left">
            <div class="contact-form-section-box pb-80">
              <h5 class="inner-section-subtitle">CONTACT US</h5>
              <h4 class="tp-section-title pb-10">We'd love to <br /> hear from you.
              </h4>
              <p>While we're good with smoke signals,
                there <br /> are easier ways to get in touch.</p>
            </div>
            <div class="contact-form-social-box p-relative">
              <div class="contact-form-social-item">
                <NuxtLink v-for="(item, i) in social_links" :key="i" :to="item.link" target="_blank">
                  <i :class="item.icon"></i>
                </NuxtLink>
              </div>
              <div class="contact-form-section-img">
                <img src="~/assets/img/contact/contact-icon-sm-4.png" alt="image-here">
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-7 col-lg-6">
          <div class="contact-form-right-warp">
            <div class="postbox__comment-form">
              <form @click.prevent class="box">
                <div class="row gx-20">
                  <div class="col-12">
                    <div class="postbox__comment-input mb-30">
                      <input type="text" class="inputText" required>
                      <span class="floating-label">Full Name</span>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="postbox__comment-input mb-30">
                      <input type="text" class="inputText" required>
                      <span class="floating-label">Your Email</span>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="postbox__comment-input mb-35">
                      <input type="text" class="inputText" required>
                      <span class="floating-label">Phone Number</span>
                    </div>
                  </div>
                  <div class="col-xxl-12">
                    <div class="postbox__comment-input mb-30">
                      <textarea class="textareaText" required></textarea>
                      <span class="floating-label-2">Message...</span>
                    </div>
                  </div>
                  <div class="col-xxl-12">
                    <div class="postbox__btn-box">
                      <button class="submit-btn w-100">Send Message Now</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="contact-inner-area pb-130">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="contact-inner-title-sm-wrap text-center mb-50">
            <h4 class="contact-inner-title-sm"></h4>
            <p>We will contact again after receive your request in 24h</p>
          </div>
        </div>
      </div>
      <div class="contact-inner-wrapper">
        <div class="row gx-0">


          <div v-for="(item, i) in contact" :key="i" class="col-xl-4 col-lg-4">
            <div class="contact-inner-item d-flex align-items-center justify-content-center">
              <div class="contact-inner-img contact-img-1">
                <img :src="item.icon" alt="image-here">
              </div>
              <div class="contact-inner-link">
                <a :href="item.link">{{ item.title }}</a>
              </div>
            </div>
          </div> 

        </div>
      </div>
    </div>
  </div>
</template>

 