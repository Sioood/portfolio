<script setup lang="ts">
const props = defineProps<{
  work: Work
}>()

const { visible, text: cursorText } = extractStore(useCursorStore())

const year = computed(() => Number(props.work.date.split('-')[0] || props.work.date))
</script>

<template>
  <div class="relative flex w-full flex-col items-center justify-center overflow-hidden py-[15dvh]">
    <UILink
      :to="`/work/${props.work.slug}`"
      class="flex w-[90%] flex-col items-center justify-center gap-1 active:scale-97 lg:w-2/5 2xl:w-2/7"
      @mouseenter="((visible = true), (cursorText = `${props.work.title}, ${year}`))"
      @mouseleave="((visible = false), (cursorText = ''))"
      @click="((visible = false), (cursorText = ''))"
    >
      <span class="w-full text-right">{{ String(work.id).padStart(3, '0') }}</span>

      <NuxtImg
        :src="work.preview?.src || work.leftImage?.src"
        :alt="work.preview?.alt || `${props.work.title}, ${Number(work.date.split('-')[0] || work.date)}`"
        class="size-full object-cover"
        format="webp"
      />

      <div class="inline-flex w-full justify-between gap-2">
        <span class="truncate">{{ work.title }}</span>
        <span>
          {{ year }}
        </span>
      </div>
    </UILink>
  </div>
</template>
