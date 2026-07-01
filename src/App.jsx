import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Loader from "./components/Loader";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Products from "./pages/Products";
import Education from "./pages/Education";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

import Services from "./pages/services/Services";
import AISolutions from "./pages/services/AISolutions";
import Software from "./pages/services/Software";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import DataAnalytics from "./pages/services/DataAnalytics";
import HireReadyTalent from "./pages/services/HireReadyTalent";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Footer from "./components/layout/Footer";

// Chatbot Imports
import ChatBot from "./components/chatbot/ChatBot";
import ChatButton from "./components/chatbot/ChatButton";

import CursorFollower from "./components/common/CursorFollower";
import WhatsAppButton from "./components/common/WhatsAppButton";
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  // Chatbot State
  const [chatOpen, setChatOpen] = useState(false);

  // Prevent scroll while loader is active
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* Website renders underneath — becomes visible after loader exits */}
      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 0.4s ease 0.1s",
          pointerEvents: loading ? "none" : "auto",
        }}
      >
        <BrowserRouter>
          <ScrollToTop />

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Company />} />
            <Route path="/company" element={<Company />} />
            <Route path="/products" element={<Products />} />
            <Route path="/education" element={<Education />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />

            {/* Services */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/ai-solutions" element={<AISolutions />} />
            <Route path="/services/software-services" element={<Software />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/data-analytics" element={<DataAnalytics />} />
            <Route path="/services/hire-ready-talent" element={<HireReadyTalent />} />

            {/* Legacy routes from Navbar */}
            <Route path="/services/ai-agents" element={<AISolutions />} />
            <Route path="/services/automation" element={<AISolutions />} />
            <Route path="/services/cloud" element={<Software />} />
            <Route path="/services/analytics" element={<DataAnalytics />} />
            <Route path="/services/software" element={<Software />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>

          <Footer />
          <WhatsAppButton />
<ChatButton setIsOpen={setChatOpen} />
<ChatBot isOpen={chatOpen} setIsOpen={setChatOpen} />
<CursorFollower />
          {/* GD AI Assistant */}
          <ChatButton setIsOpen={setChatOpen} />
          <ChatBot isOpen={chatOpen} setIsOpen={setChatOpen} />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;