<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ScrollTrigger.defaults({

// })

const animateHeader = () => {};

const initContactClipPathAnimation = () => {
  const elements = document.querySelectorAll(
    "[data-animate-element='contact']"
  );

  for (let i = 1; i < elements.length - 1; i++) {
    const element = elements[i];
    const trigger = elements[i + 1];

    gsap.set(element, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    });

    gsap.to(element, {
      clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",

      scrollTrigger: {
        trigger: trigger,
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
  }
};

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  animateHeader();

  initContactClipPathAnimation();
});
console.log("Hello World");
</script>
<template>
  <section
    class="relative min-h-screen flex flex-col items-center overflow-x-clip"
  >
    <div class="z-[1] absolute bottom-[7rem] flex flex-col items-end">
      <h1 class="text-[40rem] leading-[10rem] italic text-primary-200">
        &nbsp; Théo <br />
        Dupont
      </h1>
      <h6 class="-translate-x-4 absolute top-0 left-2/3">
        [Développeur Front End] (Graphiste)
      </h6>
    </div>

    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 aspect-square bg-neutral-900 rounded-full blur-3xl"
    >
      <div
        class="absolute top-1/3 right-0 -translate-x-1/2 -translate-y-1/2 w-[10rem] aspect-square bg-secondary-100 rounded-full blur-3xl"
      ></div> 
    </div>
  </section>

  <section id="contact" class="relative min-h-screen flex flex-col">
    <div
      data-animate-element="contact"
      class="sticky top-0 w-full h-screen pb-16 flex flex-col justify-between bg-background"
    >
      <div class="flex items-center">
        <h2 class="text-5xl px-40 w-1/2 italic">
          Je suis disponible pour vos projets. Prenons contact !
        </h2>
        <div class="w-1/2 flex items-end justify-center gap-3">
          <div class="w-1/3 aspect-[9/13] bg-surface">
            <img
              src="https://images.unsplash.com/photo-1691229732670-f7034e54d2cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
          <h6 class="mb-10">
            theodupontpro@gmail.com <br />
            @Siooooood
          </h6>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="flex flex-col items-end">
          <h2 class="text-8xl italic">Théo Dupont</h2>
          <p class="w-[20rem]">
            Hi there! I’m a freelance designer & developer from Canada with a
            love for all things web. I’m currently working with clients &
            collaborating with agencies worldwide.
          </p>
        </div>
      </div>
    </div>

    <div
      data-animate-element="contact"
      class="sticky top-0 w-full h-screen pb-16 flex flex-col justify-between bg-background"
    >
      <div class="flex items-center">
        <h2 class="text-5xl px-40 w-1/2 italic">
          Je suis disponible pour vos idées. Prenons contact !
        </h2>
        <div class="w-1/2 flex items-end justify-center gap-3">
          <div class="w-1/3 aspect-[9/13] bg-surface">
            <img
              src="https://images.unsplash.com/photo-1691293881543-9b891bd9b6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
          <h6 class="mb-10">
            theodupontpro@gmail.com <br />
            @Siooooood
          </h6>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="flex flex-col items-end">
          <h2 class="text-8xl italic">Théo Dupont</h2>
          <p class="w-[20rem]">
            Hi there! I’m a freelance designer & developer from Canada with a
            love for all things web. I’m currently working with clients &
            collaborating with agencies worldwide.
          </p>
        </div>
      </div>
    </div>

    <div
      data-animate-element="contact"
      class="sticky top-0 w-full h-screen pb-16 flex flex-col justify-between bg-neutral-100 text-primary-200"
    >
      <div
        class="-z-[1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 aspect-square bg-neutral-900 rounded-full blur-3xl"
      ></div>

      <div class="flex items-center">
        <h2 class="text-5xl px-40 w-1/2 italic">
          Je suis disponible pour vos envies. Prenons contact !
        </h2>
        <div class="w-1/2 flex items-end justify-center gap-3">
          <div class="w-1/3 aspect-[9/13] bg-surface">
            <!-- <img src="" alt="" class="w-full h-full object-cover"> -->
          </div>
          <h6 class="mb-10">
            theodupontpro@gmail.com <br />
            @Siooooood
          </h6>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="flex flex-col items-end">
          <h2 class="text-8xl italic">Théo Dupont</h2>
          <p class="w-[20rem]">
            Hi there! I’m a freelance designer & developer from Canada with a
            love for all things web. I’m currently working with clients &
            collaborating with agencies worldwide.
          </p>
        </div>
      </div>
    </div>

    <div
      data-animate-element="contact"
      class="sticky top-0 h-screen w-full pointer-events-none"
    ></div>
  </section>

  <!-- <div class="h-[200vh]"></div> -->
</template>
