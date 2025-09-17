<template>
  <div>
    <section class="relative flex min-h-dvh flex-col items-center overflow-x-clip">
      <div class="absolute bottom-[5vw] z-[1] flex flex-col items-end xl:bottom-[3vw]">
        <h1 class="font-secondary text-primary-200 text-[clamp(10rem,30vw,40rem)] leading-[7vw] font-light italic select-none">
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

      <div class="absolute top-1/5 -rotate-45 blur-xl">
        <div class="contrast-200">
          <div class="relative flex flex-col items-center justify-center blur-3xl">
            <div class="transform-3d">
              <div class="top-1/2 left-1/2 aspect-square w-[500px] rounded-full bg-neutral-700" />
              <div class="bg-secondary-300 orbit absolute top-1/2 left-1/2 aspect-square w-[12rem] rounded-full" />
            </div>
          </div>
        </div>
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

    <section id="works" class="relative flex min-h-screen flex-col items-center">
      <WorkCard
        :data="{
          slug: 'curiosity',
          title: $t('curiosity'),
          year: 2023,
          images: [
            {
              src: 'https://images.unsplash.com/photo-1533134663120-ec7e68d56494?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
          ],
        }"
        :ui="{
          imageList: { gap: null, overflow: 'hidden' },
          image: { aspect: '16/9', rounded: 't-full' },
        }"
      />

      <WorkCard
        :data="{
          slug: 'curiosity',
          title: $t('curiosity'),
          year: 2023,
          images: [
            {
              src: 'https://images.unsplash.com/photo-1533134663120-ec7e68d56494?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
          ],
        }"
        :ui="{
          imageList: { gap: null, overflow: 'hidden' },
          image: { aspect: '9/16', rounded: 't-full' },
        }"
      />

      <WorkCard
        :data="{
          slug: 'curiosity',
          title: $t('curiosity'),
          year: 2023,
          images: [
            {
              src: 'https://images.unsplash.com/photo-1533134663120-ec7e68d56494?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
          ],
        }"
        :ui="{
          imageList: { gap: null, overflow: 'hidden' },
          image: { aspect: 'default', rounded: 't-full' },
        }"
      />

      <WorkCard
        :data="{
          slug: 'curiosity',
          title: $t('curiosity'),
          year: 2023,
          images: [
            {
              src: 'https://images.unsplash.com/photo-1533134663120-ec7e68d56494?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              src: 'https://images.unsplash.com/photo-1533134663120-ec7e68d56494?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              src: 'https://images.unsplash.com/photo-1533134663120-ec7e68d56494?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
          ],
        }"
        :ui="{
          imageList: { gap: null, overflow: 'hidden' },
          image: { aspect: 'default', rounded: 't-full' },
        }"
      />

      <WorkCard
        :data="{
          slug: 'curiosity',
          title: $t('curiosity'),
          year: 2023,
          images: [
            {
              src: 'https://images.unsplash.com/photo-1533134663120-ec7e68d56494?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              src: 'https://images.unsplash.com/photo-1533134663120-ec7e68d56494?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
          ],
        }"
        :ui="{
          imageList: { gap: 'md', overflow: 'hidden' },
          image: { aspect: 'default' },
        }"
      />

      <WorkCard
        :data="{
          slug: 'curiosity',
          title: $t('curiosity'),
          year: 2023,
          images: [
            {
              src: 'https://images.unsplash.com/photo-1533134663120-ec7e68d56494?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              src: 'https://images.unsplash.com/photo-1533134663120-ec7e68d56494?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
              src: 'https://images.unsplash.com/photo-1533134663120-ec7e68d56494?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
          ],
        }"
        :ui="{
          imageList: { gap: null, overflow: 'hidden' },
          image: { aspect: 'default' },
        }"
      />

      <WorkCard
        :data="{
          slug: 'curiosity',
          title: $t('curiosity'),
          year: 2023,
          images: [
            {
              src: 'https://images.unsplash.com/photo-1533134663120-ec7e68d56494?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
          ],
        }"
        :ui="{
          imageList: { gap: null, overflow: 'hidden' },
          image: { aspect: 'default' },
        }"
      />
    </section>

    <section class="relative my-20 flex min-h-dvh flex-col items-center justify-center overflow-hidden">
      <pre class="text-[clamp(0.3rem,1.5vw,1rem)]">
                                                                            ↖↖↖↖
                    ↖↙↙                                                 ←↑←
                ↖↑↓↖     ↘↓  ↓→↘↓↘→↑↑↑↑↑↓ ↙→   ←→↑↑↗↑↑↑↑↖              ↖↓↗
              ←↗←     ↓↗↙     ↖↙↙     ↖↖↘↑←             ↗↓         ←→←↖↖↖→↘    ↖↖       ↘↖
              ↗↓   ←→↑→↖   ↖↖↖←↖ ←↑↗↘→↗←←    ↖↗           ↓↑←     ↓↓  ←↗↗→→↗↑→↘→↗↖        ←↘↖
            ↘↙  ←↑←                 ↑↖    ↓↑→↖    ↓←       ↘↗↖ ←↘  ↓→↖       →        ↓↘↘↙↖↓↗↖
            ↗←  ↖↑←   ←↓↘↓          ←↑←  ↑↓       ↖↗     ↘↘  ↓↑↙  ↑↖          ↓      ↘←    ↘↗↓↑↖
            ↗←    ↓→↘↙   ↙↗           →↑↑↖←        ↗↙      ↗↓  →↓             ↙       ↑     →↘ ↗↗
            ↑↖           ↓↓                ↗←      ↘↗       ←↗↑↑↙              ←←      →     ↖↑↖ ↑↓
            ↗↘           ↘↑                 ↗←      ←↑                           →      ↗       ↙↑←→↙
          ←↑←          ↙↑↖            ↖↓↘↘↘↗→       ←↑                           ↖↑     ↘↙       ↖↑↓↑↖
          ↗             ↑↖         ←↑↗↙             →↓                         ↖↓↑↓     ↘↘        ↘↑↑↘
        ↗←             ←↑       ←↑↓        ←       ↗                   ←↗↗↓↓↙←         ↘↘         ↖↓
        →↖               ↖↑     ↘↗       ↘↑↘        →                 ↓↑↖               ↘↓
      →↓         ↖→↑↑↗   ←↑↖   ↓↑   ↘↑↓↖           ↗               ↓↑↖  ↙↘↓↓↓↓↗↑↑↖     ↑          ↗↙→↖
      ↙↗              ↓→   ↖↑↗→↙ ↖↑↓  ↙↗←          ↖↗             ↖↑↖ ↓↑↓↖            ↙↑↖        ↖↑   ↙↖
      →↖               ←↗↓      ↙↘ ←↑↙  ←↗↙       ↖↑←            ↙→   ↘        ↖↘   ↖↑↙         ←↘←   ↙←
      ↑                   →→←↖       ↖↓↗↓ ↖←      ↗↙            ↙↘             ↙↗  ↘↗         ↗↘ ↙↗   ↘←
      ↑       ↖↗↖             ←→↑↗↘↙↙↓↓↖↗↑↑↑↑↙    →↓           ↙→              ↘↗ ←↑         ↖↑←   ↑↓↙↑
      ↙↗       ↖↑                      ↙↘↗↘ ←↘   ↖↑          ↖↘                ←↑ ←↑          ↑↓      ↑↖
      ↑↙       →↓                       →→↗  ←↙↗↗→↑↑↑↑↗←                       ↙↘ ↑         →←       ↗←
        ↑       ↘↘                      ←↘ ←↑↙ ↑↖↗↙     ←↘                       ↗ →→       ↓→       ↙↑
        ↙↑      ↑↙                     ←↑   →↑↓↖↗↙↗       ↑↖→→→↘↙                ↙  ↑ ↖←←←↖↖↑↖   ↘↘← →↓
      ↙↓↖↗↖    ↑↖                     ↗ ←↗→  →↗↖↙↘↓↘←    ↑←     ↖↘↑→↙↖           ←→↑→↙↖ ↖↙↙   ←↗   ↓→
      ↘↓   ↗↓    ↑                    ↗↓ ↗←     ↘↑←   ←↘↘↓     ←↙  ↓↖ ←↗↑↘↖     ↙↑↖ ←         ←→  ↓↑↓
    ↑←     ↓→   ↖↑                   →↘ ←↑       ↙↑↖            ←↗↑↙↗↑↓   ←↑↗→↑←              ↖↑↘ ↗
    ↙↙        ↗↖  ↘←                   ↑ ↖↑↖        ←↗↓             ↖→← ↖←↓↑↗← ↘↑↗↑↓         ←↗↘  ↑
    ↗          ↓↓  →                   ↓↑↑↓            ←↙↘→↗↑↓ →←     ←↗↖ ↖↑↗→↘→↑↑↘↙↓←↙↓↘↗↑→↓↖   ↘
  ↖↗           ↘↘ ↘↓                                        →↗→    ↖↓  →↙          ↖↖↖    ↘    →
  ←→            →  ↓→                                        →↙     ↑↖  ↓↗←                ↙  ↓←
  ↙→            ↓↖   ↑↙                                      ↘←     ↑←    ↖↑↘              ↖→  ←↑↙
  ↘↘             ↑↖   ↑                                      ↓↘    ↖↑       ↖↑↙              ↑↙  ↖↑↖
  ↗↓              ↗    ↑                                      ↑↖   ↙↑    ↙    ↘←               →→ ↙↑
  ↖↗                ↓→↖  →↓                                    ↓→    ↖↑←   ↙↗←                    ↑↙↑↓
  →←                  ↘→                                        →↓    ↖↑↖     ↓→→↘←              ←↑←↑↓
↖↗                    ↗→                                        →↗    ←↘         ↓↗↖            ↑←→↘
                      ←↗                                         ↖↑↗↖   →↘         ←↑↓   ↑↘     ↑↑↑↖
                      ↑↙                                            ↖↗↑↘↖ ↖↓↘↑↓       ←↘↑↑↙↗↑
                      ↘↑↖         <code class="text-[clamp(0.3rem,1.11vw,0.75rem)]">Henri Matisse, <i>La Danse</i> (1909-1910)</code>            ↖←←↗↖ ↖↙↓↙        ↖←←
      </pre>

      <UILink v-slot="{ isLinkButton }" to="" class="absolute mix-blend-difference">
        <UIButton size="xl" :is-link-button="isLinkButton" class="!text-neutral-100">{{ $t('experiments') }}↖</UIButton>
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
