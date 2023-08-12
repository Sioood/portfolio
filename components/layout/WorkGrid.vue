<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
  },
  date: {
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
  <!-- 3 -->
  <div
    v-if="props.items?.length === 3 && props.variant === '1'"
    class="p-2 w-full min-h-screen grid grid-rows-5 grid-cols-[repeat(12,minmax(0,1fr))] gap-2"
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

  <!-- 2 -->
  <div
    v-if="props.items?.length === 2 && props.variant === '1'"
    class="p-2 w-full min-h-screen grid grid-rows-5 grid-cols-[repeat(12,minmax(0,1fr))] gap-2"
  >
    <div
      class="w-full h-[130%] bg-surface col-start-2 col-end-8 row-start-2 row-end-4"
    ></div>

    <div
      class="w-full h-full bg-surface col-start-9 col-end-12 row-start-3 row-end-5"
    ></div>

    <div
      class="w-full h-full flex items-end justify-center col-start-4 col-end-9 row-start-4 row-end-5"
    >
      <h2 class="text-4xl italic">Project name <sup>2000</sup></h2>
    </div>
  </div>

  <div
    v-if="props.items?.length === 2 && props.variant === '2'"
    class="p-2 w-full min-h-screen grid grid-rows-5 grid-cols-[repeat(12,minmax(0,1fr))] gap-2"
  >
    <div
      class="w-full h-full bg-surface col-start-1 col-end-10 row-start-1 row-end-5"
    ></div>

    <div
      class="w-full h-full bg-surface col-start-8 col-end-11 row-start-4 row-end-5"
    ></div>

    <div
      class="w-full h-full flex items-end justify-center col-start-2 col-end-9 row-start-2 row-end-3"
    >
      <h2 class="text-4xl italic">Project name <sup>2000</sup></h2>
    </div>
  </div>

  <!-- 1 -->
  <div
    v-if="props.items?.length === 1 && props.variant === '1'"
    class="p-2 w-full min-h-screen grid grid-rows-5 grid-cols-[repeat(12,minmax(0,1fr))] gap-2"
  >
    <div
      class="w-full h-full bg-surface col-start-2 col-end-10 row-start-2 row-end-4"
    ></div>

    <div
      class="w-full h-full flex items-end justify-center col-start-8 col-end-12 row-start-4 row-end-5"
    >
      <h2 class="text-4xl italic">Project name <sup>2000</sup></h2>
    </div>
  </div>

  <div
    v-if="props.items?.length === 1 && props.variant === '2'"
    class="p-2 w-full min-h-screen grid grid-rows-5 grid-cols-[repeat(12,minmax(0,1fr))] gap-2"
  >
    <div
      class="w-full h-full bg-surface col-start-5 col-end-7 row-start-1 row-end-6"
    ></div>

    <div
      class="w-full h-full flex items-end justify-center col-start-6 col-end-10 row-start-3 row-end-4"
    >
      <h2 class="text-4xl italic">Project name <sup>2000</sup></h2>
    </div>
  </div>
</template>
