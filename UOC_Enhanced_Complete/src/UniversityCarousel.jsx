import React from "react";

export default function UniversityCarousel() {
  const groupedUniversities = {
  Georgia: [
    { src: "/logos/gruni.png", name: "GRUNI" },
    { src: "/logos/university-of-georgia.png", name: "University of Georgia" },
    { src: "/logos/ilia.png", name: "Ilia State University" },
    // ...
  ],
  Russia: [
    { src: "/logos/belgorod.jpg", name: "Belgorod State Univ." },
    { src: "/logos/bashkir.png", name: "Bashkir Medical Univ." },
    // ...
  ],
  Vietnam: [
    { src: "/logos/dainam.png", name: "Dai Nam University" },
    { src: "/logos/duytan.png", name: "Duy Tan University" },
    // ...
  ],
  USA: [
    { src: "/logos/harvard.png", name: "Harvard University" },
    { src: "/logos/mit.png", name: "MIT" },
    { src: "/logos/stanford.png", name: "Stanford University" },
  ],
  UK: [
    { src: "/logos/oxford.png", name: "University of Oxford" },
    { src: "/logos/cambridge.png", name: "University of Cambridge" },
    { src: "/logos/imperial.png", name: "Imperial College London" },
  ],
  Australia: [
    { src: "/logos/unimelb.png", name: "University of Melbourne" },
    { src: "/logos/unsw.png", name: "UNSW Sydney" },
    { src: "/logos/uqs.png", name: "University of Queensland" },
  ]
};

  return (
    <section className="py-16 px-8 bg-gray-50">
      {Object.entries(groupedUniversities).map(([country, universities], idx) => (
        <div key={idx} className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center gap-3">
            <img
              src={`/flags/${country.toLowerCase()}.png`}
              alt={country}
              className="w-6 h-6 rounded-full"
            />
            {country}
          </h3>

          {/* ✅ Render universities list here */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
            {universities.map((uni, i) => (
              <div key={i} className="text-center space-y-3">
                <div className="bg-gray p-5 rounded-xl shadow-lg h-40 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-blue-200 hover:shadow-md">
                  <img
                    src={uni.src}
                    alt={uni.name}
                    className="max-h-24 object-contain mx-auto"
                  />
                </div>
                <p className="text-base font-semibold text-gray-800">{uni.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
