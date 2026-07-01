import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, CheckCircle2, Zap } from "lucide-react";
import { SERVICES } from "../../data/servicesData";

const TNR = "'Times New Roman', Times, serif";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.07, duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  }),
};

const STATS = [
  { value: "120+", label: "Enterprise Clients" },
  { value: "98%",  label: "Client Retention" },
  { value: "60%",  label: "Avg. Cost Reduction" },
  { value: "3x",   label: "Faster Time-to-Market" },
];

/* ── Ambient orbs ── */
function Orbs() {
  return (
    <div style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none" }}>
      <div style={{ position:"absolute", top:"-12%", left:"20%", width:580, height:580, borderRadius:"50%", background:"radial-gradient(circle,rgba(99,102,241,0.09) 0%,transparent 65%)", filter:"blur(1px)" }} />
      <div style={{ position:"absolute", top:"45%", right:"-8%", width:480, height:480, borderRadius:"50%", background:"radial-gradient(circle,rgba(139,92,246,0.07) 0%,transparent 65%)" }} />
      <div style={{ position:"absolute", bottom:"0", left:"-5%", width:380, height:380, borderRadius:"50%", background:"radial-gradient(circle,rgba(59,130,246,0.05) 0%,transparent 65%)" }} />
      {/* grid */}
      <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(99,102,241,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.022) 1px,transparent 1px)", backgroundSize:"64px 64px" }} />
    </div>
  );
}

/* ── Stat card ── */
function StatCard({ value, label, index }) {
  return (
    <motion.div variants={fadeUp} custom={index} initial="hidden" whileInView="show" viewport={{ once:true }}
      style={{
        display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center",
        padding:"1.25rem 1rem", borderRadius:16,
        background:"rgba(255,255,255,0.025)", border:"1px solid rgba(255,255,255,0.06)",
      }}>
      <span style={{
        fontFamily: TNR, fontStyle:"italic", fontWeight:400,
        fontSize:"clamp(1.7rem,4vw,2.5rem)", lineHeight:1.1, marginBottom:"0.4rem",
        background:"linear-gradient(135deg,#F1F5F9 0%,#6366F1 100%)",
        WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
      }}>{value}</span>
      <span style={{
        fontFamily:TNR, fontStyle:"italic",
        fontSize:"0.65rem", letterSpacing:"0.18em", textTransform:"uppercase", color:"#475569",
      }}>{label}</span>
    </motion.div>
  );
}

/* ── Service card (image-led, premium) ── */
function ServiceCard({ service, index }) {
  const SvcIcon = service.icon;
  return (
    <motion.div
      variants={fadeUp} custom={index} initial="hidden" whileInView="show" viewport={{ once:true, margin:"-40px" }}
      whileHover={{ y:-6 }}
      transition={{ type:"spring", stiffness:300, damping:22 }}
      className="group svc-card"
      style={{
        position:"relative", display:"flex", flexDirection:"column", borderRadius:22, overflow:"hidden",
        background:"linear-gradient(160deg,rgba(255,255,255,0.038) 0%,rgba(255,255,255,0.01) 100%)",
        border:"1px solid rgba(255,255,255,0.08)", backdropFilter:"blur(14px)",
        boxShadow:"0 8px 30px rgba(0,0,0,0.35)",
      }}>

      {/* Hover ring */}
      <div className="absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow:`inset 0 0 0 1px ${service.color}45`, zIndex:2 }} />

      {/* ── Image banner ── */}
      <div className="svc-img-wrap" style={{ position:"relative", width:"100%", overflow:"hidden" }}>
        <motion.img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="svc-img"
          style={{
            width:"100%", height:"100%", objectFit:"cover", display:"block",
            transition:"transform 0.6s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
        {/* Bottom fade into card body */}
        <div style={{
          position:"absolute", inset:0,
          background:`linear-gradient(180deg, ${service.color}10 0%, transparent 35%, rgba(5,8,22,0.55) 78%, #0b0e1c 100%)`,
        }} />
        {/* Index badge */}
        <span style={{
          position:"absolute", top:14, right:14,
          fontFamily:TNR, fontStyle:"italic", fontSize:"0.68rem", letterSpacing:"0.12em",
          padding:"4px 10px", borderRadius:8, color:"#F1F5F9",
          background:"rgba(5,8,22,0.45)", border:"1px solid rgba(255,255,255,0.18)",
          backdropFilter:"blur(6px)",
        }}>0{index + 1}</span>

        {/* Floating icon badge straddling the image/body seam */}
        <motion.div
          className="svc-icon-badge"
          style={{
            position:"absolute", left:20, bottom:-22,
            width:50, height:50, borderRadius:15,
            display:"flex", alignItems:"center", justifyContent:"center",
            background:`linear-gradient(150deg, ${service.color}30, ${service.color}12)`,
            border:`1px solid ${service.color}55`,
            backdropFilter:"blur(10px)",
            boxShadow:`0 8px 24px ${service.color}35`,
          }}
          whileHover={{ scale:1.08, rotate:-4 }}
          transition={{ type:"spring", stiffness:400, damping:20 }}
        >
          <SvcIcon size={22} style={{ color: service.color }} />
        </motion.div>
      </div>

      {/* ── Body ── */}
      <div style={{ position:"relative", zIndex:1, padding:"2.1rem 1.5rem 1.5rem", display:"flex", flexDirection:"column", gap:"1.05rem", height:"100%" }}>

        {/* Title + desc */}
        <div>
          <h2 style={{
            fontFamily:TNR, fontStyle:"italic", fontWeight:400,
            fontSize:"clamp(1.1rem,2.2vw,1.28rem)", color:"#F1F5F9",
            lineHeight:1.25, marginBottom:"0.6rem",
          }}>{service.title}</h2>
          <p style={{ fontFamily:TNR, fontStyle:"italic", fontSize:"0.85rem", lineHeight:1.75, color:"#475569" }}>
            {service.description}
          </p>
        </div>

        {/* Business value */}
        <div style={{ display:"flex", alignItems:"flex-start", gap:10, padding:"0.75rem 1rem", borderRadius:12, background:"rgba(52,211,153,0.05)", border:"1px solid rgba(52,211,153,0.12)" }}>
          <CheckCircle2 size={13} style={{ color:"#34D399", marginTop:2, flexShrink:0 }} />
          <p style={{ fontFamily:TNR, fontStyle:"italic", fontSize:"0.78rem", lineHeight:1.65, color:"#34D399" }}>
            {service.businessValue}
          </p>
        </div>

        {/* Feature pills */}
        <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
          {service.features.slice(0,4).map((feat) => (
            <span key={feat.name} style={{
              fontFamily:TNR, fontStyle:"italic",
              fontSize:"0.72rem", padding:"4px 10px", borderRadius:100,
              background:`${service.color}0d`, border:`1px solid ${service.color}1a`, color:"#64748B",
            }}>{feat.name}</span>
          ))}
          {service.features.length > 4 && (
            <span style={{
              fontFamily:TNR, fontStyle:"italic",
              fontSize:"0.72rem", padding:"4px 10px", borderRadius:100,
              background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", color:"#334155",
            }}>+{service.features.length-4} more</span>
          )}
        </div>

        {/* CTA */}
        <div style={{ marginTop:"auto", paddingTop:"0.5rem" }}>
          <Link to={service.route} style={{ textDecoration:"none" }}>
            <motion.div
              style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0.75rem 1rem", borderRadius:12, background:`${service.color}0e`, border:`1px solid ${service.color}1e`, cursor:"pointer" }}
              whileHover={{ background:`${service.color}18`, x:2 }} transition={{ duration:0.15 }}>
              <span style={{ fontFamily:TNR, fontStyle:"italic", fontSize:"0.85rem", color:service.color }}>Learn More</span>
              <motion.div style={{ width:28, height:28, borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", background:`${service.color}15` }}
                whileHover={{ scale:1.1, rotate:12 }} transition={{ type:"spring", stiffness:400 }}>
                <ArrowUpRight size={13} style={{ color:service.color }} />
              </motion.div>
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ── MAIN ── */
export default function Services() {
  return (
    <div style={{
      minHeight:"100vh", position:"relative",
      background:"linear-gradient(160deg,#050816 0%,#080b1a 40%,#060912 100%)",
      fontFamily: TNR,
    }}>
      <style>{`
        * { box-sizing:border-box; }
        .group:hover .group-hover\\:opacity-100 { opacity:1; }
        .group .group-hover\\:opacity-100 { opacity:0; }
        .transition-opacity { transition:opacity 0.3s ease; }

        .svc-card:hover .svc-img { transform: scale(1.08); }

        /* Image banner — mobile first, gets taller on larger screens */
        .svc-img-wrap { height: 180px; }
        @media(min-width:480px){ .svc-img-wrap { height: 200px; } }
        @media(min-width:1024px){ .svc-img-wrap { height: 190px; } }

        /* Mobile-first utilities */
        @media(max-width:639px){
          .stats-grid  { grid-template-columns:1fr 1fr !important; gap:0.6rem !important; }
          .svc-grid    { grid-template-columns:1fr !important; }
          .hero-cta    { flex-direction:column !important; align-items:stretch !important; }
          .hero-cta a, .hero-cta button { width:100% !important; justify-content:center !important; }
          .cta-box     { padding:2rem 1.25rem !important; }
        }
        @media(min-width:640px) and (max-width:1023px){
          .svc-grid { grid-template-columns:1fr 1fr !important; }
          .stats-grid{ grid-template-columns:repeat(4,1fr) !important; }
        }
        @media(min-width:1024px){
          .svc-grid { grid-template-columns:repeat(3,1fr) !important; }
          .stats-grid{ grid-template-columns:repeat(4,1fr) !important; }
        }
      `}</style>

      <Orbs />

      {/* ── HERO ── */}
      <section style={{ position:"relative", paddingTop:"clamp(5rem,12vw,9rem)", paddingBottom:"clamp(3rem,6vw,5rem)", paddingLeft:"1.25rem", paddingRight:"1.25rem", textAlign:"center" }}>

        {/* Eyebrow */}
        <motion.div initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}
          style={{
            display:"inline-flex", alignItems:"center", gap:8,
            padding:"6px 16px", borderRadius:100, marginBottom:"1.5rem",
            background:"rgba(99,102,241,0.09)", border:"1px solid rgba(99,102,241,0.22)",
          }}>
          <Zap size={11} color="#6366F1" />
          <span style={{ fontFamily:TNR, fontStyle:"italic", fontSize:"0.65rem", letterSpacing:"0.18em", textTransform:"uppercase", color:"#6366F1" }}>
            Enterprise Technology Services
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1 initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }}
          transition={{ delay:0.1, duration:0.65, ease:[0.22,1,0.36,1] }}
          style={{
            fontFamily:TNR, fontStyle:"italic", fontWeight:400,
            fontSize:"clamp(2.2rem,6.5vw,4.2rem)", lineHeight:1.07,
            letterSpacing:"-0.025em", maxWidth:740, margin:"0 auto 1.1rem",
            background:"linear-gradient(135deg,#F1F5F9 0%,#94A3B8 70%)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
          }}>
          Technology Services Designed
          <br />
          <span style={{
            background:"linear-gradient(135deg,#6366F1 0%,#A855F7 100%)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
          }}>For Modern Businesses</span>
        </motion.h1>

        {/* Sub */}
        <motion.p initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2, duration:0.55 }}
          style={{ fontFamily:TNR, fontStyle:"italic", fontSize:"clamp(0.9rem,2vw,1rem)", lineHeight:1.85, color:"#64748B", maxWidth:500, margin:"0 auto 2.5rem" }}>
          We help organisations adopt AI, automation and scalable digital systems that accelerate growth and innovation — built to last, engineered to perform.
        </motion.p>

        {/* CTA row */}
        <motion.div initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.3 }}
          className="hero-cta"
          style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:12, marginBottom:"3.5rem", flexWrap:"wrap" }}>
          <Link to="/contact" style={{ textDecoration:"none" }}>
            <motion.button
              whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }}
              style={{
                display:"inline-flex", alignItems:"center", gap:8,
                padding:"0.85rem 1.75rem", borderRadius:14,
                background:"linear-gradient(130deg,#6366F1 0%,#8B5CF6 60%,#A855F7 100%)",
                border:"none", color:"#fff", cursor:"pointer",
                fontFamily:TNR, fontStyle:"italic", fontSize:"0.9rem", letterSpacing:"0.04em",
                boxShadow:"0 8px 32px rgba(99,102,241,0.4)",
              }}>
              <Sparkles size={14} />
              Talk to an Expert
            </motion.button>
          </Link>
          <motion.a href="#services-grid" whileHover={{ scale:1.03, y:-2 }}
            style={{
              display:"inline-flex", alignItems:"center", gap:8,
              padding:"0.85rem 1.75rem", borderRadius:14, textDecoration:"none",
              background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)",
              color:"#94A3B8", fontFamily:TNR, fontStyle:"italic", fontSize:"0.9rem", letterSpacing:"0.04em",
            }}>
            Explore Services
            <ArrowUpRight size={13} />
          </motion.a>
        </motion.div>

        {/* Stats */}
        <div className="stats-grid" style={{ display:"grid", gap:"0.75rem", maxWidth:860, margin:"0 auto" }}>
          {STATS.map((s,i) => <StatCard key={s.label} {...s} index={i} />)}
        </div>
      </section>

      {/* Divider */}
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 1.25rem" }}>
        <div style={{ height:1, background:"linear-gradient(90deg,transparent 0%,rgba(99,102,241,0.28) 30%,rgba(99,102,241,0.28) 70%,transparent 100%)" }} />
      </div>

      {/* ── SERVICES GRID ── */}
      <section id="services-grid" style={{ position:"relative", maxWidth:1100, margin:"0 auto", padding:"clamp(3rem,6vw,5rem) 1.25rem clamp(4rem,8vw,8rem)" }}>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true }}
          style={{ marginBottom:"clamp(2rem,4vw,3.5rem)", textAlign:"center" }}>
          <p style={{ fontFamily:TNR, fontStyle:"italic", fontSize:"0.62rem", letterSpacing:"0.22em", textTransform:"uppercase", color:"#6366F1", marginBottom:"0.75rem" }}>
            What We Offer
          </p>
          <h2 style={{
            fontFamily:TNR, fontStyle:"italic", fontWeight:400,
            fontSize:"clamp(1.6rem,3.5vw,2.6rem)", lineHeight:1.12,
            background:"linear-gradient(135deg,#F1F5F9 0%,#94A3B8 100%)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
          }}>Our Core Services</h2>
        </motion.div>

        <div className="svc-grid" style={{ display:"grid", gap:"1.4rem" }}>
          {SERVICES.map((svc,i) => <ServiceCard key={svc.slug} service={svc} index={i} />)}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ position:"relative", maxWidth:980, margin:"0 auto", padding:"0 1.25rem clamp(4rem,8vw,8rem)" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true }}
          className="cta-box"
          style={{
            position:"relative", borderRadius:24,
            padding:"clamp(2.5rem,5vw,4rem) clamp(1.5rem,4vw,4rem)",
            textAlign:"center", overflow:"hidden",
            background:"linear-gradient(160deg,rgba(99,102,241,0.09) 0%,rgba(139,92,246,0.06) 100%)",
            border:"1px solid rgba(99,102,241,0.16)",
          }}>

          {/* Grid */}
          <div style={{ position:"absolute", inset:0, pointerEvents:"none", backgroundImage:"linear-gradient(#6366F1 1px,transparent 1px),linear-gradient(90deg,#6366F1 1px,transparent 1px)", backgroundSize:"44px 44px", opacity:0.025 }} />
          {/* Glow */}
          <div style={{ position:"absolute", top:"-30%", left:"50%", transform:"translateX(-50%)", width:320, height:320, borderRadius:"50%", background:"#6366F1", opacity:0.08, filter:"blur(60px)", pointerEvents:"none" }} />

          <p style={{ fontFamily:TNR, fontStyle:"italic", fontSize:"0.62rem", letterSpacing:"0.22em", textTransform:"uppercase", color:"#6366F1", marginBottom:"1rem", position:"relative", zIndex:1 }}>
            Ready to scale?
          </p>
          <h2 style={{
            fontFamily:TNR, fontStyle:"italic", fontWeight:400,
            fontSize:"clamp(1.7rem,4vw,2.8rem)", lineHeight:1.1, marginBottom:"1rem",
            color:"#F1F5F9", position:"relative", zIndex:1,
          }}>
            Start Your Digital
            <span style={{ color:"#818CF8" }}> Transformation</span>
          </h2>
          <p style={{ fontFamily:TNR, fontStyle:"italic", fontSize:"0.9rem", lineHeight:1.85, color:"#64748B", maxWidth:420, margin:"0 auto 2rem", position:"relative", zIndex:1 }}>
            Our experts will assess your needs, propose the right technology stack, and deliver results that matter to your bottom line.
          </p>
          <Link to="/contact" style={{ textDecoration:"none", position:"relative", zIndex:1 }}>
            <motion.button
              whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }}
              style={{
                display:"inline-flex", alignItems:"center", gap:8,
                padding:"0.9rem 2rem", borderRadius:14, border:"none", cursor:"pointer",
                background:"linear-gradient(130deg,#6366F1 0%,#8B5CF6 60%,#A855F7 100%)",
                color:"#fff", fontFamily:TNR, fontStyle:"italic", fontSize:"0.9rem", letterSpacing:"0.05em",
                boxShadow:"0 8px 36px rgba(99,102,241,0.45)",
              }}>
              <Sparkles size={14} />
              Book a Free Strategy Call
              <ArrowUpRight size={14} />
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}