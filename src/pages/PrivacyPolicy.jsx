import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Shield, Eye, Lock, Database, Bell, Mail, Globe, UserCheck, Trash2 } from "lucide-react";

const EMAIL = "contact.gdaisolutions@gmail.com";
const LAST_UPDATED = "June 29, 2026";
const COMPANY = "GD AI Solutions";

const SPRING = { type: "spring", stiffness: 380, damping: 28 };

const SECTIONS = [
  {
    id: "information-we-collect",
    icon: Database,
    title: "Information We Collect",
    color: "#818cf8",
    content: [
      {
        heading: "Personal Information",
        text: "We collect information you provide directly to us, such as your name, email address, phone number, company name, and any other details you share when filling out contact forms, subscribing to our newsletter, or communicating with us.",
      },
      {
        heading: "Usage Data",
        text: "We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, pages visited, time spent on pages, and other diagnostic data.",
      },
      {
        heading: "Cookies & Tracking Technologies",
        text: "We use cookies, web beacons, and similar tracking technologies to enhance your experience, analyze site traffic, and understand where visitors come from. You can control cookies through your browser settings.",
      },
    ],
  },
  {
    id: "how-we-use",
    icon: Eye,
    title: "How We Use Your Information",
    color: "#a78bfa",
    content: [
      {
        heading: "Service Delivery",
        text: "To provide, maintain, and improve our AI-powered products and services, process transactions, and send you related information including purchase confirmations and invoices.",
      },
      {
        heading: "Communication",
        text: "To respond to your comments and questions, send technical notices and support messages, and communicate about products, services, promotions, and events offered by GD AI Solutions.",
      },
      {
        heading: "Analytics & Improvement",
        text: "To monitor and analyze trends, usage, and activities in connection with our services, and to personalize and improve your experience on our platform.",
      },
      {
        heading: "Legal Compliance",
        text: "To comply with applicable laws, regulations, and legal processes, and to protect the rights, property, and safety of GD AI Solutions, our users, and others.",
      },
    ],
  },
  {
    id: "data-sharing",
    icon: Globe,
    title: "Data Sharing & Disclosure",
    color: "#6366f1",
    content: [
      {
        heading: "We Do Not Sell Your Data",
        text: "GD AI Solutions does not sell, trade, or rent your personal information to third parties for their marketing purposes.",
      },
      {
        heading: "Service Providers",
        text: "We may share your information with trusted third-party vendors who assist us in operating our website and services (e.g., cloud hosting, analytics, email delivery). These parties are bound by confidentiality agreements.",
      },
      {
        heading: "Legal Requirements",
        text: "We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).",
      },
      {
        heading: "Business Transfers",
        text: "If GD AI Solutions is involved in a merger, acquisition, or asset sale, your personal information may be transferred. We will provide notice before your data is transferred and becomes subject to a different Privacy Policy.",
      },
    ],
  },
  {
    id: "data-security",
    icon: Lock,
    title: "Data Security",
    color: "#7c3aed",
    content: [
      {
        heading: "Security Measures",
        text: "We implement industry-standard technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes SSL/TLS encryption, secure data centers, and regular security audits.",
      },
      {
        heading: "Limitations",
        text: "While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.",
      },
    ],
  },
  {
    id: "your-rights",
    icon: UserCheck,
    title: "Your Rights",
    color: "#4338ca",
    content: [
      {
        heading: "Access & Portability",
        text: "You have the right to request a copy of the personal information we hold about you in a structured, machine-readable format.",
      },
      {
        heading: "Correction",
        text: "You may request that we correct any inaccurate or incomplete personal information we hold about you.",
      },
      {
        heading: "Deletion",
        text: "You may request deletion of your personal data. We will honor this request unless we are required to retain certain information by law or have a legitimate interest in doing so.",
      },
      {
        heading: "Opt-Out",
        text: "You may opt out of receiving promotional communications from us by following the unsubscribe instructions in any email we send, or by contacting us directly.",
      },
    ],
  },
  {
    id: "data-retention",
    icon: Trash2,
    title: "Data Retention",
    color: "#6366f1",
    content: [
      {
        heading: "Retention Period",
        text: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.",
      },
      {
        heading: "Account Data",
        text: "If you close your account or request deletion, we will delete or anonymize your personal information within 30 days, except where we are legally required to retain it.",
      },
    ],
  },
  {
    id: "cookies",
    icon: Bell,
    title: "Cookies Policy",
    color: "#818cf8",
    content: [
      {
        heading: "Essential Cookies",
        text: "These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions you take, such as setting your privacy preferences or filling in forms.",
      },
      {
        heading: "Analytics Cookies",
        text: "These help us understand how visitors interact with our website by collecting and reporting information anonymously. We use this data to improve our services.",
      },
      {
        heading: "Managing Cookies",
        text: "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of our website may not function properly without cookies.",
      },
    ],
  },
  {
    id: "contact",
    icon: Mail,
    title: "Contact Us",
    color: "#a78bfa",
    content: [
      {
        heading: "Privacy Inquiries",
        text: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our privacy team at ${EMAIL}. We will respond to your inquiry within 7 business days.`,
      },
      {
        heading: "Registered Address",
        text: "GD AI Solutions, Maharashtra, India.",
      },
    ],
  },
];

function AccordionSection({ section, index }) {
  const [open, setOpen] = useState(index === 0);
  const Icon = section.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ ...SPRING, delay: index * 0.04 }}
      style={{
        borderRadius: 18,
        border: "1px solid rgba(99,102,241,0.12)",
        background: open
          ? "rgba(99,102,241,0.04)"
          : "rgba(255,255,255,0.02)",
        overflow: "hidden",
        transition: "background 0.25s ease",
      }}
    >
      {/* Header */}
      <button
        onClick={() => setOpen((p) => !p)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "18px 20px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{
          width: 38, height: 38, borderRadius: 11,
          background: `linear-gradient(135deg, ${section.color}22, ${section.color}11)`,
          border: `1px solid ${section.color}33`,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <Icon size={16} style={{ color: section.color }} />
        </span>

        <span style={{
          flex: 1,
          fontSize: "14.5px",
          fontWeight: 700,
          color: open ? "#e2e8f0" : "#94a3b8",
          fontFamily: "'Inter', sans-serif",
          letterSpacing: "-0.01em",
          transition: "color 0.2s",
        }}>
          {section.title}
        </span>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22 }}
          style={{ flexShrink: 0 }}
        >
          <ChevronDown size={16} style={{ color: open ? "#818cf8" : "#334155" }} />
        </motion.span>
      </button>

      {/* Body */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ padding: "0 20px 22px 20px", display: "flex", flexDirection: "column", gap: 18 }}>
              {/* Divider */}
              <div style={{
                height: 1,
                background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.2) 40%, rgba(99,102,241,0.2) 60%, transparent)",
              }} />

              {section.content.map((block, i) => (
                <div key={i}>
                  <p style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: section.color,
                    margin: "0 0 6px",
                    fontFamily: "'Inter', sans-serif",
                  }}>
                    {block.heading}
                  </p>
                  <p style={{
                    fontSize: "13.5px",
                    color: "#64748b",
                    lineHeight: 1.8,
                    margin: 0,
                    fontFamily: "'Inter', sans-serif",
                  }}>
                    {block.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function PrivacyPolicy() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #07071a 0%, #0a0a1e 50%, #0d0d22 100%)",
      fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif",
      color: "#94a3b8",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Ambient glows */}
      <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div style={{
          position: "absolute", top: -150, left: "5%",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(67,56,202,0.07), transparent 70%)",
        }} />
        <div style={{
          position: "absolute", top: "40%", right: "-10%",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.05), transparent 70%)",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", left: "30%",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.04), transparent 70%)",
        }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 760, margin: "0 auto", padding: "100px 16px 80px" }}>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.05 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...SPRING, delay: 0.1 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "7px 16px", borderRadius: 999,
              background: "rgba(99,102,241,0.08)",
              border: "1px solid rgba(99,102,241,0.2)",
              marginBottom: "1.5rem",
            }}
          >
            <Shield size={13} style={{ color: "#818cf8" }} />
            <span style={{
              fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "#818cf8",
            }}>
              Privacy Policy
            </span>
          </motion.div>

          <h1 style={{
            fontSize: "clamp(30px, 6vw, 52px)",
            fontWeight: 800,
            fontStyle: "italic",
            fontFamily: "'Times New Roman', Times, Georgia, serif",
            letterSpacing: "-0.01em",
            lineHeight: 1.15,
            margin: "0 0 1rem",
            color: "#f1f5f9",
          }}>
            Your Privacy,{" "}
            <span style={{
              background: "linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #7c3aed 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Our Commitment
            </span>
          </h1>

          <p style={{
            fontSize: "15px",
            fontStyle: "italic",
            fontFamily: "'Times New Roman', Times, Georgia, serif",
            color: "#475569",
            lineHeight: 1.75,
            maxWidth: 520,
            margin: "0 auto 1.5rem",
          }}>
            At GD AI Solutions, we take your privacy seriously. This policy explains how we collect, use, and protect your personal information.
          </p>

          {/* Last updated chip */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            padding: "6px 14px", borderRadius: 8,
            background: "rgba(99,102,241,0.05)",
            border: "1px solid rgba(99,102,241,0.1)",
          }}>
            <div style={{
              width: 5, height: 5, borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 6px rgba(34,197,94,0.5)",
            }} />
            <span style={{ fontSize: "11.5px", color: "#475569" }}>
              Last updated: <strong style={{ color: "#64748b" }}>{LAST_UPDATED}</strong>
            </span>
          </div>
        </motion.div>

        {/* Quick summary card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.18 }}
          style={{
            borderRadius: 20,
            background: "linear-gradient(135deg, rgba(67,56,202,0.12) 0%, rgba(124,58,237,0.08) 100%)",
            border: "1px solid rgba(99,102,241,0.18)",
            padding: "20px 22px",
            marginBottom: "2rem",
          }}
        >
          <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#818cf8", margin: "0 0 12px" }}>
            TL;DR — The Short Version
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
            {[
              { icon: "🔒", text: "We never sell your personal data" },
              { icon: "📧", text: "You can opt out of emails anytime" },
              { icon: "🗑️", text: "Request data deletion at any time" },
              { icon: "🌐", text: "Your data stays secure & encrypted" },
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "10px 14px", borderRadius: 12,
                background: "rgba(99,102,241,0.06)",
                border: "1px solid rgba(99,102,241,0.1)",
              }}>
                <span style={{ fontSize: "16px" }}>{item.icon}</span>
                <span style={{ fontSize: "12.5px", color: "#94a3b8", fontWeight: 500 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Accordion sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "3rem" }}>
          {SECTIONS.map((section, i) => (
            <AccordionSection key={section.id} section={section} index={i} />
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={SPRING}
          style={{
            borderRadius: 22,
            background: "linear-gradient(135deg, rgba(67,56,202,0.1) 0%, rgba(124,58,237,0.08) 100%)",
            border: "1px solid rgba(99,102,241,0.18)",
            padding: "28px 24px",
            textAlign: "center",
          }}
        >
          <div style={{
            width: 48, height: 48, borderRadius: 14,
            background: "linear-gradient(135deg, rgba(67,56,202,0.2), rgba(124,58,237,0.15))",
            border: "1px solid rgba(99,102,241,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 1rem",
          }}>
            <Mail size={20} style={{ color: "#818cf8" }} />
          </div>

          <h3 style={{
            fontSize: "18px", fontWeight: 700, color: "#e2e8f0",
            letterSpacing: "-0.02em", margin: "0 0 0.4rem",
          }}>
            Have Privacy Questions?
          </h3>
          <p style={{ fontSize: "13.5px", color: "#475569", margin: "0 0 1.4rem", lineHeight: 1.7 }}>
            We're here to help. Reach out to our team and we'll respond within 7 business days.
          </p>

          <a
            href={`mailto:${EMAIL}`}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "11px 22px", borderRadius: 12,
              background: "linear-gradient(135deg, #4338ca 0%, #7c3aed 100%)",
              color: "#fff",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: 700,
              boxShadow: "0 4px 20px rgba(67,56,202,0.3)",
              transition: "all 0.22s ease",
              fontFamily: "'Inter', sans-serif",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(67,56,202,0.45)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(67,56,202,0.3)";
            }}
          >
            <Mail size={14} />
            {EMAIL}
          </a>
        </motion.div>

        {/* Footer note */}
        <p style={{
          textAlign: "center", fontSize: "12px",
          color: "#1e293b", marginTop: "2.5rem", lineHeight: 1.7,
        }}>
          This Privacy Policy is effective as of {LAST_UPDATED} and will remain in effect except with respect to any changes in its provisions in the future. Changes are effective immediately upon posting.
        </p>
      </div>
    </div>
  );
}