import { useState } from "react";

const ChatButton = ({ setIsOpen, hasUnread }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes badge-pop {
          0% { transform: scale(0); }
          70% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }

        .chat-btn-wrap {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 50;
        }
        .chat-btn-main {
          width: 60px;
          height: 60px;
          font-size: 24px;
        }
        .chat-btn-badge {
          width: 16px;
          height: 16px;
        }
        .chat-btn-tooltip {
          display: block;
        }

        /* Mobile: smaller button, tighter offset, no tooltip (saves space / avoids accidental overlap) */
        @media (max-width: 639px) {
          .chat-btn-wrap {
            bottom: 16px;
            right: 16px;
          }
          .chat-btn-main {
            width: 48px;
            height: 48px;
            font-size: 19px;
          }
          .chat-btn-badge {
            width: 13px;
            height: 13px;
          }
          .chat-btn-tooltip {
            display: none;
          }
        }
      `}</style>

      <div className="chat-btn-wrap">

        {/* Tooltip (hidden on mobile via CSS) */}
        <div
          className="chat-btn-tooltip"
          style={{
            position: "absolute", right: "calc(100% + 12px)", bottom: "50%",
            transform: "translateY(50%)",
            background: "rgba(6,11,22,0.92)",
            border: "1px solid rgba(34,211,238,0.25)",
            backdropFilter: "blur(16px)",
            borderRadius: 12, padding: "8px 14px",
            whiteSpace: "nowrap",
            opacity: hovered ? 1 : 0,
            pointerEvents: "none",
            transition: "opacity 0.2s",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          }}
        >
          <div style={{ fontSize: 12, fontWeight: 600, color: "#fff", fontFamily: "'Inter', system-ui, sans-serif" }}>Chat with us</div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", marginTop: 1 }}>Replies Instantly</div>
          {/* Arrow */}
          <div style={{ position: "absolute", right: -6, top: "50%", transform: "translateY(-50%)", width: 0, height: 0, borderTop: "6px solid transparent", borderBottom: "6px solid transparent", borderLeft: "6px solid rgba(34,211,238,0.25)" }} />
        </div>

        {/* Pulse rings */}
        {!hovered && (
          <>
            <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "rgba(6,182,212,0.3)", animation: "pulse-ring 2s ease-out infinite" }} />
            <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "rgba(6,182,212,0.2)", animation: "pulse-ring 2s ease-out 0.5s infinite" }} />
          </>
        )}

        {/* Main button */}
        <button
          className="chat-btn-main"
          onClick={() => setIsOpen(true)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            position: "relative",
            borderRadius: "50%",
            background: hovered
              ? "linear-gradient(135deg, #22d3ee, #6366f1)"
              : "linear-gradient(135deg, #06b6d4, #3b82f6)",
            border: "none",
            cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: hovered
              ? "0 8px 32px rgba(6,182,212,0.6), 0 0 0 1px rgba(34,211,238,0.4)"
              : "0 4px 20px rgba(6,182,212,0.4), 0 2px 8px rgba(0,0,0,0.4)",
            transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
            transform: hovered ? "scale(1.12)" : "scale(1)",
            animation: hovered ? "none" : "float 3s ease-in-out infinite",
            outline: "none",
          }}
          aria-label="Open chat"
        >
          {/* Icon — swap to 💬 on hover */}
          <span style={{ transition: "opacity 0.2s, transform 0.2s", transform: hovered ? "rotate(-8deg) scale(1.1)" : "rotate(0) scale(1)" }}>
            {hovered ? "💬" : "🤖"}
          </span>

          {/* Inner glow ring */}
          <div style={{
            position: "absolute", inset: 3, borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.2)",
            pointerEvents: "none",
          }} />
        </button>

        {/* Unread badge */}
        {hasUnread && (
          <div
            className="chat-btn-badge"
            style={{
              position: "absolute", top: 2, right: 2,
              borderRadius: "50%",
              background: "#ef4444",
              border: "2px solid #060b16",
              animation: "badge-pop 0.3s cubic-bezier(0.34,1.56,0.64,1)",
              boxShadow: "0 2px 8px rgba(239,68,68,0.5)",
            }}
          />
        )}
      </div>
    </>
  );
};

export default ChatButton;