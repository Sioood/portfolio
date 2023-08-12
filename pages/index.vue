<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

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
  gsap.registerPlugin(ScrollTrigger, Flip);

  animateHeader();

  initContactClipPathAnimation();
});

definePageMeta({
  pageTransition: {
    name: "page-transition",
    mode: "out-in",
    onBeforeEnter: (el) => {
      console.log("Before enter...");
    },
    onEnter: (el, done) => {
      console.log("On enter...");

      done();
    },
    onAfterEnter: (el) => {
      console.log("onAfterEnter...");
    },
    onBeforeLeave: () => {
      console.log("onBeforeLeave...");
      // console.log(document.querySelector("[data-animate-element='contact']"));
    },
    onLeave: (el, done) => {
      // console.log(el);
      // console.log(el.querySelector("[data-animate-element='contact']"));

      // console.log(
      //   Flip.getState(el.querySelector("[data-animate-element='contact']"))
      // );

      const { setFlipState } = useFlipTransition();

      const flipElement = el.querySelector("[data-flip-id='1']");

      console.log(flipElement?.getBoundingClientRect());

      if (flipElement) {
        // flipElement.style.transformOrigin = "center center";

        setFlipState("1", flipElement);
      }

      console.log("onLeave...");

      // setTimeout(() => {
      done();
      // }, 1000);
    },
  },
});
</script>

<template>
  <main>
    <section
      class="relative min-h-screen flex flex-col items-center overflow-x-clip"
    >
      <div
        class="z-[1] absolute bottom-[1rem] md:bottom-[7rem] flex flex-col items-end"
      >
        <h1
          class="text-[10rem] md:text-[40rem] leading-[4rem] md:leading-[10rem] italic text-primary-200"
        >
          &nbsp; Théo <br />
          Dupont
        </h1>
        <h6
          class="-translate-x-4 absolute top-2/3 md:top-0 left-1/3 md:left-2/3"
        >
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

    <section class="relative mt-52 min-h-screen overflow-x-clip">
      <div class="blur-3xl">
        <CanvasDraw class="absolute top-0 w-full h-screen" />
      </div>

      <div
        class="position sticky px-10 md:px-52 w-full min-h-screen flex items-center justify-end pointer-events-none"
      >
        <h2 class="text-8xl italic text-background">Curiosité</h2>
      </div>
    </section>

    <section class="mt-24 flex flex-col items-center">
      <LayoutWorkGrid name="" date="" :items="[]" variant="2" />
    </section>

    <section id="contact" class="relative min-h-screen flex flex-col">
      <div
        data-animate-element="contact"
        class="sticky top-0 w-full h-screen pb-16 flex flex-col justify-between bg-background"
      >
        <div
          class="mt-10 md:mt-0 p-4 md:p-0 flex flex-col md:flex-row items-center gap-16 md:gap-0"
        >
          <h2 class="text-3xl md:text-5xl md:px-40 md:w-1/2 italic">
            Je suis disponible pour vos idées. Prenons contact !
          </h2>
          <div class="md:w-1/2 flex items-end md:justify-center gap-3">
            <div data-flip-id="1" class="w-1/3 aspect-[9/13] bg-surface">
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
        <div class="px-4 flex justify-center">
          <div class="flex flex-col md:items-end">
            <h2 class="text-5xl md:text-8xl italic">Théo Dupont</h2>
            <p class="md:w-[20rem]">
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
        <div
          class="mt-10 md:mt-0 p-4 md:p-0 flex flex-col md:flex-row items-center gap-16 md:gap-0"
        >
          <h2 class="text-3xl md:text-5xl md:px-40 md:w-1/2 italic">
            Je suis disponible pour vos idées. Prenons contact !
          </h2>
          <div class="md:w-1/2 flex items-end md:justify-center gap-3">
            <div data-flip-id="1" class="w-1/3 aspect-[9/13] bg-surface">
              <img
                src="https://images.unsplash.com/photo-1513171920216-2640b288471b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
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
        <div class="px-4 flex justify-center">
          <div class="flex flex-col md:items-end">
            <h2 class="text-5xl md:text-8xl italic">Théo Dupont</h2>
            <p class="md:w-[20rem]">
              Hi there! I’m a freelance designer & developer from Canada with a
              love for all things web. I’m currently working with clients &
              collaborating with agencies worldwide.
            </p>
          </div>
        </div>
      </div>

      <div
        data-animate-element="contact"
        class="sticky top-0 w-full h-screen pb-16 flex flex-col justify-between bg-background text-primary-200"
      >
        <div
          class="-z-[1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 aspect-square bg-neutral-900 rounded-full blur-3xl"
        ></div>

        <div
          class="mt-10 md:mt-0 p-4 md:p-0 flex flex-col md:flex-row items-center gap-16 md:gap-0"
        >
          <h2 class="text-3xl md:text-5xl md:px-40 md:w-1/2 italic">
            Je suis impatient de travailler avec vous.
          </h2>
          <div class="md:w-1/2 flex items-end md:justify-center gap-3">
            <div data-flip-id="1" class="w-1/3 aspect-[9/13] bg-surface">
              <img
                src="https://images.unsplash.com/photo-1558862108-daa1be6fda90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
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
        <div class="px-4 flex justify-center">
          <div class="flex flex-col md:items-end">
            <h2 class="text-5xl md:text-8xl italic">Théo Dupont</h2>
            <p class="md:w-[20rem]">
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
  </main>
</template>
