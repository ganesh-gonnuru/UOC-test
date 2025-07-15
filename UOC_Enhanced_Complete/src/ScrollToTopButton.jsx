import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 flex items-center gap-2 bg-blue-800 text-white px-4 py-3 rounded-full shadow-xl hover:bg-blue-900 transition-opacity duration-300 animate-fade-in z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-8 h-8" />
        <span className="hidden sm:inline text-sm font-medium">scroll to Top</span>
      </button>
    )
  );
}
