<script setup lang="ts">
const { type, visible } = extractStore(useCursorStore())
</script>

<template>
  <div>
    <Teleport to="#teleports">
      <!-- Need to find a workaround with gsap and scrollSmoother for sticky, like pinned or something -->
      <header class="fixed top-0 z-[666] w-full">
        <Nav></Nav>
        <div class="z-[99999] m-2 flex justify-end">
          <div id="tweakpane" class="w-fit" />
        </div>
      </header>
    </Teleport>

    <template v-if="visible">
      <CursorTypewriter v-if="type === 'typewriter'" />
    </template>

    <slot />
  </div>
</template>
