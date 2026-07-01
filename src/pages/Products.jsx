import { useState, useEffect, useRef } from "react";

const products = [
  {
    id: 1,
    icon: "👥",
    title: "CRM Solution",
    tag: "Sales & Marketing",
    tagline: "Relationships that convert.",
    description: "An intelligent CRM that unifies your sales pipeline, marketing campaigns, and customer data in one place. Track every interaction, automate follow-ups, and get AI-driven insights to close deals faster.",
    color: "#6366F1",
    variant: "featured",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    icon: "📊",
    title: "ERP System",
    tag: "Operations",
    tagline: "Your entire business, one dashboard.",
    description: "Scalable ERP covering finance, HR, supply chain, and procurement — fully integrated so your teams always work from a single source of truth.",
    color: "#3B82F6",
    variant: "default",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    icon: "🛒",
    title: "E-Commerce Suite",
    tag: "Commerce",
    tagline: "Sell globally, scale instantly.",
    description: "A secure, high-performance storefront platform built for global transactions — with inventory sync, multi-currency support, and conversion-optimised checkout flows.",
    color: "#8B5CF6",
    variant: "default",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
  },
  {
  id: 4,
  icon: "🎓",
  title: "School ERP",
  tag: "Education",
  tagline: "Smarter schools start here.",
  description: "Complete institution management for attendance, exams, fees, and staff — giving educators and administrators more time for what matters most.",
  color: "#06B6D4",
  variant: "accent",
  image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
},
  {
    id: 5,
    icon: "🤖",
    title: "AI Analytics Dashboard",
    tag: "Intelligence",
    tagline: "Data that thinks ahead.",
    description: "Transform raw business data into predictive insights with AI-driven visual dashboards, trend forecasting, and anomaly detection — no data scientist required.",
    color: "#6366F1",
    variant: "featured",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    icon: "💼",
    title: "HR & Payroll System",
    tag: "Human Resources",
    tagline: "People-first, process-perfect.",
    description: "Automate payroll runs, track attendance, manage appraisals, and keep your workforce data compliant — all from a single HR hub your team will actually use.",
    color: "#3B82F6",
    variant: "default",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    icon: "📦",
    title: "Inventory Management",
    tag: "Supply Chain",
    tagline: "Zero stockouts. Zero guesswork.",
    description: "Real-time stock tracking across warehouses and suppliers, with smart reorder alerts, purchase automation, and detailed reporting to keep your supply chain lean.",
    color: "#10B981",
    variant: "accent",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    icon: "📋",
    title: "Project Management Tool",
    tag: "Productivity",
    tagline: "Ship faster. Together.",
    description: "Collaborative project workspace with task boards, automated workflows, progress tracking, and team workload views — so nothing falls through the cracks.",
    color: "#F59E0B",
    variant: "default",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 9,
    icon: "💬",
    title: "AI Chatbot",
    tag: "Customer Support",
    tagline: "24/7 support that never sleeps.",
    description: "Deploy intelligent conversational agents across your website, WhatsApp, and social media. Handle queries, qualify leads, and escalate complex issues seamlessly.",
    color: "#6366F1",
    variant: "featured",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 10,
    icon: "⚙️",
    title: "Workflow Automation Suite",
    tag: "Automation",
    tagline: "Automate the repetitive.",
    description: "Design powerful no-code workflows with drag-and-drop triggers, conditional logic, and cross-app integrations — cutting manual work by up to 80%.",
    color: "#6366F1",
    variant: "accent",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 11,
    icon: "📣",
    title: "Marketing Automation",
    tag: "Marketing",
    tagline: "Campaigns that run themselves.",
    description: "AI-powered lead scoring, multi-channel campaign orchestration, and customer segmentation tools that deliver the right message at the right time.",
    color: "#EC4899",
    variant: "default",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 12,
    icon: "📈",
    title: "BI Dashboard Pro",
    tag: "Business Intelligence",
    tagline: "Decisions backed by data.",
    description: "Build customisable, interactive business intelligence dashboards with live data connectors, drill-down reports, and shareable executive snapshots.",
    color: "#3B82F6",
    variant: "default",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 13,
    icon: "☁️",
    title: "CloudOps Manager",
    tag: "Cloud",
    tagline: "Cloud without the chaos.",
    description: "Centralise cloud monitoring, cost optimisation, and auto-scaling across AWS, Azure, and GCP from a unified control plane.",
    color: "#06B6D4",
    variant: "accent",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 14,
    icon: "🔒",
    title: "DevSecOps Platform",
    tag: "Security",
    tagline: "Security baked in.",
    description: "Integrate automated vulnerability scanning, compliance checks, and secure deployment pipelines directly into your CI/CD workflow.",
    color: "#10B981",
    variant: "default",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 15,
    icon: "🌐",
    title: "Edge Cloud Network",
    tag: "Infrastructure",
    tagline: "Speed at the edge.",
    description: "Ultra-fast content delivery and edge compute powered by a distributed global network — minimising latency wherever users are.",
    color: "#8B5CF6",
    variant: "default",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
  },
];

const categories = ["All", "Intelligence", "Operations", "Commerce", "Cloud", "Automation", "Security"];

const FONT = "'Times New Roman', Times, serif";

/* ── Card Image (shared) ── */
function CardImage({ src, alt, color, height = 110 }) {
  const [failed, setFailed] = useState(false);
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height,
        overflow: "hidden",
        background: color + "12",
        flexShrink: 0,
      }}
    >
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "saturate(0.9) brightness(0.8)",
          }}
        />
      )}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(5,8,22,0.05) 0%, rgba(5,8,22,0.65) 100%), linear-gradient(120deg, " +
            color +
            "30, transparent 60%)",
        }}
      />
    </div>
  );
}

/* ── Featured Card ── */
function FeaturedCard({ product, index }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 90);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        opacity: visible ? 1 :  0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.5s cubic-bezier(.22,1,.36,1)",
      }}
    >
      <CardImage src={product.image} alt={product.title} color={product.color} height={120} />
      <div style={{
        position: "absolute", left: 0, top: 120, bottom: 0, width: 3,
        background: "linear-gradient(180deg, " + product.color + ", " + product.color + "44)",
        opacity: hovered ? 1 : 0.4,
        transition: "opacity 0.3s",
      }} />
      <div style={{
        position: "absolute", left: 3, right: 0, top: 120, bottom: 0,
        background: hovered ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
        border: "1px solid " + (hovered ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.06)"),
        borderLeft: "none",
        borderTop: "none",
        borderRadius: "0 0 16px 16px",
        transition: "all 0.3s ease",
      }} />
      <div style={{
        position: "relative", zIndex: 1,
        padding: "1.25rem 1.25rem 1.5rem 1.5rem",
        display: "flex", flexDirection: "column", gap: "0.5rem",
        minHeight: 220,
      }}>
        <div style={{
          display: "inline-flex", alignSelf: "flex-start",
          padding: "3px 10px", borderRadius: 100,
          background: product.color + "15",
          border: "1px solid " + product.color + "30",
          marginBottom: "1rem",
          marginTop: "-2.1rem",
          backdropFilter: "blur(8px)",
        }}>
          <span style={{
            fontSize: "0.58rem", fontWeight: 600,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: product.color, fontFamily: FONT, fontStyle: "italic",
          }}>
            {product.tag}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "0.25rem" }}>
          <span style={{
            fontSize: "1.5rem", lineHeight: 1,
            transition: "transform 0.3s ease",
            transform: hovered ? "scale(1.1)" : "scale(1)",
          }}>
            {product.icon}
          </span>
          <h3 style={{
            margin: 0, fontSize: "clamp(0.95rem, 2.5vw, 1.2rem)",
            fontWeight: 700, color: "#F1F5F9",
            letterSpacing: "-0.01em", lineHeight: 1.2,
            fontFamily: FONT, fontStyle: "italic",
          }}>
            {product.title}
          </h3>
        </div>
        <p style={{
          margin: "0 0 0.6rem", fontSize: "0.78rem",
          color: product.color, fontWeight: 500,
          fontStyle: "italic", fontFamily: FONT,
        }}>
          {product.tagline}
        </p>
        <p style={{
          margin: 0, fontSize: "0.78rem", color: "#64748B",
          lineHeight: 1.7, flexGrow: 1,
          fontFamily: FONT, fontStyle: "italic",
        }}>
          {product.description}
        </p>
      </div>
      <div style={{
        position: "absolute", top: -30, right: -30,
        width: 100, height: 100, borderRadius: "50%",
        background: "radial-gradient(circle, " + product.color + "15, transparent 70%)",
        pointerEvents: "none", opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s",
      }} />
    </div>
  );
}

/* ── Default Card ── */
function DefaultCard({ product, index }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 70);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.5s cubic-bezier(.22,1,.36,1)",
      }}
    >
      <CardImage src={product.image} alt={product.title} color={product.color} height={100} />
      <div style={{
        height: 2,
        background: "linear-gradient(90deg, " + product.color + ", " + product.color + "33, transparent)",
        opacity: hovered ? 1 : 0.5,
        transition: "opacity 0.3s",
      }} />
      <div style={{
        position: "absolute", left: 0, right: 0, top: 102, bottom: 0,
        background: hovered ? "rgba(255,255,255,0.035)" : "rgba(255,255,255,0.02)",
        border: "1px solid " + (hovered ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.06)"),
        borderTop: "none",
        borderRadius: "0 0 16px 16px",
        transition: "all 0.3s ease",
      }} />
      <div style={{
        position: "relative", zIndex: 1,
        padding: "1.15rem 1.25rem 1.25rem",
        display: "flex", flexDirection: "column", gap: "0.5rem",
        minHeight: 200,
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{
            fontSize: "0.58rem", fontWeight: 600,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: product.color, background: product.color + "12",
            padding: "3px 10px", borderRadius: 100,
            border: "1px solid " + product.color + "25",
            fontFamily: FONT, fontStyle: "italic",
            backdropFilter: "blur(8px)",
          }}>
            {product.tag}
          </span>
          <span style={{
            fontSize: "1.25rem", lineHeight: 1,
            transition: "transform 0.3s ease",
            transform: hovered ? "scale(1.15)" : "scale(1)",
          }}>
            {product.icon}
          </span>
        </div>
        <div>
          <h3 style={{
            margin: 0, fontSize: "0.95rem", fontWeight: 700,
            color: "#F1F5F9", letterSpacing: "-0.01em",
            lineHeight: 1.25, fontFamily: FONT, fontStyle: "italic",
          }}>
            {product.title}
          </h3>
          <p style={{
            margin: "2px 0 0", fontSize: "0.68rem",
            color: product.color, fontWeight: 500,
            fontStyle: "italic", fontFamily: FONT,
          }}>
            {product.tagline}
          </p>
        </div>
        <p style={{
          margin: 0, fontSize: "0.72rem", color: "#64748B",
          lineHeight: 1.7, flexGrow: 1,
          fontFamily: FONT, fontStyle: "italic",
        }}>
          {product.description}
        </p>
      </div>
      <div style={{
        position: "absolute", top: -25, right: -25,
        width: 80, height: 80, borderRadius: "50%",
        background: "radial-gradient(circle, " + product.color + "10, transparent 70%)",
        pointerEvents: "none", opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s",
      }} />
    </div>
  );
}

/* ── Accent Card ── */
function AccentCard({ product, index }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), index * 70);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.5s cubic-bezier(.22,1,.36,1)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardImage src={product.image} alt={product.title} color={product.color} height={100} />
      <div style={{ display: "flex", flex: 1 }}>
        <div style={{
          width: 3, minHeight: "100%",
          background: "linear-gradient(180deg, " + product.color + ", " + product.color + "44)",
          opacity: hovered ? 1 : 0.5,
          transition: "opacity 0.3s",
          flexShrink: 0,
        }} />
        <div style={{
          flex: 1,
          background: hovered ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.02)",
          border: "1px solid " + (hovered ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.06)"),
          borderLeft: "none",
          borderTop: "none",
          borderRadius: "0 0 16px 0",
          padding: "1.15rem 1.25rem",
          display: "flex", flexDirection: "column", gap: "0.5rem",
          minHeight: 200,
          transition: "background 0.3s",
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{
              fontSize: "0.58rem", fontWeight: 600,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: product.color, background: product.color + "12",
              padding: "3px 10px", borderRadius: 100,
              border: "1px solid " + product.color + "25",
              fontFamily: FONT, fontStyle: "italic",
              backdropFilter: "blur(8px)",
            }}>
              {product.tag}
            </span>
            <span style={{
              fontSize: "1.25rem", lineHeight: 1,
              transition: "transform 0.3s ease",
              transform: hovered ? "scale(1.15)" : "scale(1)",
            }}>
              {product.icon}
            </span>
          </div>
          <div>
            <h3 style={{
              margin: 0, fontSize: "0.95rem", fontWeight: 700,
              color: "#F1F5F9", letterSpacing: "-0.01em",
              lineHeight: 1.25, fontFamily: FONT, fontStyle: "italic",
            }}>
              {product.title}
            </h3>
            <p style={{
              margin: "2px 0 0", fontSize: "0.68rem",
              color: product.color, fontWeight: 500,
              fontStyle: "italic", fontFamily: FONT,
            }}>
              {product.tagline}
            </p>
          </div>
          <p style={{
            margin: 0, fontSize: "0.72rem", color: "#64748B",
            lineHeight: 1.7, flexGrow: 1,
            fontFamily: FONT, fontStyle: "italic",
          }}>
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════
   MAIN COMPONENT
═══════════════════════════ */
export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) =>
          p.tag.toLowerCase().includes(activeCategory.toLowerCase()) ||
          activeCategory.toLowerCase().includes(p.tag.toLowerCase())
        );

  const featured = filtered.filter((p) => p.variant === "featured");
  const defaults = filtered.filter((p) => p.variant === "default");
  const accents = filtered.filter((p) => p.variant === "accent");

  const ordered = [];
  const maxLen = Math.max(featured.length, defaults.length, accents.length);
  for (let i = 0; i < maxLen; i++) {
    if (featured[i]) ordered.push(featured[i]);
    if (defaults[i]) ordered.push(defaults[i]);
    if (accents[i]) ordered.push(accents[i]);
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#050816",
      color: "#E2E8F0",
      fontFamily: FONT,
      fontStyle: "italic",
    }}>
      <style>{`
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #050816; }
        ::-webkit-scrollbar-thumb { background: rgba(99,102,241,0.3); border-radius: 4px; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulseRing {
          0% { transform: scale(0.95); opacity: 1; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -12px) scale(1.03); }
          66% { transform: translate(-12px, 8px) scale(0.98); }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #4338CA 0%, #818CF8 30%, #6366F1 50%, #818CF8 70%, #4338CA 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 5s linear infinite;
        }
        .cat-btn {
          background: transparent;
          border: 1px solid rgba(99,102,241,0.2);
          color: "#64748B";
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          font-family: ${FONT};
          font-style: italic;
          letter-spacing: 0.03em;
        }
        .cat-btn:hover {
          border-color: rgba(99,102,241,0.5);
          color: "#A5B4FC";
          background: "rgba(99,102,241,0.06)";
        }
        .cat-btn.active {
          background: linear-gradient(135deg, #6366F1, #4F46E5);
          border-color: transparent;
          color: "#ffffff";
        }
        .product-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.65rem;
        }
        @media (min-width: 640px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.85rem;
          }
          .product-grid .featured-item {
            grid-column: span 2;
          }
        }
        @media (min-width: 1024px) {
          .product-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.1rem;
          }
          .product-grid .featured-item {
            grid-column: span 1;
          }
        }
        .hero-anim {
          animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) both;
        }
      `}</style>

      {/* Ambient blobs */}
      <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div style={{
          position: "absolute", top: "8%", left: "12%",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.06), transparent 70%)",
          animation: "drift 20s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", bottom: "15%", right: "8%",
          width: 300, height: 300, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.05), transparent 70%)",
          animation: "drift 24s ease-in-out infinite reverse",
        }} />
        <div style={{
          position: "absolute", top: "45%", left: "60%",
          width: 250, height: 250, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.04), transparent 70%)",
          animation: "drift 18s ease-in-out infinite 4s",
        }} />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ── HERO ── */}
        <div style={{
          textAlign: "center",
          padding: "4rem 1.25rem 2.5rem",
          maxWidth: 620,
          margin: "0 auto",
        }} className="hero-anim">
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(99,102,241,0.1)",
            border: "1px solid rgba(99,102,241,0.25)",
            borderRadius: 100, padding: "5px 16px 5px 10px",
            marginBottom: "2rem",
          }}>
            <div style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "linear-gradient(135deg, #6366F1, #4F46E5)",
              position: "relative",
            }}>
              <div style={{
                position: "absolute", inset: 0, borderRadius: "50%",
                border: "1.5px solid #6366F1",
                animation: "pulseRing 2.5s ease-out infinite",
              }} />
            </div>
          
          </div>

          <h1 style={{
            fontSize: "clamp(1.9rem, 6vw, 3.2rem)",
            fontWeight: 700, margin: "0 0 0.6rem",
            letterSpacing: "-0.02em", lineHeight: 1.08,
          }}>
            <span className="shimmer-text">Built for scale.</span>
            <br />
            <span style={{ color: "#F1F5F9" }}>Designed to win.</span>
          </h1>

          <p style={{
            fontSize: "clamp(0.82rem, 2.2vw, 0.95rem)",
            color: "#64748B", lineHeight: 1.75,
            maxWidth: 460, margin: "0 auto 1.75rem",
          }}>
            Fifteen enterprise-grade products. One unified ecosystem. Powered by AI, built for the teams that refuse to settle.
          </p>

          <div style={{
            display: "flex", justifyContent: "center",
            gap: "2rem", flexWrap: "wrap", marginBottom: "2.5rem",
          }}>
            {[
              { val: "15+", label: "Products" },
              { val: "AI-First", label: "Architecture" },
              { val: "24/7", label: "Support" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{
                  fontSize: "1.3rem", fontWeight: 700,
                  backgroundImage: "linear-gradient(135deg, #6366F1, #818CF8)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>
                  {s.val}
                </div>
                <div style={{
                  fontSize: "0.6rem", color: "#334155",
                  textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600,
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), rgba(99,102,241,0.08), transparent)",
            margin: "0 auto",
          }} />
        </div>

        {/* ── CATEGORY FILTER ── */}
        <div style={{
          position: "sticky", top: 0, zIndex: 50,
          backdropFilter: "blur(20px)",
          background: "rgba(5,8,22,0.9)",
          borderBottom: "1px solid rgba(99,102,241,0.08)",
          padding: "0.7rem 1.25rem",
        }}>
          <div style={{
            maxWidth: 1100, margin: "0 auto",
            display: "flex", gap: 6,
            overflowX: "auto", scrollbarWidth: "none",
            paddingBottom: 2,
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={"cat-btn" + (activeCategory === cat ? " active" : "")}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── PRODUCT GRID ── */}
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          padding: "1.25rem 0.85rem 5rem",
        }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem 1rem", color: "#334155" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>🔍</div>
              <p style={{ fontFamily: FONT, fontStyle: "italic" }}>No products in this category yet.</p>
            </div>
          ) : (
            <div className="product-grid">
              {ordered.map((product, i) => {
                if (product.variant === "featured") {
                  return (
                    <div key={product.id} className="featured-item">
                      <FeaturedCard product={product} index={i} />
                    </div>
                  );
                }
                if (product.variant === "accent") {
                  return (
                    <div key={product.id}>
                      <AccentCard product={product} index={i} />
                    </div>
                  );
                }
                return (
                  <div key={product.id}>
                    <DefaultCard product={product} index={i} />
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* ── FOOTER CTA ── */}
        <div style={{
          textAlign: "center",
          padding: "2.5rem 1.25rem 4rem",
          borderTop: "1px solid rgba(99,102,241,0.08)",
        }}>
          <p style={{
            color: "#334155", fontSize: "0.75rem",
            marginBottom: "1.25rem", letterSpacing: "0.06em",
          }}>
            Built on Innovation · Powered by Intelligence
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{
              padding: "0.65rem 1.75rem", borderRadius: 100,
              background: "linear-gradient(135deg, #6366F1, #4F46E5)",
              border: "none", color: "#ffffff",
              fontWeight: 700, fontSize: "0.8rem",
              cursor: "pointer", fontFamily: FONT, fontStyle: "italic",
              letterSpacing: "0.02em",
              boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 6px 28px rgba(99,102,241,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(99,102,241,0.3)";
            }}
            >
              Get a Free Demo
            </button>
            <button style={{
              padding: "0.65rem 1.75rem", borderRadius: 100,
              background: "transparent",
              border: "1px solid rgba(99,102,241,0.3)",
              color: "#A5B4FC", fontWeight: 600,
              fontSize: "0.8rem", cursor: "pointer",
              fontFamily: FONT, fontStyle: "italic",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#6366F1";
              e.currentTarget.style.background = "rgba(99,102,241,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)";
              e.currentTarget.style.background = "transparent";
            }}
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}