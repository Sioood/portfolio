<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: "test",
    mode: "out-in",
    onBeforeEnter: (el) => {
      console.log("Before enter...");
    },
    onEnter: (el, done) => {
      console.log("On enter...");

      const { flipFrom } = useFlipTransition();

      const target = el.querySelector("[data-flip-id='1']");

      if (target) {
        flipFrom("1", target, {});
      }

      done();
    },
    onLeave: (el, done) => {
      console.log("onLeave...");
      done();
    },
  },
});
</script>

<template>
  <main class="relative flex flex-col items-center">
    EXPERIMENTS

    <div class="w-full h-[90vh] flex justify-center border">
      <div data-flip-id="1" class="h-1/2 aspect-[4/3] bg-surface">
      <img
        src="https://images.unsplash.com/photo-1691229732670-f7034e54d2cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
        alt=""
        class="w-full h-full object-cover"
      />
    </div>
    </div>
  </main>
</template>
