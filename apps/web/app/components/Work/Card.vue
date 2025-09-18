<script setup lang="ts">
import { cva, type VariantProps } from 'class-variance-authority'

const imageList = cva('imageList', {
  variants: {
    overflow: {
      hidden: 'overflow-hidden',
      visible: 'overflow-visible',
    },
    gap: {
      sm: 'gap-4',
      md: 'gap-8',
    },
  },
})

type ImageListProps = VariantProps<typeof imageList>

const image = cva('image', {
  variants: {
    rounded: {
      't-full': 'rounded-t-full',
      full: 'rounded-full',
    },
    aspect: {
      default: 'size-full',
      '16/9': 'w-full aspect-16/9',
      '9/16': 'h-full aspect-9/16',
    },
  },
})

type ImageProps = VariantProps<typeof image>

interface Work {
  slug: string
  title: string
  year: number
  images: { src: string; alt?: string }[]
}
const props = withDefaults(
  defineProps<{
    data: Work
    ui?: {
      imageList?: ImageListProps
      image?: ImageProps
    }
  }>(),
  {
    ui: () => ({
      imageList: {
        overflow: 'hidden',
      },
      image: {
        aspect: 'default',
      },
    }),
  },
)

const { visible, text: cursorText } = extractStore(useCursorStore())
</script>

<template>
  <div class="relative flex h-screen w-full flex-col items-center justify-center gap-8 overflow-hidden md:gap-[0]">
    <UILink
      :to="`/work/${props.data.slug}`"
      class="flex h-1/2 w-3/5 items-center justify-center active:scale-97"
      :class="imageList(props.ui.imageList)"
      @mouseenter="((visible = true), (cursorText = `${props.data.title}, ${props.data.year}`))"
      @mouseleave="((visible = false), (cursorText = ''))"
    >
      <div v-for="img in props.data.images" :key="img.src" class="flex overflow-hidden" :class="image(props.ui.image)">
        <NuxtImg :src="img.src" :alt="img?.alt || `${props.data.title}, ${props.data.year}`" class="size-full object-cover" format="webp" />
      </div>
    </UILink>

    <UILink
      v-gsap.parallax.slower-10
      :to="`/work/${props.data.slug}`"
      class="inline-flex w-full items-center justify-between px-8 text-lg text-neutral-100 mix-blend-difference active:scale-97 md:absolute"
    >
      <span>{{ props.data.title }}</span>
      <span data-split-text>{{ props.data.year }}</span>
    </UILink>
  </div>
</template>
