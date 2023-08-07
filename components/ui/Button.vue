<script setup lang="ts">
const props = defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (value: string) => {
      return [
        "primary",
        "secondary",
        "outline",
        "ghost",
        "destructive",
      ].includes(value);
    },
  },
});
</script>

<template>
  <button>
    <slot />
  </button>
</template>
