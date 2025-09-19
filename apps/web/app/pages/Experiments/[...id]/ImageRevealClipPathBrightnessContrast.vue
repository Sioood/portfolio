<script setup lang="ts">
const { t } = useI18n()

const mockGallery = [
  'https://images.unsplash.com/photo-1624344965182-f659bb1f510a?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1533134663120-ec7e68d56494?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1630156335387-f9bffcc38a81?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1758208974063-01fd3b05f7fb?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1627436712699-57a17c974615?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1757877101482-b6934cede6cb?q=80&w=2101&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1740829707989-eca7b2ee18f9?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]

useHead({
  title: () => t('experiments:imageRevealClipPathBrightnessContrast.title'),
})
</script>

<template>
  <div class="mt-10 flex flex-col p-12">
    <div class="mb-10 flex flex-col gap-2">
      <h1 class="font-secondary text-[3rem] font-light italic">{{ $t('experiments:imageRevealClipPathBrightnessContrast.title') }}</h1>
      <p class="text-neutral-700">{{ $t('experiments:imageRevealClipPathBrightnessContrast.description') }}</p>
    </div>
    <ul
      v-gsap.stagger.fromTo="[
        { clipPath: 'polygon(0 95%, 100% 100%, 100% 100%, 0% 100%)', filter: 'brightness(4) contrast(2.5) blur(1px)', scale: '1.1', y: 25 },
        {
          duration: 1.6,
          ease: 'expo.out',
          stagger: 0.02,
          clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)',
          filter: 'brightness(1) contrast(1) blur(0px)',
          scale: '1',
          y: 0,
        },
      ]"
      class="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-12"
    >
      <!-- !transition-[clip-path,filter,scale] ease-[cubic-bezier(0.15,0,0.65,1)] -->
      <li v-for="src in mockGallery" :key="src" class="flex aspect-16/9 size-full bg-neutral-900">
        <NuxtImg class="size-full object-cover" format="webp" :src="src" />
      </li>
    </ul>
  </div>
</template>
