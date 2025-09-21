<script setup lang="ts">
const props = defineProps<{ title: string; description?: string }>()
</script>

<template>
  <div class="mt-10 flex w-full flex-col items-center p-12">
    <div class="mb-20 flex flex-col items-center gap-2 lg:w-2/3">
      <h1 class="font-secondary text-[max(2.5rem,4vw)] font-light italic">{{ props.title }}</h1>
      <p v-if="props.description" class="text-xs text-neutral-700">{{ props.description }}</p>
    </div>

    <slot />
  </div>
</template>
