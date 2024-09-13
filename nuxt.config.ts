// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	app: {
    head: {
      title: "Nextroot Solutions Limited",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        {
         
        },
      ],
    }
  },
	css: [
		"~/assets/css/font-awesome-pro.css",
		"swiper/css/bundle",	
		
		"~/assets/css/spacing.css",
		"~/assets/css/nice-select.css",
		"~/assets/css/animate.css",
		"~/assets/css/custom-animation.css",
		"~/assets/css/flaticon.css",
		
		"~/assets/css/meanmenu.css",		
		"bootstrap/scss/bootstrap.scss",
		"~/assets/scss/main.scss",

	],
});
