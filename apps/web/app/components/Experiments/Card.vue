<script setup lang="ts">
import type { Experiment } from '~/stores/experiment'
const props = defineProps<Experiment>()
</script>

<template>
  <div class="relative flex size-full items-center justify-center bg-neutral-900">
    <span class="font-secondary absolute bottom-0 z-10 text-[5rem] font-light text-neutral-100 italic mix-blend-difference">{{
      String(props.id).padStart(3, '0')
    }}</span>
    <NuxtImg v-if="props.preview" :src="props.preview" class="size-full object-cover" format="webp" />
  </div>
</template>
