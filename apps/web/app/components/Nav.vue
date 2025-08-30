<script setup lang="ts">
const toggleTheme = () => document.documentElement.classList.toggle('dark')
</script>

<template>
  <nav class="hidden w-full justify-between p-0.5 md:inline-flex">
    <div class="inline-flex w-1/3 justify-between gap-6 p-0.5">
      <ul class="inline-flex gap-2.5">
        <li>
          <UILink v-slot="{ isLinkButton }" to="#">
            <UIButton size="md" :is-link-button="isLinkButton" class="uppercase">Theo Dupont</UIButton>
          </UILink>
        </li>
      </ul>

      <ul class="inline-flex gap-2.5">
        <li>
          <UILink v-slot="{ isLinkButton }" to="#">
            <UIButton size="md" :is-link-button="isLinkButton">Works</UIButton>
          </UILink>
        </li>
        <li>
          <UILink v-slot="{ isLinkButton }" to="#">
            <UIButton size="md" :is-link-button="isLinkButton">Experiments</UIButton>
          </UILink>
        </li>
        <li>
          <UILink v-slot="{ isLinkButton }" to="#">
            <UIButton size="md" :is-link-button="isLinkButton">Contact</UIButton>
          </UILink>
        </li>
      </ul>
    </div>

    <ul class="inline-flex gap-2.5">
      <li id="theme-switcher" class="p-1">
        <UIButton size="md" class="uppercase" @click="toggleTheme">Dark</UIButton>
      </li>
    </ul>
  </nav>
</template>
