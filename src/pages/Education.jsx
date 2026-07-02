import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// ── Data ──────────────────────────────────────────────────────────────────────

const pillars = [
  {
    title: "Skill Development",
    desc: "Hands-on training in Software Development, Data Analytics, Artificial Intelligence, and Digital Transformation — built for the real world.",
    color: "#7B2FFF",
    label: "Foundation",
  },
  {
    title: "Career Pathways",
    desc: "Guiding learners toward global career opportunities through mentorship, internships, and dedicated placement programs.",
    color: "#10B981",
    label: "Growth",
  },
  {
    title: "Lifelong Learning",
    desc: "Encouraging continuous growth through access to evolving educational programs, live projects, and expert-led resources.",
    color: "#3B82F6",
    label: "Mastery",
  },
];

const domains = [
  {
    title: "Data Analyst",
    duration: "3 & 6 Months",
    mode: "Online / Hybrid",
    level: "Beginner",
    color: "#F59E0B",
    topics: ["Excel & SQL", "Power BI", "Python for Data", "Business Insights"],
  },
  {
    title: "Data Science",
    duration: "3 & 6 Months",
    mode: "Online / Hybrid",
    level: "Intermediate",
    color: "#7B2FFF",
    topics: ["Statistics", "Python & R", "ML Models", "Deep Learning"],
  },
  {
    title: "Web Development",
    duration: "3 & 6 Months",
    mode: "Online",
    level: "Beginner",
    color: "#10B981",
    topics: ["HTML, CSS, JS", "React.js", "Node.js", "REST APIs"],
  },
  {
    title: "Full Stack Java",
    duration: "3 & 6 Months",
    mode: "Online / Hybrid",
    level: "Beginner → Pro",
    color: "#3B82F6",
    topics: ["Core Java", "Spring Boot", "React & Angular", "MySQL & MongoDB"],
  },
  {
    title: "Full Stack Python Development",
    duration: "3 & 6 Months",
    mode: "Online",
    level: "Beginner → Pro",
    color: "#EF4444",
    topics: ["Python Basics", "Django/Flask", "React.js", "PostgreSQL"],
  },
  {
    title: "MERN Stack",
    duration: "3 & 6 Months",
    mode: "Online",
    level: "Intermediate",
    color: "#8B5CF6",
    topics: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    title: "Data Engineer",
    duration: "3 & 6 Months",
    mode: "Online / Hybrid",
    level: "Intermediate",
    color: "#06B6D4",
    topics: ["ETL Pipelines", "SQL & NoSQL", "Cloud Data", "Apache Spark"],
  },
  {
    title: "Digital Marketing",
    duration: "3 & 6 Months",
    mode: "Online",
    level: "All Levels",
    color: "#EC4899",
    topics: ["SEO & SEM", "Social Media", "Google Ads", "Analytics"],
  },
  {
    title: "AI/ML",
    duration: "3 & 6 Months",
    mode: "Online",
    level: "Intermediate",
    color: "#14B8A6",
    topics: ["NLP", "Computer Vision", "LLMs & Prompt Eng.", "TensorFlow"],
  },
];

const outcomes = [
  { val: "500+", label: "Students Trained" },
  { val: "4.9", label: "Avg. Rating" },
];

const steps = [
  { num: "01", title: "Apply Online", desc: "Fill out a quick application form and tell us about your goals." },
  { num: "02", title: "Counselling Call", desc: "A free 1-on-1 call to understand your background and recommend the right program." },
  { num: "03", title: "Enrol & Start", desc: "Complete enrolment, get portal access, and begin on day one." },
  { num: "04", title: "Learn & Get Placed", desc: "Complete the program with live projects, mentorship, and placement support." },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Developer, Infosys",
    program: "Full Stack Dev",
    quote: "The curriculum was rigorous and the mentors were exceptional. I landed my role within two months of graduating.",
    initials: "PS",
    color: "#7B2FFF",
  },
  {
    name: "Rahul Mehta",
    role: "Data Analyst, Deloitte",
    program: "Data Analytics",
    quote: "Real business datasets made all the difference. I went from zero to leading analytics at a Big Four firm.",
    initials: "RM",
    color: "#10B981",
  },
  {
    name: "Ananya Verma",
    role: "ML Engineer, Early-stage Startup",
    program: "AI & Machine Learning",
    quote: "Building actual ML models from week one gave me confidence I couldn't have gained anywhere else.",
    initials: "AV",
    color: "#3B82F6",
  },
];

const faqs = [
  {
    q: "Do I need prior experience to enrol?",
    a: "Most programs welcome complete beginners. Each course page specifies the entry level. Our counselling call ensures you're placed in the right program.",
  },
  {
    q: "Are the classes live or recorded?",
    a: "We offer both online and hybrid formats. Live sessions run with industry experts; recordings are available for review anytime.",
  },
  {
    q: "What placement support is provided?",
    a: "Our placement team works with 50+ hiring partners — mock interviews, resume reviews, and referral support are all included.",
  },
  {
    q: "Is there a certificate upon completion?",
    a: "Yes. All graduates receive an industry-recognised certificate plus a portfolio of live projects built during the program.",
  },
  {
    q: "Can I pay in instalments?",
    a: "Absolutely. Flexible payment plans are available. Reach out via the contact form and we'll work out a schedule that suits you.",
  },
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

// SVG icons — no emojis
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
const IconClock = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const IconMonitor = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
  </svg>
);
const IconBar = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);

// ── Component ─────────────────────────────────────────────────────────────────

export default function Education() {
  const [hoveredPillar, setHoveredPillar] = useState(null);
  const [hoveredDomain, setHoveredDomain] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => { const t = setTimeout(() => setHeroVisible(true), 60); return () => clearTimeout(t); }, []);

  const EMAIL = "contact.gdaisolutions@gmail.com";

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

        /* ── Keyframes ── */
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
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* ── Utility ── */
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
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.07em;
          white-space: nowrap;
          text-transform: uppercase;
          border-radius: 2px;
        }

        /* ── Buttons ── */
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
          border: 1px solid currentColor;
          border-radius: 2px;
          font-family: 'Inter', sans-serif;
          font-size: 0.68rem; font-weight: 600;
          letter-spacing: 0.07em; text-transform: uppercase;
          cursor: pointer; text-decoration: none;
          opacity: 0.75;
          transition: opacity 0.18s, background 0.18s;
        }
        .btn-sm:hover { opacity: 1; background: rgba(255,255,255,0.05); }

        /* ── Eyebrow ── */
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

        /* ── FAQ ── */
        .faq-row { border-bottom: 1px solid rgba(255,255,255,0.05); }
        .faq-btn {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; justify-content: space-between; align-items: center;
          gap: 1rem; padding: 1.3rem 1.5rem; text-align: left;
          color: #C8D0EC;
          font-family: 'Times New Roman', Georgia, serif;
          font-size: clamp(0.92rem, 2vw, 1rem);
          font-weight: 600; line-height: 1.5;
          transition: color 0.18s;
        }
        .faq-btn:hover { color: #fff; }
        .faq-icon {
          font-family: 'Inter', sans-serif;
          font-size: 1.15rem; color: #7B2FFF;
          flex-shrink: 0; line-height: 1;
          display: inline-block;
          transition: transform 0.3s ease;
        }
        .faq-body {
          font-family: 'Inter', sans-serif;
          font-size: 0.86rem; color: #3E4560; line-height: 1.8;
          max-height: 0; overflow: hidden;
          transition: max-height 0.38s ease, padding 0.3s ease;
          padding: 0 1.5rem;
        }
        .faq-body.open { max-height: 220px; padding-bottom: 1.3rem; }

        /* ── Testimonial ── */
        .testi-card {
          background: rgba(14,18,36,0.85);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 6px; padding: 1.75rem;
          position: relative; overflow: hidden;
          backdrop-filter: blur(10px);
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .testi-card:hover {
          border-color: rgba(123,47,255,0.28);
          transform: translateY(-3px);
          box-shadow: 0 10px 36px rgba(0,0,0,0.3);
        }

        /* ── Grid borders ── */
        .panel {
          background: rgba(12,15,32,0.85);
          transition: background 0.22s;
        }
        .panel:hover { background: rgba(18,22,46,0.95); }

        /* ── Domain Card ── */
        .domain-card {
          background: rgba(12,15,32,0.85);
          transition: background 0.22s, border-color 0.25s, transform 0.25s, box-shadow 0.25s;
          position: relative;
          overflow: hidden;
        }
        .domain-card:hover {
          background: rgba(18,22,46,0.95);
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.25);
        }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .grid-domains { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 900px) {
          .grid-3  { grid-template-columns: 1fr !important; }
          .grid-2  { grid-template-columns: 1fr !important; }
          .grid-4  { grid-template-columns: 1fr 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .grid-domains { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .grid-4  { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .hero-btns { flex-direction: column !important; }
          .hero-btns a { justify-content: center !important; }
          .cta-btns { flex-direction: column !important; }
          .cta-btns a { justify-content: center !important; }
          .grid-domains { grid-template-columns: 1fr !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* ── Ambient blobs ── */}
      <div aria-hidden="true" style={{ position:"fixed", inset:0, overflow:"hidden", pointerEvents:"none", zIndex:0 }}>
        {[
          { top:"3%",  left:"5%",   size:440, color:"#7B2FFF0C", dur:20, delay:0  },
          { top:"58%", left:"auto", right:"3%", size:300, color:"#10B9810A", dur:25, delay:6  },
          { top:"30%", left:"55%",  size:220, color:"#3B82F608", dur:18, delay:12 },
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

          {/* Live badge */}
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
            }}>Applications Open · GD Ai Solutions</span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize:"clamp(2.6rem,8vw,4.6rem)",
            fontWeight:700, fontStyle:"italic",
            letterSpacing:"-0.025em", lineHeight:1.08,
            marginBottom:"1.3rem",
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(18px)",
            transition:"opacity 0.6s ease 0.07s, transform 0.6s ease 0.07s",
          }}>
            <span style={{ color:"#D8E0F4", display:"block" }}>From Emerging Talent.</span>
            <span className="shimmer" style={{ display:"block" }}>To Global Professionals.</span>
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
            World-class professional education that empowers students to become
            skilled, industry-ready professionals. Redefining the future of
            learning and opportunity.
          </p>

          <div className="hero-btns" style={{
            display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap",
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(18px)",
            transition:"opacity 0.6s ease 0.21s, transform 0.6s ease 0.21s",
          }}>
            <a className="btn-primary" href={`mailto:${EMAIL}?subject=Education Enquiry`}>
              <IconMail/> Enrol Now
            </a>
            <a className="btn-ghost" href="#programs">
              Explore Programs <IconArrow/>
            </a>
          </div>

          {/* Stats */}
          <div className="stats-grid" style={{
            display:"grid", gridTemplateColumns:"repeat(2,1fr)",
            maxWidth:"500px",
            margin:"4rem auto 0",
            gap:"1px", marginTop:"4rem",
            border:"1px solid rgba(255,255,255,0.06)",
            borderRadius:5, overflow:"hidden",
            opacity: heroVisible ? 1 : 0,
            transition:"opacity 0.65s ease 0.32s",
          }}>
            {outcomes.map((o,i) => (
              <div key={o.label} style={{
                padding:"1.4rem 0.75rem", textAlign:"center",
                background:"rgba(12,15,32,0.8)",
                borderRight: i < outcomes.length-1 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}>
                <div style={{
                  fontSize:"clamp(1.4rem,3.5vw,1.85rem)", fontWeight:700, fontStyle:"italic",
                  background:"linear-gradient(135deg,#9B77FF,#5B9FFA)",
                  WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
                  marginBottom:4,
                }}>{o.val}</div>
                <div style={{
                  fontFamily:"'Inter', sans-serif",
                  fontSize:"0.62rem", color:"#2C3050",
                  textTransform:"uppercase", letterSpacing:"0.1em", fontWeight:600,
                }}>{o.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            MISSION / PILLARS
        ════════════════════════════════════════ */}
        <section style={{ maxWidth:1200, margin:"0 auto", padding:"0 1.25rem 6rem" }}>
          <Reveal>
            <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
              <p className="eyebrow center">
                <span className="eyebrow-line"/>
                Our Mission
                <span className="eyebrow-line"/>
              </p>
              <h2 style={{
                fontSize:"clamp(1.9rem,4.5vw,2.9rem)",
                fontWeight:700, fontStyle:"italic",
                letterSpacing:"-0.025em", lineHeight:1.12,
                color:"#DCE4FF", marginBottom:"1rem",
              }}>
                Education Built for a Changing World.
              </h2>
              <p style={{
                fontFamily:"'Inter', sans-serif",
                color:"#2E3450", fontSize:"0.93rem", lineHeight:1.85,
                maxWidth:480, margin:"0 auto",
              }}>
                Delivering globally relevant professional education that nurtures
                talent, fosters innovation, and builds future leaders ready to
                thrive in a rapidly evolving world.
              </p>
            </div>
          </Reveal>

          {/* 3-column panel grid */}
          <div className="grid-3" style={{
            display:"grid", gridTemplateColumns:"repeat(3,1fr)",
            gap:"1px",
            border:"1px solid rgba(255,255,255,0.06)",
            borderRadius:6, overflow:"hidden",
          }}>
            {pillars.map((p,i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className="panel"
                  onMouseEnter={() => setHoveredPillar(i)}
                  onMouseLeave={() => setHoveredPillar(null)}
                  style={{
                    padding:"2.25rem 1.75rem",
                    height:"100%",
                    borderRight: i < pillars.length-1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    position:"relative", overflow:"hidden",
                  }}
                >
                  <div aria-hidden="true" style={{
                    position:"absolute", top:0, right:0,
                    width:90, height:90,
                    background:`radial-gradient(circle at 100% 0%, ${p.color}16, transparent 70%)`,
                    opacity: hoveredPillar === i ? 1 : 0,
                    transition:"opacity 0.3s",
                    pointerEvents:"none",
                  }}/>

                  <span style={{
                    display:"inline-block",
                    fontFamily:"'Inter', sans-serif",
                    fontSize:"0.6rem", fontWeight:700,
                    letterSpacing:"0.12em", textTransform:"uppercase",
                    color: p.color,
                    background:`${p.color}12`,
                    border:`1px solid ${p.color}28`,
                    padding:"3px 9px", borderRadius:2,
                    marginBottom:"1.1rem",
                  }}>{p.label}</span>

                  <h3 style={{
                    fontSize:"1.05rem", fontWeight:700,
                    color:"#CCD4EE", marginBottom:"0.7rem",
                    letterSpacing:"-0.01em",
                  }}>{p.title}</h3>

                  <p style={{
                    fontFamily:"'Inter', sans-serif",
                    fontSize:"0.83rem", color:"#2E3450", lineHeight:1.78,
                  }}>{p.desc}</p>

                  <div aria-hidden="true" style={{
                    width: hoveredPillar === i ? "36px" : "0px",
                    height:"1.5px", marginTop:"1.3rem",
                    background:`linear-gradient(90deg, ${p.color}, transparent)`,
                    transition:"width 0.35s ease",
                  }}/>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            INTERNSHIP DOMAINS — 9 CARDS
        ════════════════════════════════════════ */}
        <section id="programs" style={{
          background:"rgba(7,9,15,0.98)",
          borderTop:"1px solid rgba(255,255,255,0.04)",
          borderBottom:"1px solid rgba(255,255,255,0.04)",
          padding:"5.5rem 1.25rem",
          marginBottom:"6rem",
        }}>
          <div style={{ maxWidth:1200, margin:"0 auto" }}>
            <Reveal>
              <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
                <p className="eyebrow center">
                  <span className="eyebrow-line"/>
                  What We Offer
                  <span className="eyebrow-line"/>
                </p>
                <h2 style={{
                  fontSize:"clamp(1.9rem,4.5vw,2.9rem)",
                  fontWeight:700, fontStyle:"italic",
                  letterSpacing:"-0.025em", color:"#DCE4FF",
                }}>
                  Internship Domains.
                </h2>
              </div>
            </Reveal>

            <div className="grid-domains" style={{
              display:"grid",
              gridTemplateColumns:"repeat(3, 1fr)",
              gap:"1rem",
            }}>
              {domains.map((dom,i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div
                    className="domain-card"
                    onMouseEnter={() => setHoveredDomain(i)}
                    onMouseLeave={() => setHoveredDomain(null)}
                    style={{
                      padding:"1.75rem 1.5rem",
                      height:"100%",
                      border:"1px solid rgba(255,255,255,0.06)",
                      borderRadius:6,
                    }}
                  >
                    {/* Corner glow */}
                    <div aria-hidden="true" style={{
                      position:"absolute", top:0, right:0,
                      width:100, height:100,
                      background:`radial-gradient(circle at 100% 0%, ${dom.color}14, transparent 70%)`,
                      opacity: hoveredDomain === i ? 1 : 0,
                      transition:"opacity 0.28s", pointerEvents:"none",
                    }}/>

                    {/* Color dot */}
                    <div style={{ display:"flex", justifyContent:"flex-end", marginBottom:"1.1rem" }}>
                      <span style={{
                        display:"block", width:8, height:8, borderRadius:"50%",
                        background:`radial-gradient(circle, ${dom.color}, ${dom.color}66)`,
                        boxShadow:`0 0 8px ${dom.color}44`,
                      }}/>
                    </div>

                    <h3 style={{
                      fontSize:"1.05rem", fontWeight:700,
                      color:"#CCD4EE", marginBottom:"0.9rem",
                      letterSpacing:"-0.015em",
                    }}>{dom.title}</h3>

                    {/* Meta chips */}
                    <div style={{ display:"flex", gap:"0.4rem", flexWrap:"wrap", marginBottom:"1rem" }}>
                      {[
                        { icon:<IconClock/>, val:dom.duration },
                        { icon:<IconMonitor/>, val:dom.mode },
                        { icon:<IconBar/>, val:dom.level },
                      ].map(m => (
                        <span key={m.val} style={{
                          display:"flex", alignItems:"center", gap:4,
                          fontFamily:"'Inter', sans-serif",
                          fontSize:"0.65rem", color:"#2E3450",
                          border:"1px solid rgba(255,255,255,0.06)",
                          padding:"2px 7px", borderRadius:2,
                        }}>
                          {m.icon} {m.val}
                        </span>
                      ))}
                    </div>

                    {/* Topics */}
                    <div style={{ display:"flex", flexWrap:"wrap", gap:"4px", marginBottom:"1.4rem" }}>
                      {dom.topics.map(t => (
                        <span key={t} style={{
                          fontFamily:"'Inter', sans-serif",
                          fontSize:"0.63rem", padding:"2px 7px", borderRadius:2,
                          background:`${dom.color}0C`,
                          border:`1px solid ${dom.color}20`,
                          color:dom.color, fontWeight:500,
                        }}>{t}</span>
                      ))}
                    </div>

                    <div style={{ height:1, background:"rgba(255,255,255,0.04)", marginBottom:"1.1rem" }}/>

                    <a className="btn-sm"
                      href={`mailto:${EMAIL}?subject=Enquiry — ${dom.title}`}
                      style={{ color:dom.color, borderColor:`${dom.color}45` }}>
                      Enquire <IconArrow/>
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            HOW IT WORKS
        ════════════════════════════════════════ */}
        <section style={{ maxWidth:1060, margin:"0 auto", padding:"0 1.25rem 6rem" }}>
          <Reveal>
            <div style={{ textAlign:"center", marginBottom:"3.5rem" }}>
              <p className="eyebrow center">
                <span className="eyebrow-line"/>
                Simple Process
                <span className="eyebrow-line"/>
              </p>
              <h2 style={{
                fontSize:"clamp(1.9rem,4.5vw,2.9rem)",
                fontWeight:700, fontStyle:"italic",
                letterSpacing:"-0.025em", color:"#DCE4FF",
              }}>
                How to Get Started.
              </h2>
            </div>
          </Reveal>

          <div className="grid-4" style={{
            display:"grid", gridTemplateColumns:"repeat(4,1fr)",
            gap:"1px",
            border:"1px solid rgba(255,255,255,0.06)",
            borderRadius:6, overflow:"hidden",
          }}>
            {steps.map((s,i) => (
              <Reveal key={i} delay={i * 0.09}>
                <div className="panel" style={{
                  padding:"2rem 1.5rem",
                  height:"100%",
                  borderRight: i < steps.length-1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  position:"relative", overflow:"hidden",
                }}>
                  <span aria-hidden="true" style={{
                    position:"absolute", top:-2, right:10,
                    fontSize:"4.5rem", fontWeight:900, lineHeight:1,
                    color:"rgba(123,47,255,0.05)",
                    fontFamily:"'Inter', sans-serif",
                    userSelect:"none", pointerEvents:"none",
                  }}>{s.num}</span>

                  <div style={{
                    fontFamily:"'Inter', sans-serif",
                    fontSize:"0.65rem", fontWeight:800,
                    color:"#7B2FFF", letterSpacing:"0.12em",
                    marginBottom:"0.9rem",
                  }}>{s.num}</div>

                  <h3 style={{
                    fontSize:"0.98rem", fontWeight:700,
                    color:"#C0C8E8", marginBottom:"0.55rem",
                    letterSpacing:"-0.01em",
                  }}>{s.title}</h3>
                  <p style={{
                    fontFamily:"'Inter', sans-serif",
                    fontSize:"0.79rem", color:"#2A2E4A", lineHeight:1.75,
                  }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            TESTIMONIALS
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
                  Student Stories
                  <span className="eyebrow-line"/>
                </p>
                <h2 style={{
                  fontSize:"clamp(1.9rem,4.5vw,2.9rem)",
                  fontWeight:700, fontStyle:"italic",
                  letterSpacing:"-0.025em", color:"#DCE4FF",
                }}>
                  What Our Graduates Say.
                </h2>
              </div>
            </Reveal>

            <div className="grid-3" style={{
              display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1rem",
            }}>
              {testimonials.map((t,i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="testi-card">
                    <div style={{
                      fontSize:"2.8rem", lineHeight:1,
                      color:"rgba(123,47,255,0.18)",
                      marginBottom:"0.9rem",
                      fontFamily:"Georgia, serif", fontStyle:"italic",
                    }}>&ldquo;</div>

                    <p style={{
                      fontFamily:"'Inter', sans-serif",
                      fontSize:"0.85rem", color:"#3E4560",
                      lineHeight:1.82, marginBottom:"1.5rem",
                      fontStyle:"italic",
                    }}>{t.quote}</p>

                    <div style={{ display:"flex", alignItems:"center", gap:"0.8rem" }}>
                      <div style={{
                        width:36, height:36, borderRadius:"50%", flexShrink:0,
                        background:`${t.color}18`,
                        border:`1px solid ${t.color}38`,
                        display:"flex", alignItems:"center", justifyContent:"center",
                        fontFamily:"'Inter', sans-serif",
                        fontSize:"0.68rem", fontWeight:700, color:t.color,
                      }}>{t.initials}</div>
                      <div>
                        <div style={{ fontSize:"0.9rem", fontWeight:700, color:"#B8C0DA" }}>{t.name}</div>
                        <div style={{
                          fontFamily:"'Inter', sans-serif",
                          fontSize:"0.7rem", color:"#2C3050", marginTop:2,
                        }}>{t.role}</div>
                      </div>
                    </div>

                    <span style={{
                      position:"absolute", top:"1.2rem", right:"1.2rem",
                      fontFamily:"'Inter', sans-serif",
                      fontSize:"0.58rem", fontWeight:600,
                      letterSpacing:"0.09em", textTransform:"uppercase",
                      color:t.color, opacity:0.55,
                    }}>{t.program}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            FAQs
        ════════════════════════════════════════ */}
        <section style={{ maxWidth:700, margin:"0 auto", padding:"0 1.25rem 6rem" }}>
          <Reveal>
            <div style={{ textAlign:"center", marginBottom:"3rem" }}>
              <p className="eyebrow center">
                <span className="eyebrow-line"/>
                Common Questions
                <span className="eyebrow-line"/>
              </p>
              <h2 style={{
                fontSize:"clamp(1.9rem,4.5vw,2.7rem)",
                fontWeight:700, fontStyle:"italic",
                letterSpacing:"-0.025em", color:"#DCE4FF",
              }}>
                Frequently Asked.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{
              border:"1px solid rgba(255,255,255,0.06)",
              borderRadius:6, overflow:"hidden",
            }}>
              {faqs.map((f,i) => (
                <div key={i} className="faq-row" style={{ background:"rgba(12,15,32,0.85)" }}>
                  <button
                    className="faq-btn"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span>{f.q}</span>
                    <span className="faq-icon" style={{
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}>+</span>
                  </button>
                  <div className={`faq-body${openFaq === i ? " open" : ""}`}>
                    {f.a}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
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
              }}>Applications Open</span>
            </div>

            <h2 style={{
              fontSize:"clamp(2.1rem,5.5vw,3.4rem)",
              fontWeight:700, fontStyle:"italic",
              letterSpacing:"-0.03em", lineHeight:1.1,
              marginBottom:"1.1rem",
            }}>
              <span style={{ color:"#D0D8F0", display:"block" }}>Join Us in Shaping</span>
              <span className="shimmer" style={{ display:"block" }}>Global Professionals.</span>
            </h2>

            <p style={{
              fontFamily:"'Inter', sans-serif",
              color:"#2A2E4A", fontSize:"0.93rem", lineHeight:1.85,
              maxWidth:420, margin:"0 auto 2.5rem",
            }}>
              Take the first step toward a future-proof career. Our team is
              ready to guide you to the right program and help you get placed.
            </p>

            <div className="cta-btns" style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
              <a className="btn-primary"
                href={`mailto:${EMAIL}?subject=Education Enquiry&body=Hi Team,%0A%0AI'm interested in your education programs.%0A%0AName:%0AProgram of Interest:%0APhone:%0A`}>
                <IconMail/> Get in Touch
              </a>
              <Link className="btn-ghost" to="/contact">Contact Us <IconArrow/></Link>
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