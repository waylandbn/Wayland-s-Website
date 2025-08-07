"use client";

import * as React from "react";
import {
  motion,
  type Variants,
  type TargetAndTransition,
  type HTMLMotionProps,
  useInView,
  type UseInViewOptions,
} from "framer-motion";

type DefaultSplittingTextProps = {
  motionVariants?: {
    initial?: Record<string, any>;
    animate?: Record<string, any>;
    transition?: Record<string, any>;
    stagger?: number;
  };
  inView?: boolean;
  inViewMargin?: UseInViewOptions["margin"];
  inViewOnce?: boolean;
  delay?: number;
} & HTMLMotionProps<"div">;

type CharsOrWordsSplittingTextProps = DefaultSplittingTextProps & {
  type?: "chars" | "words";
  text: string;
};

type LinesSplittingTextProps = DefaultSplittingTextProps & {
  type: "lines";
  text: string[];
};

type SplittingTextProps =
  | CharsOrWordsSplittingTextProps
  | LinesSplittingTextProps;

const defaultItemVariant: Variants = {
  hidden: { x: 150, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const SplittingText = React.forwardRef<
  HTMLDivElement,
  SplittingTextProps
>(
  (
    {
      text,
      type = "chars",
      motionVariants = {},
      inView = false,
      inViewMargin = "0px",
      inViewOnce = true,
      delay = 0,
      ...props
    },
    ref,
  ) => {
    const items = React.useMemo<React.ReactNode[]>(() => {
      if (Array.isArray(text)) {
        return text.flatMap((line, i) => [
          <React.Fragment key={`line-${i}`}>{line}</React.Fragment>,
          i < text.length - 1 ? <br key={`br-${i}`} /> : null,
        ]);
      }

      if (type === "words") {
        const tokens = text.match(/\S+\s*/g) || [];

        return tokens.map((token, i) => (
          <React.Fragment key={i}>{token}</React.Fragment>
        ));
      }

      return text
        .split("")
        .map((char, i) => <React.Fragment key={i}>{char}</React.Fragment>);
    }, [text, type]);

    const containerVariants: Variants = {
      hidden: {},
      visible: {
        transition: {
          delayChildren: delay / 1000,
          staggerChildren:
            motionVariants.stagger ??
            (type === "chars" ? 0.05 : type === "words" ? 0.06 : 0.3),
        },
      },
    };

    const itemVariants: Variants = {
      hidden: {
        ...defaultItemVariant.hidden,
        ...(motionVariants.initial || {}),
      },
      visible: {
        ...defaultItemVariant.visible,
        ...(motionVariants.animate || {}),
        transition: {
          ...((defaultItemVariant.visible as TargetAndTransition).transition ||
            {}),
          ...(motionVariants.transition || {}),
        },
      },
    };

    const localRef = React.useRef<HTMLDivElement>(null);

    React.useImperativeHandle(ref, () => localRef.current as HTMLDivElement);

    const inViewResult = useInView(localRef, {
      once: inViewOnce,
      margin: inViewMargin,
    });
    const isInView = !inView || inViewResult;

    return (
      <motion.span
        ref={localRef}
        animate={isInView ? "visible" : "hidden"}
        initial="hidden"
        variants={containerVariants}
        {...props}
      >
        {items.map(
          (item, index) =>
            item && (
              <React.Fragment key={index}>
                <motion.span
                  key={index}
                  style={{
                    display: "inline-block",
                    whiteSpace:
                      type === "chars"
                        ? "pre"
                        : Array.isArray(text)
                          ? "normal"
                          : "normal",
                  }}
                  variants={itemVariants}
                >
                  {item}
                </motion.span>
                {type === "words" && " "}
              </React.Fragment>
            ),
        )}
      </motion.span>
    );
  },
);

SplittingText.displayName = "SplittingText";
