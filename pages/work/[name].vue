<script setup lang="ts">
let work = {
  images: [
    {
      id: "1",
      caption: "",
      src: "https://picsum.photos/id/1/1000/1000",
    },
    {
      id: "2",
      caption: "",
      src: "https://picsum.photos/id/2/1000/1000",
    },
    {
      id: "3",
      caption: "",
      src: "https://picsum.photos/id/3/1000/1000",
    },
    {
      id: "4",
      caption: "",
      src: "https://picsum.photos/id/4/1000/1000",
    },
    {
      id: "5",
      caption: "",
      src: "https://picsum.photos/id/5/1000/1000",
    },
  ],
};

let selectedImage = ref({
  id: "",
  caption: "",
  src: "",
});

let slider = ref();

interface SliderImage {
  el: HTMLElement;
  left: number;
}
let sliderImages: Ref<SliderImage[]> = ref([]);
let isDragging = ref(false);
let hasDragged = ref(false);
let observerRoot = ref();

const draggingStartFrom = {
  pageX: 0,
  scrollLeft: 0,
};

const initSlider = () => {
  const images = slider.value.querySelectorAll("li");

  // aiming for resize specifically -> more fast than refind an existing element and update the keft
  sliderImages.value = [];
  images.forEach((image: HTMLElement) => {
    image.setAttribute(
      "data-original-left",
      image.getBoundingClientRect().left.toString()
    );

    sliderImages.value.push({
      el: image,
      // to prevent resize with negative left value if the user has already scrolled
      left: image.getBoundingClientRect().left + slider.value.scrollLeft,
    });
  });

  const [lastImage] = sliderImages.value.slice(-1);

  // const maxNativeScrollLeft =
  //   slider.value.scrollWidth - slider.value.clientWidth;

  lastImage.el.style.marginRight = `${
    slider.value.getBoundingClientRect().width -
    lastImage.el.getBoundingClientRect().width -
    18
  }px`;
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

  if (selectedImage.value) {
    const selectedImageElement = document.querySelector(
      `[data-slider-img="${selectedImage.value.id}"]`
    );

    const matchedImage = sliderImages.value.find(
      (image) => image.el === selectedImageElement
    );

    if (matchedImage) {
      const padding = 7;

      slider.value.style.scrollBehavior = "smooth";
      slider.value.scrollLeft =
        matchedImage.left - slider.value.getBoundingClientRect().left - padding;

      slider.value.style.scrollBehavior = "auto";
    }
  }
};

const selectImage = (id: string | number) => {
  const image = work.images.find((image) => image.id === id);

  if (image) {
    selectedImage.value = image;
  }
};

const clickedImage = (id: number | string) => {
  const img = document.querySelector(`[data-slider-img="${id}"]`);

  const matchedImage = sliderImages.value.find((image) => image.el === img);

  if (matchedImage) {
    const padding = 7;

    slider.value.style.scrollBehavior = "smooth";
    slider.value.scrollLeft =
      matchedImage.left - slider.value.getBoundingClientRect().left - padding;

    slider.value.style.scrollBehavior = "auto";
  }
};

const initObservers = () => {
  const imgs = slider.value.querySelectorAll("li");

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio === 1) {
        selectImage(
          entry.target.getAttribute("data-slider-img") ?? work.images[0].id
        );
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
  initSlider();
  addEventListener("resize", () => {
    initSlider();
  });

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
          <img
            class="w-full h-full object-cover"
            :src="selectedImage.src"
            alt=""
          />
        </div>

        <div class="w-2/3 md:w-2/5 flex-[15%] overflow-y-clip">
          <div ref="observerRoot" class="w-[20vh] aspect-[4/3] border">
            <ul
              data-lenis-prevent
              ref="slider"
              class="p-2 w-[80vw] md:w-[70vw] h-full inline-flex gap-2 overflow-x-hidden cursor-move"
            >
              <li
                v-for="(image, i) in work.images"
                :key="i"
                :data-slider-img="image.id"
                class="aspect-[4/3] bg-surface"
              >
                <button
                  @click="if (hasDragged === false) clickedImage(image.id);"
                  class="aspect-[4/3]"
                >
                  <img
                    class="w-full h-full object-cover transition-all"
                    :class="{
                      'grayscale invert-[65%]': selectedImage.id !== image.id,
                    }"
                    :src="image.src"
                    alt=""
                    draggable="false"
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
