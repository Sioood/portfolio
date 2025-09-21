<script setup lang="ts">
import type { Experiment } from '~/stores/experiment'
const props = defineProps<Experiment>()
</script>

<template>
  <div class="flex size-full flex-col gap-3">
    <div class="relative flex size-full items-center justify-center bg-neutral-900">
      <NuxtImg v-if="props.preview" :src="props.preview" class="size-full object-cover" format="webp" />
    </div>
    <span class="truncate text-xs">
      {{ String(props.id).padStart(3, '0') }}

      <span v-if="props.caption"> — {{ props.caption }}</span>
    </span>
  </div>
</template>
