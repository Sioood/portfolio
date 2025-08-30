<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="h-[300vh]">
    <section class="relative flex min-h-screen flex-col items-center overflow-x-clip">
      <div class="absolute bottom-[5vw] z-[1] flex flex-col items-end xl:bottom-[3vw]">
        <h1 class="font-secondary text-primary-200 text-[clamp(10rem,30vw,40rem)] leading-[7vw] font-light italic">
          &nbsp; {{ t('firstname') }} <br />
          {{ t('lastname') }}
        </h1>
        <h6 class="absolute top-2/3 left-1/3 -translate-x-4 text-neutral-900 xl:top-0 xl:left-2/3">
          {{
            `[${t('fullStackDeveloper')}]
          (${t('graphicDesigner')})`
          }}
        </h6>
      </div>
      <div class="absolute top-1/2 left-1/2 aspect-square w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-900 blur-3xl xl:w-1/3">
        <div class="bg-secondary-100 absolute top-1/3 right-0 aspect-square w-[10rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
      </div>
    </section>
  </div>
</template>
