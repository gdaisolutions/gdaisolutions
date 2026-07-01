import { useState, useEffect, useRef } from "react";

const EMAIL = "contact.gdaisolutions@gmail.com";

const perks = [
  { title: "Move Fast", desc: "Ship real products used by real businesses. No red tape, just impact.", label: "Velocity" },
  { title: "AI-First Culture", desc: "Work at the intersection of AI and enterprise software every single day.", label: "Innovation" },
  { title: "Remote Friendly", desc: "Work from wherever you do your best thinking. Results over presence.", label: "Flexibility" },
  { title: "Grow With Us", desc: "Early team means massive ownership, fast promotions, and a front-row seat to scale.", label: "Growth" },
  { title: "Real Ownership", desc: "Your work ships. Your name is on it. You'll see the impact immediately.", label: "Impact" },
  { title: "Always Learning", desc: "Budgets for courses, conferences, and whatever helps you level up.", label: "Development" },
];

const openRoles = [
  { title: "Full Stack Developer", type: "Full-time", location: "Remote / Pune", tags: ["React", "Node.js", "MongoDB"] },
  { title: "AI / ML Engineer", type: "Full-time", location: "Remote", tags: ["Python", "LLMs", "TensorFlow"] },
  { title: "UI / UX Designer", type: "Full-time", location: "Remote / Pune", tags: ["Figma", "Prototyping", "Design Systems"] },
  { title: "Business Development Executive", type: "Full-time", location: "Pune", tags: ["B2B Sales", "CRM", "SaaS"] },
  { title: "DevOps Engineer", type: "Full-time", location: "Remote", tags: ["AWS", "Docker", "CI/CD"] },
  { title: "Intern — Any Domain", type: "Internship", location: "Remote / Hybrid", tags: ["Open to All", "6 Months", "Stipend"] },
];

const values = [
  { label: "Speed", text: "We move with urgency. Good ideas ship in days, not quarters." },
  { label: "Ownership", text: "Every person owns their work end-to-end. No hand-offs, no excuses." },
  { label: "Honesty", text: "Straight talk only. We'd rather hear hard truths than comfortable silence." },
  { label: "Ambition", text: "We're building for global scale. Small thinking doesn't belong here." },
];

const marqueeItems = [
  "React", "Node.js", "Python", "AI / ML", "LLMs", "DevOps",
  "AWS", "MongoDB", "Figma", "B2B SaaS", "Startup Culture",
  "Remote Work", "Fast Growth", "Real Ownership", "Ship Fast", "AI Products",
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function Reveal({ children, delay = 0, style = {} }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(22px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

// SVG icons
const IconMail = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const IconArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);
const IconPin = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconBriefcase = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
  </svg>
);

// ── Component ─────────────────────────────────────────────────────────────────

export default function Careers() {
  const [hoveredPerk, setHoveredPerk] = useState(null);
  const [hoveredRole, setHoveredRole] = useState(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  const handleApply = (role) => {
    const subject = encodeURIComponent(`Application — ${role}`);
    const body = encodeURIComponent(
      `Hi GD Ai Solutions Team,\n\nI'd like to apply for the ${role} position.\n\nName: \nPhone: \nLinkedIn / Portfolio: \n\nBrief intro:\n`
    );
    window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#07090F",
      fontFamily: "'Times New Roman', Georgia, serif",
      color: "#E8EDFF",
      overflowX: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #7B2FFF33; border-radius: 3px; }

        @keyframes drift {
          0%,100% { transform: translate(0,0) scale(1); }
          40%  { transform: translate(20px,-14px) scale(1.03); }
          70%  { transform: translate(-14px,10px) scale(0.97); }
        }
        @keyframes shimmer-move {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-dot {
          0%   { transform: scale(0.85); opacity: 1; }
          100% { transform: scale(1.8);  opacity: 0; }
        }
        @keyframes float-y {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-5px); }
        }
        /* Slow marquee — 55s */
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .shimmer {
          background: linear-gradient(90deg,
            #B0B8D8 0%, #ffffff 25%, #7B2FFF 48%, #3B82F6 72%, #B0B8D8 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer-move 6s linear infinite;
        }

        .marquee-wrap {
          overflow: hidden;
          padding: 1.1rem 0;
          border-top: 1px solid rgba(255,255,255,0.04);
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
      
    
        .marquee-tag {
          padding: 4px 14px;
          border: 1px solid rgba(123,47,255,0.18);
          background: rgba(123,47,255,0.05);
          color: #4A4070;
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem; font-weight: 500;
          letter-spacing: 0.07em; white-space: nowrap;
          text-transform: uppercase; border-radius: 2px;
        }

        /* Buttons */
        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 0.82rem 1.9rem;
          background: linear-gradient(135deg, #7B2FFF, #4B6FFF);
          border: none; border-radius: 3px; color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase;
          cursor: pointer; text-decoration: none;
          box-shadow: 0 4px 22px rgba(123,47,255,0.32);
          transition: transform 0.2s, box-shadow 0.2s;
          position: relative; overflow: hidden;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(123,47,255,0.48);
        }
        .btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 0.8rem 1.75rem;
          background: transparent;
          border: 1px solid rgba(123,47,255,0.28);
          border-radius: 3px; color: #8B6FCC;
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem; font-weight: 500;
          letter-spacing: 0.06em; text-transform: uppercase;
          cursor: pointer; text-decoration: none;
          transition: border-color 0.2s, background 0.2s, color 0.2s;
        }
        .btn-ghost:hover {
          border-color: rgba(123,47,255,0.55);
          background: rgba(123,47,255,0.07);
          color: #A890EE;
        }
        .btn-sm {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 0.52rem 1.1rem;
          background: transparent;
          border: 1px solid rgba(123,47,255,0.35);
          border-radius: 2px; color: #8B6FCC;
          font-family: 'Inter', sans-serif;
          font-size: 0.68rem; font-weight: 600;
          letter-spacing: 0.07em; text-transform: uppercase;
          cursor: pointer; text-decoration: none;
          transition: border-color 0.18s, background 0.18s, color 0.18s;
        }
        .btn-sm:hover {
          border-color: rgba(123,47,255,0.6);
          background: rgba(123,47,255,0.08);
          color: #A890EE;
        }

        /* Eyebrow */
        .eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 0.62rem; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: #7B2FFF;
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 0.65rem;
        }
        .eyebrow-line {
          display: inline-block;
          width: 22px; height: 1px; background: #7B2FFF;
          flex-shrink: 0;
        }
        .eyebrow.center { justify-content: center; }

        /* Panel */
        .panel {
          background: rgba(12,15,32,0.85);
          transition: background 0.22s;
        }
        .panel:hover { background: rgba(18,22,46,0.95); }

        /* Role card hover */
        .role-row {
          background: rgba(12,15,32,0.85);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: background 0.2s;
          cursor: pointer;
        }
        .role-row:hover { background: rgba(18,22,46,0.95); }
        .role-row:last-child { border-bottom: none; }

        /* Responsive */
        @media (max-width: 900px) {
          .grid-3  { grid-template-columns: 1fr 1fr !important; }
          .grid-4  { grid-template-columns: 1fr 1fr !important; }
          .stats-row { gap: 1.5rem !important; }
        }
        @media (max-width: 600px) {
          .grid-3  { grid-template-columns: 1fr !important; }
          .grid-4  { grid-template-columns: 1fr !important; }
          .hero-btns { flex-direction: column !important; }
          .hero-btns a { justify-content: center !important; }
          .cta-btns { flex-direction: column !important; }
          .cta-btns a { justify-content: center !important; }
          .role-meta { flex-direction: column !important; gap: 0.4rem !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Ambient blobs */}
      <div aria-hidden="true" style={{ position:"fixed", inset:0, overflow:"hidden", pointerEvents:"none", zIndex:0 }}>
        {[
          { top:"4%",  left:"8%",   size:440, color:"#7B2FFF0C", dur:20, delay:0  },
          { top:"60%", left:"auto", right:"4%", size:300, color:"#3B82F60A", dur:26, delay:7  },
          { top:"32%", left:"52%",  size:210, color:"#06B6D408", dur:18, delay:12 },
        ].map((b,i) => (
          <div key={i} style={{
            position:"absolute", top:b.top, left:b.left, right:b.right,
            width:b.size, height:b.size, borderRadius:"50%",
            background:`radial-gradient(circle, ${b.color}, transparent 70%)`,
            animation:`drift ${b.dur}s ease-in-out infinite`,
            animationDelay:`${b.delay}s`,
          }}/>
        ))}
      </div>

      <div style={{ position:"relative", zIndex:1 }}>

        {/* ════════════════════════════════════════
            HERO
        ════════════════════════════════════════ */}
        <section style={{
          textAlign:"center",
          padding:"clamp(4.5rem,11vw,8rem) 1.25rem clamp(3rem,7vw,5rem)",
          maxWidth:800, margin:"0 auto",
        }}>

          {/* Badge */}
          <div style={{
            display:"inline-flex", alignItems:"center", gap:8,
            background:"rgba(123,47,255,0.09)",
            border:"1px solid rgba(123,47,255,0.2)",
            borderRadius:2, padding:"5px 14px 5px 10px",
            marginBottom:"2rem",
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(10px)",
            transition:"opacity 0.5s ease, transform 0.5s ease",
          }}>
            <span style={{ position:"relative", width:8, height:8, flexShrink:0 }}>
              <span style={{ display:"block", width:8, height:8, borderRadius:"50%", background:"linear-gradient(135deg,#7B2FFF,#3B82F6)" }}/>
              <span style={{ position:"absolute", inset:0, borderRadius:"50%", border:"2px solid #7B2FFF44", animation:"pulse-dot 2.4s ease-out infinite" }}/>
            </span>
            <span style={{
              fontFamily:"'Inter', sans-serif",
              fontSize:"0.65rem", fontWeight:700,
              letterSpacing:"0.14em", textTransform:"uppercase", color:"#8B6FCC",
            }}>We're Hiring · GD Ai Solutions</span>
          </div>

          {/* Headline — italic serif like Products page */}
          <h1 style={{
            fontSize:"clamp(2.6rem,8vw,4.6rem)",
            fontWeight:700, fontStyle:"italic",
            letterSpacing:"-0.025em", lineHeight:1.08,
            marginBottom:"1.3rem",
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(18px)",
            transition:"opacity 0.6s ease 0.07s, transform 0.6s ease 0.07s",
          }}>
            <span style={{ color:"#D8E0F4", display:"block" }}>Build the future</span>
            <span className="shimmer" style={{ display:"block" }}>of AI in business.</span>
          </h1>

          <p style={{
            fontFamily:"'Inter', sans-serif",
            fontSize:"clamp(0.92rem,2.2vw,1.05rem)",
            color:"#3E4560", lineHeight:1.85,
            maxWidth:500, margin:"0 auto 2.5rem",
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(18px)",
            transition:"opacity 0.6s ease 0.14s, transform 0.6s ease 0.14s",
          }}>
            We're a fast-moving team building AI-powered software that helps
            businesses operate smarter. If you want your work to matter from
            day one — you're in the right place.
          </p>

          <div className="hero-btns" style={{
            display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap",
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(18px)",
            transition:"opacity 0.6s ease 0.21s, transform 0.6s ease 0.21s",
          }}>
            <a className="btn-primary"
              href={`mailto:${EMAIL}?subject=Job Application — GD Ai Solutions&body=Hi Team,%0A%0AI'd love to join GD Ai Solutions.%0A%0AName:%0ARole I'm applying for:%0APhone:%0ALinkedIn / Portfolio:%0A%0AA bit about me:%0A`}>
              <IconMail/> Send Your Resume
            </a>
            <a className="btn-ghost" href="#open-roles">
              View Open Roles <IconArrow/>
            </a>
          </div>

          {/* Stats */}
          <div className="stats-row" style={{
            display:"flex", justifyContent:"center", gap:"3rem",
            marginTop:"4rem", flexWrap:"wrap",
            opacity: heroVisible ? 1 : 0,
            transition:"opacity 0.65s ease 0.32s",
          }}>
            {[
              { val:"15+",      label:"Products Shipped" },
              { val:"Fast",     label:"Growing Team"     },
              { val:"AI-First", label:"Work Culture"     },
            ].map((s,i) => (
              <div key={i} style={{ textAlign:"center" }}>
                <div style={{
                  fontSize:"clamp(1.4rem,3.5vw,1.85rem)",
                  fontWeight:700, fontStyle:"italic",
                  background:"linear-gradient(135deg,#9B77FF,#5B9FFA)",
                  WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
                  marginBottom:4,
                }}>{s.val}</div>
                <div style={{
                  fontFamily:"'Inter', sans-serif",
                  fontSize:"0.62rem", color:"#2C3050",
                  textTransform:"uppercase", letterSpacing:"0.1em", fontWeight:600,
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

     

        {/* ════════════════════════════════════════
            WHY GD AI — PERKS
        ════════════════════════════════════════ */}
        <section style={{ maxWidth:1060, margin:"0 auto", padding:"0 1.25rem 6rem" }}>
          <Reveal>
            <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
              <p className="eyebrow center">
                <span className="eyebrow-line"/>
                Why GD Ai Solutions
                <span className="eyebrow-line"/>
              </p>
              <h2 style={{
                fontSize:"clamp(1.9rem,4.5vw,2.9rem)",
                fontWeight:700, fontStyle:"italic",
                letterSpacing:"-0.025em", color:"#DCE4FF",
              }}>
                A place where your work ships.
              </h2>
            </div>
          </Reveal>

          <div className="grid-3" style={{
            display:"grid", gridTemplateColumns:"repeat(3,1fr)",
            gap:"1px",
            border:"1px solid rgba(255,255,255,0.06)",
            borderRadius:6, overflow:"hidden",
          }}>
            {perks.map((p,i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div
                  className="panel"
                  onMouseEnter={() => setHoveredPerk(i)}
                  onMouseLeave={() => setHoveredPerk(null)}
                  style={{
                    padding:"2.25rem 1.75rem",
                    height:"100%",
                    borderRight: i%3 !== 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    position:"relative", overflow:"hidden",
                  }}
                >
                  {/* Corner glow */}
                  <div aria-hidden="true" style={{
                    position:"absolute", top:0, right:0,
                    width:90, height:90,
                    background:"radial-gradient(circle at 100% 0%, rgba(123,47,255,0.12), transparent 70%)",
                    opacity: hoveredPerk === i ? 1 : 0,
                    transition:"opacity 0.3s", pointerEvents:"none",
                  }}/>

                  {/* Accent label */}
                  <span style={{
                    display:"inline-block",
                    fontFamily:"'Inter', sans-serif",
                    fontSize:"0.6rem", fontWeight:700,
                    letterSpacing:"0.12em", textTransform:"uppercase",
                    color:"#7B2FFF",
                    background:"rgba(123,47,255,0.1)",
                    border:"1px solid rgba(123,47,255,0.22)",
                    padding:"3px 9px", borderRadius:2,
                    marginBottom:"1.1rem",
                  }}>{p.label}</span>

                  <h3 style={{
                    fontSize:"1.05rem", fontWeight:700,
                    color:"#CCD4EE", marginBottom:"0.65rem",
                    letterSpacing:"-0.01em",
                  }}>{p.title}</h3>

                  <p style={{
                    fontFamily:"'Inter', sans-serif",
                    fontSize:"0.83rem", color:"#2E3450", lineHeight:1.78,
                  }}>{p.desc}</p>

                  {/* Hover underline */}
                  <div aria-hidden="true" style={{
                    width: hoveredPerk === i ? "36px" : "0px",
                    height:"1.5px", marginTop:"1.3rem",
                    background:"linear-gradient(90deg, #7B2FFF, transparent)",
                    transition:"width 0.35s ease",
                  }}/>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            CORE VALUES
        ════════════════════════════════════════ */}
        <section style={{
          background:"rgba(7,9,15,0.98)",
          borderTop:"1px solid rgba(255,255,255,0.04)",
          borderBottom:"1px solid rgba(255,255,255,0.04)",
          padding:"5.5rem 1.25rem",
          marginBottom:"6rem",
        }}>
          <div style={{ maxWidth:1060, margin:"0 auto" }}>
            <Reveal>
              <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
                <p className="eyebrow center">
                  <span className="eyebrow-line"/>
                  Our DNA
                  <span className="eyebrow-line"/>
                </p>
                <h2 style={{
                  fontSize:"clamp(1.9rem,4.5vw,2.9rem)",
                  fontWeight:700, fontStyle:"italic",
                  letterSpacing:"-0.025em", color:"#DCE4FF",
                }}>
                  What we stand for.
                </h2>
              </div>
            </Reveal>

            <div className="grid-4" style={{
              display:"grid", gridTemplateColumns:"repeat(4,1fr)",
              gap:"1px",
              border:"1px solid rgba(255,255,255,0.06)",
              borderRadius:6, overflow:"hidden",
            }}>
              {values.map((v,i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="panel" style={{
                    padding:"2rem 1.6rem",
                    height:"100%",
                    borderRight: i < values.length-1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    position:"relative",
                  }}>
                    {/* Left accent bar */}
                    <div style={{
                      position:"absolute", left:0, top:"1.6rem", bottom:"1.6rem",
                      width:2,
                      background:"linear-gradient(180deg, #7B2FFF, #3B82F6)",
                      borderRadius:2,
                    }}/>
                    <div style={{ paddingLeft:"1rem" }}>
                      <div style={{
                        fontSize:"1rem", fontWeight:700,
                        color:"#B8C0DA", marginBottom:"0.6rem",
                        letterSpacing:"-0.01em",
                      }}>{v.label}</div>
                      <p style={{
                        fontFamily:"'Inter', sans-serif",
                        fontSize:"0.82rem", color:"#2A2E4A", lineHeight:1.78,
                      }}>{v.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            CTA
        ════════════════════════════════════════ */}
        <section style={{
          textAlign:"center",
          padding:"5rem 1.5rem 6.5rem",
          borderTop:"1px solid rgba(255,255,255,0.04)",
          background:"radial-gradient(ellipse at 50% 0%, rgba(123,47,255,0.07), transparent 68%)",
          position:"relative",
        }}>
          {/* Top accent line */}
          <div aria-hidden="true" style={{
            position:"absolute", top:0, left:"50%",
            transform:"translateX(-50%)",
            width:140, height:1,
            background:"linear-gradient(90deg, transparent, rgba(123,47,255,0.5), rgba(59,130,246,0.4), transparent)",
          }}/>

          <Reveal>
            <div style={{
              display:"inline-flex", alignItems:"center", gap:8,
              background:"rgba(123,47,255,0.08)",
              border:"1px solid rgba(123,47,255,0.18)",
              borderRadius:2, padding:"4px 13px",
              marginBottom:"1.75rem",
            }}>
              <span style={{
                fontFamily:"'Inter', sans-serif",
                fontSize:"0.63rem", fontWeight:700,
                letterSpacing:"0.14em", textTransform:"uppercase", color:"#7050AA",
              }}>Now Hiring</span>
            </div>

            <h2 style={{
              fontSize:"clamp(2.1rem,5.5vw,3.4rem)",
              fontWeight:700, fontStyle:"italic",
              letterSpacing:"-0.03em", lineHeight:1.1,
              marginBottom:"1.1rem",
            }}>
              <span style={{ color:"#D0D8F0", display:"block" }}>Ready to build</span>
              <span className="shimmer" style={{ display:"block" }}>with us?</span>
            </h2>

            <p style={{
              fontFamily:"'Inter', sans-serif",
              color:"#2A2E4A", fontSize:"0.93rem", lineHeight:1.85,
              maxWidth:420, margin:"0 auto 2.5rem",
            }}>
              Send your resume to{" "}
              <span style={{ color:"#7B2FFF", fontWeight:600 }}>{EMAIL}</span>{" "}
              with the role you're interested in. We read every application.
            </p>

            <div className="cta-btns" style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
              <a className="btn-primary"
                href={`mailto:${EMAIL}?subject=Job Application — GD Ai Solutions&body=Hi Team,%0A%0AI'd love to join GD Ai Solutions.%0A%0AName:%0ARole I'm applying for:%0APhone:%0ALinkedIn / Portfolio:%0A%0AA bit about me:%0A`}>
                <IconMail/> Email Us Your Resume
              </a>
             
            </div>

            <p style={{
              fontFamily:"'Inter', sans-serif",
              marginTop:"2.25rem", fontSize:"0.65rem",
              color:"#181C2E", letterSpacing:"0.08em", textTransform:"uppercase",
            }}>
              Built on Innovation. Powered by Intelligence.
            </p>
          </Reveal>
        </section>

      </div>
    </div>
  );
}