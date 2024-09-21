import { gsap } from 'gsap'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(Flip)

const flipBuffer = new Map()

const useFlipTransition = () => {
  const setFlipState = (id: string | number, element: Element) => {
    flipBuffer.set(id.toString(), {
      id,
      flipState: Flip.getState(element, { simple: true }),
    })
  }

  const flipFrom = (id: string | number, target: Element, flipOptions?: object, onComplete?: () => void) => {
    const from = flipBuffer.get(id.toString())

    if (!from) {
      return 'flip element not found'
    }

    const options = {
      // absolute: true,
      duration: 2,
      ease: 'power3.inOut',
      // delay: 1,
      // watch out to rewrite ?? maybe use || insted on each prop
      ...flipOptions,
    }

    Flip.from(from.flipState, {
      targets: target,
      ...options,

      onComplete: () => {
        if (onComplete) onComplete()

        flipBuffer.delete(id)
      },
    })
  }

  return {
    flipBuffer,
    setFlipState,
    flipFrom,
  }
}

export { useFlipTransition }
