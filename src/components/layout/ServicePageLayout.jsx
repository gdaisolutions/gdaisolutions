import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] } }),
};

const FONT_BODY = "'Times New Roman', Times, serif";
const FONT_DISPLAY = "'Times New Roman', Times, serif";

/* ── Tiny ambient orbs ── */
function Orbs({ color = "#6366F1" }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full opacity-[0.07] blur-[120px]"
        style={{ background: color }}
      />
      <div
        className="absolute top-1/3 -right-40 w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[100px]"
        style={{ background: color }}
      />
    </div>
  );
}

/* ── Feature card (image-led) ── */
function FeatureCard({ feature, color, index }) {
  const FeatIcon = feature.icon;
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 350, damping: 26 }}
      className="group feat-card relative flex flex-col rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Hover ring */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
        style={{ boxShadow: `inset 0 0 0 1px ${color}40` }}
      />

      {/* Image banner */}
      {feature.image && (
        <div className="feat-img-wrap relative w-full overflow-hidden">
          <img
            src={feature.image}
            alt={feature.name}
            loading="lazy"
            className="feat-img absolute inset-0 w-full h-full object-cover"
            style={{ transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, ${color}10 0%, transparent 40%, rgba(8,11,26,0.65) 80%, rgba(8,11,26,0.92) 100%)`,
            }}
          />
          {/* Icon badge overlapping seam */}
          <div
            className="absolute left-4 bottom-[-18px] w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${color}35 0%, ${color}15 100%)`,
              border: `1px solid ${color}50`,
              backdropFilter: "blur(8px)",
              boxShadow: `0 6px 18px ${color}30`,
            }}
          >
            <FeatIcon size={17} style={{ color }} />
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2 p-6 pt-7">
        <h3
          className="font-semibold text-base mb-0.5"
          style={{
            color: "#E2E8F0",
            fontFamily: FONT_DISPLAY,
            fontStyle: "italic",
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          {feature.name}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{
            color: "#64748B",
            fontFamily: FONT_BODY,
            fontStyle: "italic",
            fontWeight: 400,
          }}
        >
          {feature.desc}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Industry pill ── */
function IndustryPill({ name, index, color }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index * 0.5}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      whileHover={{ scale: 1.06, y: -2 }}
      className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium cursor-default"
      style={{
        background: `${color}0d`,
        border: `1px solid ${color}22`,
        color: "#94A3B8",
        fontFamily: FONT_BODY,
        fontStyle: "italic",
      }}
    >
      <CheckCircle2 size={13} style={{ color }} />
      {name}
    </motion.div>
  );
}

export default function ServicePageLayout({ service }) {
  const HeroIcon = service.icon;

  return (
    <div
      className="min-h-screen relative"
      style={{
        background: "linear-gradient(160deg, #050816 0%, #080b1a 40%, #060912 100%)",
        fontFamily: FONT_BODY,
        fontStyle: "italic",
      }}
    >
      <style>{`
        .svc-hero-img-wrap { height: 220px; }
        @media(min-width:480px){ .svc-hero-img-wrap { height: 280px; } }
        @media(min-width:768px){ .svc-hero-img-wrap { height: 360px; } }
        @media(min-width:1024px){ .svc-hero-img-wrap { height: 420px; } }

        .feat-img-wrap { height: 120px; }
        @media(min-width:640px){ .feat-img-wrap { height: 130px; } }
        .feat-card:hover .feat-img { transform: scale(1.1); }
      `}</style>

      <Orbs color={service.color} />

      {/* ── HERO ── */}
      <section className="relative pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 sm:mb-6"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest no-underline mb-6 sm:mb-8"
            style={{
              color: "#475569",
              textDecoration: "none",
              fontFamily: FONT_BODY,
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            <ArrowLeft size={12} />
            All Services
          </Link>
        </motion.div>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
          style={{
            background: `${service.color}12`,
            border: `1px solid ${service.color}25`,
            color: service.color,
            fontFamily: FONT_BODY,
            fontStyle: "italic",
            fontWeight: 400,
          }}
        >
          <Sparkles size={11} />
          GD AI Solutions
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-bold tracking-tight mb-5 mx-auto"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1.1,
            color: "#F1F5F9",
            maxWidth: 680,
            fontFamily: FONT_DISPLAY,
            fontWeight: 700,
            fontStyle: "italic",
            letterSpacing: "-0.02em",
            background: "linear-gradient(135deg, #F1F5F9 0%, #94A3B8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {service.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.55 }}
          className="text-base leading-relaxed mx-auto mb-8 sm:mb-10"
          style={{ color: "#64748B", maxWidth: 520, fontFamily: FONT_BODY, fontStyle: "italic", fontWeight: 400 }}
        >
          {service.description}
        </motion.p>

        {/* ── Hero image banner ── */}
        {service.image && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mb-9 sm:mb-10 rounded-[22px] sm:rounded-[28px] overflow-hidden"
            style={{
              maxWidth: 880,
              border: `1px solid ${service.color}30`,
              boxShadow: `0 20px 70px ${service.color}22, 0 0 0 1px rgba(255,255,255,0.04) inset`,
            }}
          >
            <div className="svc-hero-img-wrap relative w-full">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gradient overlay for legibility + brand tint */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, rgba(5,8,22,0.05) 0%, rgba(5,8,22,0.15) 55%, rgba(5,8,22,0.75) 100%), linear-gradient(135deg, ${service.color}22 0%, transparent 55%)`,
                }}
              />
              {/* Bottom-left floating icon badge */}
              <div
                className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${service.color}35 0%, ${service.color}15 100%)`,
                  border: `1px solid ${service.color}45`,
                  backdropFilter: "blur(10px)",
                  boxShadow: `0 8px 28px ${service.color}35`,
                }}
              >
                <HeroIcon size={22} style={{ color: service.color }} className="sm:hidden" />
                <HeroIcon size={26} style={{ color: service.color }} className="hidden sm:block" />
              </div>
            </div>
          </motion.div>
        )}

        {/* Business value badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.36 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium mx-auto mb-10"
          style={{
            background: "rgba(52,211,153,0.08)",
            border: "1px solid rgba(52,211,153,0.2)",
            color: "#34D399",
            fontFamily: FONT_BODY,
            fontStyle: "italic",
            fontWeight: 400,
          }}
        >
          <CheckCircle2 size={14} />
          {service.businessValue}
        </motion.div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold border-none cursor-pointer"
              style={{
                background: `linear-gradient(130deg, ${service.color} 0%, #8B5CF6 100%)`,
                color: "#fff",
                boxShadow: `0 8px 28px ${service.color}40`,
              }}
            >
              <Sparkles size={14} />
              Get Started
            </motion.button>
          </Link>
          <Link to="/services" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold border-none cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#94A3B8",
              }}
            >
              View All Services
              <ArrowUpRight size={13} />
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="relative max-w-6xl mx-auto px-5 pb-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: service.color, fontFamily: FONT_BODY, fontStyle: "italic", fontWeight: 400 }}
          >
            Capabilities
          </p>
          <h2
            className="font-bold tracking-tight"
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              color: "#F1F5F9",
              fontFamily: FONT_DISPLAY,
              fontWeight: 700,
              fontStyle: "italic",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            What We Deliver
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {service.features.map((feat, i) => (
            <FeatureCard key={feat.name} feature={feat} color={service.color} index={i} />
          ))}
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      {service.industries && (
        <section className="relative max-w-5xl mx-auto px-5 pb-24 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-10"
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: service.color, fontFamily: FONT_BODY, fontStyle: "italic", fontWeight: 400 }}
            >
              Industries Served
            </p>
            <h2
              className="font-bold tracking-tight"
              style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                color: "#F1F5F9",
                fontFamily: FONT_DISPLAY,
                fontWeight: 700,
                fontStyle: "italic",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              Built For Your Sector
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {service.industries.map((ind, i) => (
              <IndustryPill key={ind} name={ind} index={i} color={service.color} />
            ))}
          </div>
        </section>
      )}

      {/* ── BOTTOM CTA BANNER ── */}
      <section className="relative max-w-5xl mx-auto px-5 pb-32">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative rounded-3xl p-10 md:p-14 text-center overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${service.color}12 0%, rgba(139,92,246,0.1) 100%)`,
            border: `1px solid ${service.color}20`,
          }}
        >
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(${service.color} 1px, transparent 1px), linear-gradient(90deg, ${service.color} 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: service.color, fontFamily: FONT_BODY, fontStyle: "italic", fontWeight: 400 }}
          >
            Ready to start?
          </p>
          <h2
            className="font-bold tracking-tight mb-4"
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              color: "#F1F5F9",
              fontFamily: FONT_DISPLAY,
              fontWeight: 700,
              fontStyle: "italic",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            Let's Build Something{" "}
            <span style={{ color: service.color }}>Exceptional</span>
          </h2>
          <p
            className="text-sm leading-relaxed mb-8 mx-auto"
            style={{ color: "#64748B", maxWidth: 440, fontFamily: FONT_BODY, fontStyle: "italic", fontWeight: 400 }}
          >
            Talk to our team about your goals. We'll design the right solution and get you moving fast.
          </p>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl text-sm font-bold border-none cursor-pointer"
              style={{
                background: `linear-gradient(130deg, ${service.color} 0%, #8B5CF6 100%)`,
                color: "#fff",
                boxShadow: `0 8px 32px ${service.color}40`,
              }}
            >
              <Sparkles size={14} />
              Schedule a Free Consultation
              <ArrowUpRight size={14} />
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}