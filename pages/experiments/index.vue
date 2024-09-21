<template>
  <main class="w-full h-full flex flex-col items-center">
    <div class="w-full min-h-[95vh] grid grid-rows-5 grid-cols-[repeat(12,minmax(0,1fr))] gap-4">
      <div v-for="item in 50" :key="item" class="w-full h-full bg-surface"></div>
    </div>
  </main>
</template>
