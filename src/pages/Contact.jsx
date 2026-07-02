import { useState, useEffect } from "react";
import { FaFacebookF } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const EMAIL = "contact.gdaisolutions@gmail.com";
const INSTAGRAM = "https://instagram.com/gdaisolutions";
const YOUTUBE = "https://www.youtube.com/@GDAISOLUTIONS";
const FACEBOOK = "https://www.facebook.com/share/1D8HmjXK4K/";
const WHATSAPP_NO = "918767981515";

const EMAILJS_SERVICE_ID = "service_otr9vmp";
const EMAILJS_TEMPLATE_ID = "template_agt5owa";
const EMAILJS_PUBLIC_KEY = "6lHKc13GOqG_EoT75";

const ROLE_OPTIONS = [
  "Student",
  "Business Client",
  "Partnership / Collaboration",
  "Other",
];

const STUDENT_OPTIONS = [
  "Internship",
  "Training Program",
  "Placement Assistance",
  "Final Year Project",
  "Career Guidance",
  "Other",
];

const BUSINESS_OPTIONS = [
  "AI Solutions",
  "Software Development",
  "Website Development",
  "Mobile App Development",
  "ERP / CRM Solutions",
  "Digital Marketing",
  "Data Analytics",
  "Hire Ready Talent",
  "Product Demo",
  "Pricing & Plans",
  "Other",
];

const PARTNERSHIP_OPTIONS = [
  "Channel Partner",
  "Technology Partner",
  "Campus Collaboration",
  "Hiring Partner",
  "Training Partner",
  "Strategic Partnership",
  "Other",
];

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
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    roleOther: "",
    category: "",
    categoryOther: "",
    query: "",
    requirement: "",
  });

  const [focused, setFocused] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const foc = (k) => () => setFocused((f) => ({ ...f, [k]: true }));
  const blur = (k) => () => setFocused((f) => ({ ...f, [k]: false }));
  const isActive = (k) => focused[k] || !!form[k];

  // Determine which category dropdown to show
  const getCategoryOptions = () => {
    switch (form.role) {
      case "Student":
        return STUDENT_OPTIONS;
      case "Business Client":
        return BUSINESS_OPTIONS;
      case "Partnership / Collaboration":
        return PARTNERSHIP_OPTIONS;
      default:
        return [];
    }
  };

  const getCategoryLabel = () => {
    switch (form.role) {
      case "Student":
        return "What are you looking for?";
      case "Business Client":
        return "How can we help you?";
      case "Partnership / Collaboration":
        return "Partnership Type";
      default:
        return "";
    }
  };

  const showCategoryDropdown = form.role && form.role !== "Other";
  const categoryOptions = getCategoryOptions();

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

  const textareaStyle = (k) => ({
    width: "100%",
    background: focused[k] ? "rgba(99,102,241,0.06)" : "rgba(255,255,255,0.02)",
    border: `1px solid ${focused[k] ? "rgba(99,102,241,0.5)" : "rgba(255,255,255,0.07)"}`,
    borderRadius: 14,
    padding: "16px",
    color: "#e2e8f0",
    fontSize: "13px",
    fontFamily: SANS,
    outline: "none",
    boxSizing: "border-box",
    transition: "all 0.22s ease",
    boxShadow: focused[k] ? "0 0 0 3px rgba(99,102,241,0.09)" : "none",
    resize: "vertical",
    minHeight: "100px",
    fontWeight: 400,
    letterSpacing: 0,
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

  const textareaLabelStyle = (k) => ({
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#334155",
    marginBottom: "0.5rem",
    display: "block",
    fontFamily: SANS,
  });

  const validateForm = () => {
    if (!form.name || !form.phone) {
      setErrorMessage("Please fill in Name and Phone Number.");
      setShowErrorModal(true);
      return false;
    }

    if (!form.role) {
      setErrorMessage("Please select who you are.");
      setShowErrorModal(true);
      return false;
    }

    if (form.role === "Other" && !form.roleOther.trim()) {
      setErrorMessage("Please specify who you are.");
      setShowErrorModal(true);
      return false;
    }

    if (showCategoryDropdown && !form.category) {
      setErrorMessage("Please select a category.");
      setShowErrorModal(true);
      return false;
    }

    if (form.category === "Other" && !form.categoryOther.trim()) {
      setErrorMessage("Please specify your requirement.");
      setShowErrorModal(true);
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const templateParams = {
        name: form.name,
        email: form.email || "Not provided",
        phone: form.phone,
        company: form.company || "Not provided",
        role: form.role,
        role_other: form.roleOther || "N/A",
        category: form.category || "N/A",
        category_other: form.categoryOther || "N/A",
        requirement: form.requirement || "Not provided",
        submission_time: new Date().toLocaleString(),
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      setSubmitted(true);
      setIsLoading(false);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrorMessage("Failed to send request. Please try again.");
      setShowErrorModal(true);
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      role: "",
      roleOther: "",
      category: "",
      categoryOther: "",
      query: "",
      requirement: "",
    });
    setFocused({});
    setSubmitted(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #07071a 0%, #09091f 50%, #0c0c24 100%)",
        fontFamily: SANS,
        color: "#94a3b8",
        overflowX: "hidden",
        position: "relative",
      }}
    >
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
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); max-height: 0; }
          to { opacity: 1; transform: translateY(0); max-height: 500px; }
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
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes backdropFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .c-field-wrap { position: relative; margin-bottom: 1rem; }
        .dynamic-field { animation: slideDown 0.3s ease forwards; }
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
          display: flex; align-items: center; justify-content: center; gap: 9px;
          min-height: 48px;
        }
        .submit-btn::before {
          content: ''; position: absolute; top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
          transition: left 0.45s ease;
        }
        .submit-btn:hover:not(:disabled)::before { left: 100%; }
        .submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(67,56,202,0.5); }
        .submit-btn:active:not(:disabled) { transform: scale(0.98); }
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .spinner {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
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
       .modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  padding: 16px;
  animation: modalFadeIn 0.3s ease both;
}

.modal-content {
  position: relative;
  width: 100%;
  max-width: 460px;
  background: #0C1030;
  border: 1px solid rgba(99, 102, 241, 0.35);
  border-radius: 20px;
  padding: 40px 32px 36px;
  text-align: center;
  box-shadow: 0 0 60px rgba(99, 102, 241, 0.15), 0 25px 50px rgba(0, 0, 0, 0.6);
  animation: modalSlideUp 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.modal-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366F1 0%, #3B82F6 100%);
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px rgba(99, 102, 241, 0.4);
}

.modal-icon.check-anim {
  animation: checkPop 0.5s 0.2s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.modal-title {
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
  font-weight: 700;
  font-size: 1.4rem;
  color: #F8FAFC;
  margin: 0 0 12px;
  line-height: 1.3;
}

.modal-description {
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
  font-weight: 400;
  font-size: 0.9rem;
  color: #94A3B8;
  line-height: 1.6;
  margin: 0 0 28px;
}

.modal-btn {
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
  font-weight: 600;
  font-size: 0.875rem;
  color: #fff;
  background: linear-gradient(135deg, #6366F1 0%, #3B82F6 100%);
  border: none;
  border-radius: 50px;
  padding: 12px 32px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 0 24px rgba(99, 102, 241, 0.35);
}

.modal-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 32px rgba(99, 102, 241, 0.5);
}

.modal-btn:active {
  transform: translateY(0);
}

@keyframes modalFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes modalSlideUp {
  from { opacity: 0; transform: translateY(30px) scale(0.96); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes checkPop {
  0% { opacity: 0; transform: scale(0.3); }
  60% { transform: scale(1.15); }
  100% { opacity: 1; transform: scale(1); }
}
      .modal-content {
          background: linear-gradient(135deg, rgba(15,18,37,0.7), rgba(20,24,48,0.7));
          backdrop-filter: blur(8px);
          border: 1px solid rgba(99,102,241,0.3);
          border-radius: 24px;
          padding: 2.5rem 2rem;
          max-width: 420px;
          width: 100%;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          animation: modalFadeIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          text-align: center;
        }
        }
        .modal-icon {
          width: 72px;
          height: 72px;
          margin: 0 auto 1.5rem;
          border-radius: 50%;
          background: linear-gradient(135deg, #4338ca, #7c3aed);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          box-shadow: 0 8px 32px rgba(99,102,241,0.4);
        }
        .modal-title {
          font-family: ${SERIF};
          font-style: italic;
          font-size: 1.5rem;
          font-weight: 800;
          color: #f1f5f9;
          margin-bottom: 0.75rem;
        }
        .modal-description {
          color: #94a3b8;
          font-size: 13.5px;
          line-height: 1.7;
          margin-bottom: 2rem;
        }
        .modal-btn {
          padding: 12px 28px;
          border-radius: 100px;
          background: linear-gradient(135deg, #4338ca, #7c3aed);
          border: none;
          color: #fff;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          font-family: ${SANS};
          transition: all 0.22s ease;
          box-shadow: 0 4px 16px rgba(67,56,202,0.3);
        }
        .modal-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(67,56,202,0.5);
        }
        .modal-btn:active {
          transform: scale(0.98);
        }
        .error-modal-icon {
          background: linear-gradient(135deg, #ef4444, #dc2626) !important;
          box-shadow: 0 8px 32px rgba(239,68,68,0.4) !important;
        }
        @media (min-width: 860px) {
          .c-grid { display: grid; grid-template-columns: 1fr 1.35fr; gap: 2rem; align-items: start; }
        }
        @media (max-width: 860px) { .c-left { margin-bottom: 1.5rem; } }
        @media (max-width: 520px) { 
          .two-col { grid-template-columns: 1fr !important; }
          .modal-content { padding: 2rem 1.5rem; }
          .modal-title { font-size: 1.25rem; }
        }
        @media (max-width: 375px) {
          .modal-content { padding: 1.75rem 1.25rem; }
        }
      `}</style>

      {/* Ambient glows */}
      <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "0%",
            width: 550,
            height: 550,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(67,56,202,0.07), transparent 70%)",
            animation: "glow-drift 22s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0%",
            right: "-5%",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.05), transparent 70%)",
            animation: "glow-drift 28s ease-in-out infinite reverse",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1060, margin: "0 auto", padding: "100px 18px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem", animation: "fadeUp 0.55s ease both" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(99,102,241,0.08)",
              border: "1px solid rgba(99,102,241,0.2)",
              borderRadius: 100,
              padding: "6px 16px 6px 10px",
              marginBottom: "1.6rem",
            }}
          >
            <div style={{ position: "relative", width: 8, height: 8 }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #4338ca, #7c3aed)",
                  boxShadow: "0 0 8px rgba(99,102,241,0.6)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  border: "2px solid rgba(99,102,241,0.5)",
                  animation: "pulse-ring 2.2s ease-out infinite",
                }}
              />
            </div>
            <span style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#818cf8" }}>Get In Touch</span>
          </div>

          <h1
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 6vw, 3.6rem)",
              lineHeight: 1.12,
              letterSpacing: "-0.01em",
              color: "#f1f5f9",
              marginBottom: "1rem",
            }}
          >
            Let's build something{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #7c3aed 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              remarkable.
            </span>
          </h1>

          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
              color: "#475569",
              lineHeight: 1.75,
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
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
                    href: `https://wa.me/${WHATSAPP_NO}`,
                    label: "WhatsApp / Phone",
                    value: "+91 8767 981 515",
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#818cf8">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.136.566 4.135 1.54 5.868L0 24l6.323-1.508A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.658-.497-5.188-1.367l-.371-.22-3.754.895.949-3.657-.242-.378A9.967 9.967 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                      </svg>
                    ),
                  },
                  {
                    href: `mailto:${EMAIL}`,
                    label: "Email",
                    value: EMAIL,
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <a key={item.label} className="info-chip" href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
                    <span
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 9,
                        background: "rgba(99,102,241,0.08)",
                        border: "1px solid rgba(99,102,241,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </span>
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
                  {
                    label: "Instagram",
                    href: INSTAGRAM,
                    icon: (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    ),
                  },
                  {
                    label: "YouTube",
                    href: YOUTUBE,
                    icon: (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    ),
                  },
                  {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/company/gdaisolutions",
                    icon: (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Facebook",
                    href: FACEBOOK,
                    icon: <FaFacebookF size={12} />,
                  },
                ].map(({ label, href, icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="soc-pill" aria-label={label}>
                    {icon} {label}
                  </a>
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
            <>
              <div style={{ marginBottom: "1.6rem" }}>
                <h2 style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "1.25rem", fontWeight: 800, color: "#e2e8f0", marginBottom: "0.3rem" }}>Send us a message</h2>
                <p style={{ fontSize: "12px", color: "#334155" }}>Your inquiry is delivered directly to our team · Typical response within one business day.</p>
              </div>

              {/* Role Selection - Mandatory */}
              <div className="c-field-wrap">
                <label style={{ position: "absolute", left: 16, top: 9, fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: focused.role ? "#818cf8" : "#475569", fontFamily: SANS, pointerEvents: "none", zIndex: 2, transition: "color 0.2s" }}>
                  Who are you? <span style={{ color: "#818cf8" }}>*</span>
                </label>
                <select
                  value={form.role}
                  onChange={(e) => {
                    set("role")(e);
                    setForm((f) => ({ ...f, category: "", categoryOther: "" }));
                  }}
                  onFocus={foc("role")}
                  onBlur={blur("role")}
                  style={{ ...fieldStyle("role"), padding: "26px 40px 10px 16px", color: form.role ? "#e2e8f0" : "#334155", cursor: "pointer" }}
                  aria-label="Who are you"
                  disabled={isLoading}
                >
                  <option value="">Select who you are…</option>
                  {ROLE_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
                <div style={{ position: "absolute", right: 14, top: "55%", transform: "translateY(-50%)", pointerEvents: "none", color: "#334155" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              {/* Role "Other" Textarea */}
              {form.role === "Other" && (
                <div className="dynamic-field" style={{ marginBottom: "1rem" }}>
                  <label style={textareaLabelStyle("roleOther")}>
                    Please tell us who you are and how we can help <span style={{ color: "#818cf8" }}>*</span>
                  </label>
                  <textarea
                    value={form.roleOther}
                    onChange={set("roleOther")}
                    onFocus={foc("roleOther")}
                    onBlur={blur("roleOther")}
                    placeholder="Please describe your role or organization..."
                    style={textareaStyle("roleOther")}
                    aria-label="Role details"
                    disabled={isLoading}
                  />
                </div>
              )}

              {/* Category Dropdown (Student/Business/Partnership) */}
              {showCategoryDropdown && (
                <div className="dynamic-field c-field-wrap">
                  <label style={{ position: "absolute", left: 16, top: 9, fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: focused.category ? "#818cf8" : "#475569", fontFamily: SANS, pointerEvents: "none", zIndex: 2, transition: "color 0.2s" }}>
                    {getCategoryLabel()} <span style={{ color: "#818cf8" }}>*</span>
                  </label>
                  <select
                    value={form.category}
                    onChange={set("category")}
                    onFocus={foc("category")}
                    onBlur={blur("category")}
                    style={{ ...fieldStyle("category"), padding: "26px 40px 10px 16px", color: form.category ? "#e2e8f0" : "#334155", cursor: "pointer" }}
                    aria-label={getCategoryLabel()}
                    disabled={isLoading}
                  >
                    <option value="">Select an option…</option>
                    {categoryOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  <div style={{ position: "absolute", right: 14, top: "55%", transform: "translateY(-50%)", pointerEvents: "none", color: "#334155" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Category "Other" Textarea */}
              {form.category === "Other" && (
                <div className="dynamic-field" style={{ marginBottom: "1rem" }}>
                  <label style={textareaLabelStyle("categoryOther")}>
                    Please specify your requirement <span style={{ color: "#818cf8" }}>*</span>
                  </label>
                  <textarea
                    value={form.categoryOther}
                    onChange={set("categoryOther")}
                    onFocus={foc("categoryOther")}
                    onBlur={blur("categoryOther")}
                    placeholder="Please describe your specific needs..."
                    style={textareaStyle("categoryOther")}
                    aria-label="Category details"
                    disabled={isLoading}
                  />
                </div>
              )}

              {/* Name & Phone */}
              <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 0.9rem" }}>
                {[
                  { key: "name", label: "Full Name", type: "text", req: true },
                  { key: "phone", label: "Phone Number", type: "tel", req: true },
                ].map(({ key, label, type, req }) => (
                  <div key={key} className="c-field-wrap">
                    <label style={labelStyle(key)}>
                      {label}
                      {req && <span style={{ color: "#818cf8", marginLeft: 2 }}>*</span>}
                    </label>
                    <input
                      type={type}
                      value={form[key]}
                      onChange={set(key)}
                      onFocus={foc(key)}
                      onBlur={blur(key)}
                      style={fieldStyle(key)}
                      aria-label={label}
                      disabled={isLoading}
                    />
                  </div>
                ))}
              </div>

              {/* Email & Company */}
              <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 0.9rem" }}>
                {[
                  { key: "email", label: "Email Address", type: "email" },
                  { key: "company", label: "Company / Organisation", type: "text" },
                ].map(({ key, label, type }) => (
                  <div key={key} className="c-field-wrap">
                    <label style={labelStyle(key)}>{label}</label>
                    <input
                      type={type}
                      value={form[key]}
                      onChange={set(key)}
                      onFocus={foc(key)}
                      onBlur={blur(key)}
                      style={fieldStyle(key)}
                      aria-label={label}
                      disabled={isLoading}
                    />
                  </div>
                ))}
              </div>

              {/* Final Requirement Textarea */}
              <div style={{ marginBottom: "1rem" }}>
                <label style={textareaLabelStyle("requirement")}>Tell us more about your requirement</label>
                <textarea
                  value={form.requirement}
                  onChange={set("requirement")}
                  onFocus={foc("requirement")}
                  onBlur={blur("requirement")}
                  placeholder="Describe your project, idea, challenge, or requirement..."
                  style={textareaStyle("requirement")}
                  aria-label="Requirement details"
                  disabled={isLoading}
                />
              </div>

              <button className="submit-btn" onClick={handleSubmit} disabled={isLoading} aria-label="Submit inquiry">
                {isLoading ? (
                  <>
                    <span className="spinner" />
                    <span>Sending Request...</span>
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M8 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0M21 15c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3Z" />
                    </svg>
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>
              <p style={{ textAlign: "center", fontSize: "11px", color: "#1e293b", marginTop: "0.9rem", lineHeight: 1.6 }}>
                Your information is secure and will only be used to respond to your inquiry.
              </p>
            </>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {submitted && (
        <div className="modal-backdrop" onClick={() => resetForm()}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon check-anim">✓</div>
            <h2 className="modal-title">Inquiry Submitted Successfully</h2>
            <p className="modal-description">
              Thank you for reaching out to GD AI Solutions.
              <br />
              Our team will review your request and contact you shortly.
            </p>
            <button className="modal-btn" onClick={resetForm} aria-label="Submit another inquiry">
              Submit Another Inquiry
            </button>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {submitted && (
        <div className="modal-backdrop" onClick={() => resetForm()}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon check-anim">✓</div>
            <h2 className="modal-title">Inquiry Submitted Successfully</h2>
            <p className="modal-description">
              Thank you for reaching out to GD AI Solutions.
              <br />
              Our team will review your request and contact you shortly.
            </p>
            <button className="modal-btn" onClick={resetForm} aria-label="Submit another inquiry">
              Submit Another Inquiry
            </button>
          </div>
        </div>
      )}
    </div>
  );
}