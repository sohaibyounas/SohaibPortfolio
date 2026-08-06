"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = React.useState(0);
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    // Skip loader on repeat visits within same session
    if (sessionStorage.getItem("loader_shown")) {
      onComplete();
      return;
    }

    let current = 0;
    const target = 100;
    const duration = 1600; // ms
    const interval = duration / target;

    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= target) {
        clearInterval(timer);
        setTimeout(() => {
          setDone(true);
          sessionStorage.setItem("loader_shown", "true");
          setTimeout(onComplete, 700);
        }, 200);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0A0A]"
        >
          {/* Logotype */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12 font-display text-sm font-semibold tracking-[0.3em] text-white/40 uppercase"
          >
            SOHAIB.DEV
          </motion.div>

          {/* Counter */}
          <div className="relative overflow-hidden">
            <motion.span
              key={count}
              className="block font-display text-[clamp(5rem,15vw,10rem)] font-bold leading-none tracking-tighter text-white"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              {count}
            </motion.span>
          </div>

          {/* Progress bar */}
          <div className="mt-8 h-px w-48 overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-white"
              animate={{ width: `${count}%` }}
              transition={{ ease: "linear", duration: 0 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
