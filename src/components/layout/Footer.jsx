import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Layers,
  Folder,
  GraduationCap,
  Sparkles,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import logo from "../../assets/logo.jpeg";

const EMAIL = "contact.gdaisolutions@gmail.com";
const PHONE = "+91 8767 981 515";
const WA_NO = "918767981515";

const NAV_LINKS = [
  { name: "Home", Icon: Home, path: "/" },
  { name: "Company", Icon: User, path: "/company" },
  { name: "Services", Icon: Layers, path: "/services" },
  { name: "Products", Icon: Folder, path: "/products" },
  { name: "Education", Icon: GraduationCap, path: "/education" },
  { name: "Careers", Icon: Sparkles, path: "/careers" },
  { name: "Contact", Icon: Mail, path: "/contact" },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://instagram.com/gdaisolutions",
    Icon: () => (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@gdaisolutions",
    Icon: () => (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${WA_NO}`,
    Icon: () => (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.136.566 4.135 1.54 5.868L0 24l6.323-1.508A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.658-.497-5.188-1.367l-.371-.22-3.754.895.949-3.657-.242-.378A9.967 9.967 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/gdaisolutions",
    Icon: () => (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const SPRING = { type: "spring", stiffness: 400, damping: 28 };

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const year = new Date().getFullYear();

  const handleSubscribe = () => {
    if (!email.includes("@")) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #0a0a1a 0%, #0d0d20 60%, #10102a 100%)",
        color: "#94a3b8",
        fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes footer-float {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.35; }
          50% { transform: translate(20px, -15px) scale(1.06); opacity: 0.55; }
        }
        @keyframes footer-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .f2-nav-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 12px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          color: #64748b;
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }
        .f2-nav-link:hover {
          color: #a5b4fc;
          background: rgba(99, 102, 241, 0.08);
          border-color: rgba(99, 102, 241, 0.15);
        }
        .f2-social {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(99, 102, 241, 0.06);
          border: 1px solid rgba(99, 102, 241, 0.12);
          color: #64748b;
          text-decoration: none;
          transition: all 0.25s ease;
          cursor: pointer;
        }
        .f2-social:hover {
          background: rgba(99, 102, 241, 0.15);
          border-color: rgba(99, 102, 241, 0.35);
          color: #a5b4fc;
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.2);
        }
        .f2-contact-chip {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 9px 15px;
          border-radius: 12px;
          background: rgba(99, 102, 241, 0.05);
          border: 1px solid rgba(99, 102, 241, 0.1);
          color: #64748b;
          text-decoration: none;
          font-size: 12.5px;
          transition: all 0.22s ease;
          font-family: 'Inter', sans-serif;
        }
        .f2-contact-chip:hover {
          background: rgba(99, 102, 241, 0.1);
          border-color: rgba(99, 102, 241, 0.28);
          color: #a5b4fc;
          transform: translateX(4px);
        }
        .f2-nl-input {
          flex: 1;
          min-width: 0;
          background: rgba(99, 102, 241, 0.05);
          border: 1px solid rgba(99, 102, 241, 0.14);
          border-radius: 12px;
          padding: 11px 15px;
          color: #e2e8f0;
          font-size: 13px;
          font-family: 'Inter', sans-serif;
          outline: none;
          transition: all 0.22s ease;
        }
        .f2-nl-input:focus {
          border-color: rgba(99, 102, 241, 0.45);
          background: rgba(99, 102, 241, 0.09);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.08);
        }
        .f2-nl-input::placeholder { color: #334155; }
        .f2-nl-btn {
          padding: 11px 20px;
          border-radius: 12px;
          background: linear-gradient(135deg, #4338ca 0%, #7c3aed 100%);
          border: none;
          color: #fff;
          font-size: 12.5px;
          font-weight: 700;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          transition: all 0.22s ease;
          white-space: nowrap;
          box-shadow: 0 4px 18px rgba(67, 56, 202, 0.3);
          letter-spacing: 0.01em;
        }
        .f2-nl-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(67, 56, 202, 0.45);
          background: linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%);
        }
        .f2-bottom-link {
          color: #334155;
          text-decoration: none;
          font-size: 12px;
          transition: color 0.18s;
        }
        .f2-bottom-link:hover { color: #a5b4fc; }

        @media (max-width: 768px) {
          .f2-top-grid { flex-direction: column !important; gap: 2.5rem !important; }
          .f2-nav-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .f2-nl-row { flex-direction: column !important; gap: 1rem !important; }
          .f2-brand { max-width: 100% !important; }
          .f2-bottom { flex-direction: column !important; gap: 0.8rem !important; align-items: flex-start !important; }
        }
        @media (max-width: 480px) {
          .f2-nav-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 0.4rem !important; }
        }
      `}</style>

      {/* Ambient glows */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: -100, left: "10%",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(67,56,202,0.06), transparent 70%)",
          animation: "footer-float 24s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", bottom: -80, right: "5%",
          width: 380, height: 380, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.05), transparent 70%)",
          animation: "footer-float 30s ease-in-out infinite reverse",
        }} />
        <div style={{
          position: "absolute", top: "30%", left: "55%",
          width: 260, height: 260, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(67,56,202,0.03), transparent 70%)",
          animation: "footer-float 18s ease-in-out infinite 4s",
        }} />
      </div>

      {/* Top border glow */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.2) 30%, rgba(124,58,237,0.3) 50%, rgba(99,102,241,0.2) 70%, transparent)",
      }} />

      {/* ── Newsletter strip ── */}
      <div style={{
        borderBottom: "1px solid rgba(99, 102, 241, 0.08)",
        padding: "2.5rem 1.5rem",
        position: "relative",
        background: "rgba(99, 102, 241, 0.02)",
      }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem", flexWrap: "wrap",
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: "0.45rem" }}>
              <div style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "linear-gradient(135deg, #4338ca, #7c3aed)",
                boxShadow: "0 0 8px rgba(99,102,241,0.6)",
                animation: "footer-pulse 2.5s ease-in-out infinite",
              }} />
              <span style={{
                fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em",
                textTransform: "uppercase",
                background: "linear-gradient(135deg, #818cf8, #a78bfa)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Stay in the loop
              </span>
            </div>
            <p style={{ fontSize: "1rem", fontWeight: 700, color: "#e2e8f0", letterSpacing: "-0.01em", margin: 0 }}>
              Get product updates & AI insights.
            </p>
          </div>

          {subscribed ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.25)",
                borderRadius: 12, padding: "10px 18px",
              }}
            >
              <span style={{ color: "#818cf8", fontSize: "1rem" }}>✓</span>
              <span style={{ color: "#a5b4fc", fontWeight: 600, fontSize: "13px" }}>You're subscribed!</span>
            </motion.div>
          ) : (
            <div className="f2-nl-row" style={{ display: "flex", gap: 10, flex: 1, maxWidth: 420 }}>
              <input
                className="f2-nl-input"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
              />
              <button className="f2-nl-btn" onClick={handleSubscribe}>
                Subscribe
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── Main body ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "3.5rem 1.5rem 2rem", position: "relative" }}>

        <div className="f2-top-grid" style={{ display: "flex", gap: "4rem", marginBottom: "3.5rem" }}>

          {/* Brand column */}
          <div className="f2-brand" style={{ maxWidth: 290, flexShrink: 0 }}>
            {/* Logo */}
            <Link to="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 13, marginBottom: "1.3rem" }}>
              <div style={{
                width: 44, height: 44, borderRadius: 14, overflow: "hidden", flexShrink: 0,
                border: "1px solid rgba(99,102,241,0.2)",
                boxShadow: "0 4px 20px rgba(67,56,202,0.2)",
              }}>
                <img src={logo} alt="GD AI Solutions" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div>
                <div style={{ fontSize: "15px", fontWeight: 700, color: "#e2e8f0", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                  GD{" "}
                  <span style={{
                    background: "linear-gradient(135deg, #818cf8 0%, #a78bfa 100%)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}>Ai</span>{" "}
                  Solutions
                </div>
                <div style={{ fontSize: "9.5px", color: "#334155", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 2 }}>
                  Built on Innovation · Powered by Intelligence
                </div>
              </div>
            </Link>

            <p style={{ fontSize: "13px", color: "#475569", lineHeight: 1.8, marginBottom: "1.6rem" }}>
              We build AI-powered enterprise software that helps businesses operate smarter, scale faster, and make better decisions.
            </p>

            {/* Contact chips */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.6rem" }}>
              <a className="f2-contact-chip" href={`mailto:${EMAIL}`}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: "#818cf8" }}>
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{EMAIL}</span>
              </a>
              <a className="f2-contact-chip" href={`https://wa.me/${WA_NO}`} target="_blank" rel="noopener noreferrer">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0, color: "#818cf8" }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.136.566 4.135 1.54 5.868L0 24l6.323-1.508A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.658-.497-5.188-1.367l-.371-.22-3.754.895.949-3.657-.242-.378A9.967 9.967 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                {PHONE}
              </a>
            </div>

            {/* Socials */}
            <div style={{ display: "flex", gap: 8 }}>
              {SOCIALS.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="f2-social" title={label} aria-label={label}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links grid */}
          <div style={{ flex: 1 }}>
            <p style={{
              fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", marginBottom: "1.2rem",
              background: "linear-gradient(135deg, #818cf8, #a78bfa)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              paddingBottom: "0.7rem",
              borderBottom: "1px solid rgba(99,102,241,0.1)",
            }}>
              Navigate
            </p>

            <div className="f2-nav-grid" style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0.3rem",
            }}>
              {NAV_LINKS.map(({ name, Icon, path }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link to={path} className="f2-nav-link">
                    <span style={{
                      width: 28, height: 28, borderRadius: 8,
                      background: "rgba(99,102,241,0.07)",
                      border: "1px solid rgba(99,102,241,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <Icon size={13} style={{ color: "#6366f1" }} />
                    </span>
                    {name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA box */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              style={{
                marginTop: "2rem",
                padding: "1.4rem 1.6rem",
                borderRadius: 18,
                background: "linear-gradient(135deg, rgba(67,56,202,0.1) 0%, rgba(124,58,237,0.08) 100%)",
                border: "1px solid rgba(99,102,241,0.15)",
              }}
            >
              <p style={{ fontSize: "13px", fontWeight: 600, color: "#c7d2fe", margin: "0 0 0.3rem" }}>
                Ready to build something great?
              </p>
              <p style={{ fontSize: "12px", color: "#475569", margin: "0 0 1rem" }}>
                Let's talk about how AI can power your business.
              </p>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <motion.span
                  whileHover={{ x: 3 }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    fontSize: "12.5px", fontWeight: 700,
                    background: "linear-gradient(135deg, #818cf8, #a78bfa)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    cursor: "pointer",
                  }}
                >
                  Get in touch <ArrowUpRight size={13} style={{ color: "#818cf8" }} />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.15) 20%, rgba(124,58,237,0.2) 50%, rgba(99,102,241,0.15) 80%, transparent)",
          marginBottom: "1.6rem",
        }} />

        {/* Bottom bar */}
        <div className="f2-bottom" style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: "1rem",
        }}>
          <span style={{ fontSize: "12px", color: "#1e293b" }}>
            © {year} GD AI Solutions. All rights reserved.
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "1.4rem", flexWrap: "wrap" }}>
            <Link to="/privacy-policy" className="f2-bottom-link">Privacy Policy</Link>
            <span style={{
              fontSize: "11.5px", color: "#1e293b",
              display: "flex", alignItems: "center", gap: 5,
            }}>
              Crafted with
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                style={{ color: "#818cf8", fontSize: "13px", display: "inline-block" }}
              >
                ♥
              </motion.span>
              in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}