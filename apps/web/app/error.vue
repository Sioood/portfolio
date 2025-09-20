<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError,
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout>
    <div class="flex h-dvh flex-col items-center justify-center">
      <div class="relative flex items-center justify-center">
        <span class="absolute top-0 text-neutral-500">{{ error?.statusMessage }}</span>
        <h2 class="font-secondary text-[20vw] font-light text-neutral-900 italic">{{ error?.statusCode }}</h2>
        <h2 v-if="error?.statusCode === 404" class="text-secondary-500 absolute text-[1.5vw]">
          <pre>


  ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░
  ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░
  ░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░
  ░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░
         ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░
         ░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░
         ░▒▓█▓▒░▒▓████████▓▒░      ░▒▓█▓▒░
      </pre
          >
        </h2>

        <div class="bg-secondary-500/20 absolute z-[-1] aspect-square w-[50vw] translate-y-[1%] rounded-full blur-3xl" />
        <div class="bg-accent-500/20 absolute z-[-1] aspect-square w-[25vw] translate-y-[1%] rounded-full blur-3xl" />
      </div>
      <div class="inline-flex items-center justify-center">
        <UIButton @click="handleError">{{ $t('home') }}</UIButton>
      </div>
    </div>
  </NuxtLayout>
</template>
