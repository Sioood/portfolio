<script setup lang="ts">
import { ScrollSmoother } from 'gsap/ScrollSmoother'

onBeforeMount(() => {
  useGSAP().registerPlugin(ScrollSmoother)

  // Use <Teleport to="#teleports"> for fixed elements
  ScrollSmoother.create({
    smooth: 0.1,
    effects: true,
  })
})
</script>

<template id="2">
  <NuxtLayout>
    {{ $t('hellWorld') }}
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@reference '~ui/assets/css/main.css';

body {
  @apply bg-background;
}
</style>
