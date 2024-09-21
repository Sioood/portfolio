<template>
  <main class="w-full h-full px-4 flex flex-col items-center">
    <ContentList
      path="/experiment"
      fields="title,date,thumbnail"
      :query="{
        draft: false,
        sort: [
          {
            date: -1,
          },
        ],
      }"
      v-slot="{ list }"
    >
      <div class="w-full min-h-[95vh] grid grid-rows-5 grid-cols-[repeat(12,minmax(0,1fr))] gap-4">
        <NuxtLink
          v-for="(experiment, i) in list"
          :key="experiment._path"
          :to="experiment._path"
          class="group w-full h-full flex items-center justify-center bg-surface hover:bg-neutral-900"
        >
          <h2 class="group-hover:text-secondary-500">
            <i>ex.{{ i + 1 }}</i>
          </h2>
        </NuxtLink>
      </div>
    </ContentList>
  </main>
</template>
