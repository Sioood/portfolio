<script setup lang="ts">
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
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
  size: {
    type: String,
    default: "md",
    validator: (value: string) => {
      return ["sm", "md", "lg"].includes(value);
    },
  },
});

const isExternalLink = computed(() => {
  return typeof props.to === "string" && props.to.startsWith("http");
});
</script>

<template>
  <a
    v-if="isExternalLink"
    :href="props.to"
    target="_blank"
    class="&>[*]:whitespace-nowrap"
  >
    <slot></slot>
  </a>

  <NuxtLink v-else :to="props.to" class="[&>*]:whitespace-nowrap">
    <slot />
  </NuxtLink>
</template>
