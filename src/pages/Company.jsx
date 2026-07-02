import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import ceoPhoto from "../assets/ceo.jpeg";
import {
  Brain,
  Zap,
  Shield,
  Users,
  BookOpen,
  Trophy,
  HeartHandshake,
  Lightbulb,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Globe,
  Code2,
  Layers,
  Target,
  Eye,
  Heart,
  GraduationCap,
  Factory,
  ShoppingCart,
  Landmark,
  Truck,
  HeartPulse,
  Building2,
  Rocket,
  CheckCircle2,
  TrendingUp,
  Lock,
  Star,
  Cpu,
  Link2,
  ExternalLink,
  Quote,
  Award,
  MapPin,
  Briefcase,
} from "lucide-react";

const FONT = "'Times New Roman', Times, serif";

/* ─── Intersection Observer hook ─── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        fontFamily: FONT,
        fontStyle: "italic",
      }}
    >
      {children}
    </div>
  );
}

/* ─── Data ─── */
const values = [
  { icon: Lightbulb, title: "Innovation", description: "We pursue the frontier of what's possible — applying emerging AI and engineering practices to build solutions that didn't exist yesterday.", accent: "#6366F1", glow: "rgba(99,102,241,0.15)" },
  { icon: Trophy, title: "Excellence", description: "We hold our work to the highest standard, from architecture decisions to the final pixel. Good enough is never good enough.", accent: "#3B82F6", glow: "rgba(59,130,246,0.15)" },
  { icon: Shield, title: "Integrity", description: "We say what we mean, deliver what we promise, and build systems you can trust — technically and commercially.", accent: "#8B5CF6", glow: "rgba(139,92,246,0.15)" },
  { icon: Users, title: "Collaboration", description: "The best outcomes emerge when client knowledge and technical depth work in concert. We build with you, not just for you.", accent: "#A855F7", glow: "rgba(168,85,247,0.15)" },
  { icon: BookOpen, title: "Continuous Learning", description: "Technology moves fast. We train relentlessly, track the frontier, and bring hard-won knowledge into every engagement.", accent: "#6366F1", glow: "rgba(99,102,241,0.15)" },
  { icon: HeartHandshake, title: "Customer Success", description: "A project that ships is the beginning, not the end. We measure our success by the measurable outcomes you achieve.", accent: "#3B82F6", glow: "rgba(59,130,246,0.15)" },
];

const industries = [
  { icon: HeartPulse, name: "Healthcare", desc: "Patient systems, clinic platforms, health analytics" },
  { icon: GraduationCap, name: "Education", desc: "School ERPs, LMS, student portals" },
  { icon: Factory, name: "Manufacturing", desc: "Operations automation, ERP, supply intelligence" },
  { icon: ShoppingCart, name: "Retail", desc: "Commerce platforms, CRM, inventory systems" },
  { icon: Landmark, name: "Finance", desc: "Core banking, compliance tools, analytics" },
  { icon: Truck, name: "Logistics", desc: "Fleet management, route AI, delivery tracking" },
  { icon: Rocket, name: "Startups", desc: "MVPs, SaaS platforms, AI-native products" },
  { icon: Building2, name: "Enterprises", desc: "Digital transformation, integration, scale" },
];

const whatWeBuild = [
  { icon: Brain, title: "AI & Intelligent Systems", items: ["AI Agents & Automation", "Custom AI Models", "Intelligent Chatbots", "Predictive Analytics"], color: "#6366F1" },
  { icon: Code2, title: "Software Platforms", items: ["ERP & CRM Systems", "Web & Mobile Apps", "SaaS Products", "Custom Dashboards"], color: "#3B82F6" },
  { icon: Layers, title: "Infrastructure & Cloud", items: ["Cloud Architecture", "DevOps & CI/CD", "Data Pipelines", "Security Engineering"], color: "#8B5CF6" },
];

const whyUs = [
  { icon: Cpu, title: "AI-Native Architecture", desc: "Intelligence is foundational in everything we build — not retrofitted." },
  { icon: TrendingUp, title: "Scalable by Design", desc: "Systems engineered for where your business will be, not just where it is now." },
  { icon: Lock, title: "Enterprise Security", desc: "Security embedded at the architecture level — your data is always protected." },
  { icon: Target, title: "Outcome-Focused", desc: "Every technical decision is measured against a business result." },
  { icon: Star, title: "Deep Domain Knowledge", desc: "We don't just write code — we understand the industries we serve." },
  { icon: Heart, title: "Long-Term Partnership", desc: "We build relationships that last through iterations, pivots, and growth stages." },
];

/* ─── Shared components ─── */
function Orb({ style }) {
  return <div className="pointer-events-none absolute rounded-full blur-3xl" style={{ opacity: 0.12, ...style }} />;
}

function SectionLabel({ text, color = "#6366F1" }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <span className="block w-5 h-px" style={{ background: color }} />
      <span
        className="text-xs font-semibold tracking-[0.18em] uppercase"
        style={{ color, fontFamily: FONT, fontStyle: "italic" }}
      >
        {text}
      </span>
      <span className="block w-5 h-px" style={{ background: color }} />
    </div>
  );
}

function GlassCard({ children, className = "", hoverGlow = "rgba(99,102,241,0.12)" }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`relative rounded-2xl border transition-all duration-300 ${className}`}
      style={{
        background: hovered ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.025)",
        borderColor: hovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.07)",
        boxShadow: hovered ? `0 0 40px ${hoverGlow}, 0 8px 32px rgba(0,0,0,0.4)` : "0 2px 16px rgba(0,0,0,0.25)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        fontFamily: FONT,
        fontStyle: "italic",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}

/* ══════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════ */
export default function About() {
  return (
    <div
      className="min-h-screen antialiased overflow-x-hidden"
      style={{ background: "#050816", color: "#E2E8F0", fontFamily: FONT, fontStyle: "italic" }}
    >
      {/* Noise overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          opacity: 0.018,
        }}
      />

      <Navbar />

      {/* ══ HERO ══ */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 pb-16 sm:pb-20 overflow-hidden">
        <Orb style={{ width: 500, height: 500, top: "-20%", left: "-15%", background: "#6366F1" }} />
        <Orb style={{ width: 350, height: 350, bottom: "-10%", right: "-10%", background: "#3B82F6" }} />
        <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-48" style={{ background: "linear-gradient(to bottom, transparent, #050816)" }} />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 sm:mb-8 text-xs sm:text-sm font-medium"
            style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.3)", color: "#A5B4FC" }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            About GD AI Solutions
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.06] mb-5 sm:mb-7"
            style={{ color: "#F8FAFC" }}
          >
            We Build the
            <br />
            <span style={{ backgroundImage: "linear-gradient(135deg, #6366F1 0%, #3B82F6 50%, #A855F7 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Intelligence Layer
            </span>
            <br />
            of Modern Business
          </h1>

          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2" style={{ color: "#94A3B8" }}>
            GD AI Solutions is an AI-first technology company helping ambitious organizations adopt intelligent systems, automate operations, and build software that scales without limits.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #6366F1 0%, #3B82F6 100%)", boxShadow: "0 0 30px rgba(99,102,241,0.35), 0 4px 16px rgba(0,0,0,0.4)" }}
            >
              Start a Partnership <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="/services"
              className="group inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#CBD5E1" }}
            >
              Explore Services <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-12 sm:mt-16 px-4">
            {[
              { label: "AI-First", sub: "From day one" },
              { label: "Full-Stack", sub: "End to end" },
              { label: "Long-Term", sub: "Real partnerships" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="w-2 h-2 rounded-full" style={{ background: "#6366F1" }} />
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-semibold" style={{ color: "#F1F5F9" }}>{s.label}</p>
                  <p className="text-[10px] sm:text-xs" style={{ color: "#64748B" }}>{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COMPANY STORY ══ */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden">
        <Orb style={{ width: 300, height: 300, top: "0", right: "5%", background: "#3B82F6" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal>
              <SectionLabel text="Our Story" color="#6366F1" />
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 sm:mb-6"
                style={{ color: "#F8FAFC" }}
              >
                Born from the belief that every business deserves intelligent technology
              </h2>
              <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-5" style={{ color: "#94A3B8" }}>
                GD AI Solutions was founded with a single conviction: the gap between business challenges and intelligent technology solutions was too wide, and too costly for organizations trying to grow in a fast-moving world.
              </p>
              <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-5" style={{ color: "#94A3B8" }}>
                We started by asking a different question — not "what does technology make possible?" but "what does your business actually need?" That inversion is still how we work.
              </p>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#94A3B8" }}>
                Today, GD AI Solutions operates at the intersection of artificial intelligence, enterprise software, and domain expertise — helping organizations build the intelligent foundations that modern business demands.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative">
                <GlassCard className="p-6 sm:p-8" hoverGlow="rgba(99,102,241,0.18)">
                  <div className="space-y-5 sm:space-y-6">
                    {[
                      { year: "Founded", text: "GD AI Solutions established with an AI-first charter." },
                      { year: "Expanded", text: "Full product suite launched — ERP, HRMS, AI Agents, SaaS platforms." },
                      { year: "Today", text: "Trusted technology partner across Healthcare, Finance, Education, and beyond." },
                      { year: "Vision", text: "Become the defining AI partner for Asia's next generation of enterprises." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 sm:gap-5">
                        <div className="flex flex-col items-center">
                          <div
                            className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1"
                            style={{ background: "linear-gradient(135deg, #6366F1, #3B82F6)" }}
                          />
                          {i < 3 && (
                            <div className="w-px flex-1 mt-2" style={{ background: "rgba(99,102,241,0.2)", minHeight: 24 }} />
                          )}
                        </div>
                        <div className="pb-2">
                          <p className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#6366F1" }}>
                            {item.year}
                          </p>
                          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#CBD5E1" }}>{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
                <div className="absolute -z-10 inset-0 rounded-2xl blur-2xl" style={{ background: "rgba(99,102,241,0.07)", transform: "scale(1.1)" }} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ LEADERSHIP ══ */}
      <section className="relative py-16 sm:py-24 md:py-36 overflow-hidden" style={{ background: "#0B1020" }}>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 sm:h-24" style={{ background: "linear-gradient(to bottom, #050816, transparent)" }} />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-24" style={{ background: "linear-gradient(to top, #050816, transparent)" }} />

        <Orb style={{ width: 500, height: 500, top: "50%", left: "-10%", transform: "translateY(-50%)", background: "#6366F1" }} />
        <Orb style={{ width: 350, height: 350, top: "20%", right: "-8%", background: "#3B82F6" }} />

        <div className="pointer-events-none absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-10 sm:mb-16">
              <SectionLabel text="Leadership" color="#6366F1" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: "#F8FAFC" }}>
                The vision behind the company
              </h2>
            </div>
          </Reveal>

          {/* ── Founder & CEO ── */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14 items-stretch mb-10 sm:mb-14 lg:mb-16">

            {/* Photo column */}
            <Reveal delay={60} className="lg:col-span-2 flex flex-col">
              <div className="relative w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0 lg:max-w-none flex-1">
                <div
                  className="absolute -inset-3 sm:-inset-4 rounded-3xl blur-2xl pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at center, rgba(99,102,241,0.25) 0%, transparent 70%)",
                    animation: "ceoGlow 4s ease-in-out infinite",
                  }}
                />
                <div
                  className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-full"
                  style={{
                    border: "1px solid rgba(99,102,241,0.25)",
                    boxShadow: "0 0 60px rgba(99,102,241,0.15), 0 24px 64px rgba(0,0,0,0.5)",
                    animation: "ceoFloat 6s ease-in-out infinite",
                  }}
                >
                  <img
                    src={ceoPhoto}
                    alt="Gorakhnath Dongare — Founder & CEO, GD AI Solutions"
                    className="w-full h-full object-cover object-top"
                    style={{ minHeight: 420 }}
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-32 sm:h-36 pointer-events-none"
                    style={{ background: "linear-gradient(to top, rgba(11,16,32,0.95) 0%, transparent 100%)" }}
                  />
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6">
                    <p className="text-lg sm:text-xl font-bold" style={{ color: "#F8FAFC" }}>Gorakhnath Dongare</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(99,102,241,0.25)", border: "1px solid rgba(99,102,241,0.4)", color: "#A5B4FC" }}
                      >
                        Founder & CEO
                      </span>
                    </div>
                  </div>
                </div>
{/* 
                <div className="flex gap-2 sm:gap-3 mt-4 justify-center lg:justify-start">
                  {[
                    { icon: Link2, label: "LinkedIn", color: "#0A66C2" },
                    { icon: ExternalLink, label: "Twitter / X", color: "#1DA1F2" },
                  ].map(({ icon: Icon, label, color }) => (
                    <button
                      key={label}
                      aria-label={label}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-[10px] sm:text-xs font-medium transition-all duration-200 hover:-translate-y-0.5"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#94A3B8" }}
                    >
                      <Icon className="w-3.5 h-3.5" style={{ color }} />
                      {label}
                    </button>
                  ))}
                </div> */}
              </div>
            </Reveal>

            {/* Content column */}
            <Reveal delay={140} className="lg:col-span-3 flex flex-col gap-5 sm:gap-6 lg:gap-7">
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  { icon: MapPin, text: "Maharashtra, India" },
                  { icon: Briefcase, text: "AI & Software Entrepreneur" },
                  { icon: Award, text: "Tech Innovator" },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-medium"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", color: "#94A3B8" }}
                  >
                    <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: "#6366F1" }} />
                    {text}
                  </div>
                ))}
              </div>

              <div
                className="relative rounded-xl sm:rounded-2xl p-4 sm:p-6"
                style={{ background: "rgba(99,102,241,0.07)", border: "1px solid rgba(99,102,241,0.18)" }}
              >
                <Quote className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8" style={{ color: "rgba(99,102,241,0.25)" }} />
                <p className="text-sm sm:text-lg md:text-xl font-medium leading-relaxed italic pr-8" style={{ color: "#CBD5E1" }}>
                  "Technology should solve real problems for real people. Every line of code we write, every system we build, has to earn its place by making someone's work better, their decision smarter, or their business stronger."
                </p>
                <div className="mt-3 sm:mt-4 flex items-center gap-2">
                  <div className="w-6 sm:w-8 h-px" style={{ background: "#6366F1" }} />
                  <span className="text-xs sm:text-sm font-semibold" style={{ color: "#6366F1" }}>Gorakhnath Dongare</span>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 flex-1">
                <p className="text-xs sm:text-base leading-relaxed" style={{ color: "#94A3B8" }}>
                  Gorakhnath Dongare is the Founder and CEO of GD AI Solutions, a technology company at the intersection of artificial intelligence, enterprise software, and digital transformation. He has built GD AI Solutions into a trusted technology partner for businesses across India and beyond.
                </p>
                <p className="text-xs sm:text-base leading-relaxed" style={{ color: "#94A3B8" }}>
                  His journey began with a deep passion for using technology to solve complex operational challenges in traditional industries. Recognizing that most businesses lacked access to intelligent, affordable technology solutions, Gorakhnath founded GD AI Solutions with a clear mission — to bridge that gap and make AI-powered software accessible to organizations of all sizes.
                </p>
                <p className="text-xs sm:text-base leading-relaxed" style={{ color: "#94A3B8" }}>
                  Under his leadership, the company has delivered technology projects spanning Healthcare, Education, Finance, Logistics, and Retail. He is deeply involved in every phase of product strategy, AI architecture, and client partnerships — believing that leadership means staying close to the work.
                </p>
              </div>

             
            </Reveal>
          </div>

          {/* ── Divider ── */}
          <div className="w-full h-px mb-10 sm:mb-14 lg:mb-16" style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)" }} />

          {/* ── CTO Card ── */}
          <Reveal delay={80}>
            <GlassCard className="p-6 sm:p-8 lg:p-10" hoverGlow="rgba(59,130,246,0.18)">

              {/* Top: Name + role + pills row */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div>
                  <p className="text-lg sm:text-xl font-bold" style={{ color: "#F8FAFC" }}>Deepti Joshi</p>
                  <span
                    className="inline-block mt-1 text-[10px] sm:text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(59,130,246,0.2)", border: "1px solid rgba(59,130,246,0.35)", color: "#60A5FA" }}
                  >
                    CTO · MERN Stack Developer
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 ml-auto">
                  {[
                    { icon: MapPin, text: "Maharashtra, India" },
                    { icon: Code2, text: "Full-Stack Engineer" },
                  ].map(({ icon: Icon, text }) => (
                    <div
                      key={text}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-medium"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", color: "#94A3B8" }}
                    >
                      <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: "#3B82F6" }} />
                      {text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div
                className="relative rounded-xl p-4 sm:p-5 mb-4 sm:mb-5"
                style={{ background: "rgba(59,130,246,0.07)", border: "1px solid rgba(59,130,246,0.15)" }}
              >
                <Quote className="absolute top-3 right-3 w-5 h-5 sm:w-6 sm:h-6" style={{ color: "rgba(59,130,246,0.2)" }} />
                <p className="text-sm sm:text-base font-medium leading-relaxed italic pr-6" style={{ color: "#CBD5E1" }}>
                  "Great software is built at the intersection of clean architecture and relentless attention to the user's reality. I write code to make complex things feel effortless."
                </p>
                <div className="mt-2.5 flex items-center gap-2">
                  <div className="w-6 h-px" style={{ background: "#3B82F6" }} />
                  <span className="text-xs font-semibold" style={{ color: "#3B82F6" }}>Deepti Joshi</span>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                  Deepti Joshi serves as Chief Technology Officer at GD AI Solutions, leading the engineering vision and full-stack development practice. A specialist in the MERN stack — MongoDB, Express, React, and Node.js — she architects the scalable, high-performance platforms that power our clients' most critical operations.
                </p>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                  Deepti brings disciplined engineering thinking to every product she touches, ensuring that systems are not only functional at launch but robust, maintainable, and ready to grow. She leads GD AI Solutions' technical roadmap and mentors the engineering team with a commitment to code quality and delivery excellence.
                </p>
              </div>

             

            </GlassCard>
          </Reveal>
        </div>
      </section>

      {/* ══ MISSION & VISION ══ */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden" style={{ background: "#0B1020" }}>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 sm:h-24" style={{ background: "linear-gradient(to bottom, #050816, transparent)" }} />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-24" style={{ background: "linear-gradient(to top, #050816, transparent)" }} />
        <Orb style={{ width: 400, height: 400, top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "#8B5CF6" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-10 sm:mb-16">
              <SectionLabel text="Purpose" color="#8B5CF6" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: "#F8FAFC" }}>What drives us, every day</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <Reveal delay={60}>
              <GlassCard className="p-6 sm:p-8 h-full" hoverGlow="rgba(99,102,241,0.18)">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-6" style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.25)" }}>
                  <Target className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#818CF8" }} />
                </div>
                <p className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-2 sm:mb-3" style={{ color: "#6366F1" }}>Mission</p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 leading-tight" style={{ color: "#F1F5F9" }}>Empowering businesses through intelligent technology</h3>
                <p className="text-xs sm:text-base leading-relaxed" style={{ color: "#94A3B8" }}>To empower organizations through AI, automation, and modern software engineering — reducing friction, unlocking capability, and creating compounding advantages that grow with your business.</p>
                <div className="mt-4 sm:mt-6 h-px w-full" style={{ background: "linear-gradient(90deg, #6366F1, transparent)" }} />
              </GlassCard>
            </Reveal>

            <Reveal delay={140}>
              <GlassCard className="p-6 sm:p-8 h-full" hoverGlow="rgba(59,130,246,0.18)">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-6" style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.25)" }}>
                  <Eye className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#60A5FA" }} />
                </div>
                <p className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-2 sm:mb-3" style={{ color: "#3B82F6" }}>Vision</p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 leading-tight" style={{ color: "#F1F5F9" }}>The trusted AI partner for digital transformation</h3>
                <p className="text-xs sm:text-base leading-relaxed" style={{ color: "#94A3B8" }}>To become the defining technology partner for organizations embracing digital transformation — building intelligent systems that are not just functional, but genuinely transformative for the people who use them.</p>
                <div className="mt-4 sm:mt-6 h-px w-full" style={{ background: "linear-gradient(90deg, #3B82F6, transparent)" }} />
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ WHAT WE BUILD ══ */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden">
        <Orb style={{ width: 300, height: 300, bottom: "0", left: "0", background: "#6366F1" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-10 sm:mb-16">
              <SectionLabel text="What We Build" color="#3B82F6" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: "#F8FAFC" }}>Three pillars of enterprise technology</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {whatWeBuild.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 80}>
                <GlassCard className="p-5 sm:p-7 h-full flex flex-col" hoverGlow={`rgba(${pillar.color === "#6366F1" ? "99,102,241" : pillar.color === "#3B82F6" ? "59,130,246" : "139,92,246"},0.18)`}>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-6" style={{ background: `${pillar.color}18`, border: `1px solid ${pillar.color}30` }}>
                    <pillar.icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: pillar.color }} />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold mb-3 sm:mb-5" style={{ color: "#F1F5F9" }}>{pillar.title}</h3>
                  <ul className="space-y-2.5 sm:space-y-3 flex-1">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 sm:gap-3">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: pillar.color }} />
                        <span className="text-xs sm:text-sm" style={{ color: "#94A3B8" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 sm:mt-6 h-px" style={{ background: `linear-gradient(90deg, ${pillar.color}60, transparent)` }} />
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CORE VALUES ══ */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden" style={{ background: "#0B1020" }}>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 sm:h-24" style={{ background: "linear-gradient(to bottom, #050816, transparent)" }} />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-24" style={{ background: "linear-gradient(to top, #050816, transparent)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-10 sm:mb-16">
              <SectionLabel text="Core Values" color="#A855F7" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: "#F8FAFC" }}>The principles we refuse to compromise</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {values.map((val, i) => (
              <Reveal key={val.title} delay={i * 60}>
                <GlassCard className="p-5 sm:p-6" hoverGlow={val.glow}>
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center mb-4 sm:mb-5" style={{ background: `${val.accent}18`, border: `1px solid ${val.accent}30` }}>
                    <val.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: val.accent }} />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold mb-1.5 sm:mb-2" style={{ color: "#F1F5F9" }}>{val.title}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#6B7280" }}>{val.description}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INDUSTRIES ══ */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden">
        <Orb style={{ width: 450, height: 450, top: "50%", right: "-10%", background: "#3B82F6" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-10 sm:mb-16">
              <SectionLabel text="Industries We Empower" color="#6366F1" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: "#F8FAFC" }}>Domain expertise across the sectors that shape the world</h2>
              <p className="text-sm sm:text-lg max-w-2xl mx-auto px-2" style={{ color: "#64748B" }}>We bring deep understanding of each industry we serve — not generic tech applied to specific problems.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 50}>
                <GlassCard className="p-3.5 sm:p-5" hoverGlow="rgba(99,102,241,0.12)">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4" style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.2)" }}>
                    <ind.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "#818CF8" }} />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold mb-1 sm:mb-1.5" style={{ color: "#F1F5F9" }}>{ind.name}</h3>
                  <p className="text-[10px] sm:text-xs leading-relaxed" style={{ color: "#64748B" }}>{ind.desc}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══ */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden" style={{ background: "#0B1020" }}>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 sm:h-24" style={{ background: "linear-gradient(to bottom, #050816, transparent)" }} />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-24" style={{ background: "linear-gradient(to top, #050816, transparent)" }} />
        <Orb style={{ width: 400, height: 400, top: "20%", left: "-5%", background: "#8B5CF6" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
            <Reveal>
              <SectionLabel text="Why Choose Us" color="#8B5CF6" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6" style={{ color: "#F8FAFC" }}>The reasons organizations choose GD AI Solutions</h2>
              <p className="text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8" style={{ color: "#64748B" }}>We compete on outcomes, not promises. Here's what separates our approach from every other technology vendor.</p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #6366F1 0%, #3B82F6 100%)", boxShadow: "0 0 24px rgba(99,102,241,0.3)" }}
              >
                Let's Talk <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {whyUs.map((item, i) => (
                <Reveal key={item.title} delay={i * 70}>
                  <GlassCard className="p-4 sm:p-5" hoverGlow="rgba(139,92,246,0.14)">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center mb-2.5 sm:mb-3" style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.22)" }}>
                      <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: "#A78BFA" }} />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold mb-1 sm:mb-1.5" style={{ color: "#F1F5F9" }}>{item.title}</h3>
                    <p className="text-[10px] sm:text-xs leading-relaxed" style={{ color: "#64748B" }}>{item.desc}</p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FUTURE VISION ══ */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden">
        <Orb style={{ width: 600, height: 300, top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "#6366F1" }} />
        <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2" style={{ background: "linear-gradient(to bottom, transparent, rgba(99,102,241,0.2), transparent)" }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <SectionLabel text="Future Vision" color="#6366F1" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-5 sm:mb-7" style={{ color: "#F8FAFC" }}>
              Building the infrastructure<br />for intelligent enterprise
            </h2>
            <p className="text-sm sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2" style={{ color: "#64748B" }}>
              We see a world where every business — regardless of size or sector — has access to the kind of intelligent, adaptive systems that were once reserved for only the largest corporations. That's the world we're building.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
              {[
                { icon: Globe, label: "Global Reach", sub: "Technology without borders" },
                { icon: Cpu, label: "AI at Core", sub: "Intelligence in everything" },
                { icon: TrendingUp, label: "Continuous Scale", sub: "Systems that grow with you" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl sm:rounded-2xl px-4 sm:px-5 py-5 sm:py-6 text-center" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl mx-auto flex items-center justify-center mb-2.5 sm:mb-3" style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.22)" }}>
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "#818CF8" }} />
                  </div>
                  <p className="text-xs sm:text-sm font-bold mb-0.5 sm:mb-1" style={{ color: "#E2E8F0" }}>{item.label}</p>
                  <p className="text-[10px] sm:text-xs" style={{ color: "#475569" }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden">
        <Orb style={{ width: 500, height: 500, top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "#4F46E5" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 lg:p-16 text-center relative overflow-hidden" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.09)", boxShadow: "0 0 80px rgba(99,102,241,0.12), 0 24px 64px rgba(0,0,0,0.5)" }}>
              <div className="pointer-events-none absolute -top-20 -left-20 w-48 sm:w-64 h-48 sm:h-64 rounded-full blur-3xl" style={{ background: "#6366F1", opacity: 0.12 }} />
              <div className="pointer-events-none absolute -bottom-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 rounded-full blur-3xl" style={{ background: "#3B82F6", opacity: 0.1 }} />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 sm:mb-6 text-xs sm:text-sm font-medium" style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.28)", color: "#A5B4FC" }}>
                  <Sparkles className="w-3.5 h-3.5" />
                  Ready to Build Together?
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-5" style={{ color: "#F8FAFC" }}>
                  Let's bring intelligence<br />into your organization
                </h2>
                <p className="text-sm sm:text-lg max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2" style={{ color: "#64748B" }}>
                  Whether you're automating your first workflow or engineering a full enterprise platform — we're ready to partner from day one.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: "linear-gradient(135deg, #6366F1 0%, #3B82F6 100%)", boxShadow: "0 0 36px rgba(99,102,241,0.4), 0 4px 20px rgba(0,0,0,0.5)" }}
                  >
                    Start a Conversation <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    to="/services"
                    className="group inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#94A3B8" }}
                  >
                    View Services <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mt-8 sm:mt-10 pt-6 sm:pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  {[{ icon: Shield, text: "Enterprise Security" }, { icon: CheckCircle2, text: "Dedicated Support" }, { icon: Zap, text: "AI-Powered" }].map((sig) => (
                    <div key={sig.text} className="flex items-center gap-1.5 sm:gap-2">
                      <sig.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: "#6366F1" }} />
                      <span className="text-[10px] sm:text-xs" style={{ color: "#475569" }}>{sig.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CSS animations for CEO photo */}
      <style>{`
        @keyframes ceoFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes ceoGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
      `}</style>

      <div className="h-12" style={{ background: "#050816" }} />
    </div>
  );
}