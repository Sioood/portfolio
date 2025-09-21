<script setup lang="ts">
const props = defineProps<{ images: { src: string; alt: string; caption?: string }[] }>()
</script>

<template>
  <ul class="grid grid-cols-[repeat(auto-fill,minmax(max(250px,17.5vw),1fr))] gap-[5vw]">
    <li v-for="image in props.images" :key="image.src" class="flex size-full flex-col gap-1">
      <NuxtImg :src="image.src" :alt="image.alt" class="w-full object-cover" format="webp" />
      <span v-if="image.caption" class="w-full text-right text-sm text-neutral-500">{{ image.caption }}</span>
    </li>
  </ul>
</template>
