<script setup lang="ts">
import { useMouse } from '@vueuse/core'
const cursorRef = ref<HTMLDivElement | null>(null)

const { x, y } = useMouse()

const { text } = extractStore(useCursorStore())
</script>

<template>
  <Teleport to="#teleports">
    <div
      ref="cursorRef"
      v-gsap.from="{ autoAlpha: 0 }"
      class="pointer-events-none absolute z-[999] flex -translate-y-1/2 items-center justify-center text-neutral-100 mix-blend-difference"
      :style="{ top: `${y}px`, left: `${x}px` }"
    >
      <span v-if="text !== ''" v-gsap.animateText class="ml-2">{{ text }}</span>
      <span class="block aspect-[9/16] h-[1rem] translate-y-[-0.05rem] bg-neutral-100" />
    </div>
  </Teleport>
</template>
