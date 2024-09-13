
<script setup>
const menu_data = [
  // {
  //   id: 1,
  //   mega_menu: false,
  //   has_dropdown: true,
  //   title: "Home",
  //   link: "/",
  //   active: "active",
  //   sub_menus: [
  //     { link: "/", title: "Data anassslytics" },
  //     { link: "/home-2", title: "Payment Gateway" },
  //     { link: "/home-3", title: "CRM Software" },
  //     { link: "/home-4", title: "Security Software" },
  //     { link: "/home-5", title: "Saas" },
  //   ],
  // },

    {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/home-2",
    active: "",
  },
  // {
  //   id: 2,
  //   mega_menu: false,
  //   has_dropdown: true,
  //   title: "Pages",
  //   link: "/about",
  //   active: "",
  //   sub_menus: [
  //     { link: "/about", title: "About" },
  //     { link: "/service", title: "Service" },
  //     { link: "/service-details", title: "Service Details" },
  //     { link: "/team", title: "Team" },
  //     { link: "/team-details", title: "Team Details" },
  //     { link: "/career", title: "Career" },
  //     { link: "/career-details", title: "Career Details" },
  //     { link: "/integrations", title: "Integrations" },
  //     { link: "/price", title: "Price" },
  //     { link: "/register", title: "Register" },
  //     { link: "/sign-in", title: "Signin" },
  //     { link: "/404", title: "404" },
  //   ],
  // },
  
  // {
  //   id: 4,
  //   mega_menu: false,
  //   has_dropdown: true,
  //   title: "Blog",
  //   link: "/blog",
  //   active: "",
  //   sub_menus: [
  //     { link: "/blog", title: "Blog" },
  //     { link: "/blog-list", title: "Blog List" },
  //     { link: "/blog-details", title: "Blog Details" },
  //     { link: "/blog-details-2", title: "Blog Details 02" },
  //   ],
  // },
    {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "About",
    link: "/about",
    active: "",
  },
  // {
  //   id: 3,
  //   mega_menu: false,
  //   has_dropdown: true,
  //   title: "Projects",
  //   link: "/project",
  //   active: "",
  //   sub_menus: [
  //     { link: "/project", title: "Project" },
  //     { link: "/project-details", title: "Project Details" },
  //   ],
  // },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "",
  },
];

</script>


<template>
  <ul>
    <li v-for="(menu, index) in menu_data" :key="index">
      <NuxtLink :to="menu.link">{{ menu.title }}</NuxtLink>
      <ul v-if="menu.has_dropdown === true" class="submenu">
        <li v-for="(sub_menu, i) in menu.sub_menus" :key="i">
          <NuxtLink :to="sub_menu.link">{{ sub_menu.title }}</NuxtLink>
        </li>
      </ul>
    </li>
  </ul>
</template>
 