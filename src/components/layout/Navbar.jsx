import { useState, useEffect, useRef, useCallback } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import {
  Home,
  User,
  Layers,
  Folder,
  Mail,
  Sparkles,
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";
import { SERVICES } from "../../data/servicesData";
import logo from "../../assets/logo.jpeg";

const NAV_ITEMS = [
  { name: "Home", Icon: Home, path: "/" },
  { name: "Company", Icon: User, path: "/company" },
  { name: "Services", Icon: Layers, path: "/services", hasDropdown: true },
  { name: "Products", Icon: Folder, path: "/products" },
  { name: "Education", Icon: GraduationCap, path: "/education" },
  { name: "Careers", Icon: Sparkles, path: "/careers" },
  { name: "Contact", Icon: Mail, path: "/contact" },
];

const SPRING_SNAPPY = { type: "spring", stiffness: 420, damping: 30 };
const SPRING_BOUNCY = { type: "spring", stiffness: 380, damping: 24 };
const SPRING_BUBBLE = { type: "spring", stiffness: 500, damping: 28 };
const SPRING_SMOOTH = { type: "spring", stiffness: 300, damping: 32 };

// Global font style
const TNR_ITALIC = "'Times New Roman', Times, serif";
const TNR_BOLD_ITALIC = { fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic", fontWeight: "bold" };
const TNR_REGULAR_ITALIC = { fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" };

function useWindowWidth() {
  const [width, setWidth] = useState(() => (typeof window !== "undefined" ? window.innerWidth : 1200));

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}

function Logo({ compact = false }) {
  return (
    <Link to="/" className="flex items-center gap-2 sm:gap-3.5 no-underline flex-shrink-0 group" style={{ textDecoration: "none" }}>
      <motion.div
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ ...SPRING_BOUNCY, delay: 0.15, duration: 0.7 }}
        whileHover={{ scale: 1.08, rotate: -3 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex-shrink-0"
        style={{ width: compact ? 40 : 52, height: compact ? 40 : 52 }}
      >
        {/* Outer glow ring */}
        <motion.div
          className="absolute -inset-1 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(135deg, #4338ca 0%, #7c3aed 50%, #a78bfa 100%)",
            filter: "blur(8px)",
          }}
        />
        {/* Main container */}
        <div
          className="relative w-full h-full rounded-[14px] sm:rounded-[18px] overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #1e1b4b 0%, #312e81 40%, #4338ca 100%)",
            boxShadow: "0 6px 32px rgba(67, 56, 202, 0.4), 0 0 0 1.5px rgba(255,255,255,0.1) inset, 0 0 0 1px rgba(67, 56, 202, 0.3)",
          }}
        >
          <img
            src={logo}
            alt="GD AI Solutions"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Top-left highlight */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.2) 0%, transparent 40%, rgba(0,0,0,0.1) 100%)",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.08) inset",
            }}
          />
          {/* Bottom accent line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[2px] pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.6), transparent)",
            }}
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="hidden sm:block"
      >
        <div
          style={{
            ...TNR_BOLD_ITALIC,
            color: "#0F172A",
            fontSize: compact ? "15px" : "18px",
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          GD{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #4338ca 0%, #7c3aed 60%, #a78bfa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Ai
          </span>{" "}
          Solutions
        </div>
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="flex items-center gap-1.5 mt-1.5"
        >
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: "linear-gradient(135deg, #4338ca, #7c3aed)",
              boxShadow: "0 0 8px rgba(67,56,202,0.5)",
            }}
          />
          <span
            style={{
              ...TNR_REGULAR_ITALIC,
              fontSize: "10px",
              fontWeight: 600,
              color: "#94a3b8",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Intelligent Automation
          </span>
        </motion.div>
      </motion.div>
    </Link>
  );
}

function CtaButton({ small = false }) {
  return (
    <Link to="/contact" style={{ textDecoration: "none" }}>
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...SPRING_SNAPPY, delay: 0.35 }}
        whileHover={{ scale: 1.05, y: -2, boxShadow: "0 12px 40px rgba(67,56,202,0.5)" }}
        whileTap={{ scale: 0.96 }}
        className={`relative flex items-center gap-1.5 overflow-hidden border-none cursor-pointer flex-shrink-0 ${
          small ? "px-3 py-1.5 rounded-xl text-[10px]" : "px-6 py-2.5 rounded-2xl text-[13px]"
        }`}
        style={{
          background: "linear-gradient(135deg, #1e1b4b 0%, #4338ca 50%, #7c3aed 100%)",
          boxShadow: "0 4px 24px rgba(67,56,202,0.4), 0 0 0 1px rgba(255,255,255,0.1) inset, 0 1px 0 rgba(255,255,255,0.15) inset",
          color: "#fff",
          letterSpacing: "0.02em",
          ...TNR_BOLD_ITALIC,
        }}
      >
        {/* Shimmer sweep */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)",
            backgroundSize: "250% 100%",
          }}
          animate={{ backgroundPosition: ["-250% center", "250% center"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        />
        {/* Top highlight */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)" }}
        />
        <Sparkles size={small ? 10 : 13} className="relative z-10" />
        <span className="relative z-10">Get In Touch</span>
      </motion.button>
    </Link>
  );
}

function ServicesDropdown({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -16, scale: 0.94, filter: "blur(12px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -16, scale: 0.94, filter: "blur(12px)" }}
      transition={{ ...SPRING_SMOOTH, duration: 0.35 }}
      className="absolute top-[calc(100%+20px)] left-1/2 -translate-x-1/2 w-[620px] rounded-3xl p-6 z-50"
      style={{
        background: "rgba(255, 255, 255, 0.98)",
        border: "1px solid rgba(67, 56, 202, 0.1)",
        boxShadow: "0 40px 100px rgba(67,56,202,0.18), 0 0 0 1px rgba(67,56,202,0.04), 0 0 0 1px rgba(255,255,255,0.6) inset, 0 1px 0 rgba(255,255,255,0.8) inset",
        backdropFilter: "blur(48px) saturate(200%)",
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-8 right-8 h-[1px] rounded-full"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(67,56,202,0.2), transparent)",
        }}
      />

      <div className="mb-5 pb-3.5 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(67,56,202,0.06)" }}>
        <div className="flex items-center gap-2.5">
          <div
            className="w-6 h-6 rounded-lg flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(67,56,202,0.1), rgba(124,58,237,0.1))",
              border: "1px solid rgba(67,56,202,0.12)",
            }}
          >
            <Layers size={12} style={{ color: "#4338ca" }} />
          </div>
          <p style={{ ...TNR_BOLD_ITALIC, fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#64748b", margin: 0 }}>
            What We Offer
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-[2px] rounded-full" style={{ background: "rgba(67,56,202,0.15)" }} />
          <div className="w-3 h-[2px] rounded-full" style={{ background: "linear-gradient(90deg, #4338ca, #7c3aed)" }} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1.5">
        {SERVICES.map((svc, index) => {
          const SvcIcon = svc.icon;
          return (
            <motion.div
              key={svc.slug}
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.05, ...SPRING_SMOOTH }}
            >
              <Link to={svc.route} onClick={onClose} style={{ textDecoration: "none" }} className="group block">
                <motion.div
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl transition-all duration-300"
                  style={{ border: "1px solid transparent" }}
                  whileHover={{
                    background: "rgba(67,56,202,0.03)",
                    x: 4,
                    borderColor: "rgba(67,56,202,0.08)",
                    boxShadow: "0 4px 20px rgba(67,56,202,0.06)",
                  }}
                >
                  <motion.div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: `linear-gradient(145deg, ${svc.color}10, ${svc.color}18)`,
                      border: `1px solid ${svc.color}20`,
                    }}
                    whileHover={{ scale: 1.1, rotate: 5, boxShadow: `0 4px 16px ${svc.color}25` }}
                    transition={SPRING_SNAPPY}
                  >
                    <SvcIcon size={17} style={{ color: svc.color }} />
                  </motion.div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p style={{ ...TNR_BOLD_ITALIC, fontSize: "13px", lineHeight: 1.2, color: "#1e293b", margin: 0 }}>
                        {svc.title}
                      </p>
                      <motion.div whileHover={{ scale: 1.2, rotate: 45 }} transition={SPRING_SNAPPY}>
                        <ArrowUpRight size={12} style={{ color: "#cbd5e1", flexShrink: 0 }} className="group-hover:text-[#4338ca] transition-colors duration-200" />
                      </motion.div>
                    </div>
                    <p style={{ ...TNR_REGULAR_ITALIC, fontSize: "11px", lineHeight: 1.5, marginTop: 6, color: "#94a3b8" }}>
                      {svc.shortDesc}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        className="mt-5 pt-4 flex items-center justify-between"
        style={{ borderTop: "1px solid rgba(67,56,202,0.06)" }}
      >

        <Link to="/services" onClick={onClose} style={{ textDecoration: "none" }}>

        </Link>
      </motion.div>
    </motion.div>
  );
}

function DesktopNavbar() {
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [hoveredName, setHoveredName] = useState(null);
  const scrolled = useScrolled();
  const navRef = useRef(null);
  const itemRefs = useRef([]);

  const pillX = useSpring(0, { stiffness: 360, damping: 28, mass: 1 });
  const pillW = useSpring(80, { stiffness: 360, damping: 28, mass: 1 });

  const getActiveItemName = useCallback(() => {
    if (location.pathname === "/company" || location.pathname === "/about") return "Company";
    if (location.pathname.startsWith("/services")) return "Services";
    if (location.pathname === "/products") return "Products";
    if (location.pathname === "/education") return "Education";
    if (location.pathname === "/careers") return "Careers";
    if (location.pathname === "/contact") return "Contact";
    return "Home";
  }, [location.pathname]);

  const activeName = getActiveItemName();

  const movePill = useCallback((index) => {
    const item = itemRefs.current[index];
    const wrap = navRef.current?.querySelector(".d-items-wrap");
    if (!item || !wrap) return;
    const wrapRect = wrap.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    pillX.set(itemRect.left - wrapRect.left);
    pillW.set(itemRect.width);
  }, [pillX, pillW]);

  useEffect(() => {
    const index = NAV_ITEMS.findIndex((item) => item.name === activeName);
    if (index !== -1) movePill(index);
  }, [activeName, movePill]);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) setServicesOpen(false);
    };
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
  }, [location.pathname]);

  const handleNavClick = (item) => {
    if (item.hasDropdown) {
      setServicesOpen((prev) => !prev);
    } else {
      setServicesOpen(false);
    }
  };

  return (
    <header ref={navRef} className="fixed top-0 left-0 w-full z-[9999] px-4 sm:px-6 pt-3 sm:pt-4" style={{ fontFamily: TNR_ITALIC }}>
      {/* Ambient glow behind navbar */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 600,
          height: 120,
          background: "radial-gradient(ellipse at center, rgba(67,56,202,0.08) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
        animate={{ opacity: scrolled ? 0.6 : 0.3, scale: scrolled ? 0.9 : 1 }}
        transition={{ duration: 0.5 }}
      />

      <motion.nav
        initial={{ y: -32, opacity: 0, filter: "blur(8px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ ...SPRING_SMOOTH, delay: 0.05, duration: 0.6 }}
        className="relative flex items-center justify-between h-[64px] px-5 sm:px-7 rounded-[28px] max-w-6xl mx-auto"
        style={{
          background: scrolled ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.82)",
          backdropFilter: "blur(48px) saturate(200%)",
          WebkitBackdropFilter: "blur(48px) saturate(200%)",
          border: scrolled ? "1px solid rgba(67, 56, 202, 0.12)" : "1px solid rgba(67, 56, 202, 0.08)",
          boxShadow: scrolled
            ? "0 16px 56px rgba(67,56,202,0.14), 0 0 0 1px rgba(255,255,255,0.7) inset, 0 1px 0 rgba(255,255,255,0.9) inset"
            : "0 4px 32px rgba(67,56,202,0.08), 0 0 0 1px rgba(255,255,255,0.5) inset, 0 1px 0 rgba(255,255,255,0.7) inset",
          transition: "background 0.5s ease, box-shadow 0.5s ease, border-color 0.5s ease",
        }}
      >
        {/* Top edge highlight */}
        <div
          className="absolute top-0 left-12 right-12 h-[1px] pointer-events-none rounded-full"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)" }}
        />

        <Logo />

        <div className="d-items-wrap flex items-center gap-0.5 relative">
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 rounded-[9999px] pointer-events-none"
            style={{
              left: pillX,
              width: pillW,
              height: 38,
              background: "linear-gradient(135deg, #1e1b4b 0%, #4338ca 55%, #7c3aed 100%)",
              boxShadow: "0 4px 24px rgba(67,56,202,0.45), 0 0 0 1px rgba(255,255,255,0.12) inset, 0 1px 0 rgba(255,255,255,0.2) inset",
              zIndex: 0,
            }}
          />

          {NAV_ITEMS.map((navItem, index) => {
            const isActive = activeName === navItem.name;
            const isHovered = hoveredName === navItem.name;
            const NavIcon = navItem.Icon;

            return (
              <motion.div
                key={navItem.name}
                className="relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + index * 0.04, ...SPRING_SMOOTH }}
              >
                <div ref={(element) => (itemRefs.current[index] = element)}>
                  {navItem.hasDropdown ? (
                    <NavLink
                      to={navItem.path}
                      onClick={() => handleNavClick(navItem)}
                      className="relative flex items-center justify-center gap-1.5 px-3.5 sm:px-4 h-[38px] rounded-[9999px] border-none outline-none cursor-pointer bg-transparent"
                      style={{ zIndex: 1, minWidth: 72, textDecoration: "none" }}
                      onMouseEnter={() => { setHoveredName(navItem.name); movePill(index); }}
                      onMouseLeave={() => {
                        setHoveredName(null);
                        const activeIdx = NAV_ITEMS.findIndex((i) => i.name === activeName);
                        if (activeIdx !== -1) movePill(activeIdx);
                      }}
                    >
                      {({ isActive: routeActive }) => (
                        <>
                          <motion.div
                            className="flex items-center gap-1.5 relative z-10"
                            style={{ ...TNR_BOLD_ITALIC, fontSize: "13px" }}
                            animate={{ color: routeActive || isHovered ? "#ffffff" : "#64748b" }}
                            transition={{ duration: 0.2 }}
                          >
                            <NavIcon size={13} strokeWidth={routeActive ? 2.2 : 1.8} />
                            <span>{navItem.name}</span>
                            <motion.div animate={{ rotate: servicesOpen && routeActive ? 180 : 0 }} transition={{ duration: 0.22 }}>
                              <ChevronDown size={11} strokeWidth={2.5} />
                            </motion.div>
                          </motion.div>
                        </>
                      )}
                    </NavLink>
                  ) : (
                    <NavLink
                      to={navItem.path}
                      className="relative flex items-center justify-center gap-1.5 px-3.5 sm:px-4 h-[38px] rounded-[9999px] border-none outline-none cursor-pointer bg-transparent"
                      style={{ zIndex: 1, minWidth: 72, textDecoration: "none" }}
                      onMouseEnter={() => { setHoveredName(navItem.name); movePill(index); }}
                      onMouseLeave={() => {
                        setHoveredName(null);
                        const activeIdx = NAV_ITEMS.findIndex((i) => i.name === activeName);
                        if (activeIdx !== -1) movePill(activeIdx);
                      }}
                    >
                      {({ isActive: routeActive }) => (
                        <>
                          <motion.div
                            className="flex items-center gap-1.5 relative z-10"
                            style={{ ...TNR_BOLD_ITALIC, fontSize: "13px" }}
                            animate={{ color: routeActive || isHovered ? "#ffffff" : "#64748b" }}
                            transition={{ duration: 0.2 }}
                          >
                            <NavIcon size={13} strokeWidth={routeActive ? 2.2 : 1.8} />
                            <span>{navItem.name}</span>
                          </motion.div>
                        </>
                      )}
                    </NavLink>
                  )}
                </div>

                <AnimatePresence>
                  {navItem.hasDropdown && servicesOpen && isActive && <ServicesDropdown onClose={() => setServicesOpen(false)} />}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <CtaButton />
        </div>
      </motion.nav>
    </header>
  );
}

/**
 * MobileHeader
 * Single, compact, fully responsive mobile navbar.
 * Bottom dock removed completely as requested — only the
 * top header + expandable dropdown drawer remains.
 */
function MobileHeader() {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);

  const getActiveItemName = useCallback(() => {
    if (location.pathname === "/company" || location.pathname === "/about") return "Company";
    if (location.pathname.startsWith("/services")) return "Services";
    if (location.pathname === "/products") return "Products";
    if (location.pathname === "/education") return "Education";
    if (location.pathname === "/careers") return "Careers";
    if (location.pathname === "/contact") return "Contact";
    return "Home";
  }, [location.pathname]);

  const activeName = getActiveItemName();

  // Close the whole drawer (used when a final destination link is clicked)
  const handleClose = () => {
    setDrawerOpen(false);
    setServicesExpanded(false);
  };

  // Toggle just the services accordion — does NOT touch drawerOpen,
  // so clicking "Services" never collapses the rest of the menu.
  const toggleServices = () => {
    setServicesExpanded((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] px-3 pt-2.5" style={{ fontFamily: TNR_ITALIC }}>
      {/* Ambient glow for mobile */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 280, height: 70,
          background: "radial-gradient(ellipse at center, rgba(67,56,202,0.06) 0%, transparent 70%)",
          filter: "blur(16px)",
        }}
      />

      <motion.div
        initial={{ y: -24, opacity: 0, filter: "blur(6px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ ...SPRING_SMOOTH, delay: 0.05, duration: 0.5 }}
        className="relative flex items-center justify-between h-[52px] px-3 rounded-[20px]"
        style={{
          background: "rgba(255, 255, 255, 0.97)",
          backdropFilter: "blur(40px) saturate(180%)",
          WebkitBackdropFilter: "blur(40px) saturate(180%)",
          border: "1px solid rgba(67, 56, 202, 0.1)",
          boxShadow: "0 4px 24px rgba(67,56,202,0.12), 0 0 0 1px rgba(255,255,255,0.6) inset, 0 1px 0 rgba(255,255,255,0.8) inset",
        }}
      >
        <div className="absolute top-0 left-6 right-6 h-[1px] pointer-events-none rounded-full"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)" }} />

        <Logo compact />

        <div className="flex items-center gap-2">
          <CtaButton small />
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDrawerOpen((prev) => !prev)}
            className="w-9 h-9 flex items-center justify-center rounded-xl border-none cursor-pointer flex-shrink-0"
            style={{
              background: "rgba(67,56,202,0.06)",
              border: "1px solid rgba(67,56,202,0.12)",
              color: "#4338ca",
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {drawerOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <X size={16} strokeWidth={2.5} />
                </motion.div>
              ) : (
                <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <Menu size={16} strokeWidth={2.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>

      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, filter: "blur(6px)" }}
            animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
            exit={{ height: 0, opacity: 0, filter: "blur(6px)" }}
            transition={{ ...SPRING_SMOOTH, opacity: { duration: 0.25 } }}
            className="overflow-hidden mt-2 rounded-[20px]"
            style={{
              background: "rgba(255,255,255,0.98)",
              backdropFilter: "blur(40px)",
              border: "1px solid rgba(67, 56, 202, 0.1)",
              boxShadow: "0 16px 48px rgba(67,56,202,0.14), 0 0 0 1px rgba(255,255,255,0.6) inset, 0 1px 0 rgba(255,255,255,0.8) inset",
              maxHeight: "calc(100vh - 90px)",
              overflowY: "auto",
            }}
          >
            <div className="p-2.5 flex flex-col gap-0.5">
              {NAV_ITEMS.map((navItem, idx) => {
                const NavIcon = navItem.Icon;
                const isActive = activeName === navItem.name;

                // When Services is expanded, hide every other nav item —
                // only the Services section stays visible in the drawer.
                if (servicesExpanded && !navItem.hasDropdown) {
                  return null;
                }

                if (navItem.hasDropdown) {
                  return (
                    <div key={navItem.name}>
                      <motion.button
                        type="button"
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04, ...SPRING_SMOOTH }}
                        onClick={toggleServices}
                        className="w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl border-none cursor-pointer text-left"
                        style={{
                          background: servicesExpanded ? "rgba(67,56,202,0.06)" : "transparent",
                          border: servicesExpanded ? "1px solid rgba(67,56,202,0.1)" : "1px solid transparent",
                          color: servicesExpanded ? "#4338ca" : "#64748b",
                          ...TNR_BOLD_ITALIC,
                          fontSize: 13,
                          transition: "background 0.3s, border-color 0.3s, color 0.3s",
                        }}
                      >
                        <NavIcon size={15} strokeWidth={2} />
                        {navItem.name}
                        <motion.div animate={{ rotate: servicesExpanded ? 180 : 0 }} transition={{ duration: 0.25, ...SPRING_SNAPPY }} className="ml-auto">
                          <ChevronDown size={14} strokeWidth={2.5} />
                        </motion.div>
                      </motion.button>

                      <AnimatePresence initial={false}>
                        {servicesExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pr-1.5 pb-2 pt-1 flex flex-col gap-0.5">
                              {SERVICES.map((svc, svcIdx) => {
                                const SvcIcon = svc.icon;
                                return (
                                  <motion.div
                                    key={svc.slug}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: svcIdx * 0.04 }}
                                  >
                                    <Link to={svc.route} onClick={handleClose} style={{ textDecoration: "none" }}>
                                      <motion.div
                                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl cursor-pointer"
                                        style={{
                                          color: "#94A3B8",
                                          ...TNR_REGULAR_ITALIC,
                                          fontSize: 12,
                                          fontWeight: 500,
                                          border: "1px solid transparent",
                                          transition: "border-color 0.2s",
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                      >
                                        <div
                                          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                                          style={{
                                            background: `${svc.color}10`,
                                            border: `1px solid ${svc.color}18`,
                                          }}
                                        >
                                          <SvcIcon size={13} style={{ color: svc.color }} />
                                        </div>
                                        <div className="min-w-0">
                                          <div style={{ ...TNR_BOLD_ITALIC, fontSize: 12, color: "#334155" }}>{svc.title}</div>
                                          <div style={{ ...TNR_REGULAR_ITALIC, fontSize: 9.5, color: "#94A3B8", marginTop: 2, lineHeight: 1.4 }}>{svc.shortDesc}</div>
                                        </div>
                                      </motion.div>
                                    </Link>
                                  </motion.div>
                                );
                              })}
                              <Link to="/services" onClick={handleClose} style={{ textDecoration: "none" }}>
                               
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <NavLink key={navItem.name} to={navItem.path} onClick={handleClose} style={{ textDecoration: "none" }}>
                    {({ isActive: routeActive }) => (
                      <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04, ...SPRING_SMOOTH }}
                        className="w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl border-none cursor-pointer text-left"
                        style={{
                          background: routeActive ? "rgba(67,56,202,0.06)" : "transparent",
                          border: routeActive ? "1px solid rgba(67,56,202,0.1)" : "1px solid transparent",
                          color: routeActive ? "#4338ca" : "#64748b",
                          ...TNR_BOLD_ITALIC,
                          fontSize: 13,
                          transition: "background 0.3s, border-color 0.3s, color 0.3s",
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <NavIcon size={15} strokeWidth={routeActive ? 2.5 : 2} />
                        {navItem.name}
                        {routeActive && (
                          <motion.div
                            className="ml-auto w-2 h-2 rounded-full"
                            style={{ background: "linear-gradient(135deg, #4338ca, #7c3aed)", boxShadow: "0 0 10px rgba(67,56,202,0.6)" }}
                            layoutId="mobile-dot"
                            transition={SPRING_BUBBLE}
                          />
                        )}
                      </motion.div>
                    )}
                  </NavLink>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default function Navbar() {
  const width = useWindowWidth();
  const isDesktop = width >= 1024;

  return isDesktop ? <DesktopNavbar /> : <MobileHeader />;
}