<script setup lang="ts">
const { experiments } = extractStore(useExperimentStore())
</script>

<template>
  <div class="flex flex-col">
    <ul v-if="experiments?.length" class="mt-10 grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4 p-4">
      <UILink
        v-for="experiment in experiments.reverse()"
        v-slot="{ isLinkButton }"
        :key="experiment.id"
        :to="`/experiments/${experiment.id}`"
        class="size-full"
      >
        <UIButton size="xl" :is-link-button="isLinkButton" class="size-full">
          <li class="flex aspect-9/13 size-full">
            <ExperimentsCard v-bind="experiment" />
          </li>
        </UIButton>
      </UILink>
    </ul>
    <div v-else class="relative flex h-dvh items-center justify-center">
      <AsciiDance />
      <span class="font-secondary absolute bottom-[10vh] text-center text-[clamp(4rem,15vw,7rem)] leading-[1] font-light text-neutral-900 italic">
        {{ $t('experiment_none') }}
      </span>
    </div>
  </div>
</template>
