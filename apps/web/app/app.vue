<script setup lang="ts">
// import { ScrollSmoother } from 'gsap/ScrollSmoother'

// onBeforeMount(() => {
// useGSAP().registerPlugin(ScrollSmoother)

// Use <Teleport to="#teleports"> for fixed elements
// const scrollSmoother = ScrollSmoother.create({
//   smooth: 0.6,
//   effects: true,
// })

// provide('scrollSmoother', scrollSmoother)
// })

const runtimeConfig = useRuntimeConfig()

useHead({
  script: [
    {
      src: runtimeConfig.public.rybbitSrc as string,
      async: true,
      defer: true,
      'data-site-id': runtimeConfig.public.rybbitSiteId as string | undefined,
      'data-track-errors': true,
    },
  ],
})

const { t } = useI18n()

defineOgImageComponent('Default', {
  title: document?.title || `${t('firstname')} ${t('lastname')}`,
  theme: 'rgb(255, 138, 0)',
})
</script>

<template id="2">
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@reference '~ui/assets/css/main.css';

body {
  @apply bg-background;
}
</style>
