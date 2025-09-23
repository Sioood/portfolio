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

useHead({
  title: `${work.value.title} — ${work.value.date}`,
  meta: [
    {
      name: 'description',
      content: work.value.description,
    },
  ],
})

definePageMeta({
  pageTransition: {
    mode: 'out-in',
    onEnter: (el, done) => {
      useEndTransition(done)
    },
    onLeave: (el, done) => {
      useBeginTransition(done)
    },
  },
})
</script>

<template>
  <div v-if="work" class="mt-20 flex min-h-dvh flex-col px-10">
    <h1 class="font-secondary text-[6vw] leading-[1.2] font-light text-neutral-900 italic">{{ work.title }} —&nbsp;{{ work.date }}</h1>

    <UIDivider class="mb-13" />

    <div class="flex min-h-[75dvh] w-full flex-wrap gap-5">
      <div class="flex h-min flex-[3_1_400px] flex-col-reverse gap-5 lg:flex-col">
        <div v-if="work.leftImage" class="h-3/5 w-full overflow-hidden bg-neutral-200">
          <NuxtImg v-if="work.leftImage?.src" :src="work.leftImage.src" :alt="work.leftImage.alt" class="size-full object-cover" />
        </div>

        <div class="flex flex-col gap-4">
          <!-- <h1 class="font-secondary text-4xl font-light text-neutral-900 italic">TITLE —&nbsp;2004</h1> -->

          <div v-if="work.links" class="flex flex-col gap-1">
            <h2 class="font-secondary text-2xl font-light text-neutral-900 italic">{{ $t('link_other') }}</h2>
            <ul class="flex flex-col flex-wrap gap-2 text-neutral-700">
              <UILink v-for="link in work.links" :key="link.name" v-slot="{ isLinkButton }" :to="link.url">
                <UIButton size="sm" :is-link-button="isLinkButton">{{ link?.name }}<span class="font-bold">↛</span></UIButton>
              </UILink>
            </ul>
          </div>

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

      <div class="flex h-[65dvh] flex-[4_1_500px] flex-col">
        <div v-for="image in work.centerImages" :key="image.src" class="size-full overflow-hidden bg-neutral-200">
          <NuxtImg v-if="image.src" :src="image.src" :alt="image.alt" class="size-full object-cover" />
        </div>
      </div>

      <div class="mb-10 h-full flex-[2_1_300px]">
        <!-- eslint-disable-next-line vue/no-v-html personal HTML, so not a security issue relative to XSS -->
        <p v-if="work.description" class="w-full" v-html="work.description" />
      </div>
    </div>

    <!-- <UIDivider class="mb-13" /> -->

    <UIImageGallery v-if="work.images" class="mt-20 w-full p-[5vw]" :images="work.images" />
  </div>
</template>
