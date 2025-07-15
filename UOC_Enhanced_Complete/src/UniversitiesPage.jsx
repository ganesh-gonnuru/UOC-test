import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import universityDetails from "./data/universityDetails";   // <-- adjust path if needed

export default function UniversitiesPage() {
  const location   = useLocation();
  const navigate   = useNavigate();
  const params     = new URLSearchParams(location.search);
  const country    = params.get("country");

  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const detailRef = useRef(null);          // for scrolling & glow

  /* ---------- GROUPED UNIVERSITY LOGOS ---------- */
  const groupedUniversities = {
    Georgia: [
      { src: "/logos/gruni.png", name: "GRUNI" },
      { src: "/logos/university-of-georgia.png", name: "University of Georgia" },
      { src: "/logos/ilia.png", name: "ILIA State University" },
      { src: "/logos/tsmu.png", name: "TSMU" },
      { src: "/logos/kenwalker.png", name: "Ken Walker University" },
      { src: "/logos/Akaki.png", name: "Akaki Tsereteli State University" },
      { src: "/logos/Caucasus.png", name: "Caucasus University" },
      { src: "/logos/european.png", name: "European University" },
    ],
    Russia: [
      { src: "/logos/belgorod.jpg", name: "Belgorod State Univ." },
      { src: "/logos/bashkir.png", name: "Bashkir Medical Univ." },
      { src: "/logos/kabrdino.png", name: "Kabrdino-Balkarian University." },
      { src: "/logos/kazan.png", name: "Kazan Federal University." },
    ],
    Vietnam: [
      { src: "/logos/dainam.png", name: "Dai Nam University" },
      { src: "/logos/duytan.png", name: "Duy Tan University" },
    ],
    USA: [
      { src: "/logos/harvard.png", name: "Harvard University" },
      { src: "/logos/mit.png", name: "MIT" },
    ],
    UK: [
      { src: "/logos/oxford.jpg", name: "University of Oxford" },
      { src: "/logos/cambridge.png", name: "University of Cambridge" },
    ],
    Australia: [
      { src: "/logos/unimelb.png", name: "University of Melbourne" },
      { src: "/logos/unsw.png", name: "UNSW Sydney" },
    ],
  };

  const universities = groupedUniversities[country] || [];

  /* ---------- HANDLE CLICK ---------- */
  const handleLogoClick = (uni) => {
    setSelectedUniversity(uni);

    // wait for DOM update, then smooth‑scroll + glow
    setTimeout(() => {
      if (detailRef.current) {
        detailRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        // add glow class temporarily
        detailRef.current.classList.add("ring-4", "ring-yellow-400");
        setTimeout(() => {
          detailRef.current.classList.remove("ring-4", "ring-yellow-400");
        }, 1200);
      }
    }, 100);
  };

  /* ---------- APPLY BUTTON ---------- */
  const handleApply = () => {
    if (selectedUniversity?.name) {
      navigate(`/contact?university=${encodeURIComponent(selectedUniversity.name)}`);
    }
  };

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl text-center font-bold mb-10 text-blue-900">
        {country ? `Universities in ${country}` : "Please select a country"}
      </h2>

      {universities.length ? (
        <>
          {/* ---------- GRID ---------- */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {universities.map((uni, idx) => (
              <div
                key={idx}
                onClick={() => handleLogoClick(uni)}
                className="text-center cursor-pointer"
              >
                <img
                  src={uni.src}
                  alt={uni.name}
                  className="h-24 mx-auto mb-2 object-contain hover:scale-105 transition-transform duration-300"
                />
                <p className="font-medium">{uni.name}</p>
              </div>
            ))}
          </div>

          {/* ---------- DETAIL CARD ---------- */}
          {selectedUniversity && (
            <div
              ref={detailRef}
              className="mt-10 max-w-3xl mx-auto bg-white rounded-xl shadow p-6 border border-blue-100 animate-fadeIn"
            >
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                {selectedUniversity.name}
              </h3>

              {universityDetails[selectedUniversity.name] ? (
                <>
                  <p className="text-gray-700 mb-2">
                    {universityDetails[selectedUniversity.name].description}
                  </p>
                  <p className="text-gray-700 mb-1">
                    {universityDetails[selectedUniversity.name].tuition}
                  </p>
                  <p className="text-gray-700 mb-4">
                    {universityDetails[selectedUniversity.name].duration}
                  </p>
                </>
              ) : (
                <p className="text-gray-700 mb-4">
                  We can help you apply and secure admission to this university.
                </p>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleApply}
                  className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition"
                >
                  Apply for this University
                </button>
                <button
                  onClick={() => setSelectedUniversity(null)}
                  className="bg-gray-300 text-gray-800 px-5 py-2 rounded-full hover:bg-gray-400 transition"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <p className="text-center text-gray-600">No universities found.</p>
      )}
    </section>
  );
}
