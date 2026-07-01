import { useEffect, useRef, useCallback } from "react";

const OUTER_SIZE = 40;
const INNER_SIZE = 8;
const LERP_FACTOR = 0.12;

export default function CursorFollower() {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const rafRef = useRef(null);

  const mouse = useRef({ x: -100, y: -100 });
  const outerPos = useRef({ x: -100, y: -100 });
  const innerPos = useRef({ x: -100, y: -100 });

  const state = useRef({
    isHovering: false,
    isClicking: false,
    isTextSelection: false,
    isVisible: false,
  });

  const lerp = (a, b, t) => a + (b - a) * t;

  const applyOuterStyle = useCallback(() => {
    const el = outerRef.current;
    if (!el) return;
    const { isHovering, isClicking, isTextSelection } = state.current;

    let scale = 1;
    let borderColor = "rgba(147, 51, 234, 0.85)";
    let boxShadow =
      "0 0 8px rgba(147, 51, 234, 0.6), 0 0 16px rgba(147, 51, 234, 0.3)";
    let borderStyle = "2px solid";

    if (isClicking) {
      scale = 0.75;
    } else if (isTextSelection) {
      scale = 0.55;
      borderColor = "rgba(147, 51, 234, 0.4)";
      boxShadow = "none";
    } else if (isHovering) {
      scale = 1.8;
      borderColor = "transparent";
      boxShadow =
        "0 0 0 2px rgba(147, 51, 234, 0.9), 0 0 12px rgba(147, 51, 234, 0.7), 0 0 28px rgba(147, 51, 234, 0.4), inset 0 0 12px rgba(139, 92, 246, 0.15)";
      borderStyle = "2px solid";
    }

    el.style.transform = `translate(${outerPos.current.x - OUTER_SIZE / 2}px, ${outerPos.current.y - OUTER_SIZE / 2}px) scale(${scale})`;
    el.style.borderColor = borderColor;
    el.style.boxShadow = boxShadow;

    if (isHovering && !isClicking) {
      el.style.background =
        "linear-gradient(135deg, rgba(139,92,246,0.08), rgba(6,182,212,0.06))";
      el.style.border = "2px solid";
      el.style.borderImageSlice = "1";
    } else {
      el.style.background = "transparent";
      el.style.border = `${borderStyle} ${borderColor}`;
      el.style.borderImage = "none";
    }
  }, []);

  const applyInnerStyle = useCallback(() => {
    const el = innerRef.current;
    if (!el) return;
    const { isHovering, isClicking, isTextSelection } = state.current;

    let scale = 1;
    let opacity = 1;
    let boxShadow =
      "0 0 6px rgba(147, 51, 234, 0.8), 0 0 12px rgba(147, 51, 234, 0.4)";

    if (isClicking) {
      scale = 0.5;
    } else if (isTextSelection) {
      scale = 0.6;
      opacity = 0.5;
      boxShadow = "none";
    } else if (isHovering) {
      scale = 1.4;
      boxShadow =
        "0 0 10px rgba(147, 51, 234, 1), 0 0 20px rgba(147, 51, 234, 0.6)";
    }

    el.style.transform = `translate(${innerPos.current.x - INNER_SIZE / 2}px, ${innerPos.current.y - INNER_SIZE / 2}px) scale(${scale})`;
    el.style.opacity = opacity;
    el.style.boxShadow = boxShadow;
  }, []);

  const animate = useCallback(() => {
    outerPos.current.x = lerp(
      outerPos.current.x,
      mouse.current.x,
      LERP_FACTOR
    );
    outerPos.current.y = lerp(
      outerPos.current.y,
      mouse.current.y,
      LERP_FACTOR
    );

    innerPos.current.x = lerp(innerPos.current.x, mouse.current.x, 0.85);
    innerPos.current.y = lerp(innerPos.current.y, mouse.current.y, 0.85);

    applyOuterStyle();
    applyInnerStyle();

    rafRef.current = requestAnimationFrame(animate);
  }, [applyOuterStyle, applyInnerStyle]);

  useEffect(() => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      ("ontouchstart" in window && navigator.maxTouchPoints > 0);

    if (isMobile) return;

    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const INTERACTIVE_SELECTOR =
      'a, button, [role="button"], input, textarea, select, label, [data-cursor-hover], .card, nav, nav *, [class*="card"], [class*="btn"], [class*="link"]';

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (!state.current.isVisible) {
        outerPos.current = { x: e.clientX, y: e.clientY };
        innerPos.current = { x: e.clientX, y: e.clientY };
        state.current.isVisible = true;
        outer.style.opacity = "1";
        inner.style.opacity = "1";
      }

      const target = e.target;
      const isInteractive =
        target.matches(INTERACTIVE_SELECTOR) ||
        target.closest(INTERACTIVE_SELECTOR);
      state.current.isHovering = !!isInteractive;

      const isText =
        window.getSelection && window.getSelection().toString().length > 0;
      state.current.isTextSelection = isText;
    };

    const onMouseDown = () => {
      state.current.isClicking = true;
    };

    const onMouseUp = () => {
      state.current.isClicking = false;
    };

    const onMouseLeave = () => {
      state.current.isVisible = false;
      outer.style.opacity = "0";
      inner.style.opacity = "0";
    };

    const onMouseEnter = () => {
      state.current.isVisible = true;
      outer.style.opacity = "1";
      inner.style.opacity = "1";
    };

    const onSelectionChange = () => {
      const isText =
        window.getSelection && window.getSelection().toString().length > 0;
      state.current.isTextSelection = isText;
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("selectionchange", onSelectionChange);

    document.body.style.cursor = "none";

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("selectionchange", onSelectionChange);
      document.body.style.cursor = "";
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  return (
    <>
      <div
        ref={outerRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${OUTER_SIZE}px`,
          height: `${OUTER_SIZE}px`,
          borderRadius: "50%",
          border: "2px solid rgba(147, 51, 234, 0.85)",
          background: "transparent",
          pointerEvents: "none",
          zIndex: 99999,
          opacity: 0,
          willChange: "transform",
          transition:
            "border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease",
          transform: "translate(-100px, -100px)",
          boxShadow:
            "0 0 8px rgba(147, 51, 234, 0.6), 0 0 16px rgba(147, 51, 234, 0.3)",
        }}
      />
      <div
        ref={innerRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${INNER_SIZE}px`,
          height: `${INNER_SIZE}px`,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 35% 35%, #c084fc, #9333ea)",
          pointerEvents: "none",
          zIndex: 100000,
          opacity: 0,
          willChange: "transform",
          transition: "box-shadow 0.2s ease, opacity 0.2s ease",
          transform: "translate(-100px, -100px)",
          boxShadow:
            "0 0 6px rgba(147, 51, 234, 0.8), 0 0 12px rgba(147, 51, 234, 0.4)",
        }}
      />
    </>
  );
}