<template>
  <div class="h-[300vh]">
    <section class="relative min-h-screen flex flex-col items-center overflow-x-clip">
      <div class="z-[1] absolute bottom-[1rem] md:bottom-[7rem] flex flex-col items-end">
        <h1 class="text-[10rem] md:text-[40rem] leading-[4rem] md:leading-[10rem] text-primary-200 italic font-secondary font-light">
          &nbsp; Théo <br />
          Dupont
        </h1>
        <h6 class="-translate-x-4 absolute top-2/3 md:top-0 left-1/3 md:left-2/3">{{ `[${$t('fullStackDeveloper')}] (${$t('graphicDesigner')})` }}</h6>
      </div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 aspect-square bg-neutral-900 rounded-full blur-3xl">
        <div class="absolute top-1/3 right-0 -translate-x-1/2 -translate-y-1/2 w-[10rem] aspect-square bg-secondary-100 rounded-full blur-3xl" />
      </div>
    </section>
  </div>
</template>
