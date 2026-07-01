import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import bgDark from "../assets/bg-dark.png";
import {
  Brain, Bot, MessageSquare, Workflow, Code2, Globe, Smartphone, Database,
  Users, Cloud, BarChart3, LayoutDashboard, Server, PackageCheck, UserCog,
  Stethoscope, GraduationCap, LineChart, PieChart, Boxes, BookOpen, Briefcase,
  Lightbulb, Award, ArrowRight, ShieldCheck, Layers, Zap, HeartHandshake,
  Factory, ShoppingCart, Building2, Landmark, Truck, HeartPulse, CheckCircle2,
  ChevronRight, Sparkles, Star,
} from "lucide-react";

/* ══════════════════════════
   FONT CONFIG
   Times New Roman — Italic
══════════════════════════ */
const FONT_BODY = "'Times New Roman', Times, serif";
const FONT_DISPLAY = "'Times New Roman', Times, serif";

/* ══════════════════════════
   SCROLL-REVEAL HOOK
══════════════════════════ */
function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, y = 30, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : `translateY(${y}px)`,
      transition: `opacity 0.75s cubic-bezier(.22,1,.36,1) ${delay}ms, transform 0.75s cubic-bezier(.22,1,.36,1) ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

/* ══════════════════════════
   CARD IMAGE — lazy, with graceful fallback gradient
══════════════════════════ */
function CardImage({ src, alt, color }) {
  const [failed, setFailed] = useState(false);
  return (
    <div
      className="relative w-full overflow-hidden rounded-xl mb-3 sm:mb-4 flex-shrink-0"
      style={{ aspectRatio: "16 / 10", background: `${color}12` }}
    >
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="w-full h-full object-cover"
          style={{ filter: "saturate(0.9) brightness(0.85)" }}
        />
      )}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, transparent 40%, rgba(5,8,22,0.55) 100%), linear-gradient(120deg, ${color}22, transparent 60%)`,
        }}
      />
    </div>
  );
}

/* ══════════════════════════
   DATA
══════════════════════════ */
const services = [
  { icon: Brain, title: "AI Solutions", description: "Transform business operations with intelligent automation and AI-driven decision making.", value: "Reduce overhead while improving decision accuracy at scale.", color: "#6366F1", bg: "rgba(99,102,241,0.08)", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop" },
  { icon: Bot, title: "AI Agents", description: "Deploy autonomous agents that handle multi-step tasks and workflows without human intervention.", value: "Extend your team's capacity with agents that work around the clock.", color: "#3B82F6", bg: "rgba(59,130,246,0.08)", image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop" },
  { icon: MessageSquare, title: "AI Chatbots", description: "Context-aware conversational interfaces that resolve queries and support customers in real time.", value: "Deliver instant, consistent support across every touchpoint.", color: "#8B5CF6", bg: "rgba(139,92,246,0.08)", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" },
  { icon: Workflow, title: "Workflow Automation", description: "Eliminate repetitive tasks and improve efficiency with smart automation across your business.", value: "Reclaim hundreds of hours annually with intelligent orchestration.", color: "#A855F7", bg: "rgba(168,85,247,0.08)", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
  { icon: Code2, title: "Custom Software", description: "Scalable digital products engineered with precision to support long-term business growth.", value: "Built to last — architecture that scales with your ambitions.", color: "#6366F1", bg: "rgba(99,102,241,0.08)", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop" },
  { icon: Globe, title: "Web Applications", description: "High-performance web platforms with modern UI/UX that turn complex workflows into seamless experiences.", value: "Conversion-focused interfaces backed by rock-solid engineering.", color: "#3B82F6", bg: "rgba(59,130,246,0.08)", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop" },
  { icon: Smartphone, title: "Mobile Applications", description: "Native and cross-platform mobile apps designed for engagement, retention, and real-world utility.", value: "Put your business in your customers' pockets.", color: "#8B5CF6", bg: "rgba(139,92,246,0.08)", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop" },
  { icon: Database, title: "ERP Development", description: "Enterprise resource planning that unifies operations, inventory, finance, and supply chain.", value: "Full operational visibility — in one system.", color: "#64748B", bg: "rgba(100,116,139,0.08)", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
  { icon: Users, title: "CRM Development", description: "CRM platforms that give your sales and support teams a decisive competitive edge.", value: "Know your customers better. Close deals faster.", color: "#EC4899", bg: "rgba(236,72,153,0.08)", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" },
  { icon: Cloud, title: "Cloud Solutions", description: "Infrastructure design, cloud migration, and managed services for reliability and global reach.", value: "Enterprise-grade uptime — without the enterprise overhead.", color: "#0EA5E9", bg: "rgba(14,165,233,0.08)", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop" },
  { icon: BarChart3, title: "Data Analytics", description: "Transform raw data into strategic intelligence with pipelines, models, and executive reports.", value: "Stop guessing. Start deciding with real data.", color: "#F59E0B", bg: "rgba(245,158,11,0.08)", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
  { icon: LayoutDashboard, title: "Dashboards", description: "Real-time operational dashboards that surface KPIs, trends, and anomalies when your team needs them.", value: "Every stakeholder sees the right data at the right moment.", color: "#A855F7", bg: "rgba(168,85,247,0.08)", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
  { icon: Server, title: "DevOps & Deployment", description: "CI/CD pipelines, container orchestration, and infrastructure-as-code for confident shipping.", value: "Faster releases, zero-downtime deployments, full audit trails.", color: "#475569", bg: "rgba(71,85,105,0.08)", image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=800&auto=format&fit=crop" },
];

const products = [
  { icon: Boxes, name: "ERP System", description: "End-to-end enterprise resource planning built for operational clarity.", useCase: "Unify procurement, finance, inventory, and HR in one auditable system.", color: "#6366F1", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop" },
  { icon: UserCog, name: "HRMS Platform", description: "Modern workforce management built for growing organizations.", useCase: "Automate payroll, attendance, appraisals, and compliance at any scale.", color: "#3B82F6", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop" },
  { icon: Stethoscope, name: "Clinic Management", description: "Digitize appointments, billing, and patient operations with precision.", useCase: "From consultation to discharge — every step tracked, nothing lost.", color: "#10B981", image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop" },
 { icon: GraduationCap, name: "School ERP", description: "Unified academic and administrative management for modern institutions.", useCase: "Admissions, timetables, results, and communication — one platform.", color: "#8B5CF6", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop" },
  { icon: Brain, name: "AI Assistants", description: "Intelligent conversational tools trained on your business knowledge.", useCase: "Onboard faster, support smarter, surface insights on demand.", color: "#6366F1", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop" },
  { icon: LineChart, name: "Analytics Platforms", description: "Business intelligence infrastructure built for strategic leaders.", useCase: "Connect every data source. Visualize trends. Act on what matters.", color: "#F59E0B", image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop" },
  { icon: PieChart, name: "Business Dashboards", description: "Turn business data into actionable insights and real-time decisions.", useCase: "Role-specific views for executives, operations, and field teams.", color: "#EC4899", image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=800&auto=format&fit=crop" },
  { icon: PackageCheck, name: "Custom SaaS", description: "Full-stack SaaS platforms engineered around your unique business model.", useCase: "From MVP to enterprise-grade — we build products that scale with you.", color: "#0EA5E9", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop" },
];

const educationOfferings = [
  { icon: Briefcase, title: "Internship Programs", description: "Hands-on internships where students work on live client projects — not simulations." },
  { icon: Award, title: "Industry Training", description: "Domain-specific training programs designed by practitioners, delivered with real tools." },
  { icon: Lightbulb, title: "Workshops & Bootcamps", description: "Intensive learning experiences that compress months of learning into focused days." },
  { icon: BookOpen, title: "Mentorship Programs", description: "1-on-1 and cohort mentorship from working engineers and AI professionals." },
];

const whyUs = [
  { icon: Brain, title: "AI-First by Design", description: "Every solution we build starts with the question: how can intelligence make this better? AI isn't an add-on — it's foundational." },
  { icon: Layers, title: "Scalable Architecture", description: "We engineer for where your business is going, not just where it is. Systems built today must carry tomorrow's load." },
  { icon: ShieldCheck, title: "Enterprise Security", description: "Security is embedded at the architecture level — not bolted on at the end. Your data is always protected." },
  { icon: HeartHandshake, title: "Long-Term Partnership", description: "We don't disappear after launch. We build relationships that last through iterations, pivots, and growth stages." },
  { icon: Zap, title: "Innovation-Driven", description: "We track the frontier of AI and engineering so your business benefits from what's possible today." },
  { icon: CheckCircle2, title: "Business-Outcome Focus", description: "Technology is the means, not the end. Every line of code is measured against a business result." },
];

const industries = [
  { icon: Building2, name: "Enterprise & Corporate" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: GraduationCap, name: "Education" },
  { icon: ShoppingCart, name: "Retail & E-Commerce" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Landmark, name: "Finance & Banking" },
  { icon: Truck, name: "Logistics & Supply Chain" },
  { icon: Sparkles, name: "Startups & SaaS" },
];

const process = [
  { step: "01", title: "Discovery & Strategy", description: "We begin with deep listening — understanding your operations, goals, and constraints before writing a single line of code." },
  { step: "02", title: "Architecture & Design", description: "We design systems with the future in mind — scalable, secure, and built on the right foundations for your use case." },
  { step: "03", title: "Build & Iterate", description: "Agile development with continuous feedback loops. You see progress, provide input, and stay in control throughout." },
  { step: "04", title: "Deploy & Scale", description: "Production-grade deployment with monitoring, optimization, and infrastructure that grows as your business grows." },
];

/* ══════════════════════════
   SHARED UI PRIMITIVES
══════════════════════════ */
function GlassCard({ children, className = "", color = "#6366F1" }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className={`relative rounded-2xl border transition-all duration-300 ${className}`}
      style={{
        background: hov ? "rgba(255,255,255,0.055)" : "rgba(255,255,255,0.03)",
        borderColor: hov ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.07)",
        boxShadow: hov ? `0 0 36px ${color}22, 0 8px 32px rgba(0,0,0,0.35)` : "0 2px 16px rgba(0,0,0,0.2)",
        transform: hov ? "translateY(-4px)" : "none",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </div>
  );
}

function SectionLabel({ text, color = "#6366F1" }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <span className="block w-5 h-px" style={{ background: color }} />
      <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color, fontFamily: FONT_BODY, fontStyle: "italic" }}>{text}</span>
      <span className="block w-5 h-px" style={{ background: color }} />
    </div>
  );
}

/* ── Animated count-up ── */
function CountUp({ target, suffix = "" }) {
  const [val, setVal] = useState(0);
  const [ref, visible] = useReveal(0.5);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = target / 50;
    const t = setInterval(() => {
      start += step;
      if (start >= target) { setVal(target); clearInterval(t); }
      else setVal(Math.floor(start));
    }, 25);
    return () => clearInterval(t);
  }, [visible, target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ══════════════════════════
   MAIN PAGE
══════════════════════════ */
export default function Home() {

  /* Floating card counter animation */
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let p = 0;
    const t = setInterval(() => {
      p += 1.2;
      if (p >= 72) { setProgress(72); clearInterval(t); }
      else setProgress(Math.floor(p));
    }, 28);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="min-h-screen antialiased overflow-x-hidden"
      style={{
        background: "#050816",
        color: "#E2E8F0",
        fontFamily: FONT_BODY,
        fontStyle: "italic",
      }}
    >
      {/* ── Noise overlay ── */}
      <div className="pointer-events-none fixed inset-0 z-0" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        opacity: 0.018,
      }} />

      <Navbar />

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">

        {/* BG IMAGE — full bleed, dark overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgDark}
            alt=""
            className="w-full h-full object-cover object-center"
            style={{ opacity: 0.55 }}
          />
          {/* Gradient scrim */}
          <div className="absolute inset-0" style={{
            background: "linear-gradient(105deg, rgba(5,8,22,0.96) 0%, rgba(5,8,22,0.80) 42%, rgba(5,8,22,0.35) 75%, rgba(5,8,22,0.15) 100%)",
          }} />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-40" style={{ background: "linear-gradient(to bottom, transparent, #050816)" }} />
          {/* Top fade */}
          <div className="absolute inset-x-0 top-0 h-24" style={{ background: "linear-gradient(to bottom, #050816, transparent)" }} />
        </div>

        {/* Ambient purple glow on left */}
        <div className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%)", filter: "blur(40px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* ── Left: Text ── */}
            <div className="lg:ml-[-24px] px-2 sm:px-0">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5 sm:mb-7"
                style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.3)", color: "#A5B4FC", fontFamily: FONT_BODY, fontStyle: "italic", animation: "fadeSlideUp 0.7s cubic-bezier(.22,1,.36,1) both" }}
              >
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                AI-First Technology Partner
              </div>

              {/* Headline */}
              <h1
                className="leading-[1.05] mb-5 sm:mb-6"
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontWeight: 700,
                  fontStyle: "italic",
                  fontSize: "clamp(2rem, 8vw, 4.5rem)",
                  color: "#F8FAFC",
                  animation: "fadeSlideUp 0.75s 0.1s cubic-bezier(.22,1,.36,1) both",
                }}
              >
                Building{" "}
                <span style={{
                  backgroundImage: "linear-gradient(135deg, #818CF8 0%, #60A5FA 50%, #C084FC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Intelligent
                </span>
                <br />
                Systems for
                <br />
                Modern Business
              </h1>

              <p
                className="text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10 max-w-lg"
                style={{ color: "#94A3B8", animation: "fadeSlideUp 0.75s 0.2s cubic-bezier(.22,1,.36,1) both", fontFamily: FONT_BODY, fontStyle: "italic", fontWeight: 400 }}
              >
                GD AI Solutions engineers AI-powered software, intelligent automation, and enterprise platforms that give ambitious organizations a decisive technological edge.
              </p>

              <div
                className="flex flex-wrap gap-3 sm:gap-4"
                style={{ animation: "fadeSlideUp 0.75s 0.3s cubic-bezier(.22,1,.36,1) both" }}
              >
                <Link to="/contact" className="group inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #6366F1 0%, #3B82F6 100%)", boxShadow: "0 0 32px rgba(99,102,241,0.4), 0 4px 20px rgba(0,0,0,0.4)", fontFamily: FONT_BODY, fontStyle: "italic" }}>
                  Start a Project
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <Link to="/services" className="group inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "#CBD5E1", fontFamily: FONT_BODY, fontStyle: "italic" }}>
                  Explore Services
                  <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* Mini trust strip */}
              <div className="flex flex-wrap gap-5 sm:gap-6 mt-10 sm:mt-12" style={{ animation: "fadeSlideUp 0.75s 0.4s cubic-bezier(.22,1,.36,1) both" }}>
                {[
                  { n: 50, s: "+", label: "Projects Delivered" },
                  { n: 10, s: "+", label: "Industries Served" },
                  { n: 4, s: "+ years", label: "Deep Experience" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xl sm:text-2xl font-bold" style={{ fontFamily: FONT_DISPLAY, fontStyle: "italic", backgroundImage: "linear-gradient(135deg, #818CF8, #60A5FA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                      <CountUp target={item.n} suffix={item.s} />
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "#475569", fontFamily: FONT_BODY, fontStyle: "italic" }}>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Floating cards — desktop only ── */}
            <div
              className="relative hidden lg:flex items-center justify-center"
              style={{ minHeight: "440px", animation: "fadeSlideUp 0.9s 0.2s cubic-bezier(.22,1,.36,1) both" }}
            >
              {/* AI Engine card */}
              <div className="absolute top-0 right-0 w-[300px] rounded-2xl p-5 shadow-2xl"
                style={{ background: "rgba(15,18,40,0.88)", border: "1px solid rgba(99,102,241,0.25)", backdropFilter: "blur(20px)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #6366F1, #3B82F6)" }}>
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-medium" style={{ color: "#475569", fontFamily: FONT_BODY, fontStyle: "italic" }}>AI ENGINE</p>
                    <p className="text-sm font-semibold" style={{ color: "#F1F5F9", fontFamily: FONT_DISPLAY, fontStyle: "italic" }}>Running Analysis</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" style={{ animation: "pulse 2s infinite" }} />
                    <span className="text-xs text-emerald-400 font-medium" style={{ fontFamily: FONT_BODY, fontStyle: "italic" }}>Live</span>
                  </div>
                </div>
                {["Data processed", "Patterns identified", "Insights generated"].map((item) => (
                  <div key={item} className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm" style={{ color: "#94A3B8", fontFamily: FONT_BODY, fontStyle: "italic" }}>{item}</span>
                  </div>
                ))}
                <div className="mt-4 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.07)" }}>
                  <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${progress}%`, background: "linear-gradient(90deg, #6366F1, #3B82F6)", boxShadow: "0 0 8px rgba(99,102,241,0.6)" }} />
                </div>
                <p className="text-xs mt-1.5" style={{ color: "#475569", fontFamily: FONT_BODY, fontStyle: "italic" }}>{progress}% efficiency gain detected</p>
              </div>

              {/* Automation rate card */}
              <div className="absolute bottom-12 left-4 w-44 rounded-2xl p-4 shadow-xl"
                style={{ background: "rgba(15,18,40,0.88)", border: "1px solid rgba(99,102,241,0.2)", backdropFilter: "blur(16px)" }}>
                <p className="text-xs font-medium mb-1" style={{ color: "#475569", fontFamily: FONT_BODY, fontStyle: "italic" }}>AUTOMATION RATE</p>
                <p className="text-3xl font-bold" style={{ fontFamily: FONT_DISPLAY, fontStyle: "italic", backgroundImage: "linear-gradient(135deg, #818CF8, #60A5FA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>94%</p>
                <p className="text-xs mt-0.5" style={{ color: "#475569", fontFamily: FONT_BODY, fontStyle: "italic" }}>task coverage</p>
              </div>

              {/* AI-Powered pill */}
              <div className="absolute bottom-6 right-4 w-48 rounded-2xl p-4 shadow-xl"
                style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.25)", backdropFilter: "blur(16px)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4" style={{ color: "#818CF8" }} />
                  <p className="text-xs font-semibold" style={{ color: "#818CF8", fontFamily: FONT_BODY, fontStyle: "italic" }}>AI-POWERED</p>
                </div>
                <p className="text-sm leading-snug" style={{ color: "#CBD5E1", fontFamily: FONT_BODY, fontStyle: "italic" }}>Intelligent decisions at every layer of your stack</p>
              </div>

              {/* Subtle vertical glow line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, rgba(99,102,241,0.15), transparent)" }} />
            </div>
          </div>
        </div>

        {/* CSS keyframes */}
        <style>{`
          @keyframes fadeSlideUp {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
        `}</style>
      </section>

      {/* ══════════════════════════════
          WHO WE ARE
      ══════════════════════════════ */}
      <section className="py-16 md:py-28 relative overflow-hidden" style={{ background: "#080C1F" }}>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20" style={{ background: "linear-gradient(to bottom, #050816, transparent)" }} />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20" style={{ background: "linear-gradient(to top, #050816, transparent)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <SectionLabel text="Who We Are" color="#6366F1" />
              <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontStyle: "italic", fontSize: "clamp(1.5rem, 5vw, 2.8rem)", color: "#F8FAFC", lineHeight: 1.18, marginBottom: "1rem" }}>
                An AI company built for businesses that can't afford to fall behind
              </h2>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#64748B", fontFamily: FONT_BODY, fontStyle: "italic", fontWeight: 400 }}>
                GD AI Solutions combines artificial intelligence, enterprise software, and deep engineering to help organizations automate intelligently, operate efficiently, and scale confidently.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {[
              { icon: Brain, label: "AI-Native", sub: "Intelligence embedded by default — not layered on after the fact.", color: "#6366F1" },
              { icon: Layers, label: "Full-Spectrum", sub: "From strategy and design to deployment and support — full delivery lifecycle.", color: "#3B82F6" },
              { icon: CheckCircle2, label: "Outcome-Driven", sub: "We measure success by the business results you achieve, not features shipped.", color: "#8B5CF6" },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 80}>
                <GlassCard className="p-5 sm:p-7" color={item.color}>
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-xl flex items-center justify-center mb-4 sm:mb-5" style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}>
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: "#F1F5F9", fontFamily: FONT_DISPLAY, fontStyle: "italic", fontSize: "1rem" }}>{item.label}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#64748B", fontFamily: FONT_BODY, fontStyle: "italic", fontWeight: 400 }}>{item.sub}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SERVICES
      ══════════════════════════════ */}
      <section className="py-16 md:py-28 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 65%)", filter: "blur(40px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
              <div className="max-w-xl">
                <SectionLabel text="What We Do" color="#6366F1" />
                <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontStyle: "italic", fontSize: "clamp(1.4rem, 5vw, 2.5rem)", color: "#F8FAFC", lineHeight: 1.2 }}>
                  Services built for the full enterprise technology stack
                </h2>
              </div>
              <Link to="/services" className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm flex-shrink-0 transition-all duration-200 hover:-translate-y-0.5 self-start md:self-auto"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#CBD5E1", fontFamily: FONT_BODY, fontStyle: "italic" }}>
                All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
            {services.map((svc, i) => (
              <Reveal key={svc.title} delay={(i % 4) * 60}>
                <GlassCard className="p-3 sm:p-5 flex flex-col h-full" color={svc.color}>
                  <CardImage src={svc.image} alt={svc.title} color={svc.color} />
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 flex-shrink-0 -mt-8 sm:-mt-9 ml-1 relative z-10" style={{ background: svc.bg, border: `1px solid ${svc.color}22`, backdropFilter: "blur(8px)" }}>
                    <svc.icon className="w-4 sm:w-5 h-4 sm:h-5" style={{ color: svc.color }} />
                  </div>
                  <h3 className="font-semibold mb-1.5 sm:mb-2 text-sm" style={{ color: "#F1F5F9", fontFamily: FONT_DISPLAY, fontStyle: "italic" }}>{svc.title}</h3>
                  <p className="text-xs leading-relaxed mb-3 flex-1" style={{ color: "#64748B", fontFamily: FONT_BODY, fontStyle: "italic", fontWeight: 400 }}>{svc.description}</p>
                  <p className="text-xs font-medium leading-snug pb-3 mb-3" style={{ color: "#94A3B8", borderBottom: "1px solid rgba(255,255,255,0.06)", fontFamily: FONT_BODY, fontStyle: "italic" }}>{svc.value}</p>
                  <Link to="/services" className="inline-flex items-center gap-1 text-xs font-semibold transition-all duration-150 hover:gap-2" style={{ color: svc.color, fontFamily: FONT_BODY, fontStyle: "italic" }}>
                    Learn More <ArrowRight className="w-3 h-3" />
                  </Link>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PRODUCTS
      ══════════════════════════════ */}
      <section className="py-16 md:py-28 relative overflow-hidden" style={{ background: "#080C1F" }}>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20" style={{ background: "linear-gradient(to bottom, #050816, transparent)" }} />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20" style={{ background: "linear-gradient(to top, #050816, transparent)" }} />
        <div className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 65%)", filter: "blur(40px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
              <div className="max-w-xl">
                <SectionLabel text="Our Products" color="#3B82F6" />
                <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontStyle: "italic", fontSize: "clamp(1.4rem, 5vw, 2.5rem)", color: "#F8FAFC", lineHeight: 1.2 }}>
                  Ready-to-deploy platforms for every business function
                </h2>
              </div>
              <Link to="/products" className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm flex-shrink-0 transition-all duration-200 hover:-translate-y-0.5 self-start md:self-auto"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#CBD5E1", fontFamily: FONT_BODY, fontStyle: "italic" }}>
                All Products <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {products.map((prod, i) => (
              <Reveal key={prod.name} delay={(i % 4) * 60}>
                <GlassCard className="p-3 sm:p-5 flex flex-col h-full" color={prod.color}>
                  <CardImage src={prod.image} alt={prod.name} color={prod.color} />
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 -mt-8 sm:-mt-9 ml-1 relative z-10" style={{ background: `${prod.color}15`, border: `1px solid ${prod.color}22`, backdropFilter: "blur(8px)" }}>
                    <prod.icon className="w-4 sm:w-5 h-4 sm:h-5" style={{ color: prod.color }} />
                  </div>
                  <h3 className="font-semibold mb-1.5 text-sm" style={{ color: "#F1F5F9", fontFamily: FONT_DISPLAY, fontStyle: "italic" }}>{prod.name}</h3>
                  <p className="text-xs leading-relaxed mb-3 flex-1" style={{ color: "#64748B", fontFamily: FONT_BODY, fontStyle: "italic", fontWeight: 400 }}>{prod.description}</p>
                  <p className="text-xs font-medium leading-snug pb-3 mb-3" style={{ color: "#94A3B8", borderBottom: "1px solid rgba(255,255,255,0.06)", fontFamily: FONT_BODY, fontStyle: "italic" }}>{prod.useCase}</p>
                  <Link to="/products" className="inline-flex items-center gap-1 text-xs font-semibold transition-all duration-150 hover:gap-2" style={{ color: prod.color, fontFamily: FONT_BODY, fontStyle: "italic" }}>
                    Explore <ArrowRight className="w-3 h-3" />
                  </Link>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          EDUCATION
      ══════════════════════════════ */}
      <section className="py-16 md:py-28 relative overflow-hidden">
        <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 65%)", filter: "blur(50px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <Reveal>
              <SectionLabel text="Education & Growth" color="#8B5CF6" />
              <h2 className="mb-4 sm:mb-5" style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontStyle: "italic", fontSize: "clamp(1.4rem, 5vw, 2.5rem)", color: "#F8FAFC", lineHeight: 1.2 }}>
                We invest in the talent that will build tomorrow
              </h2>
              <p className="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8" style={{ color: "#64748B", fontFamily: FONT_BODY, fontStyle: "italic", fontWeight: 400 }}>
                GD AI Solutions runs structured learning programs that bridge the gap between academic theory and real industry practice. We don't just build technology — we build the next generation of engineers who will carry it forward.
              </p>
              <Link to="/education" className="group inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #6366F1 0%, #3B82F6 100%)", boxShadow: "0 0 28px rgba(99,102,241,0.35)", fontFamily: FONT_BODY, fontStyle: "italic" }}>
                Explore Programs <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {educationOfferings.map((item, i) => (
                <Reveal key={item.title} delay={i * 70}>
                  <GlassCard className="p-4 sm:p-5" color="#8B5CF6">
                    <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.2)" }}>
                      <item.icon className="w-4 sm:w-5 h-4 sm:h-5" style={{ color: "#A78BFA" }} />
                    </div>
                    <h3 className="font-semibold mb-1.5 text-sm" style={{ color: "#F1F5F9", fontFamily: FONT_DISPLAY, fontStyle: "italic" }}>{item.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: "#64748B", fontFamily: FONT_BODY, fontStyle: "italic", fontWeight: 400 }}>{item.description}</p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════ */}
      <section className="py-16 md:py-28 relative overflow-hidden" style={{ background: "#080C1F" }}>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20" style={{ background: "linear-gradient(to bottom, #050816, transparent)" }} />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20" style={{ background: "linear-gradient(to top, #050816, transparent)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <SectionLabel text="Why GD AI Solutions" color="#6366F1" />
              <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontStyle: "italic", fontSize: "clamp(1.4rem, 5vw, 2.5rem)", color: "#F8FAFC", lineHeight: 1.2 }}>
                The principles that define how we build and partner
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {whyUs.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 70}>
                <GlassCard className="p-5 sm:p-6" color="#6366F1">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.22)" }}>
                      <item.icon className="w-4 sm:w-5 h-4 sm:h-5" style={{ color: "#818CF8" }} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1.5 text-sm" style={{ color: "#F1F5F9", fontFamily: FONT_DISPLAY, fontStyle: "italic" }}>{item.title}</h3>
                      <p className="text-xs leading-relaxed" style={{ color: "#64748B", fontFamily: FONT_BODY, fontStyle: "italic", fontWeight: 400 }}>{item.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          INDUSTRIES
      ══════════════════════════════ */}
      <section className="py-16 md:py-28 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
              <SectionLabel text="Industries We Serve" color="#3B82F6" />
              <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontStyle: "italic", fontSize: "clamp(1.4rem, 5vw, 2.5rem)", color: "#F8FAFC", lineHeight: 1.2 }}>
                Domain expertise across the industries that matter
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={(i % 4) * 50}>
                <GlassCard className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 text-center cursor-default" color="#3B82F6">
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-xl flex items-center justify-center" style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.2)" }}>
                    <ind.icon className="w-4 sm:w-5 h-4 sm:h-5" style={{ color: "#60A5FA" }} />
                  </div>
                  <span className="text-xs sm:text-sm font-medium leading-snug" style={{ color: "#CBD5E1", fontFamily: FONT_BODY, fontStyle: "italic" }}>{ind.name}</span>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          PROCESS
      ══════════════════════════════ */}
      <section className="py-16 md:py-28 relative overflow-hidden" style={{ background: "#080C1F" }}>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20" style={{ background: "linear-gradient(to bottom, #050816, transparent)" }} />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20" style={{ background: "linear-gradient(to top, #050816, transparent)" }} />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full" style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 65%)", filter: "blur(40px)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
              <SectionLabel text="How We Work" color="#6366F1" />
              <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontStyle: "italic", fontSize: "clamp(1.4rem, 5vw, 2.5rem)", color: "#F8FAFC", lineHeight: 1.2 }}>
                A process designed to reduce risk and maximize outcomes
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 relative">
            {/* Connector line — desktop only */}
            <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-px z-0" style={{ background: "linear-gradient(90deg, rgba(99,102,241,0.3), rgba(59,130,246,0.3))" }} />

            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 80} className="relative z-10">
                <GlassCard className="p-5 sm:p-6" color="#6366F1">
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-xl flex items-center justify-center mb-4 sm:mb-5 text-sm font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #6366F1 0%, #3B82F6 100%)", fontFamily: FONT_DISPLAY, fontStyle: "italic", boxShadow: "0 0 20px rgba(99,102,241,0.3)" }}>
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2 text-sm" style={{ color: "#F1F5F9", fontFamily: FONT_DISPLAY, fontStyle: "italic" }}>{item.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#64748B", fontFamily: FONT_BODY, fontStyle: "italic", fontWeight: 400 }}>{item.description}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CTA
      ══════════════════════════════ */}
      <section className="py-16 md:py-28 relative overflow-hidden">
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full" style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 65%)", filter: "blur(50px)" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-3xl p-7 sm:p-10 md:p-14 lg:p-16 text-center relative overflow-hidden"
              style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.09)", boxShadow: "0 0 80px rgba(99,102,241,0.12), 0 24px 64px rgba(0,0,0,0.5)" }}>
              <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl" style={{ background: "#6366F1", opacity: 0.13 }} />
              <div className="pointer-events-none absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl" style={{ background: "#3B82F6", opacity: 0.1 }} />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5 sm:mb-6"
                  style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.28)", color: "#A5B4FC", fontFamily: FONT_BODY, fontStyle: "italic" }}>
                  <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  Let's Build Together
                </div>

                <h2 className="mb-4 sm:mb-5" style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontStyle: "italic", fontSize: "clamp(1.5rem, 6vw, 3.2rem)", color: "#F8FAFC", lineHeight: 1.1 }}>
                  Ready to bring intelligence<br className="hidden sm:block" /> into your business?
                </h2>
                <p className="text-sm sm:text-base max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed" style={{ color: "#64748B", fontFamily: FONT_BODY, fontStyle: "italic", fontWeight: 400 }}>
                  Whether you're automating your first workflow or engineering a full enterprise platform, we're ready to partner with you from day one.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link to="/contact" className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: "linear-gradient(135deg, #6366F1 0%, #3B82F6 100%)", boxShadow: "0 0 36px rgba(99,102,241,0.4)", fontFamily: FONT_BODY, fontStyle: "italic" }}>
                    Start a Conversation <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <Link to="/services" className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#94A3B8", fontFamily: FONT_BODY, fontStyle: "italic" }}>
                    View All Services <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10 pt-6 sm:pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  {[{ icon: ShieldCheck, text: "Enterprise Security" }, { icon: CheckCircle2, text: "Dedicated Support" }, { icon: Zap, text: "AI-Powered" }].map((sig) => (
                    <div key={sig.text} className="flex items-center gap-2">
                      <sig.icon className="w-3.5 h-3.5" style={{ color: "#6366F1" }} />
                      <span className="text-xs" style={{ color: "#475569", fontFamily: FONT_BODY, fontStyle: "italic" }}>{sig.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="h-12" style={{ background: "#050816" }} />
    </div>
  );
}