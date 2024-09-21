<script setup lang="ts">
import gsap from 'gsap'
import works from '~/assets/data/work/work.json'

const route = useRoute()

const work = ref({
  metadata: {
    id: '',
    name: '',
    date: '',
    client: '',
    type: '',
    tags: [''],
    url: '',
    items: [
      {
        url: '',
        alt: '',
      },
    ],
    variant: '',
  },
  images: [
    {
      id: '',
      url: '',
      caption: '',
      alt: '',
    },
  ],
})
const selectedImage = ref(work.value.images[0])

const slider = ref()

interface SliderImage {
  el: HTMLElement
  left: number
}
const sliderImages: Ref<SliderImage[]> = ref([])
const isDragging = ref(false)
const hasDragged = ref(false)
const observerRoot = ref()

const draggingStartFrom = {
  pageX: 0,
  scrollLeft: 0,
}

const initSlider = () => {
  if (!slider.value) return

  const images = slider.value.querySelectorAll('li')

  // aiming for resize specifically -> more fast than refind an existing element and update the left
  sliderImages.value = []
  images.forEach((image: HTMLElement) => {
    image.setAttribute('data-original-left', image.getBoundingClientRect().left.toString())

    sliderImages.value.push({
      el: image,
      // to prevent resize with negative left value if the user has already scrolled
      left: image.getBoundingClientRect().left + slider.value.scrollLeft,
    })
  })

  const [lastImage] = sliderImages.value.slice(-1)

  // const maxNativeScrollLeft =
  //   slider.value.scrollWidth - slider.value.clientWidth;

  lastImage.el.style.marginRight = `${slider.value.getBoundingClientRect().width - lastImage.el.getBoundingClientRect().width - 18}px`
}

const beginDrag = (e: any) => {
  hasDragged.value = false
  isDragging.value = true

  draggingStartFrom.pageX = e.pageX || e.changedTouches[0].pageX
  draggingStartFrom.scrollLeft = slider.value.scrollLeft
}

const drag = (e: any) => {
  e.preventDefault()
  if (!isDragging.value) return
  hasDragged.value = true

  const positionDiff = (e.pageX || e.changedTouches[0].pageX) - draggingStartFrom.pageX

  // native but with translate, can play with transition and more style.
  slider.value.scrollLeft = draggingStartFrom.scrollLeft - positionDiff
}

const stopDrag = () => {
  isDragging.value = false

  if (!hasDragged.value) return

  if (selectedImage.value) {
    const selectedImageElement = document.querySelector(`[data-slider-img="${selectedImage.value.id}"]`)

    const matchedImage = sliderImages.value.find((image) => image.el === selectedImageElement)

    if (matchedImage) {
      const padding = 7

      slider.value.style.scrollBehavior = 'smooth'
      slider.value.scrollLeft = matchedImage.left - slider.value.getBoundingClientRect().left - padding

      slider.value.style.scrollBehavior = 'auto'
    }
  }
}

const selectImage = (id: string | number) => {
  if (!work.value) return
  const image = work.value.images.find((image) => image.id === id)

  if (image) {
    selectedImage.value = image
  }
}

const mousedownClickedImagePosition = ref({
  x: 0,
  y: 0,
})
const clickedImage = (e: any, id: number | string) => {
  if (mousedownClickedImagePosition.value.x !== e.clientX && mousedownClickedImagePosition.value.y !== e.clientY) return
  const img = document.querySelector(`[data-slider-img="${id}"]`)

  const matchedImage = sliderImages.value.find((image) => {
    return image.el === img
  })

  if (matchedImage) {
    const padding = 7

    slider.value.style.scrollBehavior = 'smooth'
    slider.value.scrollLeft = matchedImage.left - slider.value.getBoundingClientRect().left - padding

    slider.value.style.scrollBehavior = 'auto'
  }
}

const initListeners = () => {
  window.addEventListener('resize', () => {
    initSlider()
  })

  slider.value.addEventListener('mousedown', (e: Event) => {
    beginDrag(e)
  })
  slider.value.addEventListener('touchstart', (e: Event) => {
    beginDrag(e)
  })

  slider.value.addEventListener('mousemove', (e: Event) => {
    drag(e)
  })
  slider.value.addEventListener('touchmove', (e: Event) => {
    drag(e)
  })

  slider.value.addEventListener('mouseup', stopDrag)
  slider.value.addEventListener('touchend', stopDrag)

  slider.value.addEventListener('mouseleave', stopDrag)
}

const removeListeners = () => {
  // the onresize is not removed. idk for the others
  window.removeEventListener('resize', initSlider)
  slider.value.removeEventListener('mousedown', beginDrag)
  slider.value.removeEventListener('touchstart', beginDrag)
  slider.value.removeEventListener('mousemove', drag)
  slider.value.removeEventListener('touchmove', drag)
  slider.value.removeEventListener('mouseup', stopDrag)
  slider.value.removeEventListener('touchend', stopDrag)
  slider.value.removeEventListener('mouseleave', stopDrag)
}

const initObservers = () => {
  const imgs = slider.value.querySelectorAll('li')

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio === 1) {
        if (!work.value) return
        selectImage(entry.target.getAttribute('data-slider-img') ?? work.value.images[0].id)
      }
    })
  }

  imgs.forEach((img: HTMLImageElement) => {
    let options = {
      root: observerRoot.value,
      // rootMargin: "0px",
      threshold: 1.0,
    }

    let observer = new IntersectionObserver(callback, options)

    observer.observe(img)
  })
}

const initAll = () => {
  selectImage(work.value.images[0].id)

  nextTick(initSlider)

  nextTick(initListeners)

  nextTick(initObservers)
}

onMounted(() => {
  const workById = works.find((work) => work.metadata.id === route.params.id)
  if (workById) {
    work.value = workById
  }

  const { transitioning } = usePageTransition()

  if (!transitioning.status) {
    initAll()
  }

  watch(transitioning, () => {
    // onMounted event run before the onEnter so we need to wait the onEnter event because the slider will init with wrong data
    if (transitioning.lastLifeCycle === 'onEnter') {
      initAll()
    }
  })
})

watch(
  work,
  () => {
    nextTick(removeListeners)
    initAll()
  },
  { deep: true },
)

onBeforeUnmount(() => {
  removeListeners()
})

definePageMeta({
  pageTransition: {
    name: 'test',
    mode: 'out-in',
    onBeforeEnter: (el) => {
      console.log('Before enter...')
    },
    onEnter: (el, done) => {
      // useRoute results undefined ??
      const router = useRouter()
      const workId = router.currentRoute.value.params.id.toString()

      const { transitioning } = usePageTransition()

      console.log('On enter...')

      const sliderWrapper = document.querySelector('#slider-wrapper')
      const text = document.querySelector('#text')

      if (sliderWrapper && text) {
        gsap.set([sliderWrapper, text], {
          // xPercent: -100,
          yPercent: 10,
          opacity: 0,
        })
      }

      const animatePageElements = () => {
        console.log('animatePageElements...')
        if (sliderWrapper && text) {
          gsap.to([sliderWrapper, text], {
            // xPercent: -100,
            yPercent: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.easeOut',
            stagger: {
              each: 0.2,
            },
          })
        }
      }

      const { flipBuffer, flipFrom } = useFlipTransition()
      console.log(flipBuffer)

      if (!flipBuffer.size) {
        console.log('flipBuffer is empty')

        animatePageElements()

        transitioning.lastLifeCycle = 'onEnter'

        done()
        return
      }

      const target = el.querySelector(`[data-flip-id='${workId}']`)

      if (target) {
        flipFrom(workId, target, {}, () => {
          done()

          animatePageElements()
        })
      }

      transitioning.lastLifeCycle = 'onEnter'
    },
    onLeave: (el, done) => {
      console.log('onLeave...')
      done()
    },
  },
})
</script>

<template>
  <div class="p-2 w-full flex flex-col items-center">
    <main class="relative w-full flex">
      <h1 id="text" class="z-[2] absolute md:w-1/2 text-[clamp(2rem,4vw,4.5rem)] break-words hyphens-auto">
        {{ work.metadata.name }} <sup>{{ work.metadata.date }}</sup
        >, <i>{{ work.metadata.client }}</i> / {{ work.metadata.type }} /
        <span v-for="(tag, i) in work.metadata.tags">{{ `${tag}${i < work.metadata.tags.length - 1 ? ', ' : ''}` }}</span>
        <span v-if="work.metadata.url"
          >/ <a :href="work.metadata.url"><u class="whitespace-nowrap">Visiter le site ↗</u></a></span
        >
      </h1>

      <div class="md:pb-20 w-full h-[94vh] flex flex-col items-center justify-end gap-6 overflow-hidden">
        <!-- translate with calc(index * 100%) -->
        <div class="z-[1] md:h-[75%] w-4/5 sm:w-2/5 aspect-[3/4]">
          <!-- {{ selectedImage }} -->
          <div :data-flip-id="route.params.id" class="w-full h-full">
            <img class="w-full h-full object-cover" :src="selectedImage.url" alt="" />
          </div>
        </div>

        <div class="w-4/5 sm:w-2/5 h-[20%]">
          <div id="slider-wrapper" ref="observerRoot" class="w-[20vh] aspect-[4/3] border">
            <ul data-lenis-prevent ref="slider" class="p-2 w-[85vw] md:w-[68vw] h-full inline-flex gap-2 overflow-hidden cursor-move">
              <li v-for="(image, i) in work.images" :key="i" :data-slider-img="image.id" class="aspect-[4/3] bg-surface">
                <button
                  @mousedown="mousedownClickedImagePosition = { x: $event.clientX, y: $event.clientY }"
                  @click="clickedImage($event, image.id)"
                  class="aspect-[4/3]"
                >
                  <img
                    class="w-full h-full object-cover transition-all"
                    :class="{
                      'grayscale invert-[65%]': selectedImage.id !== image.id,
                    }"
                    :src="image.url"
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
