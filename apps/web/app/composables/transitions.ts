export const blurredCircleRef = ref<HTMLElement | null>(null)

export const useBeginTransition = (done: () => void) => {
  if (blurredCircleRef.value) {
    blurredCircleRef.value.remove()
  }
  document.body.style.overflow = 'hidden'
  document.body.style.pointerEvents = 'none'

  const circle = document.createElement('div')
  circle.id = 'blurred-circle'
  circle.classList.add('fixed', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'bg-neutral-900', 'z-[99999]', 'blur-[25vw]', 'size-full')
  const el = document.body.appendChild(circle)
  blurredCircleRef.value = el

  useGSAP().fromTo(
    blurredCircleRef.value,
    {
      clipPath: 'circle(0% at 50% 50%)',
    },
    {
      duration: 1.6,
      ease: 'power4.inOut',
      clipPath: 'circle(100% at 50% 50%)',
      filter: 'blur(0px)',
      onComplete: () => {
        done()
      },
    },
  )
}

export const useEndTransition = (done: () => void) => {
  useGSAP().fromTo(
    blurredCircleRef.value,
    {
      clipPath: 'circle(100% at 50% 50%)',
    },
    {
      duration: 0.7,
      ease: 'power3.out',
      clipPath: 'circle(0% at 50% 50%)',
      onComplete: () => {
        document.body.style.overflow = 'auto'
        document.body.style.pointerEvents = 'auto'

        blurredCircleRef.value?.remove()
        done()
      },
    },
  )
}
