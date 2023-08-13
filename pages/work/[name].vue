<script setup lang="ts">
import gsap from "gsap";

const route = useRoute();

let work = {
  images: [
    {
      id: "1",
      caption: "",
      src: "https://images.unsplash.com/photo-1691229732670-f7034e54d2cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
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
    {
      id: "6",
      caption: "",
      src: "https://picsum.photos/id/6/1000/1000",
    },
    {
      id: "7",
      caption: "",
      src: "https://picsum.photos/id/7/1000/1000",
    },
    {
      id: "8",
      caption: "",
      src: "https://picsum.photos/id/8/1000/1000",
    },
    {
      id: "9",
      caption: "",
      src: "https://picsum.photos/id/9/1000/1000",
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
  if (!slider.value) return;

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

  if (!hasDragged.value) return;

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

  const matchedImage = sliderImages.value.find((image) => {
    return image.el === img;
  });

  if (matchedImage) {
    const padding = 7;

    slider.value.style.scrollBehavior = "smooth";
    slider.value.scrollLeft =
      matchedImage.left - slider.value.getBoundingClientRect().left - padding;

    slider.value.style.scrollBehavior = "auto";
  }
};

const initListeners = () => {
  window.addEventListener("resize", () => {
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
};

const removeListeners = () => {
  // the onresize is not removed. idk for the others
  window.removeEventListener("resize", initSlider);
  slider.value.removeEventListener("mousedown", beginDrag);
  slider.value.removeEventListener("touchstart", beginDrag);
  slider.value.removeEventListener("mousemove", drag);
  slider.value.removeEventListener("touchmove", drag);
  slider.value.removeEventListener("mouseup", stopDrag);
  slider.value.removeEventListener("touchend", stopDrag);
  slider.value.removeEventListener("mouseleave", stopDrag);
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
  const { transitioning } = usePageTransition();

  const initAll = () => {
    selectImage(work.images[0].id);

    initSlider();

    initListeners();

    initObservers();
  };

  if (!transitioning.status) {
    initAll();
  }

  watch(transitioning, () => {
    // onMounted event run before the onEnter so we need to wait the onEnter event because the slider will init with wrong data
    if (transitioning.lastLifeCycle === "onEnter") {
      initAll();
    }
  });
});

onBeforeUnmount(() => {
  removeListeners;
});

definePageMeta({
  pageTransition: {
    name: "test",
    mode: "out-in",
    onBeforeEnter: (el) => {
      console.log("Before enter...");
    },
    onEnter: (el, done) => {
      // useRoute results undefined ??
      const router = useRouter();
      const workId = router.currentRoute.value.params.name.toString();

      const { transitioning } = usePageTransition();

      console.log("On enter...");

      const sliderWrapper = document.querySelector("#slider-wrapper");
      const text = document.querySelector("#text");

      if (sliderWrapper && text) {
        gsap.set([sliderWrapper, text], {
          // xPercent: -100,
          yPercent: 10,
          opacity: 0,
        });
      }

      const animatePageElements = () => {
        console.log("animatePageElements...");
        if (sliderWrapper && text) {
          gsap.to([sliderWrapper, text], {
            // xPercent: -100,
            yPercent: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.easeOut",
            stagger: {
              each: 0.2,
            },
          });
        }
      };

      const { flipBuffer, flipFrom } = useFlipTransition();
      console.log(flipBuffer);

      if (!flipBuffer.size) {
        console.log("flipBuffer is empty");

        animatePageElements();

        transitioning.lastLifeCycle = "onEnter";

        done();
        return;
      }

      const target = el.querySelector(`[data-flip-id='${workId}']`);

      if (target) {
        flipFrom(workId, target, {}, () => {
          done();

          animatePageElements();
        });
      }

      transitioning.lastLifeCycle = "onEnter";
    },
    onLeave: (el, done) => {
      console.log("onLeave...");
      done();
    },
  },
});
</script>

<template>
  <div class="p-2 w-full flex flex-col items-center">
    <main class="relative w-full flex">
      <h1
        id="text"
        class="z-[2] absolute md:w-1/2 text-[clamp(2rem,4vw,4.5rem)] break-words hyphens-auto"
      >
        Name <sup>2000</sup>, <i>Client</i> / Type of work / Some Tags, Nuxt,
        Directus, Tailwind /
        <a href=""><u class="whitespace-nowrap">Visiter le site ↗</u></a>
      </h1>
      <div
        class="pb-20 w-full h-[94vh] flex flex-col items-center gap-6 overflow-hidden"
      >
        <!-- translate with calc(index * 100%) -->
        <div class="z-[1] h-[75%] w-2/3 md:w-2/5 aspect-[4/3]">
          <!-- {{ selectedImage }} -->
          <div :data-flip-id="route.params.name" class="w-full h-full">
            <img
              class="w-full h-full object-cover"
              :src="selectedImage.src"
              alt=""
            />
          </div>
        </div>

        <div class="w-2/3 md:w-2/5 h-[20%]">
          <div
            id="slider-wrapper"
            ref="observerRoot"
            class="w-[20vh] aspect-[4/3] border"
          >
            <ul
              data-lenis-prevent
              ref="slider"
              class="p-2 w-[80vw] md:w-[68vw] h-full inline-flex gap-2 overflow-hidden cursor-move"
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
