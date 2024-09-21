<template>
  <main class="py-20 px-4 w-full h-full flex flex-col items-center">
    <ContentDoc v-slot="{ doc }">
      <article class="md:w-2/3 w-full">
        <h1 v-if="!doc.hideTitle">{{ doc.title }}</h1>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </main>
</template>
