<script setup lang="ts">
const { works } = useWorkStore()

const workPositioning = useState('workPositioning', () => {
  const positions: ('items-start' | 'items-center' | 'items-end')[] = []

  for (let i = 0; i < works.length; i++) {
    const random = Math.random()

    if (random < 0.333) {
      positions.push('items-start')
    } else if (random >= 0.333 && random < 0.666) {
      positions.push('items-center')
    } else {
      positions.push('items-end')
    }
  }

  return positions
})

definePageMeta({
  pageTransition: {
    mode: 'out-in',
    onEnter: (el, done) => {
      useEndTransition(done)
    },
    onLeave: (el, done) => {
      useBeginTransition(done)
    },
  },
})
</script>

<template>
  <div>
    <section class="relative flex min-h-dvh flex-col items-center justify-center overflow-x-clip">
      <div class="absolute bottom-[5vw] z-[1] flex flex-col items-end xl:bottom-[3vw]">
        <h1
          v-gsap.from="{ duration: 2.6, ease: 'power4.out', filter: 'blur(0.75vw)', scaleY: 0.93 }"
          class="font-secondary text-primary-200 origin-bottom text-[clamp(10rem,30vw,40rem)] leading-[7vw] font-light italic select-none"
        >
          &nbsp; {{ $t('firstname') }} <br />
          {{ $t('lastname') }}
        </h1>
        <h6 v-gsap.animateText class="absolute top-2/3 left-1/3 -translate-x-4 text-neutral-900 xl:top-0 xl:left-2/3">
          {{
            `[${$t('fullStackDeveloper')}]
          (${$t('graphicDesigner')})`
          }}
        </h6>
      </div>

      <div class="absolute top-1/5">
        <div class="-rotate-45 blur-xl">
          <div class="contrast-200">
            <div class="relative flex flex-col items-center justify-center blur-3xl">
              <div class="transform-3d">
                <div class="top-1/2 left-1/2 aspect-square w-[500px] rounded-full bg-neutral-700" />
                <div class="bg-secondary-300 orbit absolute top-1/2 left-1/2 aspect-square w-[12rem] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <span class="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-neutral-900 dark:text-[rgb(109,109,109)]">
          <sup
            class="font-primary after:font-primary relative font-light after:absolute after:top-1/2 after:left-[120%] after:-translate-y-1/2 after:content-['—']"
          >
            Hell<span class="font-secondary italic">0</span>
          </sup>
          <sub
            class="font-secondary before:font-primary font-light italic before:absolute before:top-2/3 before:right-[120%] before:-translate-y-1/2 before:content-['—']"
          >
            world
          </sub>
        </span>
      </div>
    </section>

    <section class="relative mt-52 mb-[20vh] min-h-screen cursor-pointer overflow-x-clip">
      <div class="blur-3xl">
        <CanvasDraw class="absolute top-0 h-screen w-full" />
      </div>

      <div class="position pointer-events-none sticky flex min-h-screen w-full items-center justify-end px-10 md:px-52">
        <h2 class="font-secondary text-background text-[clamp(8rem,10vw,40rem)] italic select-none">{{ $t('curiosity') }}</h2>
      </div>
    </section>

    <section id="works" class="relative flex min-h-dvh flex-col items-center px-10">
      <WorkCard v-for="(work, i) in [...works].reverse()" :key="i" :class="workPositioning[i] || 'items-center'" :work="work" />
    </section>

    <section class="relative my-20 flex min-h-dvh flex-col items-center justify-center overflow-hidden">
      <UILink v-slot="{ isLinkButton }" to="/experiments" class="group flex items-center justify-center">
        <!-- FIXME matching size with ascii -->
        <div
          class="absolute flex aspect-11/9 h-[max(40%,53vw)] items-center justify-center bg-white !transition-all duration-1000 ease-out [clip-path:circle(10%_at_50%_50%)] group-hover:[clip-path:circle(100%_at_50%_50%)] lg:h-[39vw]"
        >
          <NuxtImg
            class="size-full object-cover"
            format="webp"
            src="https://i0.wp.com/arthive.com/res/media/img/oy800/work/b74/449397.jpg?resize=644%2C430&ssl=1"
          />
        </div>

        <UIButton size="xl" :is-link-button="isLinkButton" class="z-10">
          <ClientOnly>
            <AsciiDance />
          </ClientOnly>

          <span class="absolute z-10 text-[clamp(1rem,1.5vw,1.5vw)] leading-[1] text-neutral-900"> →{{ $t('experiment_other') }}← </span>
        </UIButton>
      </UILink>
    </section>

    <!-- TODO add content / refix responsive -->
    <section id="contact" class="relative min-h-screen overflow-x-clip">
      <HomeContact />
    </section>
  </div>
</template>

<style>
.orbit {
  animation: orbit 9s linear;
  animation-iteration-count: infinite;
}

@keyframes orbit {
  from {
    transform: translate(-50%, -50%) rotateY(0deg) translateZ(350px) rotateY(360deg);
  }
  to {
    transform: translate(-50%, -50%) rotateY(360deg) translateZ(350px) rotateY(0deg);
  }
}
</style>
