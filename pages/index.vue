<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

const route = useRoute();

let works = [
  {
    id: "1",
    name: "Titre 1",
    date: "2000",
    items: [1, 2, 3],
    variant: "1",
  },
  {
    id: "2",
    name: "Titre 2",
    date: "2000",
    items: [1, 2],
    variant: "1",
  },
  {
    id: "3",
    name: "Titre 3",
    date: "2000",
    items: [1, 2],
    variant: "2",
  },
  {
    id: "4",
    name: "Titre 4",
    date: "2000",
    items: [1],
    variant: "1",
  },
  {
    id: "5",
    name: "Titre 5",
    date: "2000",
    items: [1],
    variant: "2",
  },
];

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

  // animateHeader();

  initContactClipPathAnimation();
});

const initFlipPageTransition = (e: Event) => {
  const { transitioning } = usePageTransition();
  transitioning.status = true;
  transitioning.from = route.fullPath;

  const target = e.target as HTMLElement;

  const { setFlipState } = useFlipTransition();

  const flipElement = target.hasAttribute("data-flip-id")
    ? target
    : target.closest("[data-flip-wrapper]")?.querySelector("[data-flip-id]");

  const flipId = flipElement?.getAttribute("data-flip-id");

  const flipSandbox = document.querySelector("main");

  // // deceive gsap.Flip which deal with scrollTop position for page transition to a fixed element on top of the page (like in the viewport)
  const useFixedFlipClone = (element: HTMLElement) => {
    // avoid router error or something which can broke flip transition
    const existingFlipClone = document.getElementById("flip-clone");
    if (existingFlipClone) {
      existingFlipClone.remove();
    }

    const elementRect = element?.getBoundingClientRect();

    const clone = element?.cloneNode(true) as HTMLElement;

    const setClone = (to: HTMLElement) => {
      clone.id = "flip-clone";

      clone.style.opacity = "0";
      clone.style.pointerEvents = "none";

      clone.style.position = `absolute`;
      clone.style.top = `${elementRect?.top}px`;
      clone.style.left = `${elementRect?.left}px`;
      clone.style.width = `${elementRect?.width}px`;
      clone.style.height = `${elementRect?.height}px`;

      to.appendChild(clone);
    };

    if (clone && flipSandbox) {
      setClone(flipSandbox);
    }

    // delete clone ?
    return clone;
  };

  if (flipElement && flipId) {
    setFlipState(flipId, useFixedFlipClone(flipElement as HTMLElement));
  }

  // const div = document.createElement("div");
  // div.style.position = "fixed";
  // div.style.top = "0";
  // div.style.left = "0";
  // div.style.left = "0";
  // div.style.width = "100vw";
  // div.style.height = "100vh";
  // div.style.background = "#919191";
  // div.style.zIndex = "1";
  // flipSandbox?.appendChild(div);

  // gsap.set(div, {
  //   yPercent: -100,
  // });

  // gsap.to(div, {
  //   duration: 1.5,
  //   yPercent: 0,
  //   ease: "power3.easeOut",
  //   onComplete: () => {
  //     transitioning.status = false;
  //   },
  // });

  // setTimeout(() => {
  transitioning.status = false;
  // }, 1000);
};

definePageMeta({
  pageTransition: {
    name: "page-transition",
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
      // use router to handle transition for different route
      const router = useRouter();

      if (router.currentRoute.value.fullPath.includes("/work")) {
        console.log(" can init work transition");
      }

      console.log("onLeave...");

      const { transitioning, setPageTransitionWatcherCallback } =
        usePageTransition();

      setPageTransitionWatcherCallback(() => {
        transitioning.lastLifeCycle = "onLeave";
        done();
      });

      if (!transitioning.status) {
        done();
      }
      done();

      // setTimeout(() => {
      // done();
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

    <!-- <UiLink @click="initFlipPageTransition" to="/experiments" variant="ghost">
      <div
        data-flip-id="1"
        class="w-1/3 aspect-[16/9] background-surface border"
      ></div
    ></UiLink> -->

    <section class="relative mt-52 mb-[20vh] min-h-screen overflow-x-clip">
      <div class="blur-3xl">
        <CanvasDraw class="absolute top-0 w-full h-screen" />
      </div>

      <div
        class="position sticky px-10 md:px-52 w-full min-h-screen flex items-center justify-end pointer-events-none"
      >
        <h2 class="text-8xl italic text-background">Curiosité</h2>
      </div>
    </section>

    <section id="works" class="mt-24 mb-[50vh] w-full flex justify-center">
      <!-- w-2/3 is good instead of w-full maybe -->
      <div class="w-full md:w-2/3 flex flex-col items-center">
        <WorkGrid
          v-for="work in works"
          :key="work.id"
          @transition="initFlipPageTransition"
          :id="work.id"
          :name="work.name"
          :date="work.date"
          :items="work.items"
          :variant="work.variant"
        />
        <!-- <WorkGrid
          @transition="initFlipPageTransition"
          name=""
          date=""
          :items="[1, 2, 3]"
          variant="1"
        />
        <WorkGrid name="" date="" :items="[1, 2]" variant="1" />
        <WorkGrid name="" date="" :items="[1, 2]" variant="2" />
        <WorkGrid name="" date="" :items="[1]" variant="1" />
        <WorkGrid name="" date="" :items="[1]" variant="2" /> -->
      </div>
    </section>

    <section id="contact" class="relative min-h-screen flex flex-col">
      <!-- translate-y-[100%] sticky top-[-100%] this can reduce the 100vh need to get the second sticky and seem to scroll 2 sections with one not existing instead of just one -->
      <!-- Need to translate the section -100% y also or something to avoid the 100vh top fake margin due to the translate of the first -->
      <div
        data-flip-wrapper="1"
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
