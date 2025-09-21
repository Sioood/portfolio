<script setup lang="ts">
const { getWork } = useWorkStore()

const work = computed(() => {
  const slug = useRoute().params.slug?.[0]
  if (!slug) throw createError({ statusCode: 404, message: 'not found', fatal: true })

  try {
    const work = getWork(slug)
    if (work) return work
    throw createError({ statusCode: 404, message: 'not found', fatal: true })
  } catch {
    throw createError({ statusCode: 404, message: 'not found', fatal: true })
  }
})
</script>

<template>
  <div v-if="work" class="mt-20 flex min-h-dvh flex-col px-10">
    <h1 class="font-secondary text-[6vw] leading-[1.2] font-light text-neutral-900 italic">{{ work.title }} —&nbsp;{{ work.date }}</h1>

    <UIDivider class="mb-13" />

    <div class="flex h-[75dvh] w-full flex-wrap gap-5">
      <div class="flex flex-[3_1_300px] flex-col gap-5">
        <div v-if="work.leftImage" class="h-3/5 w-full overflow-hidden bg-neutral-200">
          <NuxtImg :src="work.leftImage.src" :alt="work.leftImage.alt" class="size-full object-cover" format="webp" />
        </div>

        <div class="flex flex-col gap-4">
          <!-- <h1 class="font-secondary text-4xl font-light text-neutral-900 italic">TITLE —&nbsp;2004</h1> -->

          <div v-if="work.tags" class="flex flex-col gap-1">
            <h2 class="font-secondary text-2xl font-light text-neutral-900 italic">{{ $t('tag_other') }}</h2>
            <ul class="flex flex-wrap gap-2 text-neutral-700">
              <UIBadge is="li" v-for="tag in work.tags" :key="tag" :text="tag" />
            </ul>
          </div>

          <div v-if="work.technos" class="flex flex-col gap-1">
            <h2 class="font-secondary text-2xl font-light text-neutral-900 italic">{{ $t('techno_other') }}</h2>
            <ul class="flex flex-wrap gap-2 text-neutral-700">
              <UIBadge is="li" v-for="techno in work.technos" :key="techno" :text="techno" />
            </ul>
          </div>
        </div>
      </div>
      <div class="flex h-full flex-[4_1_400px] flex-col">
        <div v-for="image in work.centerImages" :key="image.src" class="size-full overflow-hidden bg-neutral-200">
          <NuxtImg :src="image.src" :alt="image.alt" class="size-full object-cover" format="webp" />
        </div>
      </div>
      <div class="h-full flex-[2_1_200px]">
        <p v-if="work.description" class="w-full">
          {{ work.description }}
        </p>
      </div>
    </div>

    <!-- <UIDivider class="mb-13" /> -->

    <UIImageGallery v-if="work.images" class="mt-20 w-full p-[5vw]" :images="work.images" />
  </div>
</template>
