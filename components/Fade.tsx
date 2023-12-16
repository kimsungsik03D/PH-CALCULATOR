import { Transition } from "react-transition-group";
import { useRef } from "react";

const duration = 300;
interface transitionStylesType {
  [key: string]: { opacity: number };
  entering: { opacity: number };
  entered: { opacity: number };
  exiting: { opacity: number };
  exited: { opacity: number };
}

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles: transitionStylesType = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

function Fade({ in: inProp }: { in: boolean }) {
  const nodeRef = useRef(null);
  console.log({ ...transitionStyles });
  return (
    <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
      {(state: string) => {
        console.log("state :", typeof state);
        return (
          <div
            ref={nodeRef}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            Fade Transition!
          </div>
        );
      }}
    </Transition>
  );
}

export default Fade;
