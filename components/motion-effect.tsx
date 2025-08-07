"use client";

import * as React from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  type HTMLMotionProps,
  type UseInViewOptions,
  type Transition,
  type Variant,
} from "framer-motion";

interface MotionEffectProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  transition?: Transition;
  delay?: number;
  inView?: boolean;
  inViewMargin?: UseInViewOptions["margin"];
  inViewOnce?: boolean;
  blur?: string | boolean;
  slide?:
    | {
        direction?: "up" | "down" | "left" | "right";
        offset?: number;
      }
    | boolean;
  fade?: { initialOpacity?: number; opacity?: number } | boolean;
  zoom?:
    | {
        initialScale?: number;
        scale?: number;
      }
    | boolean;
  resetKey?: string | number;
}

const MotionEffect = React.forwardRef<HTMLDivElement, MotionEffectProps>(
  (
    {
      children,
      className,
      resetKey,
      transition = { type: "spring", stiffness: 200, damping: 20 },
      delay = 0,
      inView = false,
      inViewMargin = "0px",
      inViewOnce = false,
      blur = false,
      slide = false,
      fade = false,
      zoom = false,
      ...props
    },
    ref,
  ) => {
    const localRef = React.useRef<HTMLDivElement>(null);

    React.useImperativeHandle(ref, () => localRef.current!);

    const inViewResult = useInView(localRef, {
      once: inViewOnce,
      margin: inViewMargin,
    });
    const isInView = !inView || inViewResult;

    const hiddenVariant: Variant = {};
    const visibleVariant: Variant = {};

    if (slide) {
      const offset = typeof slide === "boolean" ? 100 : (slide.offset ?? 100);
      const direction =
        typeof slide === "boolean" ? "left" : (slide.direction ?? "left");
      const axis = direction === "up" || direction === "down" ? "y" : "x";

      hiddenVariant[axis] =
        direction === "left" || direction === "up" ? -offset : offset;
      visibleVariant[axis] = 0;
    }

    if (fade) {
      hiddenVariant.opacity =
        typeof fade === "boolean" ? 0 : (fade.initialOpacity ?? 0);
      visibleVariant.opacity =
        typeof fade === "boolean" ? 1 : (fade.opacity ?? 1);
    }

    if (zoom) {
      hiddenVariant.scale =
        typeof zoom === "boolean" ? 0.5 : (zoom.initialScale ?? 0.5);
      visibleVariant.scale = typeof zoom === "boolean" ? 1 : (zoom.scale ?? 1);
    }

    if (blur) {
      hiddenVariant.filter =
        typeof blur === "boolean" ? "blur(10px)" : `blur(${blur})`;
      visibleVariant.filter = "blur(0px)";
    }

    return (
      <AnimatePresence key={resetKey}>
        <motion.div
          ref={localRef}
          animate={isInView ? "visible" : "hidden"}
          className={className}
          data-slot="motion-effect"
          exit="hidden"
          initial="hidden"
          transition={{
            ...transition,
            delay: (transition?.delay ?? 0) + delay,
          }}
          variants={{
            hidden: hiddenVariant,
            visible: visibleVariant,
          }}
          {...props}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    );
  },
);

MotionEffect.displayName = "MotionEffect";

export { MotionEffect, type MotionEffectProps };
