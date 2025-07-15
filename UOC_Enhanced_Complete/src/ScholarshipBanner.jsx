// ScholarshipBanner.jsx
import React from "react";

export default function ScholarshipBanner() {
  return (
    <section className="bg-yellow-100 py-8 px-4 text-center">
      <h2 className="text-2xl font-semibold text-blue-900">🎓 Limited Time Scholarships Available!*</h2>
      <p className="mt-2 text-lg">Get up to 25 - 50%* off on tuition fees for top universities. Apply now!</p>
      <a
        href="#contact"
        className="inline-block mt-4 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition"
      >
        Apply for Scholarship
      </a>
    </section>
  );
}
