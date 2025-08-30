<template>
  <div class="h-[300vh]">
    <div class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">test</div>
    <section class="relative flex min-h-screen flex-col items-center overflow-x-clip">
      <div class="absolute bottom-[1rem] z-[1] flex flex-col items-end md:bottom-[7rem]">
        <h1 class="font-secondary text-primary-200 text-[10rem] leading-[4rem] font-light italic md:text-[40rem] md:leading-[10rem]">
          &nbsp; Théo <br />
          Dupont
        </h1>
        <h6 class="absolute top-2/3 left-1/3 -translate-x-4 md:top-0 md:left-2/3">
          {{
            `[${$t('fullStackDeveloper')}]
          (${$t('graphicDesigner')})`
          }}
        </h6>
      </div>
      <div class="absolute top-1/2 left-1/2 aspect-square w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-900 blur-3xl">
        <div class="bg-secondary-100 absolute top-1/3 right-0 aspect-square w-[10rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
      </div>
    </section>
  </div>
</template>
