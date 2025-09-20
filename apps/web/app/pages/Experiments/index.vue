<script setup lang="ts">
const { experiments } = extractStore(useExperimentStore())
</script>

<template>
  <div class="flex flex-col">
    <ul v-if="experiments?.length" class="mt-10 grid grid-cols-[repeat(auto-fill,minmax(max(250px,17.5vw),1fr))] gap-4 p-4">
      <UILink
        v-for="experiment in [...experiments].reverse()"
        v-slot="{ isLinkButton }"
        :key="experiment.id"
        :to="`/experiments/${experiment.id}/${experiment.slug}`"
        class="size-full [&>*>*>*>img]:filter-[invert(100%)_grayscale(100%)] [&>*>*>*>img]:!transition-[filter] [&>*>*>*>img]:duration-1000 [&>*>*>*>img]:ease-out hover:[&>*>*>*>img]:filter-[invert(0%)_grayscale(0%)] hover:[&>*>*>*>img]:!transition-none"
      >
        <UIButton
          v-gsap.stagger.fromTo="[
            { clipPath: 'polygon(0 95%, 100% 100%, 100% 100%, 0% 100%)', filter: 'brightness(4) contrast(2.5) blur(1px)', scaleY: '1.2', y: 25 },
            {
              duration: 1.6,
              ease: 'expo.out',
              stagger: 0.02,
              clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)',
              filter: 'brightness(1) contrast(1) blur(0px)',
              scaleY: '1',
              y: 0,
            },
          ]"
          size="xl"
          :is-link-button="isLinkButton"
          class="size-full"
        >
          <li class="flex aspect-13/9 size-full">
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
