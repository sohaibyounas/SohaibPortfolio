"use client";

import * as React from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isMobile, setIsMobile] = React.useState(true);
  const [cursorState, setCursorState] = React.useState<"default" | "hover" | "view">("default");
  const [label, setLabel] = React.useState("");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

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
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const onEnter = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest("[data-cursor='view']")) {
        setCursorState("view");
        setLabel("VIEW");
      } else if (
        el.closest("a, button, [role='button'], [data-cursor='hover']")
      ) {
        setCursorState("hover");
        setLabel("");
      } else {
        setCursorState("default");
        setLabel("");
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
    };
  }, [isMobile, mouseX, mouseY, dotX, dotY]);

  if (isMobile) return null;

  return (
    <>
      {/* Trailing circle */}
      <motion.div
        className="custom-cursor"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: cursorState === "view" ? 80 : cursorState === "hover" ? 44 : 36,
            height: cursorState === "view" ? 80 : cursorState === "hover" ? 44 : 36,
            backgroundColor:
              cursorState === "view"
                ? "hsl(142 70% 45% / 0.15)"
                : cursorState === "hover"
                ? "hsl(0 0% 96% / 0.12)"
                : "transparent",
            borderColor:
              cursorState === "view"
                ? "hsl(142 70% 45% / 0.8)"
                : "hsl(0 0% 96% / 0.4)",
          }}
          transition={{ type: "spring", damping: 22, stiffness: 300 }}
          className="flex items-center justify-center rounded-full border"
        >
          {cursorState === "view" && (
            <span className="font-mono text-[9px] font-bold tracking-widest text-white/80 uppercase">
              {label}
            </span>
          )}
        </motion.div>
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="custom-cursor"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
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
