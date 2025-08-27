<script setup lang="ts">
const toggleTheme = () => document.documentElement.classList.toggle('dark')
</script>

<template>
  <nav class="hidden w-full p-0.5 md:inline-flex justify-between">
    <div class="w-1/3 p-0.5 inline-flex justify-between gap-6">
      <ul class="inline-flex gap-2.5">
        <li>
          <UILink to="#" #default="{ isLinkButton }">
            <UIButton size="sm" :isLinkButton="isLinkButton" class="uppercase">Theo Dupont</UIButton>
          </UILink>
        </li>
      </ul>

      <ul class="inline-flex gap-2.5">
        <li>
          <UILink to="#" #default="{ isLinkButton }">
            <UIButton size="sm" :isLinkButton="isLinkButton">Works</UIButton>
          </UILink>
        </li>
        <li>
          <UILink to="#" #default="{ isLinkButton }">
            <UIButton size="sm" :isLinkButton="isLinkButton">Experiments</UIButton>
          </UILink>
        </li>
        <li>
          <UILink to="#" #default="{ isLinkButton }">
            <UIButton size="sm" :isLinkButton="isLinkButton">Contact</UIButton>
          </UILink>
        </li>
      </ul>
    </div>

    <ul class="inline-flex gap-2.5">
      <li id="theme-switcher" class="p-1">
        <UIButton @click="toggleTheme" size="sm" class="uppercase">Dark</UIButton>
      </li>
    </ul>
  </nav>
</template>
