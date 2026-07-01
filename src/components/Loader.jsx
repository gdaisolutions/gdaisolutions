import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.jpeg";

const PARTICLES = [
  { id: 0,  left: 8,  top: 72, size: 1.5, duration: 18, delay: 0.0 },
  { id: 1,  left: 15, top: 45, size: 1.0, duration: 22, delay: 1.2 },
  { id: 2,  left: 23, top: 88, size: 1.2, duration: 20, delay: 0.5 },
  { id: 3,  left: 34, top: 30, size: 1.0, duration: 25, delay: 2.1 },
  { id: 4,  left: 48, top: 92, size: 1.8, duration: 17, delay: 0.8 },
  { id: 5,  left: 57, top: 18, size: 1.0, duration: 23, delay: 1.7 },
  { id: 6,  left: 67, top: 78, size: 1.2, duration: 19, delay: 3.0 },
  { id: 7,  left: 75, top: 38, size: 1.0, duration: 21, delay: 0.3 },
  { id: 8,  left: 83, top: 62, size: 1.5, duration: 16, delay: 2.5 },
  { id: 9,  left: 91, top: 85, size: 1.0, duration: 24, delay: 1.0 },
  { id: 10, left: 4,  top: 20, size: 1.2, duration: 20, delay: 4.0 },
  { id: 11, left: 96, top: 50, size: 1.0, duration: 18, delay: 1.5 },
  { id: 12, left: 29, top: 55, size: 1.3, duration: 26, delay: 0.9 },
  { id: 13, left: 61, top: 95, size: 1.0, duration: 22, delay: 2.8 },
  { id: 14, left: 88, top: 15, size: 1.4, duration: 19, delay: 3.5 },
  { id: 15, left: 42, top: 8,  size: 1.0, duration: 23, delay: 0.6 },
  { id: 16, left: 71, top: 28, size: 1.2, duration: 17, delay: 1.9 },
  { id: 17, left: 18, top: 65, size: 1.0, duration: 21, delay: 2.3 },
];

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 2000;
    let raf;

    const tick = (now) => {
      const elapsed = now - startTime;
      const p = Math.min(elapsed / duration, 1);
      const eased = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      setProgress(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const exitTimer = setTimeout(() => {
      setExiting(true);
      setTimeout(() => onComplete?.(), 700);
    }, 2500);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden px-4"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 45%, #0d0a2c 0%, #07051a 40%, #050816 100%)",
          }}
        >
          {/* ── Ambient layers ── */}
          <motion.div
            className="absolute pointer-events-none"
            style={{
              top: "50%", left: "50%",
              transform: "translate(-50%, -54%)",
              width: "min(900px, 140vw)", height: "min(700px, 120vw)",
              background:
                "radial-gradient(ellipse at center, rgba(109,40,217,0.22) 0%, rgba(76,29,149,0.10) 35%, transparent 65%)",
              filter: "blur(60px)",
            }}
            animate={{ scale: [1, 1.04, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute pointer-events-none"
            style={{
              top: "50%", left: "50%",
              transform: "translate(-44%, -50%)",
              width: "min(600px, 110vw)", height: "min(500px, 90vw)",
              background:
                "radial-gradient(ellipse at center, rgba(37,99,235,0.14) 0%, transparent 60%)",
              filter: "blur(50px)",
            }}
            animate={{ scale: [1, 1.06, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          />
          <div
            className="absolute left-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-20"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at -10% 60%, rgba(109,40,217,0.35) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-20"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 110% 40%, rgba(37,99,235,0.3) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />

          {/* ── Floating particles ── */}
          {PARTICLES.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full pointer-events-none"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                background:
                  p.id % 3 === 0
                    ? "rgba(139,92,246,0.7)"
                    : p.id % 3 === 1
                    ? "rgba(96,165,250,0.6)"
                    : "rgba(255,255,255,0.4)",
              }}
              animate={{ y: [0, -80, 0], opacity: [0, 0.6, 0] }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* ── Center content ── */}
          <div className="relative flex flex-col items-center gap-8 sm:gap-10 w-full max-w-md">
            {/* Logo container — clean glass card so the logo always sits neatly */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center"
              style={{
                width: "clamp(120px, 26vw, 180px)",
                height: "clamp(120px, 26vw, 180px)",
              }}
            >
              {/* Soft halo */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: "180%",
                  height: "180%",
                  background:
                    "radial-gradient(ellipse at center, rgba(109,40,217,0.28) 0%, rgba(76,29,149,0.12) 42%, transparent 70%)",
                  filter: "blur(22px)",
                }}
              />

              {/* Subtle rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  border: "1px solid rgba(139,92,246,0.25)",
                  borderTopColor: "rgba(96,165,250,0.55)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />

              {/* Glass card holding the logo — keeps it neat regardless of source bg */}
              <div
                className="relative z-10 flex items-center justify-center rounded-full overflow-hidden"
                style={{
                  width: "82%",
                  height: "82%",
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow:
                    "0 8px 32px rgba(0,0,0,0.35), inset 0 1px 1px rgba(255,255,255,0.06)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <img
                  src={logo}
                  alt="GD AI Solutions"
                  className="select-none"
                  draggable={false}
                  style={{
                    width: "68%",
                    height: "68%",
                    objectFit: "contain",
                    borderRadius: "9999px",
                  }}
                />
              </div>
            </motion.div>

            {/* Status + bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-3 sm:gap-4 w-full px-2"
            >
              <p
                style={{
                  color: "rgba(210,210,240,0.55)",
                  fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
                  fontSize: "clamp(9px, 2.4vw, 11px)",
                  letterSpacing: "0.22em",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  userSelect: "none",
                  textAlign: "center",
                }}
              >
                Initializing Intelligence
              </p>

              <div
                className="relative w-full rounded-full overflow-hidden"
                style={{
                  height: "3px",
                  background: "rgba(255,255,255,0.07)",
                  maxWidth: "320px",
                }}
              >
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #6d28d9 0%, #7c3aed 35%, #4f83f5 75%, #60a5fa 100%)",
                    boxShadow:
                      "0 0 12px 2px rgba(109,40,217,0.55), 0 0 5px 0px rgba(96,165,250,0.4)",
                    width: `${progress}%`,
                  }}
                  transition={{ duration: 0.05 }}
                />
              </div>

              <p
                style={{
                  color: "rgba(200,200,230,0.32)",
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "11px",
                  fontWeight: 300,
                  letterSpacing: "0.05em",
                  userSelect: "none",
                }}
              >
                {progress}%
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}