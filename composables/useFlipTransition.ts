import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

let flipBuffer = new Map();

const useFlipTransition = () => {
  const setFlipState = (id: string | number, element: Element ) => {
    flipBuffer.set(id, {
      id,
      flipState: Flip.getState(element, {simple: true}),
    });

    console.log(flipBuffer);
  };

  const flipFrom = (
    id: string | number,
    target: Element,
    flipOptions: object
  ) => {
    let from = flipBuffer.get(id);

    console.log(from);


    if (!from) {
      throw new Error("flip element not found");
    }

    const options = {
      // absolute: true,
      duration: 2,
      ease: "power3.inOut",
      // delay: 1,
      // watch out to rewrite ?? maybe use || insted on each prop
      ...flipOptions,
    };

    console.log(from.flipState);

    Flip.from(from.flipState, {
      targets: target,
      ...options,
      onComplete: () => {
        console.log(true);

        flipBuffer.delete(id);
      },
    });
  };

  return {
    setFlipState,
    flipFrom,
  };
};

export { useFlipTransition };
