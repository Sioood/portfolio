<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
  },
  data: {
    type: String,
  },
  items: {
    type: Array,
  },
  variant: {
    type: String,
  },
});
</script>

<template>
  <!-- v-if ="items.length === 3" -->
  <div
    class="p-2 min-h-screen grid grid-rows-5 grid-cols-[repeat(12,minmax(0,1fr))] gap-2 border"
  >
    <div
      class="w-full h-full bg-surface col-start-9 col-end-11 row-start-1 row-end-5"
    ></div>

    <div
      class="w-full h-full bg-surface col-start-2 col-end-6 row-start-2 row-end-4"
    ></div>

    <div
      class="w-full h-full flex items-end justify-center col-start-6 col-end-9 row-start-3 row-end-4"
    >
      <h2 class="text-4xl italic">Project name <sup>2000</sup></h2>
    </div>

    <div
      class="w-full h-[150%] bg-surface col-start-5 col-end-7 row-start-4 row-end-5"
    ></div>
  </div>
</template>
