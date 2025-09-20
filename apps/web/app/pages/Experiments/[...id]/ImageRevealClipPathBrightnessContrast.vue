<script setup lang="ts">
import { Pane, ListBladeApi } from 'tweakpane'

const { t } = useI18n()

const mockGallery = [
  'https://images.unsplash.com/photo-1624344965182-f659bb1f510a?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1533134663120-ec7e68d56494?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1630156335387-f9bffcc38a81?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1758208974063-01fd3b05f7fb?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1627436712699-57a17c974615?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1757877101482-b6934cede6cb?q=80&w=2101&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1740829707989-eca7b2ee18f9?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]

const showExperiment = ref(true)

const { $Tweakpane } = useNuxtApp()
const tweakParams = reactive({
  delay: 0,
  duration: 1.6,
  stagger: 0.02,
  brightness: 4,
  contrast: 2.5,
  blur: 1,
  scaleX: 1,
  scaleY: 1.2,
  clipPath: { from: 'circle(0% at 50% 50%)', to: 'circle(100% at 50% 50%)' },
  actions: {
    onReload: () => {
      showExperiment.value = false
      nextTick(() => {
        showExperiment.value = true
      })
    },
  },
})

let pane: Pane
onMounted(() => {
  const wrapper = document.getElementById('tweakpane')
  if (wrapper?.firstElementChild) return

  pane = new $Tweakpane({
    container: document.getElementById('tweakpane')!,
  })

  const wrapperFolder = pane.addFolder({
    title: 'Tweak it',
    expanded: false,
  })

  wrapperFolder.addBinding(tweakParams, 'delay', {
    min: 0,
    max: 15,
    step: 0.1,
  })
  wrapperFolder.addBinding(tweakParams, 'duration', {
    min: 0,
    max: 15,
    step: 0.1,
  })

  wrapperFolder.addBinding(tweakParams, 'stagger', {
    min: 0,
    max: 1,
    step: 0.1,
  })

  wrapperFolder.addBlade({
    view: 'separator',
  })

  wrapperFolder.addBinding(tweakParams, 'brightness', {
    min: 1,
    max: 100,
    step: 0.1,
  })
  wrapperFolder.addBinding(tweakParams, 'contrast', {
    min: 1,
    max: 100,
    step: 0.1,
  })
  wrapperFolder.addBinding(tweakParams, 'blur', {
    min: 0,
    max: 100,
    step: 0.1,
  })

  wrapperFolder.addBinding(tweakParams, 'scaleY', {
    min: 0,
    max: 2,
    step: 0.1,
  })
  wrapperFolder.addBinding(tweakParams, 'scaleX', {
    min: 0,
    max: 2,
    step: 0.1,
  })

  const clipPath = wrapperFolder.addBlade({
    view: 'list',
    label: 'clip-path',
    options: [
      { text: 'circle', value: { from: 'circle(0% at 50% 50%)', to: 'circle(100% at 50% 50%)' } },
      { text: 'from bottom to top', value: { from: 'polygon(0 95%, 100% 100%, 100% 100%, 0% 100%)', to: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)' } },
      {
        text: 'cross',
        value: {
          from: 'polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%)',
          to: 'polygon(0% 25%, 0% 0%, 35% 0%, 65% 0%, 100% 0%, 100% 25%, 100% 50%, 100% 100%, 65% 100%, 35% 100%, 0% 100%, 0% 50%)',
        },
      },
    ],
    value: 'circle',
  }) as ListBladeApi<{ from: string; to: string }>
  clipPath.on('change', (ev) => {
    tweakParams.clipPath = ev.value
  })

  wrapperFolder.addBlade({
    view: 'separator',
  })
  const reloadBtn = wrapperFolder.addButton({
    title: 'Reload',
  })
  reloadBtn.on('click', tweakParams.actions.onReload)
})

onBeforeUnmount(() => {
  pane?.dispose()
})

useHead({
  title: () => `${t('experiments:expId', { id: '001' })} - ${t('experiments:imageRevealClipPathBrightnessContrast.title')}`,
})
</script>

<template>
  <div class="mt-10 flex flex-col p-12">
    <div class="mb-10 flex flex-col items-center gap-2">
      <h1 class="font-secondary text-[3rem] font-light italic">{{ $t('experiments:imageRevealClipPathBrightnessContrast.title') }}</h1>
      <p class="text-neutral-700">{{ $t('experiments:imageRevealClipPathBrightnessContrast.description') }}</p>
    </div>
    <ul
      v-if="showExperiment"
      v-gsap.stagger.fromTo="[
        {
          clipPath: tweakParams.clipPath.from,
          filter: `brightness(${tweakParams.brightness}) contrast(${tweakParams.contrast}) blur(${tweakParams.blur}px)`,
          scaleY: tweakParams.scaleY,
          scaleX: tweakParams.scaleX,
          y: 25,
        },
        {
          delay: tweakParams.delay,
          duration: tweakParams.duration,
          ease: 'expo.out',
          stagger: tweakParams.stagger,
          clipPath: tweakParams.clipPath.to,
          filter: 'brightness(1) contrast(1) blur(0px)',
          scaleY: 1,
          scaleX: 1,
          y: 0,
        },
      ]"
      class="grid grid-cols-[repeat(auto-fill,minmax(max(300px,25vw),1fr))] gap-12"
    >
      <li v-for="src in mockGallery" :key="src" class="flex aspect-16/9 size-full bg-neutral-900">
        <NuxtImg class="size-full object-cover" format="webp" :src="src" />
      </li>
    </ul>
  </div>
</template>
