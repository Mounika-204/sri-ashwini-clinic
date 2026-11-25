
import { m, useReducedMotion } from "framer-motion";

export default function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}) {
  const reduce = useReducedMotion();

  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
  };

  const hidden = directions[direction] || directions.up;

  return (
    <m.div
      className={className}
      initial={
        reduce
          ? false
          : {
              opacity: 0,
              ...hidden,
            }
      }
      whileInView={
        reduce
          ? {}
          : {
              opacity: 1,
              x: 0,
              y: 0,
            }
      }
      viewport={{
        once: true,
        amount: 0.15,
        margin: "0px 0px -60px 0px",
      }}
      transition={{
        duration: 0.65,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </m.div>
  );
}
