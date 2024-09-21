<script setup lang="ts">
import gsap from 'gsap'

const props = defineProps<{
  id: string
  name: string
  date: string
  items: {
    url: string
    alt: string
  }[]
  variant: string
}>()

onMounted(() => {
  document.querySelectorAll('[data-split-text]').forEach((element) => {
    useSplitText(element as HTMLElement)

    const characters = element.querySelectorAll('.split-character')

    gsap.set(characters, {
      yPercent: -100,
    })

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio === 1) {
          gsap.to(characters, {
            yPercent: 0,
            duration: 0.5,
            ease: 'power3.easeOut',
            stagger: {
              each: 0.05,
            },
          })
        }
      })
    }

    let options = {
      rootMargin: '-250px',
      threshold: 1.0,
    }

    let observer = new IntersectionObserver(callback, options)

    observer.observe(element)
  })
})

defineEmits(['transition'])
</script>

<template>
  <UiLink
    v-if="props.items?.length === 3 && props.variant === '1'"
    @click="$emit('transition', $event)"
    :to="`/work/${props.id}`"
    variant="ghost"
    class="w-full h-full"
  >
    <div :data-flip-wrapper="props.id" class="p-2 w-full h-screen grid grid-rows-5 grid-cols-[repeat(12,minmax(0,1fr))] gap-2">
      <div class="w-full h-full bg-surface col-start-9 col-end-11 row-start-1 row-end-5">
        <img class="w-full h-full object-cover" :src="items[1].url" :alt="items[1].alt" />
      </div>

      <div :data-flip-id="props.id" class="z-[2] w-full h-full bg-surface col-start-2 col-end-6 row-start-2 row-end-4">
        <img class="w-full h-full object-cover" :src="items[0].url" :alt="items[0].alt" />
      </div>

      <div class="w-full h-full flex items-end justify-start col-start-6 col-end-10 row-start-3 row-end-4">
        <h2 class="text-4xl leading-tight italic">
          {{ props.name }}
          <sup data-split-text class="p-1 inline-flex leading-none overflow-hidden">{{ props.date }}</sup>
        </h2>
      </div>

      <div class="w-full h-[150%] bg-surface col-start-5 col-end-7 row-start-4 row-end-5">
        <img class="w-full h-full object-cover" :src="items[2].url" :alt="items[2].alt" />
      </div>
    </div>
  </UiLink>

  <UiLink
    v-if="props.items?.length === 2 && props.variant === '1'"
    @click="$emit('transition', $event)"
    :to="`/work/${props.id}`"
    variant="ghost"
    class="w-full h-full"
  >
    <div :data-flip-wrapper="props.id" class="p-2 w-full h-screen grid grid-rows-5 grid-cols-[repeat(12,minmax(0,1fr))] gap-2">
      <div class="w-full h-[130%] bg-surface col-start-2 col-end-8 row-start-2 row-end-4">
        <img class="w-full h-full object-cover" :src="items[0].url" :alt="items[0].alt" />
      </div>

      <div :data-flip-id="props.id" class="w-full h-full bg-surface col-start-9 col-end-12 row-start-3 row-end-5">
        <img class="w-full h-full object-cover" :src="items[1].url" :alt="items[1].alt" />
      </div>

      <div class="w-full h-full flex items-end justify-start col-start-5 col-end-9 row-start-4 row-end-5">
        <h2 class="text-4xl leading-tight italic">
          {{ props.name }}
          <sup data-split-text class="p-1 inline-flex leading-none overflow-hidden">{{ props.date }}</sup>
        </h2>
      </div>
    </div>
  </UiLink>

  <UiLink
    v-if="props.items?.length === 2 && props.variant === '2'"
    @click="$emit('transition', $event)"
    :to="`/work/${props.id}`"
    variant="ghost"
    class="w-full h-full"
  >
    <div :data-flip-wrapper="props.id" class="p-2 w-full h-screen grid grid-rows-5 grid-cols-[repeat(12,minmax(0,1fr))] gap-2">
      <div class="w-full h-full bg-surface col-start-1 col-end-10 row-start-1 row-end-5">
        <img class="w-full h-full object-cover" :src="items[0].url" :alt="items[0].alt" />
      </div>

      <div :data-flip-id="props.id" class="w-full h-full bg-surface col-start-8 col-end-11 row-start-4 row-end-5">
        <img class="w-full h-full object-cover" :src="items[1].url" :alt="items[1].alt" />
      </div>

      <div class="w-full h-full flex items-end justify-start col-start-4 col-end-8 row-start-2 row-end-3">
        <h2 class="text-4xl leading-tight italic">
          {{ props.name }}
          <sup data-split-text class="p-1 inline-flex leading-none overflow-hidden">{{ props.date }}</sup>
        </h2>
      </div>
    </div>
  </UiLink>

  <UiLink
    v-if="props.items?.length === 1 && props.variant === '1'"
    @click="$emit('transition', $event)"
    :to="`/work/${props.id}`"
    variant="ghost"
    class="w-full h-full"
  >
    <div :data-flip-wrapper="props.id" class="p-2 w-full h-screen grid grid-rows-5 grid-cols-[repeat(12,minmax(0,1fr))] gap-2">
      <div :data-flip-id="props.id" class="w-full h-full bg-surface col-start-2 col-end-10 row-start-2 row-end-4">
        <img class="w-full h-full object-cover" :src="items[0].url" :alt="items[0].alt" />
      </div>

      <div class="w-full h-full flex items-end justify-start col-start-8 col-end-12 row-start-4 row-end-5">
        <h2 class="text-4xl leading-tight italic">
          {{ props.name }}
          <sup data-split-text class="p-1 inline-flex leading-none overflow-hidden">{{ props.date }}</sup>
        </h2>
      </div>
    </div>
  </UiLink>

  <UiLink
    v-if="props.items?.length === 1 && props.variant === '2'"
    @click="$emit('transition', $event)"
    :to="`/work/${props.id}`"
    variant="ghost"
    class="w-full h-full"
  >
    <div :data-flip-wrapper="props.id" class="p-2 w-full h-screen grid grid-rows-5 grid-cols-[repeat(12,minmax(0,1fr))] gap-2">
      <div :data-flip-id="props.id" class="w-full h-full bg-surface col-start-5 col-end-7 row-start-1 row-end-6">
        <img class="w-full h-full object-cover" :src="items[0].url" :alt="items[0].alt" />
      </div>

      <div class="w-full h-full flex items-end justify-start col-start-6 col-end-10 row-start-3 row-end-4">
        <h2 class="text-4xl leading-tight italic">
          {{ props.name }}
          <sup data-split-text class="p-1 inline-flex leading-none overflow-hidden">{{ props.date }}</sup>
        </h2>
      </div>
    </div>
  </UiLink>
</template>
