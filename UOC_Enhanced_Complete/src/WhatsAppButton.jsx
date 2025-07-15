import React from 'react';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 group">
      <a
        href="https://wa.me/9666873111?text=Hello%20Uditi%20Overseas%2C%20I%20want%20a%20free%20consultation%20for%20MBBS%20abroad"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block"
      >
        {/* WhatsApp Icon */}
        <img
          src="/icons/whatsapp.jpg"
          alt="Chat on WhatsApp"
          className="w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110"
        />

        {/* Tooltip on hover */}
        <span className="absolute -top-10 right-1/2 translate-x-1/2 bg-green-700 text-white text-xs px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Chat with us
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
