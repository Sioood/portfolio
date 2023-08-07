<script setup lang="ts">
const config = useRuntimeConfig();

const route = useRoute();

const titleTemplate = () => {
  return route.meta.title
    ? `${route.meta.title} — TITLE`
    : "TITLE — Référencer l'art, partager l'information.";
};

const descriptionTemplate = () => {
  return route.meta.description
    ? route.meta.description
    : "Référencer l'art, partager l'information. Partager, découvrir, s'inspirer, pour tous, par tous et au même endroit.";
};

const imageTemplate = () => {
  return route.meta.image
    ? `custom image`
    : `default image`;
};

const routeTemplate = () => {
  return `${config.public.siteUrl}${route.fullPath}`;
};

/**
 * SEO
 */
useHead({
  title: titleTemplate,
  htmlAttrs: {
    lang: "fr",
  },
  link: [
    // {
    //   rel: "preconnect",
    //   href: "https://fonts.googleapis.com",
    // },
    {
      rel: "canonical",
      href: routeTemplate,
    },
  ],
  // this avoid the flickering of the theme because is set before the app is mounted
  // FORCE DARK MODE for the moment to support a light mode later
  script: [
    // {
    //   children: `document.documentElement.classList.add('${config.public.theme}');`,
    // },
  ],
});

useSeoMeta({
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1",
  title: titleTemplate,
  ogTitle: titleTemplate,
  description: descriptionTemplate,
  ogDescription: descriptionTemplate,
  author: "theodupontpro@gmail.com",
  creator: "",
  ogType: "website",
  ogUrl: routeTemplate,
  ogImage: imageTemplate,
  twitterCard: "summary_large_image",
  twitterTitle: titleTemplate,
  twitterDescription: descriptionTemplate,
  twitterImage: imageTemplate,
  twitterImageAlt: `og image for ${routeTemplate()}`,
  twitterSite: "",
  twitterCreator: "",
});

/**
 * LENIS SCROLL
 */

const { $lenis } = useNuxtApp();

onMounted(() => {
  function raf(time) {
    $lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
