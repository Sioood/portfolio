<script setup lang="ts">
import { cva, type VariantProps } from 'class-variance-authority'

const badgeText = cva('badgeText', {
  variants: {
    intent: {
      primary: 'text-neutral-900',
      secondary: 'text-neutral-200',
    },
  },
})

type BadgeTextProps = VariantProps<typeof badgeText>

const badgeBackground = cva('badgeBackground', {
  variants: {
    intent: {
      plain: 'border border-neutral-900 bg-neutral-900',
      border: 'border border-neutral-900',
      blurred: 'border border-neutral-900 bg-neutral-900 blur-[2px]',
    },
    rounded: {
      all: 'rounded-2xl',
      drop: 'rounded-r-2xl rounded-bl-2xl',
    },
  },
})

type BadgeBackgroundProps = VariantProps<typeof badgeBackground>

const props = withDefaults(
  defineProps<{
    is?: string
    text: string
    ui?: {
      text: {
        intent?: BadgeTextProps['intent']
      }
      background: {
        intent?: BadgeBackgroundProps['intent']
        rounded?: BadgeBackgroundProps['rounded']
      }
    }
  }>(),
  {
    is: 'div',
    ui: () => ({
      text: {
        intent: 'secondary',
      },
      background: {
        intent: 'blurred',
        rounded: 'drop',
      },
    }),
  },
)
</script>

<template>
  <component :is="is" class="relative px-3 py-1">
    <slot v-if="!text" />
    <span v-else class="z-10 text-neutral-200" :class="badgeText(props.ui.text)">{{ text }}</span>
    <div class="absolute top-0 left-0 z-[-1] size-full" :class="badgeBackground(props.ui.background)" />
  </component>
</template>
