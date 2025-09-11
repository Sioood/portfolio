<script setup lang="ts">
import { cva, type VariantProps } from 'class-variance-authority'

const button = cva('button', {
  variants: {
    intent: {
      primary: 'text-neutral-900',
      secondary: '',
      ghost: '',
      warning: 'text-warning',
      error: 'text-error',
    },
    size: {
      sm: 'text-sm active:scale-[0.97]',
      md: 'font-medium text-md active:scale-[0.97]',
      lg: 'text-lg active:scale-[0.97]',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-75',
      false: 'cursor-pointer',
    },
  },
})

type ButtonProps = VariantProps<typeof button>

withDefaults(
  defineProps<{
    isLinkButton?: boolean
    intent?: ButtonProps['intent']
    size?: ButtonProps['size']
  }>(),
  {
    intent: 'primary',
    size: 'md',
    disabled: false,
  },
)
</script>

<template>
  <component
    :is="isLinkButton ? 'span' : 'button'"
    :disabled="typeof $attrs['disabled'] !== 'undefined'"
    :class="
      button({
        intent,
        size,
        disabled: typeof $attrs['disabled'] !== 'undefined',
      })
    "
    class="flex size-fit items-center justify-center whitespace-nowrap uppercase"
  >
    <slot />
  </component>
</template>
