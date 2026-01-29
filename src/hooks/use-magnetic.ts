"use client";

import { useRef, useState, useCallback } from "react";
import { useMotionValue, useSpring, type MotionValue } from "framer-motion";

interface MagneticState {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

interface UseMagneticOptions {
  strength?: number;
  radius?: number;
  springConfig?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
}

export function useMagnetic<T extends HTMLElement>(
  options: UseMagneticOptions = {}
) {
  const {
    strength = 0.35,
    radius = 200,
    springConfig = {
      stiffness: 150,
      damping: 15,
      mass: 0.1,
    },
  } = options;

  const ref = useRef<T>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<T>) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = event.clientX - centerX;
      const distanceY = event.clientY - centerY;

      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      if (distance < radius) {
        x.set(distanceX * strength);
        y.set(distanceY * strength);
      }
    },
    [strength, radius, x, y]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  }, [x, y]);

  const magneticProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  const magneticStyle: MagneticState = {
    x: springX,
    y: springY,
  };

  return {
    ref,
    magneticProps,
    magneticStyle,
    isHovered,
  };
}
