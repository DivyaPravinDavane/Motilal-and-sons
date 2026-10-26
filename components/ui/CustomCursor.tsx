"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "view" | "drag">("default");
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on touch devices or reduced-motion
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check hovered element
      const target = e.target as HTMLElement | null;
      const cursorAttr = target?.closest("[data-cursor]")?.getAttribute("data-cursor");

      if (cursorAttr === "view") {
        setCursorVariant("view");
        setCursorText("View");
      } else if (cursorAttr === "drag") {
        setCursorVariant("drag");
        setCursorText("Drag");
      } else if (
        target?.closest("button") ||
        target?.closest("a") ||
        target?.closest("[role='button']")
      ) {
        setCursorVariant("hover");
        setCursorText("");
      } else {
        setCursorVariant("default");
        setCursorText("");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  const size =
    cursorVariant === "view" || cursorVariant === "drag"
      ? 64
      : cursorVariant === "hover"
      ? 36
      : 8;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full border border-[#C8A96A] bg-[#C8A96A]/10 backdrop-blur-[1px]"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
        width: size,
        height: size,
      }}
      animate={{
        scale: 1,
        borderColor:
          cursorVariant === "default" ? "rgba(200, 169, 106, 0.9)" : "rgba(232, 213, 165, 0.95)",
        backgroundColor:
          cursorVariant === "default"
            ? "rgba(200, 169, 106, 0.9)"
            : "rgba(12, 10, 9, 0.45)",
      }}
      transition={{ duration: 0.2 }}
    >
      {cursorText && (
        <span className="font-sans text-[9px] uppercase tracking-widest text-[#E8D5A5] font-medium select-none">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
}
