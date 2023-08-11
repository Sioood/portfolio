<script setup lang="ts">
let selectedImage = ref("");

let slider = ref();
let isDragging = ref(false);
let hasDragged = ref(false);
let observerRoot = ref();

const draggingStartFrom = {
  pageX: 0,
  scrollLeft: 0,
};

const beginDrag = (e: any) => {
  hasDragged.value = false;
  isDragging.value = true;

  draggingStartFrom.pageX = e.pageX || e.changedTouches[0].pageX;
  draggingStartFrom.scrollLeft = slider.value.scrollLeft;
};

const drag = (e: any) => {
  e.preventDefault();

  if (!isDragging.value) return;
  hasDragged.value = true;

  const positionDiff =
    (e.pageX || e.changedTouches[0].pageX) - draggingStartFrom.pageX;

  // native but with translate, can play with transition and more style.
  slider.value.scrollLeft = draggingStartFrom.scrollLeft - positionDiff;
};

const stopDrag = () => {
  isDragging.value = false;
};

const selectImage = (src: string) => {
  selectedImage.value = src || "";

  const img = document.querySelector(`[data-slider-img="3"]`);


  // can't work because the boundingClientRect is updated according to scrollLeft...
  // console.log("test", img.getBoundingClientRect());

  // slider.value.scrollLeft = img.getBoundingClientRect().left;
};

// the root element seem to not record entries for some reason (position absolute ??? not directly parent IDK)
const initObservers = () => {
  const imgs = slider.value.querySelectorAll("li");

  console.log(imgs);

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio === 1) {
        // selectedImage.value = entry.target.dataset.sliderImg;
        // selectedImage.value = entry.target.dataset.sliderImg;

        const imgObserved = entry.target.querySelector("img");
        if (imgObserved instanceof HTMLImageElement) {
          const imageSrc = imgObserved.src;
          selectImage(imageSrc);
        }

        // console.log(entry.target);
      }
    });
  };

  imgs.forEach((img: HTMLImageElement) => {
    let options = {
      root: observerRoot.value,
      // rootMargin: "0px",
      threshold: 1.0,
    };

    let observer = new IntersectionObserver(callback, options);

    observer.observe(img);
  });
};

onMounted(() => {
  slider.value.addEventListener("mousedown", (e: Event) => {
    beginDrag(e);
  });
  slider.value.addEventListener("touchstart", (e: Event) => {
    beginDrag(e);
  });

  slider.value.addEventListener("mousemove", (e: Event) => {
    drag(e);
  });
  slider.value.addEventListener("touchmove", (e: Event) => {
    drag(e);
  });

  slider.value.addEventListener("mouseup", stopDrag);
  slider.value.addEventListener("touchend", stopDrag);

  slider.value.addEventListener("mouseleave", stopDrag);

  initObservers();
});
</script>

<template>
  <div class="p-2 w-full flex flex-col items-center">
    <main class="relative w-full flex">
      <h1 class="absolute md:w-1/2 text-5xl break-words hyphens-auto">
        Name <sup>2000</sup>, <i>Client</i> / Type of work / Some Tags, Nuxt,
        Directus, Tailwind / <a href=""><u>Visiter le site ↗</u></a>
      </h1>

      <div
        class="w-full h-[85vh] flex flex-col items-center gap-6 overflow-hidden"
      >
        <!-- translate with calc(index * 100%) -->
        <div
          class="flex-[75%] w-2/3 md:w-2/5 aspect-[4/3] bg-surface overflow-hidden"
        >
          <!-- {{ selectedImage }} -->
          <img class="w-full h-full object-cover" :src="selectedImage" alt="" />
        </div>

        <!-- <div
            ref="observerRoot"
            class="scale-125 absolute left-0 h-full aspect-[4/3] border pointer-events-none"
          ></div> -->

        <div class="w-2/3 md:w-2/5 flex-[15%] overflow-y-clip">
          <div ref="observerRoot" class="w-[20vh] aspect-[4/3] border">
            <ul
              ref="slider"
              class="p-2 w-[50vw] h-full flex gap-2 overflow-x-hidden cursor-move"
            >
              <li
                v-for="i in 10"
                :key="i"
                :data-slider-img="i"
                class="aspect-[4/3] bg-surface"
              >
                <button
                  @click="
                    if (hasDragged === false)
                      selectImage(`https://picsum.photos/id/${i}/1000/1000`);
                  "
                  class="aspect-[4/3]"
                >
                  <img
                    class="w-full h-full object-cover transition-all"
                    :class="{
                      'grayscale invert-[65%]':
                        selectedImage !==
                        `https://picsum.photos/id/${i}/1000/1000`,
                    }"
                    :src="`https://picsum.photos/id/${i}/1000/1000`"
                    alt=""
                    draggable="false"
                  />
                </button>
              </li>

              <!-- Need padding for the slider because the last img can't be in the observer -->
              <!-- <li v-for="i in 10" :key="i" class="aspect-[4/3] bg-success">
                {{ i }}
              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
