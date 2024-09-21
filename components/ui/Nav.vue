<script setup lang="ts">
const toggleTheme = () => {
  document.documentElement.classList.toggle('dark')
}
</script>

<template>
  <nav class="hidden w-full p-0.5 md:inline-flex justify-between">
    <div class="w-1/3 p-0.5 inline-flex justify-between gap-6">
      <ul class="inline-flex gap-2.5">
        <li>
          <UiLink to="/"><h6 class="font-medium uppercase">Theo Dupont</h6></UiLink>
        </li>
      </ul>

      <ul class="inline-flex gap-2.5">
        <li>
          <UiLink to="/#works" @click="$lenis.scrollTo('#works')"><h6 class="font-medium uppercase">Works</h6></UiLink>
        </li>
        <li>
          <UiLink to="/experiment"><h6 class="font-medium uppercase">Experiments</h6></UiLink>
        </li>
        <li>
          <UiLink to="/#contact" @click="$lenis.scrollTo('#contact')"><h6 class="font-medium uppercase">Contact</h6></UiLink>
        </li>
      </ul>
    </div>

    <ul class="inline-flex gap-2.5">
      <li id="theme-switcher" class="p-1">
        <UiButton @click="toggleTheme" variant="ghost"> <h6 class="font-medium uppercase">Dark</h6></UiButton>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/* #theme-switcher {
  box-shadow: 0 0 0rem 0rem black;
  transition: box-shadow 0.3s ease-in-out;
}

#theme-switcher:hover {
  background: #000;
  color: #919191;
  box-shadow: 0 0 100rem 50rem black;
} */
</style>
