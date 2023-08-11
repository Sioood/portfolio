<script setup lang="ts">
let slider = ref();
let observerRoot = ref();

let isDragging = ref(false);

const draggingStartFrom = {
  pageX: 0,
  scrollLeft: 0,
};

const drag = (e) => {
  if (!isDragging.value) return;
  e.preventDefault();

  const positionDiff = e.pageX - draggingStartFrom.pageX;

  // native but with translate, can play with transition and more style.
  slider.value.scrollLeft = draggingStartFrom.scrollLeft - positionDiff;
};

// the root element seem to not record entries for some reason (position absolute ??? not directly parent IDK)
const initObservers = () => {
  const imgs = slider.value.querySelectorAll("li");

  console.log(imgs);

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry);
        console.log(entry.target.innerHTML);
      }

      if (entry.intersectionRatio === 1) {
        console.log(entry.target.innerHTML);
      }

      // Each entry describes an intersection change for one observed
      // target element:
      //   entry.boundingClientRect
      //   entry.intersectionRatio
      //   entry.intersectionRect
      //   entry.isIntersecting
      //   entry.rootBounds
      //   entry.target
      //   entry.time
    });
  };

  imgs.forEach((img) => {
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
  slider.value.addEventListener("mousemove", (e) => {
    drag(e);
  });

  slider.value.addEventListener("mousedown", (e) => {
    isDragging.value = true;

    draggingStartFrom.pageX = e.pageX;
    draggingStartFrom.scrollLeft = slider.value.scrollLeft;
  });

  slider.value.addEventListener("mouseup", () => {
    isDragging.value = false;
  });

  slider.value.addEventListener("mouseleave", () => {
    isDragging.value = false;
  });

  initObservers();
});
</script>

<template>
  test

  <main class="overflow-hidden">
    <div ref="observerRoot" class="border w-52 aspect-[4/3]">
      <ul
        ref="slider"
        class="w-[100vw] snap-x h-full flex gap-2 overflow-x-scroll"
      >
        <li v-for="i in 10" :key="i" class="aspect-[4/3] bg-surface">
          {{ i }}
        </li>
      </ul>
    </div>
  </main>
</template>
