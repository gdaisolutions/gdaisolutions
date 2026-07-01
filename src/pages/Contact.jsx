import { useState, useEffect } from "react";

const WHATSAPP_NO = "918767981515";
const EMAIL = "contact.gdaisolutions@gmail.com";
const INSTAGRAM = "https://instagram.com/gdaisolutions";
const YOUTUBE = "https://youtube.com/@gdaisolutions";

const QUERY_OPTIONS = [
  "Product Demo Request",
  "Custom Software Development",
  "Partnership / Collaboration",
  "Pricing & Plans",
  "Technical Support",
  "General Inquiry",
];

const SERIF = "'Times New Roman', Times, Georgia, serif";
const SANS = "'Inter', 'SF Pro Display', -apple-system, sans-serif";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", query: "" });
  const [focused, setFocused] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const foc = (k) => () => setFocused((f) => ({ ...f, [k]: true }));
  const blur = (k) => () => setFocused((f) => ({ ...f, [k]: false }));
  const isActive = (k) => focused[k] || !!form[k];

  const fieldStyle = (k) => ({
    width: "100%",
    background: focused[k] ? "rgba(99,102,241,0.06)" : "rgba(255,255,255,0.02)",
    border: `1px solid ${focused[k] ? "rgba(99,102,241,0.5)" : "rgba(255,255,255,0.07)"}`,
    borderRadius: 14,
    padding: isActive(k) ? "26px 16px 10px" : "18px 16px",
    color: "#e2e8f0",
    fontSize: "14px",
    fontFamily: SANS,
    outline: "none",
    boxSizing: "border-box",
    transition: "all 0.22s ease",
    boxShadow: focused[k] ? "0 0 0 3px rgba(99,102,241,0.09)" : "none",
    WebkitAppearance: "none",
    appearance: "none",
  });

  const labelStyle = (k) => ({
    position: "absolute",
    left: 16,
    top: isActive(k) ? 9 : "50%",
    transform: isActive(k) ? "none" : "translateY(-50%)",
    fontSize: isActive(k) ? "10px" : "13.5px",
    fontWeight: isActive(k) ? 700 : 400,
    letterSpacing: isActive(k) ? "0.1em" : 0,
    textTransform: isActive(k) ? "uppercase" : "none",
    color: focused[k] ? "#818cf8" : isActive(k) ? "#475569" : "#334155",
    transition: "all 0.2s cubic-bezier(.4,0,.2,1)",
    pointerEvents: "none",
    fontFamily: SANS,
    zIndex: 2,
  });

  const handleSubmit = () => {
    if (!form.name || !form.phone) {
      alert("Please fill in Name and Phone Number.");
      return;
    }
    const text = [
      "👋 *New Inquiry — GD Ai Solutions*",
      "",
      `*Name:* ${form.name}`,
      `*Email:* ${form.email || "—"}`,
      `*Phone:* ${form.phone}`,
      `*Company:* ${form.company || "—"}`,
      `*Query:* ${form.query || "—"}`,
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP_NO}?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #07071a 0%, #09091f 50%, #0c0c24 100%)",
      fontFamily: SANS,
      color: "#94a3b8",
      overflowX: "hidden",
      position: "relative",
    }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        input::placeholder, textarea::placeholder { color: transparent; }
        select option { background: #0f1225; color: #e2e8f0; }
        @keyframes glow-drift {
          0%,100% { transform: translate(0,0) scale(1); opacity: 0.5; }
          50% { transform: translate(18px,-14px) scale(1.05); opacity: 0.7; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes checkPop {
          0% { transform: scale(0); opacity: 0; }
          60% { transform: scale(1.15); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.9); opacity: 1; }
          100% { transform: scale(1.65); opacity: 0; }
        }
        .c-field-wrap { position: relative; margin-bottom: 1rem; }
        .submit-btn {
          width: 100%; padding: 14px;
          border-radius: 14px;
          background: linear-gradient(135deg, #1e1b4b 0%, #4338ca 50%, #7c3aed 100%);
          border: none; color: #fff;
          font-size: 14px; font-weight: 700;
          font-family: ${SANS};
          cursor: pointer; letter-spacing: 0.03em;
          transition: all 0.22s ease;
          box-shadow: 0 4px 24px rgba(67,56,202,0.35);
          position: relative; overflow: hidden; margin-top: 0.5rem;
        }
        .submit-btn::before {
          content: ''; position: absolute; top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
          transition: left 0.45s ease;
        }
        .submit-btn:hover::before { left: 100%; }
        .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(67,56,202,0.5); }
        .submit-btn:active { transform: scale(0.98); }
        .info-chip {
          display: flex; align-items: center; gap: 12px;
          padding: 13px 16px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(99,102,241,0.1);
          border-radius: 14px; text-decoration: none;
          color: #64748b; font-size: 13px;
          transition: all 0.22s ease;
        }
        .info-chip:hover {
          background: rgba(99,102,241,0.07);
          border-color: rgba(99,102,241,0.25);
          color: #a5b4fc; transform: translateX(4px);
        }
        .soc-pill {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 8px 14px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(99,102,241,0.1);
          border-radius: 100px; text-decoration: none;
          color: #475569; font-size: 12px; font-weight: 500;
          transition: all 0.2s ease;
        }
        .soc-pill:hover {
          background: rgba(99,102,241,0.08);
          border-color: rgba(99,102,241,0.28); color: #a5b4fc;
        }
        .check-anim { animation: checkPop 0.5s cubic-bezier(.34,1.56,.64,1) both; }
        @media (min-width: 860px) {
          .c-grid { display: grid; grid-template-columns: 1fr 1.35fr; gap: 2rem; align-items: start; }
        }
        @media (max-width: 860px) { .c-left { margin-bottom: 1.5rem; } }
        @media (max-width: 520px) { .two-col { grid-template-columns: 1fr !important; } }
      `}</style>

      {/* Ambient glows */}
      <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "-10%", left: "0%", width: 550, height: 550, borderRadius: "50%", background: "radial-gradient(circle, rgba(67,56,202,0.07), transparent 70%)", animation: "glow-drift 22s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: "0%", right: "-5%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.05), transparent 70%)", animation: "glow-drift 28s ease-in-out infinite reverse" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1060, margin: "0 auto", padding: "100px 18px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem", animation: "fadeUp 0.55s ease both" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.2)", borderRadius: 100, padding: "6px 16px 6px 10px", marginBottom: "1.6rem" }}>
            <div style={{ position: "relative", width: 8, height: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "linear-gradient(135deg, #4338ca, #7c3aed)", boxShadow: "0 0 8px rgba(99,102,241,0.6)" }} />
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid rgba(99,102,241,0.5)", animation: "pulse-ring 2.2s ease-out infinite" }} />
            </div>
            <span style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#818cf8" }}>Get In Touch</span>
          </div>

          <h1 style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 800, fontSize: "clamp(2.2rem, 6vw, 3.6rem)", lineHeight: 1.12, letterSpacing: "-0.01em", color: "#f1f5f9", marginBottom: "1rem" }}>
            Let's build something{" "}
            <span style={{ background: "linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #7c3aed 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>remarkable.</span>
          </h1>

          <p style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)", color: "#475569", lineHeight: 1.75, maxWidth: 480, margin: "0 auto" }}>
            Whether you're automating your first workflow or engineering a full enterprise platform — we're ready to partner with you.
          </p>
        </div>

        <div className="c-grid">

          {/* Left */}
          <div className="c-left" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(99,102,241,0.1)", borderRadius: 20, padding: "1.5rem", animation: "fadeUp 0.55s 0.1s ease both" }}>
              <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#334155", marginBottom: "1rem" }}>Direct Contact</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {[
                  {
                    href: `https://wa.me/${WHATSAPP_NO}`, label: "WhatsApp / Phone", value: "+91 8767 981 515",
                    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="#818cf8"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.136.566 4.135 1.54 5.868L0 24l6.323-1.508A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.658-.497-5.188-1.367l-.371-.22-3.754.895.949-3.657-.242-.378A9.967 9.967 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>,
                  },
                  {
                    href: `mailto:${EMAIL}`, label: "Email", value: EMAIL,
                    icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
                  },
                ].map((item) => (
                  <a key={item.label} className="info-chip" href={item.href} target="_blank" rel="noopener noreferrer">
                    <span style={{ width: 32, height: 32, borderRadius: 9, background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#334155", marginBottom: 2 }}>{item.label}</div>
                      <div style={{ fontSize: "12.5px", color: "#94a3b8", fontWeight: 500, wordBreak: "break-all" }}>{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(99,102,241,0.1)", borderRadius: 20, padding: "1.5rem", animation: "fadeUp 0.55s 0.18s ease both" }}>
              <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#334155", marginBottom: "1rem" }}>Follow Us</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  { label: "Instagram", href: INSTAGRAM, icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
                  { label: "YouTube", href: YOUTUBE, icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
                  { label: "LinkedIn", href: "https://linkedin.com/company/gdaisolutions", icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                ].map(({ label, href, icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="soc-pill">{icon} {label}</a>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 14, background: "linear-gradient(135deg, rgba(67,56,202,0.08), rgba(124,58,237,0.06))", border: "1px solid rgba(99,102,241,0.14)", borderRadius: 16, padding: "1.1rem 1.4rem", animation: "fadeUp 0.55s 0.25s ease both" }}>
              <div style={{ fontSize: "1.3rem", flexShrink: 0 }}>⚡</div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#c7d2fe", marginBottom: 2 }}>Fast Response</div>
                <div style={{ fontSize: "11.5px", color: "#334155" }}>We reply within 24 hours on all working days.</div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(99,102,241,0.1)", borderRadius: 24, padding: "2rem 1.75rem", animation: "fadeUp 0.55s 0.12s ease both" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div className="check-anim" style={{ width: 68, height: 68, borderRadius: "50%", margin: "0 auto 1.4rem", background: "linear-gradient(135deg, #4338ca, #7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem" }}>✓</div>
                <h2 style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "1.6rem", fontWeight: 800, color: "#f1f5f9", marginBottom: "0.6rem" }}>Message Sent!</h2>
                <p style={{ color: "#475569", lineHeight: 1.7, fontSize: "13.5px", marginBottom: "1.5rem" }}>Your inquiry has been submitted via WhatsApp. Our team will reach out shortly.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", company: "", query: "" }); }} style={{ padding: "9px 22px", borderRadius: 100, background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.25)", color: "#818cf8", fontWeight: 600, fontSize: "13px", cursor: "pointer", fontFamily: SANS }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: "1.6rem" }}>
                  <h2 style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "1.25rem", fontWeight: 800, color: "#e2e8f0", marginBottom: "0.3rem" }}>Send us a message</h2>
                  <p style={{ fontSize: "12px", color: "#334155" }}>Submits directly via WhatsApp · We respond within 24 hrs</p>
                </div>

                <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 0.9rem" }}>
                  {[{ key: "name", label: "Full Name", type: "text", req: true }, { key: "phone", label: "Phone Number", type: "tel", req: true }].map(({ key, label, type, req }) => (
                    <div key={key} className="c-field-wrap">
                      <label style={labelStyle(key)}>{label}{req && <span style={{ color: "#818cf8", marginLeft: 2 }}>*</span>}</label>
                      <input type={type} value={form[key]} onChange={set(key)} onFocus={foc(key)} onBlur={blur(key)} style={fieldStyle(key)} />
                    </div>
                  ))}
                </div>

                <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 0.9rem" }}>
                  {[{ key: "email", label: "Email Address", type: "email" }, { key: "company", label: "Company / Organisation", type: "text" }].map(({ key, label, type }) => (
                    <div key={key} className="c-field-wrap">
                      <label style={labelStyle(key)}>{label}</label>
                      <input type={type} value={form[key]} onChange={set(key)} onFocus={foc(key)} onBlur={blur(key)} style={fieldStyle(key)} />
                    </div>
                  ))}
                </div>

                <div className="c-field-wrap">
                  <label style={{ position: "absolute", left: 16, top: 9, fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: focused.query ? "#818cf8" : "#475569", fontFamily: SANS, pointerEvents: "none", zIndex: 2, transition: "color 0.2s" }}>
                    Query Type
                  </label>
                  <select value={form.query} onChange={set("query")} onFocus={foc("query")} onBlur={blur("query")}
                    style={{ ...fieldStyle("query"), padding: "26px 40px 10px 16px", color: form.query ? "#e2e8f0" : "#334155", cursor: "pointer" }}>
                    <option value="">Select a query type…</option>
                    {QUERY_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                  <div style={{ position: "absolute", right: 14, top: "55%", transform: "translateY(-50%)", pointerEvents: "none", color: "#334155" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>

                <button className="submit-btn" onClick={handleSubmit}>
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 9 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.136.566 4.135 1.54 5.868L0 24l6.323-1.508A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.658-.497-5.188-1.367l-.371-.22-3.754.895.949-3.657-.242-.378A9.967 9.967 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                    Send via WhatsApp
                  </span>
                </button>
                <p style={{ textAlign: "center", fontSize: "11px", color: "#1e293b", marginTop: "0.9rem", lineHeight: 1.6 }}>
                  You'll be redirected to WhatsApp with your message pre-filled.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}