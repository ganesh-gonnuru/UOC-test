/*
import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function UniversitiesPage() {
  const { country } = useParams();
  const formattedCountry = country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();

  const groupedUniversities = {
    Georgia: [
      { name: "GRUNI", src: "/logos/gruni.png", description: "Georgian National University SEU is one of the top MBBS destinations in Georgia.", photo: "/images/gruni-campus.jpg" },
      { name: "University of Georgia", src: "/logos/university-of-georgia.png", description: "One of the largest private universities in Georgia with excellent MBBS programs.", photo: "/images/university-of-georgia.jpg" },
      { name: "Ilia State University", src: "/logos/ilia.png", description: "Leading public university known for research and international MBBS standards.", photo: "/images/ilia-campus.jpg" },
      { name: "TSMU", src: "/logos/tsmu.png", description: <p>"Tbilisi State Medical University has counted nearly a century of independently developing history and 
        represents the cornerstone of medical education in Georgia (and in the region). 
        Tbilisi State Medical University is famous for the quality of education and research, 
        democratic governance principles, transparent management and academic freedom. 
        These basic principles determine the high standard of constantly developing medical education, 
        health care provision and the persistent pursuit for perfection."</p>, photo: "/images/tsmu.jpg" },
    ],
    Russia: [
      { name: "Belgorod State Univ.", src: "/logos/belgorod.jpg", description: "Renowned for affordable MBBS education with English-medium courses.", photo: "/images/belgorod-campus.jpg" },
      { name: "Bashkir Medical Univ.", src: "/logos/bashkir.png", description: "Offers globally recognized MBBS degrees and excellent infrastructure.", photo: "/images/bashkir.jpg" },
    ],
    Vietnam: [
      { name: "Dai Nam University", src: "/logos/dainam.png", description: "Emerging MBBS destination in Southeast Asia with growing infrastructure.", photo: "/images/dainam.jpg" },
    ],
     USA: [
      { src: "/logos/harvard.png", name: "Harvard University" },
      { src: "/logos/mit.png", name: "MIT" },
      { src: "/logos/stanford.png", name: "Stanford University" },
    ],
    UK: [
      { src: "/logos/oxford.jpg", name: "University of Oxford" },
      { src: "/logos/cambridge.png", name: "University of Cambridge" },
      { src: "/logos/imperial.png", name: "Imperial College London" },
    ],
    Australia: [
      { src: "/logos/unimelb.png", name: "University of Melbourne" },
      { src: "/logos/unsw.png", name: "UNSW Sydney" },
      { src: "/logos/uqs.png", name: "University of Queensland" },
    ],
};

  const universities = groupedUniversities[formattedCountry];
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  const handleClick = (university) => {
    setSelectedUniversity(university);
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const handleClose = () => {
    setSelectedUniversity(null);
  };

  if (!universities) {
    return <p className="text-center text-red-600 mt-10">No universities found for {formattedCountry}</p>;
  }

  return (
    <section className="py-16 px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">
        Universities in {formattedCountry}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {universities.map((uni, index) => (
          <div key={index} className="text-center space-y-3 cursor-pointer" onClick={() => handleClick(uni)}>
            <div className="bg-white p-5 rounded-xl shadow-lg h-40 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-blue-200 hover:shadow-md">
              <img src={uni.src} alt={uni.name} className="max-h-24 object-contain mx-auto" />
            </div>
            <p className="text-base font-semibold text-gray-800">{uni.name}</p>
          </div>
        ))}
      </div>

      {selectedUniversity && (
        <div className="mt-16 max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8 relative">
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-red-600 hover:text-red-800 font-bold text-lg"
          >
            ×
          </button>
          <h3 className="text-2xl font-bold mb-4 text-blue-800">{selectedUniversity.name}</h3>
          <img src={selectedUniversity.photo} alt={selectedUniversity.name} className="rounded-lg mb-6 w-full" />
          <p className="text-gray-700 text-lg">{selectedUniversity.description}</p>
        </div>
      )}
    </section>
  );
}
