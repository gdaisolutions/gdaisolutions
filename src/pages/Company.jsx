import { Link } from "react-router-dom";
import ceoPhoto from "../assets/ceo.jpeg";

import {
  MapPin,
  Briefcase,
  Award,
  Quote,
  Code2,
  Target,
  Eye,
  Cpu,
  TrendingUp,
  Globe,
  Sparkles,
  Shield,
  CheckCircle2,
  Zap,
  ArrowRight,
  ChevronRight,
  Brain,
  Database,
  Workflow,
  Users,
  Lightbulb,
  HeartHandshake,
  Trophy,
  BookOpen,
} from "lucide-react";

/* =========================================================
   HELPER COMPONENTS
========================================================= */

const Reveal = ({ children, className = "", delay = 0 }) => {
  return (
    <div
      className={className}
      style={{
        animation: "fadeUp 0.7s ease-out both",
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const GlassCard = ({
  children,
  className = "",
  hoverGlow = "rgba(99,102,241,0.15)",
}) => {
  return (
    <div
      className={`rounded-2xl transition-all duration-300 hover:-translate-y-1 ${className}`}
      style={{
        background: "rgba(255,255,255,0.035)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: `0 0 30px ${hoverGlow}`,
      }}
    >
      {children}
    </div>
  );
};

const Orb = ({ style }) => {
  return (
    <div
      className="pointer-events-none absolute rounded-full blur-3xl opacity-20"
      style={style}
    />
  );
};

const SectionLabel = ({ text, color = "#6366F1" }) => {
  return (
    <div
      className="inline-flex items-center justify-center px-3 py-1.5 rounded-full mb-4 text-[10px] sm:text-xs font-semibold tracking-widest uppercase"
      style={{
        color,
        background: `${color}12`,
        border: `1px solid ${color}30`,
      }}
    >
      {text}
    </div>
  );
};

/* =========================================================
   DATA
========================================================= */

const whatWeBuild = [
  {
    title: "AI & Intelligent Systems",
    icon: Brain,
    color: "#6366F1",
    items: [
      "AI Agents & Automation",
      "Custom AI Models",
      "Intelligent Chatbots",
      "Predictive Analytics",
    ],
  },
  {
    title: "Software Platforms",
    icon: Database,
    color: "#3B82F6",
    items: [
      "ERP & CRM Systems",
      "Web & Mobile Apps",
      "SaaS Products",
      "Custom Dashboards",
    ],
  },
  {
    title: "Infrastructure & Cloud",
    icon: Workflow,
    color: "#8B5CF6",
    items: [
      "Cloud Architecture",
      "DevOps & CI/CD",
      "Data Pipelines",
      "Security Engineering",
    ],
  },
];

const values = [
  {
    title: "Innovation",
    description:
      "We pursue the frontier of what's possible — applying emerging AI and engineering practices to build solutions that didn't exist yesterday.",
    icon: Lightbulb,
    accent: "#6366F1",
    glow: "rgba(99,102,241,0.14)",
  },
  {
    title: "Excellence",
    description:
      "We hold our work to the highest standard, from architecture decisions to the final pixel. Good enough is never good enough.",
    icon: Trophy,
    accent: "#3B82F6",
    glow: "rgba(59,130,246,0.14)",
  },
  {
    title: "Integrity",
    description:
      "We say what we mean, deliver what we promise, and build systems you can trust — technically and commercially.",
    icon: Shield,
    accent: "#8B5CF6",
    glow: "rgba(139,92,246,0.14)",
  },
  {
    title: "Collaboration",
    description:
      "The best outcomes emerge when client knowledge and technical depth work in concert. We build with you, not just for you.",
    icon: Users,
    accent: "#A855F7",
    glow: "rgba(168,85,247,0.14)",
  },
  {
    title: "Continuous Learning",
    description:
      "Technology moves fast. We train relentlessly, track the frontier, and bring hard-won knowledge into every engagement.",
    icon: BookOpen,
    accent: "#6366F1",
    glow: "rgba(99,102,241,0.14)",
  },
  {
    title: "Customer Success",
    description:
      "A project that ships is the beginning, not the end. We measure our success by the measurable outcomes you achieve.",
    icon: HeartHandshake,
    accent: "#3B82F6",
    glow: "rgba(59,130,246,0.14)",
  },
];

const industries = [
  {
    name: "Healthcare",
    desc: "Patient systems, clinic platforms, health analytics",
    icon: HeartHandshake,
  },
  {
    name: "Education",
    desc: "School ERPs, LMS, student portals",
    icon: BookOpen,
  },
  {
    name: "Manufacturing",
    desc: "Operations automation, ERP, supply intelligence",
    icon: Cpu,
  },
  {
    name: "Retail",
    desc: "Commerce platforms, CRM, inventory systems",
    icon: Users,
  },
  {
    name: "Finance",
    desc: "Core banking, compliance tools, analytics",
    icon: TrendingUp,
  },
  {
    name: "Logistics",
    desc: "Fleet management, route AI, delivery tracking",
    icon: Workflow,
  },
  {
    name: "Startups",
    desc: "MVPs, SaaS platforms, AI-native products",
    icon: Lightbulb,
  },
  {
    name: "Enterprises",
    desc: "Digital transformation, integration, scale",
    icon: Briefcase,
  },
];

const whyUs = [
  {
    title: "AI-Native Architecture",
    desc: "Intelligence is foundational in everything we build — not retrofitted.",
    icon: Brain,
  },
  {
    title: "Scalable by Design",
    desc: "Systems engineered for where your business will be, not just where it is now.",
    icon: TrendingUp,
  },
  {
    title: "Enterprise Security",
    desc: "Security embedded at the architecture level — your data is always protected.",
    icon: Shield,
  },
  {
    title: "Outcome-Focused",
    desc: "Every technical decision is measured against a business result.",
    icon: Target,
  },
  {
    title: "Deep Domain Knowledge",
    desc: "We don't just write code — we understand the industries we serve.",
    icon: BookOpen,
  },
  {
    title: "Long-Term Partnership",
    desc: "We build relationships that last through iterations, pivots, and growth stages.",
    icon: HeartHandshake,
  },
];

/* =========================================================
   COMPANY PAGE
========================================================= */

export default function Company() {
  return (
    <>
      {/* =====================================================
          LEADERSHIP
      ===================================================== */}

      <section
        className="relative py-16 sm:py-24 md:py-36 overflow-hidden"
        style={{ background: "#0B1020" }}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-16 sm:h-24"
          style={{
            background: "linear-gradient(to bottom, #050816, transparent)",
          }}
        />

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-24"
          style={{
            background: "linear-gradient(to top, #050816, transparent)",
          }}
        />

        <Orb
          style={{
            width: 500,
            height: 500,
            top: "50%",
            left: "-10%",
            transform: "translateY(-50%)",
            background: "#6366F1",
          }}
        />

        <Orb
          style={{
            width: 350,
            height: 350,
            top: "20%",
            right: "-8%",
            background: "#3B82F6",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-10 sm:mb-16">
              <SectionLabel text="Leadership" color="#6366F1" />

              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
                style={{ color: "#F8FAFC" }}
              >
                The vision behind the company
              </h2>
            </div>
          </Reveal>

          {/* FOUNDER */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14 items-stretch mb-12 sm:mb-16">
            <Reveal delay={60} className="lg:col-span-2">
              <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                <div
                  className="absolute -inset-3 rounded-3xl blur-2xl pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(99,102,241,0.25) 0%, transparent 70%)",
                    animation: "ceoGlow 4s ease-in-out infinite",
                  }}
                />

                <div
                  className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
                  style={{
                    border: "1px solid rgba(99,102,241,0.25)",
                    boxShadow:
                      "0 0 60px rgba(99,102,241,0.15), 0 24px 64px rgba(0,0,0,0.5)",
                    animation: "ceoFloat 6s ease-in-out infinite",
                  }}
                >
                  <img
                    src={ceoPhoto}
                    alt="Gorakhnath Dongare — Founder & CEO"
                    className="w-full h-[430px] object-cover object-top"
                  />

                  <div
                    className="absolute inset-x-0 bottom-0 h-40"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(11,16,32,0.98), transparent)",
                    }}
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <p
                      className="text-lg sm:text-xl font-bold"
                      style={{ color: "#F8FAFC" }}
                    >
                      Gorakhnath Dongare
                    </p>

                    <span
                      className="inline-block mt-2 text-[10px] sm:text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(99,102,241,0.25)",
                        border: "1px solid rgba(99,102,241,0.4)",
                        color: "#A5B4FC",
                      }}
                    >
                      Founder & CEO
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal
              delay={140}
              className="lg:col-span-3 flex flex-col gap-5"
            >
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: MapPin, text: "Maharashtra, India" },
                  { icon: Briefcase, text: "AI & Software Entrepreneur" },
                  { icon: Award, text: "Tech Innovator" },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-medium"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.09)",
                      color: "#94A3B8",
                    }}
                  >
                    <Icon className="w-3.5 h-3.5" style={{ color: "#6366F1" }} />
                    {text}
                  </div>
                ))}
              </div>

              <div
                className="relative rounded-2xl p-5 sm:p-6"
                style={{
                  background: "rgba(99,102,241,0.07)",
                  border: "1px solid rgba(99,102,241,0.18)",
                }}
              >
                <Quote
                  className="absolute top-4 right-4 w-7 h-7"
                  style={{ color: "rgba(99,102,241,0.25)" }}
                />

                <p
                  className="text-sm sm:text-lg md:text-xl font-medium leading-relaxed italic pr-8"
                  style={{ color: "#CBD5E1" }}
                >
                  "Technology should solve real problems for real people.
                  Every line of code we write, every system we build, has to
                  earn its place by making someone's work better, their
                  decision smarter, or their business stronger."
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <div
                    className="w-8 h-px"
                    style={{ background: "#6366F1" }}
                  />

                  <span
                    className="text-xs sm:text-sm font-semibold"
                    style={{ color: "#6366F1" }}
                  >
                    Gorakhnath Dongare
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <p
                  className="text-xs sm:text-base leading-relaxed"
                  style={{ color: "#94A3B8" }}
                >
                  Gorakhnath Dongare is the Founder and CEO of GD AI Solutions,
                  a technology company at the intersection of artificial
                  intelligence, enterprise software, and digital
                  transformation.
                </p>

                <p
                  className="text-xs sm:text-base leading-relaxed"
                  style={{ color: "#94A3B8" }}
                >
                  His journey began with a deep passion for using technology to
                  solve complex operational challenges in traditional
                  industries. Recognizing that most businesses lacked access to
                  intelligent, affordable technology solutions, Gorakhnath
                  founded GD AI Solutions with a clear mission — to bridge that
                  gap and make AI-powered software accessible to organizations
                  of all sizes.
                </p>

                <p
                  className="text-xs sm:text-base leading-relaxed"
                  style={{ color: "#94A3B8" }}
                >
                  Under his leadership, the company has delivered technology
                  projects spanning Healthcare, Education, Finance, Logistics,
                  and Retail. He is deeply involved in product strategy, AI
                  architecture, and client partnerships.
                </p>
              </div>
            </Reveal>
          </div>

          {/* DIVIDER */}
          <div
            className="w-full h-px mb-12"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)",
            }}
          />

          {/* CTO */}
          <Reveal delay={80}>
            <GlassCard
              className="p-6 sm:p-8 lg:p-10"
              hoverGlow="rgba(59,130,246,0.18)"
            >
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div>
                  <p
                    className="text-lg sm:text-xl font-bold"
                    style={{ color: "#F8FAFC" }}
                  >
                    Deepti Joshi
                  </p>

                  <span
                    className="inline-block mt-1 text-[10px] sm:text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(59,130,246,0.2)",
                      border: "1px solid rgba(59,130,246,0.35)",
                      color: "#60A5FA",
                    }}
                  >
                    CTO · MERN Stack Developer
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 ml-auto">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.09)",
                      color: "#94A3B8",
                    }}
                  >
                    <MapPin
                      className="w-3.5 h-3.5"
                      style={{ color: "#3B82F6" }}
                    />
                    Maharashtra, India
                  </div>

                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.09)",
                      color: "#94A3B8",
                    }}
                  >
                    <Code2
                      className="w-3.5 h-3.5"
                      style={{ color: "#3B82F6" }}
                    />
                    Full-Stack Engineer
                  </div>
                </div>
              </div>

              <div
                className="relative rounded-xl p-4 sm:p-5 mb-5"
                style={{
                  background: "rgba(59,130,246,0.07)",
                  border: "1px solid rgba(59,130,246,0.15)",
                }}
              >
                <Quote
                  className="absolute top-3 right-3 w-6 h-6"
                  style={{ color: "rgba(59,130,246,0.2)" }}
                />

                <p
                  className="text-sm sm:text-base font-medium leading-relaxed italic pr-6"
                  style={{ color: "#CBD5E1" }}
                >
                  "Great software is built at the intersection of clean
                  architecture and relentless attention to the user's reality.
                  I write code to make complex things feel effortless."
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <div
                    className="w-6 h-px"
                    style={{ background: "#3B82F6" }}
                  />

                  <span
                    className="text-xs font-semibold"
                    style={{ color: "#3B82F6" }}
                  >
                    Deepti Joshi
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <p
                  className="text-xs sm:text-sm leading-relaxed"
                  style={{ color: "#94A3B8" }}
                >
                  Deepti Joshi serves as Chief Technology Officer at GD AI
                  Solutions, leading the engineering vision and full-stack
                  development practice. A specialist in the MERN stack —
                  MongoDB, Express, React, and Node.js — she architects the
                  scalable, high-performance platforms that power our clients'
                  most critical operations.
                </p>

                <p
                  className="text-xs sm:text-sm leading-relaxed"
                  style={{ color: "#94A3B8" }}
                >
                  Deepti brings disciplined engineering thinking to every
                  product she touches, ensuring that systems are functional,
                  robust, maintainable, and ready to grow.
                </p>
              </div>
            </GlassCard>
          </Reveal>

          {/* =================================================
              ADDITIONAL TEAM MEMBERS
          ================================================= */}

          <div className="mt-12 sm:mt-16 lg:mt-20">
            <Reveal delay={100}>
              <div className="text-center mb-8 sm:mb-10">
                <div
                  className="text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3"
                  style={{ color: "#6366F1" }}
                >
                  Our Team
                </div>

                <h3
                  className="text-xl sm:text-2xl md:text-3xl font-bold"
                  style={{ color: "#F8FAFC" }}
                >
                  The people building what comes next
                </h3>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {[
                {
                  name: "Sonal Ambekar",
                  role: "Software Engineer",
                  color: "#6366F1",
                  initial: "S",
                },
                {
                  name: "Abhishek Ghadmode",
                  role: "AI Engineer",
                  color: "#3B82F6",
                  initial: "A",
                },
                {
                  name: "Madhuri Kumari",
                  role: "AI Engineer",
                  color: "#8B5CF6",
                  initial: "M",
                },
                {
                  name: "Gitanjali",
                  role: "AI Engineer",
                  color: "#A855F7",
                  initial: "G",
                },
              ].map((member, index) => (
                <Reveal
                  key={member.name}
                  delay={140 + index * 70}
                >
                  <div
                    className="p-6 sm:p-7 text-center h-full rounded-2xl transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: `1px solid ${member.color}35`,
                      boxShadow: `0 0 30px ${member.color}10`,
                    }}
                  >
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{
                        background: `${member.color}18`,
                        border: `1px solid ${member.color}35`,
                      }}
                    >
                      <span
                        className="text-xl sm:text-2xl font-bold"
                        style={{ color: member.color }}
                      >
                        {member.initial}
                      </span>
                    </div>

                    <h4
                      className="text-base sm:text-lg font-bold"
                      style={{ color: "#F1F5F9" }}
                    >
                      {member.name}
                    </h4>

                    <p
                      className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase mt-2"
                      style={{ color: member.color }}
                    >
                      {member.role}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION & VISION
      ===================================================== */}

      <section
        className="relative py-16 sm:py-20 md:py-28 overflow-hidden"
        style={{ background: "#0B1020" }}
      >
        <Orb
          style={{
            width: 400,
            height: 400,
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            background: "#8B5CF6",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-10 sm:mb-16">
              <SectionLabel text="Purpose" color="#8B5CF6" />

              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
                style={{ color: "#F8FAFC" }}
              >
                What drives us, every day
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            <Reveal delay={60}>
              <GlassCard
                className="p-6 sm:p-8 h-full"
                hoverGlow="rgba(99,102,241,0.18)"
              >
                <Target
                  className="w-7 h-7 mb-5"
                  style={{ color: "#818CF8" }}
                />

                <p
                  className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-3"
                  style={{ color: "#6366F1" }}
                >
                  Mission
                </p>

                <h3
                  className="text-xl sm:text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: "#F1F5F9" }}
                >
                  Empowering businesses through intelligent technology
                </h3>

                <p
                  className="text-xs sm:text-base leading-relaxed"
                  style={{ color: "#94A3B8" }}
                >
                  To empower organizations through AI, automation, and modern
                  software engineering — reducing friction, unlocking
                  capability, and creating compounding advantages that grow
                  with your business.
                </p>
              </GlassCard>
            </Reveal>

            <Reveal delay={140}>
              <GlassCard
                className="p-6 sm:p-8 h-full"
                hoverGlow="rgba(59,130,246,0.18)"
              >
                <Eye
                  className="w-7 h-7 mb-5"
                  style={{ color: "#60A5FA" }}
                />

                <p
                  className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-3"
                  style={{ color: "#3B82F6" }}
                >
                  Vision
                </p>

                <h3
                  className="text-xl sm:text-2xl md:text-3xl font-bold mb-4"
                  style={{ color: "#F1F5F9" }}
                >
                  The trusted AI partner for digital transformation
                </h3>

                <p
                  className="text-xs sm:text-base leading-relaxed"
                  style={{ color: "#94A3B8" }}
                >
                  To become the defining technology partner for organizations
                  embracing digital transformation — building intelligent
                  systems that are not just functional, but genuinely
                  transformative.
                </p>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE BUILD
      ===================================================== */}

      <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
        <Orb
          style={{
            width: 300,
            height: 300,
            bottom: 0,
            left: 0,
            background: "#6366F1",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-10 sm:mb-16">
              <SectionLabel
                text="What We Build"
                color="#3B82F6"
              />

              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
                style={{ color: "#F8FAFC" }}
              >
                Three pillars of enterprise technology
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {whatWeBuild.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <Reveal
                  key={pillar.title}
                  delay={index * 80}
                >
                  <GlassCard className="p-6 sm:p-7 h-full flex flex-col">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{
                        background: `${pillar.color}18`,
                        border: `1px solid ${pillar.color}30`,
                      }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: pillar.color }}
                      />
                    </div>

                    <h3
                      className="text-base sm:text-lg font-bold mb-5"
                      style={{ color: "#F1F5F9" }}
                    >
                      {pillar.title}
                    </h3>

                    <ul className="space-y-3">
                      {pillar.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3"
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: pillar.color }}
                          />

                          <span
                            className="text-xs sm:text-sm"
                            style={{ color: "#94A3B8" }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CORE VALUES
      ===================================================== */}

      <section
        className="relative py-16 sm:py-20 md:py-28 overflow-hidden"
        style={{ background: "#0B1020" }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-10 sm:mb-16">
              <SectionLabel
                text="Core Values"
                color="#A855F7"
              />

              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
                style={{ color: "#F8FAFC" }}
              >
                The principles we refuse to compromise
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <Reveal
                  key={value.title}
                  delay={index * 60}
                >
                  <GlassCard
                    className="p-5 sm:p-6 h-full"
                    hoverGlow={value.glow}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                      style={{
                        background: `${value.accent}18`,
                        border: `1px solid ${value.accent}30`,
                      }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: value.accent }}
                      />
                    </div>

                    <h3
                      className="text-sm sm:text-base font-bold mb-2"
                      style={{ color: "#F1F5F9" }}
                    >
                      {value.title}
                    </h3>

                    <p
                      className="text-xs sm:text-sm leading-relaxed"
                      style={{ color: "#6B7280" }}
                    >
                      {value.description}
                    </p>
                  </GlassCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
        <Orb
          style={{
            width: 450,
            height: 450,
            top: "50%",
            right: "-10%",
            background: "#3B82F6",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-10 sm:mb-16">
              <SectionLabel
                text="Industries We Empower"
                color="#6366F1"
              />

              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                style={{ color: "#F8FAFC" }}
              >
                Domain expertise across the sectors that shape the world
              </h2>

              <p
                className="text-sm sm:text-lg max-w-2xl mx-auto"
                style={{ color: "#64748B" }}
              >
                We bring deep understanding of each industry we serve — not
                generic tech applied to specific problems.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <Reveal
                  key={industry.name}
                  delay={index * 50}
                >
                  <GlassCard className="p-4 sm:p-5 h-full">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        background: "rgba(99,102,241,0.12)",
                        border: "1px solid rgba(99,102,241,0.2)",
                      }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: "#818CF8" }}
                      />
                    </div>

                    <h3
                      className="text-xs sm:text-sm font-bold mb-1.5"
                      style={{ color: "#F1F5F9" }}
                    >
                      {industry.name}
                    </h3>

                    <p
                      className="text-[10px] sm:text-xs leading-relaxed"
                      style={{ color: "#64748B" }}
                    >
                      {industry.desc}
                    </p>
                  </GlassCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section
        className="relative py-16 sm:py-20 md:py-28 overflow-hidden"
        style={{ background: "#0B1020" }}
      >
        <Orb
          style={{
            width: 400,
            height: 400,
            top: "20%",
            left: "-5%",
            background: "#8B5CF6",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
            <Reveal>
              <SectionLabel
                text="Why Choose Us"
                color="#8B5CF6"
              />

              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5"
                style={{ color: "#F8FAFC" }}
              >
                The reasons organizations choose GD AI Solutions
              </h2>

              <p
                className="text-sm sm:text-lg leading-relaxed mb-8"
                style={{ color: "#64748B" }}
              >
                We compete on outcomes, not promises. Here's what separates
                our approach from every other technology vendor.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #6366F1 0%, #3B82F6 100%)",
                  boxShadow: "0 0 24px rgba(99,102,241,0.3)",
                }}
              >
                Let's Talk
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyUs.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal
                    key={item.title}
                    delay={index * 70}
                  >
                    <GlassCard className="p-5 h-full">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                        style={{
                          background: "rgba(139,92,246,0.12)",
                          border: "1px solid rgba(139,92,246,0.22)",
                        }}
                      >
                        <Icon
                          className="w-4 h-4"
                          style={{ color: "#A78BFA" }}
                        />
                      </div>

                      <h3
                        className="text-xs sm:text-sm font-bold mb-1.5"
                        style={{ color: "#F1F5F9" }}
                      >
                        {item.title}
                      </h3>

                      <p
                        className="text-[10px] sm:text-xs leading-relaxed"
                        style={{ color: "#64748B" }}
                      >
                        {item.desc}
                      </p>
                    </GlassCard>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FUTURE VISION
      ===================================================== */}

      <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
        <Orb
          style={{
            width: 600,
            height: 300,
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            background: "#6366F1",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <SectionLabel
              text="Future Vision"
              color="#6366F1"
            />

            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ color: "#F8FAFC" }}
            >
              Building the infrastructure
              <br />
              for intelligent enterprise
            </h2>

            <p
              className="text-sm sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
              style={{ color: "#64748B" }}
            >
              We see a world where every business — regardless of size or
              sector — has access to the kind of intelligent, adaptive systems
              that were once reserved for only the largest corporations.
              That's the world we're building.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                {
                  icon: Globe,
                  label: "Global Reach",
                  sub: "Technology without borders",
                },
                {
                  icon: Cpu,
                  label: "AI at Core",
                  sub: "Intelligence in everything",
                },
                {
                  icon: TrendingUp,
                  label: "Continuous Scale",
                  sub: "Systems that grow with you",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl px-5 py-6 text-center"
                    style={{
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl mx-auto flex items-center justify-center mb-3"
                      style={{
                        background: "rgba(99,102,241,0.12)",
                        border: "1px solid rgba(99,102,241,0.22)",
                      }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: "#818CF8" }}
                      />
                    </div>

                    <p
                      className="text-xs sm:text-sm font-bold"
                      style={{ color: "#E2E8F0" }}
                    >
                      {item.label}
                    </p>

                    <p
                      className="text-[10px] sm:text-xs mt-1"
                      style={{ color: "#475569" }}
                    >
                      {item.sub}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
        <Orb
          style={{
            width: 500,
            height: 500,
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            background: "#4F46E5",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div
              className="rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 text-center"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.09)",
                boxShadow:
                  "0 0 80px rgba(99,102,241,0.12), 0 24px 64px rgba(0,0,0,0.5)",
              }}
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs sm:text-sm font-medium"
                style={{
                  background: "rgba(99,102,241,0.12)",
                  border: "1px solid rgba(99,102,241,0.28)",
                  color: "#A5B4FC",
                }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                Ready to Build Together?
              </div>

              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5"
                style={{ color: "#F8FAFC" }}
              >
                Let's bring intelligence
                <br />
                into your organization
              </h2>

              <p
                className="text-sm sm:text-lg max-w-xl mx-auto leading-relaxed mb-10"
                style={{ color: "#64748B" }}
              >
                Whether you're automating your first workflow or engineering a
                full enterprise platform — we're ready to partner from day one.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #6366F1 0%, #3B82F6 100%)",
                    boxShadow: "0 0 36px rgba(99,102,241,0.4)",
                  }}
                >
                  Start a Conversation
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#94A3B8",
                  }}
                >
                  View Services
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div
                className="flex flex-wrap items-center justify-center gap-5 mt-10 pt-8"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {[
                  {
                    icon: Shield,
                    text: "Enterprise Security",
                  },
                  {
                    icon: CheckCircle2,
                    text: "Dedicated Support",
                  },
                  {
                    icon: Zap,
                    text: "AI-Powered",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.text}
                      className="flex items-center gap-2"
                    >
                      <Icon
                        className="w-3.5 h-3.5"
                        style={{ color: "#6366F1" }}
                      />

                      <span
                        className="text-[10px] sm:text-xs"
                        style={{ color: "#475569" }}
                      >
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>{`
        @keyframes ceoFloat {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes ceoGlow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }

          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div
        className="h-12"
        style={{ background: "#050816" }}
      />
    </>
  );
}