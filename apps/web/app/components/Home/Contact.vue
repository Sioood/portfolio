<script setup lang="ts">
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const initContactClipPathAnimation = () => {
  const elements = document.querySelectorAll("[data-animate-element='contact']")

  for (let i = 1; i < elements.length - 1; i++) {
    const element = elements[i]
    const trigger = elements[i + 1]

    if (!element || !trigger) {
      continue
    }

    useGSAP().set(element, {
      clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
    })

    useGSAP().to(element, {
      clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',

      scrollTrigger: {
        trigger: trigger,
        start: 'top bottom',
        end: 'top top',
        scrub: true,
      },
    })
  }
}

onMounted(() => {
  useGSAP().registerPlugin(ScrollTrigger)

  initContactClipPathAnimation()
})
</script>

<template>
  <!-- src="https://images.unsplash.com/photo-1691229732670-f7034e54d2cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" -->

  <!-- TODO use NUXT image -->
  <div class="relative flex min-h-screen flex-col">
    <div
      data-flip-wrapper="1"
      data-animate-element="contact"
      class="bg-background sticky top-0 flex h-screen w-full flex-col justify-between pb-16 text-neutral-900"
    >
      <div class="mt-10 flex flex-col-reverse items-center gap-[15vh] p-4 lg:mt-0 lg:flex-row lg:gap-0 lg:gap-16 lg:p-0">
        <h2 class="font-secondary w-2/3 text-center text-4xl italic lg:w-1/2 lg:px-30 lg:text-left xl:px-40 xl:text-5xl">{{ $t('makeContact') }}</h2>
        <div class="flex max-h-[30vh] w-full items-end gap-3 lg:max-h-none lg:w-1/2 lg:justify-center">
          <div class="aspect-[9/13] h-full w-1/2 bg-neutral-900 lg:w-1/3">
            <!-- <img
              src="https://images.unsplash.com/photo-1513682121497-80211f36a7d3?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              class="h-full w-full object-cover"
            /> -->
          </div>
          <ul class="mb-10 flex flex-col gap-1">
            <li>
              <a :href="`mailto:${$t('email')}`">{{ $t('email') }}</a>
            </li>
            <li>
              <UILink to="#">
                {{ $t('twitterTag') }}
              </UILink>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex justify-center px-4">
        <div class="flex flex-col items-center gap-2 lg:items-end">
          <h2 class="font-secondary w-2/3 text-left text-4xl italic sm:text-5xl lg:w-full lg:text-8xl">{{ $t('firstname') }} {{ $t('lastname') }}</h2>
          <p class="w-2/3 lg:w-[20rem]">
            {{ $t('contactParagraph') }}
          </p>
        </div>
      </div>
    </div>

    <div data-animate-element="contact" class="bg-background sticky top-0 flex h-screen w-full flex-col justify-between pb-16 text-neutral-900">
      <div class="mt-10 flex flex-col-reverse items-center gap-[15vh] p-4 lg:mt-0 lg:flex-row lg:gap-0 lg:gap-16 lg:p-0">
        <h2 class="font-secondary w-2/3 text-center text-4xl italic lg:w-1/2 lg:px-30 lg:text-left xl:px-40 xl:text-5xl">{{ $t('makeContact') }}</h2>
        <div class="flex max-h-[30vh] w-full items-end gap-3 lg:max-h-none lg:w-1/2 lg:justify-center">
          <div class="bg-secondary-500 aspect-[9/13] h-full w-1/2 lg:w-1/3">
            <!-- <img
              src="https://images.unsplash.com/photo-1513171920216-2640b288471b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
              alt=""
              class="h-full w-full object-cover"
            /> -->
          </div>
          <ul class="mb-10 flex flex-col gap-1">
            <li>
              <a :href="`mailto:${$t('email')}`">{{ $t('email') }}</a>
            </li>
            <li>
              <UILink to="#">
                {{ $t('twitterTag') }}
              </UILink>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex justify-center px-4">
        <div class="flex flex-col items-center gap-2 lg:items-end">
          <h2 class="font-secondary w-2/3 text-left text-4xl italic sm:text-5xl lg:w-full lg:text-8xl">{{ $t('firstname') }} {{ $t('lastname') }}</h2>
          <p class="w-2/3 lg:w-[20rem]">
            {{ $t('contactParagraph') }}
          </p>
        </div>
      </div>
    </div>

    <div data-animate-element="contact" class="bg-background text-primary-200 sticky top-0 flex h-screen w-full flex-col justify-between pb-16">
      <div class="absolute top-1/2 left-1/2 z-[-1] aspect-square w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-900 blur-3xl"></div>

      <div class="mt-10 flex flex-col-reverse items-center gap-[15vh] p-4 lg:mt-0 lg:flex-row lg:gap-0 lg:gap-16 lg:p-0">
        <h2 class="font-secondary w-2/3 text-center text-4xl italic lg:w-1/2 lg:px-30 lg:text-left xl:px-40 xl:text-5xl">{{ $t('impatientToWorkWithYou') }}</h2>
        <div class="flex max-h-[30vh] w-full items-end gap-3 lg:max-h-none lg:w-1/2 lg:justify-center">
          <div class="bg-accent-500 aspect-[9/13] h-full w-1/2 lg:w-1/3">
            <!-- <img
              src="https://images.unsplash.com/photo-1558862108-daa1be6fda90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt=""
              class="h-full w-full object-cover"
            /> -->
          </div>
          <ul class="mb-10 flex flex-col gap-1">
            <li>
              <a :href="`mailto:${$t('email')}`">{{ $t('email') }}</a>
            </li>
            <li>
              <UILink to="#">
                {{ $t('twitterTag') }}
              </UILink>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex justify-center px-4">
        <div class="flex flex-col items-center gap-2 lg:items-end">
          <h2 class="font-secondary w-2/3 text-left text-4xl italic sm:text-5xl lg:w-full lg:text-8xl">{{ $t('firstname') }} {{ $t('lastname') }}</h2>
          <p class="w-2/3 lg:w-[20rem]">
            {{ $t('contactParagraph') }}
          </p>
        </div>
      </div>
    </div>

    <div data-animate-element="contact" class="pointer-events-none sticky top-0 h-screen w-full"></div>
  </div>
</template>
