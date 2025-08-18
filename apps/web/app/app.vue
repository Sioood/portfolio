<template>
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
