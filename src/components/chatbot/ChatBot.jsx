import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
// ─── DATA ────────────────────────────────────────────────────────────────────

const PRODUCTS = [
  { id: "crm", icon: "👥", name: "CRM Solution", tagline: "Relationships that convert." },
  { id: "erp", icon: "📊", name: "ERP System", tagline: "Operations, unified." },
  { id: "school-erp", icon: "🎓", name: "School ERP", tagline: "Education, simplified." },
  { id: "ai-analytics", icon: "🤖", name: "AI Analytics Dashboard", tagline: "Data that decides." },
  { id: "ecommerce", icon: "🛒", name: "E-Commerce Suite", tagline: "Sell smarter, grow faster." },
  { id: "inventory", icon: "📦", name: "Inventory Management", tagline: "Stock under control." },
  { id: "ai-chatbot", icon: "💬", name: "AI Chatbot", tagline: "Always-on support." },
  { id: "hr-payroll", icon: "💼", name: "HR & Payroll System", tagline: "People, powered." },
  { id: "workflow", icon: "⚙️", name: "Workflow Automation Suite", tagline: "Less process, more progress." },
  { id: "pm-tool", icon: "📋", name: "Project Management Tool", tagline: "Ship what matters." },
  { id: "cloudops", icon: "☁️", name: "CloudOps Manager", tagline: "Infra without the stress." },
  { id: "marketing-auto", icon: "📣", name: "Marketing Automation", tagline: "Campaigns on autopilot." },
  { id: "bi-dashboard", icon: "📈", name: "BI Dashboard Pro", tagline: "Insights at a glance." },
  { id: "devsecops", icon: "🔒", name: "DevSecOps Platform", tagline: "Build secure by default." },
  { id: "edge-cloud", icon: "🌐", name: "Edge Cloud Network", tagline: "Speed at the edge." },
];

const PRODUCT_DETAILS = {
  crm: { features: ["Sales Pipeline Management", "Lead Tracking", "Marketing Automation", "AI Insights", "Customer Analytics"], desc: "An intelligent CRM that unifies your sales pipeline, marketing campaigns, and customer data in one place." },
  erp: { features: ["Finance & Accounting", "Procurement", "Inventory Control", "HR Integration", "Real-time Reporting"], desc: "A fully integrated ERP that connects every department, streamlining operations from procurement to delivery." },
  "school-erp": { features: ["Admissions Management", "Timetable Scheduling", "Fee Collection", "Attendance Tracking", "Parent Portal"], desc: "A comprehensive school management system that digitizes administration, learning, and communication." },
  "ai-analytics": { features: ["Predictive Modelling", "Natural Language Queries", "Automated Reports", "Anomaly Detection", "Data Storytelling"], desc: "Turn raw data into actionable intelligence with AI-powered dashboards and real-time analytics." },
  ecommerce: { features: ["Multi-channel Selling", "Payment Gateway", "Order Management", "Product Catalogue", "AI Recommendations"], desc: "Launch, manage, and scale your online store with a complete e-commerce platform built for growth." },
  inventory: { features: ["Stock Tracking", "Low-stock Alerts", "Multi-warehouse", "Barcode Scanning", "Demand Forecasting"], desc: "Keep your supply chain lean and responsive with real-time inventory visibility and smart replenishment." },
  "ai-chatbot": { features: ["24/7 Availability", "NLP Understanding", "CRM Integration", "Multi-language", "Handoff to Human"], desc: "Deploy an AI agent that handles customer queries, qualifies leads, and escalates seamlessly when needed." },
  "hr-payroll": { features: ["Employee Lifecycle", "Automated Payroll", "Leave Management", "Performance Reviews", "Compliance"], desc: "A single platform to manage your entire workforce — from hiring to payroll to performance." },
  workflow: { features: ["Visual Builder", "API Integrations", "Trigger-based Automation", "Audit Trails", "Role-based Access"], desc: "Design and automate complex business processes without writing a single line of code." },
  "pm-tool": { features: ["Kanban & Gantt", "Team Collaboration", "Time Tracking", "Budget Management", "Resource Allocation"], desc: "Keep every project on track with a unified workspace for planning, collaboration, and delivery." },
  cloudops: { features: ["Multi-cloud Management", "Cost Optimisation", "Security Monitoring", "Auto-scaling", "Incident Response"], desc: "Manage your cloud infrastructure intelligently — reduce costs, boost reliability, and maintain compliance." },
  "marketing-auto": { features: ["Email Campaigns", "Lead Nurturing", "A/B Testing", "Segmentation", "ROI Analytics"], desc: "Automate your entire marketing funnel and deliver personalised experiences at every touchpoint." },
  "bi-dashboard": { features: ["Drag & Drop Builder", "Live Data Connectors", "Custom KPIs", "Scheduled Reports", "Collaboration"], desc: "Create stunning, interactive dashboards that give every stakeholder the insight they need — instantly." },
  devsecops: { features: ["CI/CD Pipeline", "Code Scanning", "Vulnerability Management", "Compliance Reporting", "Access Controls"], desc: "Embed security into every stage of your development lifecycle without slowing down your engineers." },
  "edge-cloud": { features: ["Global CDN", "Low Latency Routing", "Edge Compute", "DDoS Protection", "99.99% Uptime"], desc: "Deliver blazing-fast experiences worldwide with intelligent edge networking and compute at scale." },
};

const SERVICES = [
  { id: "ai", icon: "🤖", name: "AI Solutions", num: "01", tagline: "Intelligent systems, built for you." },
  { id: "software", icon: "💻", name: "Software Services", num: "02", tagline: "From idea to production." },
  { id: "marketing", icon: "📢", name: "Digital Marketing", num: "03", tagline: "Reach, engage, convert." },
  { id: "data", icon: "📊", name: "Data Analytics", num: "04", tagline: "Decisions backed by data." },
  { id: "talent", icon: "🤝", name: "Hire Ready Talent", num: "05", tagline: "Your team, extended." },
];

const SERVICE_DETAILS = {
  ai: { caps: ["AI Agents", "AI Chatbots", "Workflow Automation", "Generative AI", "Custom AI Integrations"], desc: "Build intelligent systems that automate workflows, improve decisions and create exceptional customer experiences at scale." },
  software: { caps: ["Web Development", "Mobile Applications", "SaaS Platforms", "Enterprise Software", "API Development"], desc: "End-to-end software engineering from architecture to deployment, built to scale with your business." },
  marketing: { caps: ["SEO", "Social Media Marketing", "Paid Advertising", "Email Marketing", "Content Strategy"], desc: "Data-driven digital marketing that drives qualified traffic, builds brand authority, and grows revenue." },
  data: { caps: ["BI Dashboards", "Predictive Analytics", "Data Warehousing", "KPI Tracking", "ETL Pipelines"], desc: "Transform raw data into strategic intelligence with modern analytics architecture and visualisation." },
  talent: { caps: ["Full Time Hiring", "Contract Staffing", "Remote Talent", "Internship Programs", "Team Augmentation"], desc: "Access pre-vetted, industry-ready professionals who integrate with your team from day one." },
};

const EDUCATION = [
  { id: "foundation", icon: "🌱", level: "Foundation", name: "Skill Development", tagline: "Build the fundamentals that last." },
  { id: "growth", icon: "🚀", level: "Growth", name: "Career Pathways", tagline: "Accelerate your trajectory." },
  { id: "mastery", icon: "🏆", level: "Mastery", name: "Lifelong Learning", tagline: "Never stop evolving." },
];

const EDUCATION_DETAILS = {
  foundation: { features: ["Software Development Training", "Data Analytics Training", "AI & ML Fundamentals", "Digital Transformation Programs", "Hands-on Projects"], desc: "Build a strong technical foundation with industry-aligned programs designed for the next generation of technology professionals." },
  growth: { features: ["1-on-1 Mentorship", "Internship Placements", "Industry Live Projects", "Portfolio Building", "Interview Preparation"], desc: "Accelerate your career with structured pathways that connect learning to real opportunities at top companies." },
  mastery: { features: ["Expert-led Sessions", "Advanced AI Programs", "Continuous Learning Resources", "Community Access", "Certification Programs"], desc: "Stay ahead of the curve with ongoing learning, expert networks, and advanced programs in emerging technology." },
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const now = () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

const TypingDots = () => (
  <div className="gd-typing-dots">
    {[0, 1, 2].map(i => (
      <span key={i} style={{ animationDelay: `${i * 0.2}s` }} />
    ))}
  </div>
);

const BotAvatar = () => (
  <div className="gd-bot-avatar">🤖</div>
);

const Chip = ({ children, onClick, active }) => (
  <button onClick={onClick} className={`gd-chip ${active ? 'active' : ''}`}>
    {children}
  </button>
);

const ActionBtn = ({ children, onClick, primary }) => (
  <button onClick={onClick} className={`gd-action-btn ${primary ? 'primary' : ''}`}>
    {children}
  </button>
);

// ─── CARD GRIDS ──────────────────────────────────────────────────────────────

const ProductGrid = ({ onSelect }) => (
  <div className="gd-product-grid">
    {PRODUCTS.map(p => (
      <button key={p.id} onClick={() => onSelect(p)} className="gd-grid-card">
        <div className="gd-grid-icon">{p.icon}</div>
        <div className="gd-grid-name">{p.name}</div>
        <div className="gd-grid-tagline">{p.tagline}</div>
      </button>
    ))}
  </div>
);

const ServiceGrid = ({ onSelect }) => (
  <div className="gd-service-grid">
    {SERVICES.map(s => (
      <button key={s.id} onClick={() => onSelect(s)} className="gd-service-card">
        <span className="gd-service-num">{s.num}</span>
        <span className="gd-service-icon">{s.icon}</span>
        <div>
          <div className="gd-service-name">{s.name}</div>
          <div className="gd-service-tagline">{s.tagline}</div>
        </div>
        <span className="gd-service-arrow">›</span>
      </button>
    ))}
  </div>
);

const EducationGrid = ({ onSelect }) => (
  <div className="gd-service-grid">
    {EDUCATION.map(e => (
      <button key={e.id} onClick={() => onSelect(e)} className="gd-edu-card">
        <div className="gd-edu-header">
          <span className="gd-grid-icon">{e.icon}</span>
          <div>
            <span className="gd-edu-level">{e.level}</span>
            <div className="gd-service-name">{e.name}</div>
          </div>
        </div>
        <div className="gd-service-tagline">{e.tagline}</div>
      </button>
    ))}
  </div>
);

const DetailCard = ({ icon, name, tagline, desc, features, actions }) => (
  <div className="gd-detail-card">
    <div className="gd-detail-header">
      <span className="gd-detail-icon">{icon}</span>
      <div>
        <div className="gd-detail-name">{name}</div>
        {tagline && <div className="gd-detail-tagline">{tagline}</div>}
      </div>
    </div>
    <p className="gd-detail-desc">{desc}</p>
    <div className="gd-detail-features">
      {features.map((f, i) => (
        <div key={i} className="gd-feature-item">
          <span className="gd-feature-bullet">✓</span>
          <span>{f}</span>
        </div>
      ))}
    </div>
    <div className="gd-detail-actions">
      {actions.map((a, i) => <ActionBtn key={i} primary={i === 0} onClick={a.fn}>{a.label}</ActionBtn>)}
    </div>
  </div>
);

// ─── LEAD CAPTURE FORM ───────────────────────────────────────────────────────

const LeadForm = ({ context, onSubmit, onClose }) => {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", requirement: "" });
  const [submitted, setSubmitted] = useState(false);

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  if (submitted) return (
    <div className="gd-form-success">
      <div className="gd-success-icon">✅</div>
      <div className="gd-success-title">Request Received!</div>
      <div className="gd-success-text">Our team will contact you within 24 hours.</div>
    </div>
  );

  return (
    <div className="gd-form-container">
      <div className="gd-form-title">{context}</div>
      <div className="gd-form-subtitle">Fill in your details — we'll reach out within 24 hrs.</div>
      <div className="gd-form-fields">
        {[["name", "Your name"], ["company", "Company"], ["email", "Work email"], ["phone", "Phone number"]].map(([k, ph]) => (
          <input key={k} placeholder={ph} value={form[k]} onChange={e => set(k, e.target.value)} className="gd-input" />
        ))}
        <textarea placeholder="Describe your requirement..." value={form.requirement} onChange={e => set("requirement", e.target.value)} rows={3} className="gd-input gd-textarea" />
        <div className="gd-form-actions">
          <ActionBtn
            primary
            onClick={async () => {
              if (!form.name || !form.email) return;

              try {
                await emailjs.send(
                  "service_otr9vmp",
                  "template_6f8n9vh",
                  {
                    name: form.name,
                    company: form.company,
                    email: form.email,
                    phone: form.phone,
                    requirement: form.requirement,
                    time: new Date().toLocaleString(),
                  },
                  "6lHKc13GOqG_EoT75"
                );

                setSubmitted(true);
                onSubmit?.(form);
              } catch (error) {
                console.error("Email sending failed:", error);
                alert("Failed to send request. Please try again.");
              }
            }}
          >
            Submit Request
          </ActionBtn>
          <ActionBtn onClick={onClose}>Cancel</ActionBtn>
        </div>
      </div>
    </div>
  );
};

// ─── MESSAGE RENDERER ─────────────────────────────────────────────────────────

const Message = ({ msg, onAction }) => {
  const isBot = msg.sender === "bot";
  return (
    <div className={`gd-msg-wrapper ${isBot ? 'bot' : 'user'}`}>
      {isBot && (
        <div className="gd-msg-content">
          <BotAvatar />
          <div className="gd-msg-bubble-area">
            {msg.text && (
              <div className="gd-bot-bubble">
                {msg.text}
              </div>
            )}
            {msg.widget && <div className="gd-widget-area">{msg.widget(onAction)}</div>}
          </div>
        </div>
      )}
      {!isBot && (
        <div className="gd-user-bubble">
          {msg.text}
        </div>
      )}
      <span className="gd-msg-time">{msg.time}</span>
    </div>
  );
};

// ─── MAIN CHATBOT ─────────────────────────────────────────────────────────────

const ChatBot = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState([
    {
      id: 0, sender: "bot", time: now(),
      text: "👋 Hi! Welcome to GD AI Solutions. I'm your AI business consultant. How can I help you today?",
      widget: (onAction) => (
        <div className="gd-chips-row">
          {[["Products", "products"], ["Services", "services"], ["Education", "education"], ["Pricing", "pricing"], ["Contact Sales", "lead-contact"], ["WhatsApp", "whatsapp"]].map(([l, k]) => (
            <Chip key={k} onClick={() => onAction(k, l)}>{l}</Chip>
          ))}
        </div>
      )
    }
  ]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);
  const idRef = useRef(1);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, typing]);

  if (!isOpen) return null;

  const addMsg = (msg) => {
    const id = idRef.current++;
    setMessages(p => [...p, { id, time: now(), ...msg }]);
  };

  const botReply = (delay, msg) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      addMsg({ sender: "bot", ...msg });
    }, delay);
  };

  const handleAction = (key, label) => {
    addMsg({ sender: "user", text: label });

    if (key === "products") {
      botReply(800, {
        text: "Here are our software products. Select one to explore its features, capabilities, and pricing.",
        widget: (onAction) => <ProductGrid onSelect={p => { addMsg({ sender: "user", text: p.name }); showProductDetail(p, onAction); }} />
      });
    } else if (key === "services") {
      botReply(800, {
        text: "We offer five core service verticals. Which area are you most interested in?",
        widget: (onAction) => <ServiceGrid onSelect={s => { addMsg({ sender: "user", text: s.name }); showServiceDetail(s, onAction); }} />
      });
    } else if (key === "education") {
      botReply(800, {
        text: "Our education programs are structured across three learning stages. Which best fits where you are?",
        widget: (onAction) => <EducationGrid onSelect={e => { addMsg({ sender: "user", text: e.name }); showEducationDetail(e, onAction); }} />
      });
    } else if (key === "pricing") {
      botReply(800, {
        text: "Pricing is tailored to your project scope and team size. Let me connect you with our team.",
        widget: (onAction) => <LeadForm context="Get Custom Pricing" onSubmit={() => { }} onClose={() => handleAction("back-home", "↩ Back")} />
      });
    } else if (key === "lead-contact" || key === "lead-demo" || key === "lead-pricing" || key === "lead-expert") {
      const titles = { "lead-contact": "Contact Sales", "lead-demo": "Request Demo", "lead-pricing": "Get Pricing", "lead-expert": "Talk to Expert" };
      botReply(600, {
        widget: () => <LeadForm context={titles[key] || "Get in Touch"} onSubmit={() => { }} onClose={() => handleAction("back-home", "↩ Back")} />
      });
    } else if (key === "whatsapp") {
      botReply(600, { text: "You can reach us directly on WhatsApp at +91 87679 81515. Our team responds within a few minutes during business hours. 💬" });
    } else if (key === "back-home") {
      botReply(400, {
        text: "No problem! What else can I help you with?",
        widget: (onAction) => (
          <div className="gd-chips-row">
            {[["Products", "products"], ["Services", "services"], ["Education", "education"], ["Pricing", "pricing"], ["Contact Sales", "lead-contact"], ["WhatsApp", "whatsapp"]].map(([l, k]) => (
              <Chip key={k} onClick={() => onAction(k, l)}>{l}</Chip>
            ))}
          </div>
        )
      });
    } else if (key === "back-products") {
      botReply(400, {
        text: "Here are all our products:",
        widget: (onAction) => <ProductGrid onSelect={p => { addMsg({ sender: "user", text: p.name }); showProductDetail(p, onAction); }} />
      });
    } else if (key === "back-services") {
      botReply(400, {
        text: "Which service are you interested in?",
        widget: (onAction) => <ServiceGrid onSelect={s => { addMsg({ sender: "user", text: s.name }); showServiceDetail(s, onAction); }} />
      });
    }
  };

  const showProductDetail = (p, onAction) => {
    const det = PRODUCT_DETAILS[p.id] || { desc: "A powerful solution from GD AI Solutions.", features: [] };
    botReply(900, {
      widget: (oa) => (
        <DetailCard
          icon={p.icon} name={p.name} tagline={p.tagline}
          desc={det.desc} features={det.features}
          actions={[
            { label: "Request Demo", fn: () => handleAction("lead-demo", "Request Demo") },
            { label: "Get Pricing", fn: () => handleAction("lead-pricing", "Get Pricing") },
            { label: "Talk to Expert", fn: () => handleAction("lead-expert", "Talk to Expert") },
            { label: "← Back", fn: () => handleAction("back-products", "← Back") },
          ]}
        />
      )
    });
  };

  const showServiceDetail = (s, onAction) => {
    const det = SERVICE_DETAILS[s.id] || { desc: "", caps: [] };
    botReply(900, {
      widget: () => (
        <DetailCard
          icon={s.icon} name={s.name}
          desc={det.desc} features={det.caps}
          actions={[
            { label: "Learn More", fn: () => handleAction("lead-contact", "Learn More") },
            { label: "Request Consultation", fn: () => handleAction("lead-expert", "Request Consultation") },
            { label: "Get Pricing", fn: () => handleAction("lead-pricing", "Get Pricing") },
            { label: "← Back", fn: () => handleAction("back-services", "← Back") },
          ]}
        />
      )
    });
  };

  const showEducationDetail = (e) => {
    const det = EDUCATION_DETAILS[e.id] || { desc: "", features: [] };
    botReply(900, {
      widget: () => (
        <DetailCard
          icon={e.icon} name={e.name} tagline={`${e.level} · ${e.tagline}`}
          desc={det.desc} features={det.features}
          actions={[
            { label: "Apply Now", fn: () => handleAction("lead-contact", "Apply Now") },
            { label: "Download Brochure", fn: () => handleAction("lead-contact", "Download Brochure") },
            { label: "Talk to Advisor", fn: () => handleAction("lead-expert", "Talk to Advisor") },
            { label: "← Back", fn: () => handleAction("education", "Education") },
          ]}
        />
      )
    });
  };

  const sendText = () => {
    if (!input.trim()) return;
    const text = input.trim();
    setInput("");
    addMsg({ sender: "user", text });
    const lower = text.toLowerCase();
    if (lower.includes("product")) handleAction("products", text);
    else if (lower.includes("service")) handleAction("services", text);
    else if (lower.includes("education") || lower.includes("training") || lower.includes("learn")) handleAction("education", text);
    else if (lower.includes("price") || lower.includes("pricing") || lower.includes("cost") || lower.includes("quote")) handleAction("pricing", text);
    else if (lower.includes("whatsapp") || lower.includes("contact")) handleAction("whatsapp", text);
    else botReply(700, {
      text: "I'm best equipped to answer questions about our products, services, education programs, and pricing. Please choose a topic below:", widget: (oa) => (
        <div className="gd-chips-row">
          {[["Products", "products"], ["Services", "services"], ["Education", "education"], ["Pricing", "pricing"]].map(([l, k]) => (
            <Chip key={k} onClick={() => oa(k, l)}>{l}</Chip>
          ))}
        </div>
      )
    });
  };

  return (
    <>
      <style>{`
        .gd-chatbot-window {
          position: fixed; 
          bottom: 96px; 
          right: 24px; 
          z-index: 9999;
          width: min(420px, calc(100vw - 32px));
          height: min(680px, calc(100vh - 120px));
          background: rgba(8, 12, 24, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          box-shadow: 0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(34,211,238,0.05);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          display: flex; 
          flex-direction: column;
          overflow: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          animation: gd-fade-up 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes gd-fade-up {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .gd-header {
          padding: 18px 20px;
          background: linear-gradient(135deg, rgba(6,182,212,0.2) 0%, rgba(59,130,246,0.2) 100%);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex; 
          align-items: center; 
          justify-content: space-between;
          flex-shrink: 0;
        }
        .gd-header-info { display: flex; align-items: center; gap: 12px; }
        .gd-header-avatar {
          width: 40px; height: 40px; border-radius: 50%;
          background: linear-gradient(135deg,#06b6d4,#3b82f6);
          display: flex; align-items: center; justify-content: center;
          font-size: 18px; 
          box-shadow: 0 4px 12px rgba(6,182,212,0.3);
        }
        .gd-header-title { font-weight: 700; color: #fff; font-size: 15px; letter-spacing: -0.01em; }
        .gd-header-status { display: flex; align-items: center; gap: 6px; margin-top: 2px; }
        .gd-status-dot { width: 7px; height: 7px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 8px #22c55e; }
        .gd-status-text { font-size: 11px; color: rgba(255,255,255,0.6); font-weight: 500; }
        .gd-close-btn {
          background: rgba(255,255,255,0.06); border: none; color: rgba(255,255,255,0.7);
          width: 32px; height: 32px; border-radius: 50%; cursor: pointer; font-size: 14px;
          display: flex; align-items: center; justify-content: center; transition: all 0.2s;
        }
        .gd-close-btn:hover { background: rgba(255,255,255,0.12); color: #fff; }

        .gd-messages-container {
          flex: 1; overflow-y: auto; padding: 20px 16px 12px;
          display: flex; flex-direction: column; gap: 16px;
          scroll-behavior: smooth;
        }
        .gd-messages-container::-webkit-scrollbar { width: 5px; }
        .gd-messages-container::-webkit-scrollbar-track { background: transparent; }
        .gd-messages-container::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
        .gd-messages-container::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }

        .gd-msg-wrapper { display: flex; flex-direction: column; gap: 4px; animation: gd-msg-in 0.3s ease; }
        .gd-msg-wrapper.bot { align-items: flex-start; }
        .gd-msg-wrapper.user { align-items: flex-end; }
        @keyframes gd-msg-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

        .gd-msg-content { display: flex; align-items: flex-end; gap: 8px; max-width: 88%; }
        .gd-msg-bubble-area { display: flex; flex-direction: column; gap: 8px; }
        
        .gd-bot-avatar {
          width: 30px; height: 30px; border-radius: 50%;
          background: linear-gradient(135deg,#06b6d4,#3b82f6);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; flex-shrink: 0; 
          box-shadow: 0 4px 10px rgba(6,182,212,0.3);
        }

        .gd-bot-bubble {
          padding: 12px 16px; border-radius: 18px 18px 18px 4px;
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.9); font-size: 13.5px; line-height: 1.6;
        }
        .gd-user-bubble {
          padding: 12px 16px; border-radius: 18px 18px 4px 18px;
          background: linear-gradient(135deg,#06b6d4,#3b82f6);
          color: #fff; font-size: 13.5px; line-height: 1.6; max-width: 80%;
          box-shadow: 0 4px 12px rgba(6,182,212,0.2);
        }
        .gd-msg-time { font-size: 10px; color: rgba(255,255,255,0.3); margin: 0 4px; }

        .gd-typing-dots {
          display: flex; align-items: center; gap: 5px; padding: 14px 18px;
          background: rgba(255,255,255,0.06); border-radius: 18px 18px 18px 4px;
          align-self: flex-start; border: 1px solid rgba(255,255,255,0.08);
        }
        .gd-typing-dots span {
          width: 7px; height: 7px; border-radius: 50%; background: #22d3ee; display: inline-block;
          animation: gd-bounce 1.2s ease-in-out infinite;
        }
        @keyframes gd-bounce { 0%,80%,100%{transform:scale(0.6);opacity:0.4} 40%{transform:scale(1);opacity:1} }

        .gd-widget-area { width: 100%; }
        .gd-chips-row { display: flex; flex-wrap: wrap; gap: 8px; }
        .gd-chip {
          padding: 9px 16px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.8);
          font-size: 13px; font-weight: 500; cursor: pointer; transition: all 0.2s;
          white-space: nowrap;
        }
        .gd-chip:hover {
          border-color: #22d3ee; color: #22d3ee; background: rgba(34,211,238,0.1);
          transform: translateY(-1px);
        }

        /* Product Grid */
        .gd-product-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 10px; width: 100%; margin-top: 4px;
        }
        .gd-grid-card {
          padding: 14px 12px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03); cursor: pointer; text-align: left; transition: all 0.2s;
        }
        .gd-grid-card:hover {
          border-color: rgba(34,211,238,0.4); background: rgba(34,211,238,0.05); transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
        .gd-grid-icon { font-size: 22px; margin-bottom: 6px; }
        .gd-grid-name { font-size: 13px; font-weight: 600; color: #fff; line-height: 1.3; }
        .gd-grid-tagline { font-size: 10.5px; color: rgba(255,255,255,0.4); margin-top: 3px; }

        /* Service Grid */
        .gd-service-grid { display: flex; flex-direction: column; gap: 10px; width: 100%; margin-top: 4px; }
        .gd-service-card, .gd-edu-card {
          padding: 16px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03); cursor: pointer; text-align: left; transition: all 0.2s;
          display: flex; align-items: center; gap: 14px;
        }
        .gd-service-card:hover, .gd-edu-card:hover {
          border-color: rgba(34,211,238,0.4); background: rgba(34,211,238,0.05); transform: translateX(4px);
        }
        .gd-service-num { font-size: 11px; font-weight: 700; color: #22d3ee; font-family: monospace; min-width: 20px; }
        .gd-service-icon { font-size: 20px; }
        .gd-service-name { font-size: 14px; font-weight: 600; color: #fff; }
        .gd-service-tagline { font-size: 11.5px; color: rgba(255,255,255,0.4); margin-top: 2px; }
        .gd-service-arrow { margin-left: auto; color: rgba(255,255,255,0.2); font-size: 18px; transition: all 0.2s; }
        .gd-service-card:hover .gd-service-arrow { color: #22d3ee; transform: translateX(2px); }

        .gd-edu-card { flex-direction: column; align-items: flex-start; gap: 8px; }
        .gd-edu-header { display: flex; align-items: center; gap: 12px; }
        .gd-edu-level { font-size: 9px; font-weight: 700; color: #22d3ee; text-transform: uppercase; letter-spacing: 0.08em; }

        /* Detail Card */
        .gd-detail-card {
          border-radius: 18px; border: 1px solid rgba(34,211,238,0.2);
          background: linear-gradient(180deg, rgba(6,182,212,0.05) 0%, rgba(255,255,255,0.02) 100%);
          padding: 18px; width: 100%; box-sizing: border-box;
        }
        .gd-detail-header { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
        .gd-detail-icon { font-size: 26px; }
        .gd-detail-name { font-size: 15px; font-weight: 700; color: #fff; }
        .gd-detail-tagline { font-size: 11.5px; color: #22d3ee; margin-top: 2px; }
        .gd-detail-desc { font-size: 13px; color: rgba(255,255,255,0.65); line-height: 1.6; margin: 0 0 14px 0; }
        .gd-detail-features { margin-bottom: 16px; display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
        .gd-feature-item { display: flex; align-items: center; gap: 8px; }
        .gd-feature-bullet { color: #22d3ee; font-size: 12px; font-weight: bold; }
        .gd-feature-item span:last-child { font-size: 12.5px; color: rgba(255,255,255,0.75); }
        .gd-detail-actions { display: flex; flex-wrap: wrap; gap: 8px; }

        /* Action Buttons */
        .gd-action-btn {
          padding: 9px 16px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04); color: #fff; font-size: 12.5px; font-weight: 600;
          cursor: pointer; transition: all 0.2s; letter-spacing: 0.02em;
        }
        .gd-action-btn:hover { background: rgba(255,255,255,0.08); transform: translateY(-1px); }
        .gd-action-btn.primary {
          border: none; 
          background: linear-gradient(135deg,#06b6d4,#3b82f6); 
          box-shadow: 0 4px 12px rgba(6,182,212,0.25);
        }
        .gd-action-btn.primary:hover { box-shadow: 0 6px 16px rgba(6,182,212,0.4); }

        /* Lead Form */
        .gd-form-container {
          border-radius: 18px; border: 1px solid rgba(34,211,238,0.2);
          background: rgba(8,17,32,0.8); padding: 18px; width: 100%; box-sizing: border-box;
        }
        .gd-form-title { font-weight: 700; color: #fff; margin-bottom: 4px; font-size: 14px; }
        .gd-form-subtitle { font-size: 12px; color: rgba(255,255,255,0.4); margin-bottom: 14px; }
        .gd-form-fields { display: flex; flex-direction: column; gap: 10px; }
        .gd-input {
          width: 100%; padding: 11px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03); color: #fff; font-size: 13px; outline: none; box-sizing: border-box;
          transition: all 0.2s; font-family: inherit;
        }
        .gd-input::placeholder { color: rgba(255,255,255,0.3); }
        .gd-input:focus { border-color: #22d3ee; background: rgba(34,211,238,0.05); }
        .gd-textarea { resize: none; }
        .gd-form-actions { display: flex; gap: 8px; margin-top: 4px; }

        .gd-form-success {
          border-radius: 18px; border: 1px solid rgba(34,211,238,0.3);
          background: rgba(6,182,212,0.05); padding: 24px; text-align: center;
        }
        .gd-success-icon { font-size: 36px; margin-bottom: 12px; }
        .gd-success-title { font-weight: 700; color: #fff; margin-bottom: 6px; font-size: 15px; }
        .gd-success-text { font-size: 12.5px; color: rgba(255,255,255,0.6); }

        /* Quick Actions & Input */
        .gd-quick-actions {
          padding: 10px 16px; display: flex; gap: 8px; overflow-x: auto; flex-shrink: 0;
          border-top: 1px solid rgba(255,255,255,0.04);
        }
        .gd-quick-actions::-webkit-scrollbar { display: none; }
        .gd-quick-btn {
          padding: 7px 14px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03); color: rgba(255,255,255,0.6); font-size: 11.5px; 
          cursor: pointer; white-space: nowrap; flex-shrink: 0; transition: all 0.2s;
        }
        .gd-quick-btn:hover { border-color: rgba(34,211,238,0.4); color: #22d3ee; }

        .gd-input-area {
          padding: 14px 16px; border-top: 1px solid rgba(255,255,255,0.06); display: flex; gap: 10px; flex-shrink: 0;
        }
        .gd-input-field {
          flex: 1; padding: 12px 18px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04); color: #fff; font-size: 13.5px; outline: none; transition: all 0.2s;
          font-family: inherit;
        }
        .gd-input-field::placeholder { color: rgba(255,255,255,0.3); }
        .gd-input-field:focus { border-color: #22d3ee; background: rgba(255,255,255,0.06); }
        .gd-send-btn {
          width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg,#06b6d4,#3b82f6);
          border: none; color: #fff; font-size: 16px; cursor: pointer; display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; box-shadow: 0 4px 12px rgba(6,182,212,0.3); transition: all 0.2s;
        }
        .gd-send-btn:hover { transform: scale(1.05); box-shadow: 0 6px 16px rgba(6,182,212,0.4); }

        /* Responsive */
        @media (max-width: 480px) {
          .gd-chatbot-window {
            width: 100vw !important;
            height: 100vh !important;
            bottom: 0 !important;
            right: 0 !important;
            border-radius: 0 !important;
            border: none !important;
          }
          .gd-detail-features {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <div className="gd-chatbot-window">
        {/* Header */}
        <div className="gd-header">
          <div className="gd-header-info">
            <div className="gd-header-avatar">🤖</div>
            <div>
              <div className="gd-header-title">GD AI Assistant</div>
              <div className="gd-header-status">
                <span className="gd-status-dot"></span>
                <span className="gd-status-text">Online now</span>
              </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="gd-close-btn">✕</button>
        </div>

        {/* Messages */}
        <div className="gd-messages-container">
          {messages.map(msg => <Message key={msg.id} msg={msg} onAction={handleAction} />)}
          {typing && (
            <div className="gd-msg-content">
              <BotAvatar />
              <TypingDots />
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick Actions */}
        <div className="gd-quick-actions">
          {[["📅 Book Demo", "lead-demo"], ["💬 WhatsApp", "whatsapp"], ["📞 Call Us", "whatsapp"], ["📧 Email Us", "lead-contact"]].map(([l, k]) => (
            <button key={k} onClick={() => handleAction(k, l.split(" ").slice(1).join(" "))} className="gd-quick-btn">
              {l}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="gd-input-area">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && sendText()}
            placeholder="Ask me anything…"
            className="gd-input-field"
          />
          <button onClick={sendText} className="gd-send-btn">➤</button>
        </div>
      </div>
    </>
  );
};

export { ChatBot };
export default ChatBot;
