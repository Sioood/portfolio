<script setup lang="ts">
// https://www.npmjs.com/package/js-confetti
import JSConfetti from 'js-confetti'

const jsConfetti = ref()
const canvasRef = ref()

const fireConfetti = () => {
  jsConfetti.value.addConfetti({
    emojis: ['🔥'],
    emojiSize: 100,
  })

  jsConfetti.value.addConfetti({
    emojis: ['hell', 'world'],
    emojiSize: 50,
  })
}

onMounted(() => {
  jsConfetti.value = new JSConfetti({
    canvas: canvasRef.value,
  })

  fireConfetti()
})

onUnmounted(() => {
  jsConfetti.value.clearCanvas()
})
</script>

<template>
  <div>
    <canvas class="absolute top-0 left-0 w-full h-full pointer-events-none" ref="canvasRef"></canvas>
    <div @click="fireConfetti()" class="cursor-pointer select-none">
      <slot />
    </div>
  </div>
</template>
