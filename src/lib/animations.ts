import { type Variants } from "framer-motion";

// Spring configurations
export const springConfig = {
  gentle: { stiffness: 120, damping: 14, mass: 0.1 },
  snappy: { stiffness: 400, damping: 30, mass: 0.8 },
  bouncy: { stiffness: 300, damping: 10, mass: 0.5 },
  smooth: { stiffness: 100, damping: 20, mass: 0.5 },
};

// Page transition variants
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

// Card hover variants
export const cardVariants: Variants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      ...springConfig.gentle,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      type: "spring",
      ...springConfig.gentle,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

// Image zoom variants for project cards
export const imageVariants: Variants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.4,
      type: "spring",
      ...springConfig.smooth,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.4,
      type: "spring",
      ...springConfig.smooth,
    },
  },
};

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

// Fade in variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

// Slide up variants
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

// Arrow/icon hover variants
export const arrowVariants: Variants = {
  rest: {
    x: 0,
    y: 0,
    transition: {
      duration: 0.2,
      type: "spring",
      ...springConfig.snappy,
    },
  },
  hover: {
    x: 3,
    y: -3,
    transition: {
      duration: 0.2,
      type: "spring",
      ...springConfig.snappy,
    },
  },
};

// Text underline animation (for links)
export const underlineVariants: Variants = {
  rest: {
    width: "0%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  hover: {
    width: "100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// Marquee animation
export const marqueeVariants: Variants = {
  animate: {
    x: [0, -1920],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "linear",
      },
    },
  },
};
