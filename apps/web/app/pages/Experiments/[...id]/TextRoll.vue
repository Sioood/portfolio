<script setup lang="ts">
const { t } = useI18n()

const text = ref(
  '<!DOCTYPE html><html><head><title>Siod</title><script>function to(text) { if (!text) return "" const bytes = new TextEncoder().encode(text) return Array.from(bytes) .map((byte) => String.fromCodePoint(0xe0000 + byte)) .join("")}function from(text, { only = false } = {}) { if (!text) return "" let characters = [...text] if (only) { const chars = [...text].filter((ch) => { const cp = ch.codePointAt(0) ?? 0 return cp >= 0xe0000 && cp <= 0xe00ff }) characters = chars } const bytes = Uint8Array.from( characters.map((ch) => (ch.codePointAt(0) ?? 0) - 0xe0000) ) return new TextDecoder().decode(bytes)}function encodeInput() { const input = document.getElementById("input").value const result = to(input) document.getElementById("output").textContent = result navigator.clipboard.writeText(result).then(() => { console.log("Copied to clipboard") }).catch(err => { console.error("Failed to copy: ", err) })}function decodeInput() { const input = document.getElementById("input").value const result = from(input) document.getElementById("output").textContent = result}<script></head><body><textarea id="input"></textarea><button onclick="encodeInput()">input</button><button onclick="decodeInput()">output</button><pre id="output"></pre></body></html>',
)

const title = ref('textroller')
onMounted(() => {
  setInterval(() => {
    title.value = title.value.slice(-1) + title.value.slice(0, -1)
  }, 150)

  setInterval(() => {
    text.value = text.value.slice(-1) + text.value.slice(0, -1)
  }, 30)
})

useHead({
  title: () => `${t('experiments:expId', { id: '002' })} - ${title.value}`,
})
</script>

<template>
  <div class="mt-10 flex flex-col p-12">
    <div class="flex w-full flex-col items-center">
      <h1 class="font-secondary text-[3rem] font-light italic">{{ title }}</h1>
    </div>
    <div class="relative flex w-full flex-col items-center justify-center">
      <pre class="z-10 w-full text-[2vw] break-all whitespace-pre-wrap text-neutral-100 mix-blend-difference">{{ text }}</pre>

      <div class="bg-secondary-500 absolute aspect-square w-[500px] rounded-full blur-3xl" />
    </div>
  </div>
</template>
