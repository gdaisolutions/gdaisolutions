import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "918767981515"; // Replace with your WhatsApp number

  const message =
    "Hi GD AI Solutions,%0A%0AI am interested in your services and would like to know more details.%0A%0APlease get in touch with me.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-24 right-4
        sm:bottom-28 sm:right-6
        z-[999]
        group
      "
    >
      {/* Tooltip — hidden on mobile, shown from sm breakpoint up */}
      <div
        className="
          hidden sm:block
          absolute
          right-20
          top-1/2
          -translate-y-1/2
          whitespace-nowrap
          bg-white
          text-slate-900
          px-4
          py-2
          rounded-xl
          shadow-2xl
          text-sm
          font-medium
          opacity-0
          translate-x-2
          group-hover:opacity-100
          group-hover:translate-x-0
          transition-all
          duration-300
          pointer-events-none
        "
      >
        Chat with us on WhatsApp
      </div>

      {/* Button */}
      <div
        className="
          w-12 h-12
          sm:w-16 sm:h-16
          rounded-full
          bg-[#25D366]
          flex
          items-center
          justify-center
          text-white
          shadow-[0_0_20px_rgba(37,211,102,0.55)]
          sm:shadow-[0_0_30px_rgba(37,211,102,0.55)]
          hover:scale-110
          hover:shadow-[0_0_35px_rgba(37,211,102,0.85)]
          sm:hover:shadow-[0_0_45px_rgba(37,211,102,0.85)]
          transition-all
          duration-300
          animate-pulse
        "
      >
        <FaWhatsapp className="text-2xl sm:text-4xl" />
      </div>
    </a>
  );
};

export default WhatsAppButton;