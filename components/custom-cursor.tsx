"use client";

import * as React from "react";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type CursorState = "default" | "hover" | "view";

const RING_SIZE: Record<CursorState, number> = {
  default: 28,
  hover: 40,
  view: 56,
};

export function CustomCursor() {
  const [isMobile, setIsMobile] = React.useState(true);
  const [cursorState, setCursorState] = React.useState<CursorState>("default");
  const [visible, setVisible] = React.useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { damping: 28, stiffness: 350, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 350, mass: 0.5 });

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  React.useEffect(() => {
    if (isMobile) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest("[data-cursor='view']")) {
        setCursorState("view");
      } else if (
        el.closest("a, button, [role='button'], input, textarea, [data-cursor='hover']")
      ) {
        setCursorState("hover");
      } else {
        setCursorState("default");
      }
    };

    // Hide when the pointer leaves the window so the cursor never gets stuck
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [isMobile, mouseX, mouseY]);

  if (isMobile) return null;

  const isView = cursorState === "view";
  const size = RING_SIZE[cursorState];

  return (
    <>
      {/* Trailing ring — morphs into a solid "View" badge over projects */}
      <motion.div
        className="custom-cursor"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          // Blend mode would distort the accent fill, so drop it for the badge
          mixBlendMode: isView ? "normal" : "difference",
        }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          initial={false}
          animate={{
            width: size,
            height: size,
            backgroundColor: isView
              ? "rgba(48, 175, 255, 0.95)"
              : cursorState === "hover"
              ? "rgba(245, 245, 245, 0.12)"
              : "rgba(245, 245, 245, 0)",
            borderColor: isView
              ? "rgba(146, 238, 255, 0.9)"
              : "rgba(245, 245, 245, 0.45)",
            boxShadow: isView
              ? "0 0 0 6px rgba(48, 175, 255, 0.15), 0 8px 24px rgba(48, 175, 255, 0.35)"
              : "0 0 0 0px rgba(48, 175, 255, 0), 0 0 0 rgba(48, 175, 255, 0)",
          }}
          transition={{ type: "spring", damping: 22, stiffness: 320 }}
          className="flex items-center justify-center rounded-full border"
        >
          <AnimatePresence>
            {isView && (
              <motion.span
                key="view"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.18 }}
                className="flex items-center gap-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-[#04121c]"
              >
                View
                <ArrowUpRight size={10} strokeWidth={2.75} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="custom-cursor"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          animate={{ scale: cursorState !== "default" ? 0 : 1 }}
          transition={{ type: "spring", damping: 20, stiffness: 400 }}
          className="h-1.5 w-1.5 rounded-full bg-white"
        />
      </motion.div>
    </>
  );
}
