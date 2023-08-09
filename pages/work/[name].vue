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

  const imgs = slider.value.querySelectorAll("li");

  // compare this to get the closest from the "viewer"
  // console.log(slider.value.getBoundingClientRect().x);
  // console.log(imgs[0].getBoundingClientRect().x);

  // this function returns true if the "child" is inside the "parent" -> Alternative to observer which don't seem to work (but better)
  // one thing to note to improve performance is to check if one img is inside the observer and if one is found stop the function.
  const isChildInsideParent =
    imgs[0].getBoundingClientRect().left >=
      observerRoot.value.getBoundingClientRect().left &&
    imgs[0].getBoundingClientRect().right <=
      observerRoot.value.getBoundingClientRect().right &&
    imgs[0].getBoundingClientRect().top >=
      observerRoot.value.getBoundingClientRect().top &&
    imgs[0].getBoundingClientRect().bottom <=
      observerRoot.value.getBoundingClientRect().bottom;

  console.log(isChildInsideParent);

  // imgs.forEach((img) => {
  //   console.log(img.offsetLeft);
  //   console.log(img.getBoundingClientRect());

  // });

  const positionDiff = e.pageX - draggingStartFrom.pageX;

  // native but with translate, can play with transition and more style.
  slider.value.scrollLeft = draggingStartFrom.scrollLeft - positionDiff;
};

// the root element seem to not record entries for some reason (position absolute ??? not directly parent IDK)
// const initObservers = () => {
//   const imgs = slider.value.querySelectorAll("li");

//   console.log(imgs);

//   const callback = (entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         console.log(entry);
//       }

//       // Each entry describes an intersection change for one observed
//       // target element:
//       //   entry.boundingClientRect
//       //   entry.intersectionRatio
//       //   entry.intersectionRect
//       //   entry.isIntersecting
//       //   entry.rootBounds
//       //   entry.target
//       //   entry.time
//     });
//   };

//   imgs.forEach((img) => {
//     let options = {
//       root: observerRoot.value,
//       // rootMargin: "0px",
//       // threshold: 1.0,
//     };

//     let observer = new IntersectionObserver(callback, options);

//     observer.observe(img);
//   });
// };

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

  // initObservers();
});
</script>

<template>
  <div class="p-2 w-full flex flex-col items-center">
    <main class="relative w-full flex">
      <h1 class="absolute md:w-1/2 text-5xl break-words hyphens-auto">
        Name <sup>2000</sup>, <i>Client</i> / Type of work / Some Tags, Nuxt,
        Directus, Tailwind
      </h1>

      <div class="w-full h-[85vh] flex flex-col items-center gap-6">
        <div class="flex-[75%] w-2/3 md:w-2/5 aspect-[4/3] bg-surface"></div>

        <div class="relative w-2/5 flex-[15%]">
          <div
            ref="observerRoot"
            class="scale-125 absolute left-0 h-full aspect-[4/3] border pointer-events-none"
          ></div>

          <ul
            ref="slider"
            class="pr-[141%] w-[66vw] h-full flex gap-2 overflow-x-hidden cursor-move"
          >
            <li v-for="i in 10" :key="i" class="aspect-[4/3] bg-surface">
              {{ i }}
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>
