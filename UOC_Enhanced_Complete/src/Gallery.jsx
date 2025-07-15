
import React from "react";

const images = [
  { src: "/spg/sample1.jpg", caption: "Student Interaction 1" },
  { src: "/spg/sample2.jpg", caption: "University Visit 2" },
  { src: "/gallery/sample3.jpg", caption: "Student Group 3" },
  { src: "/gallery/sample4.jpg", caption: "Campus Tour 4" },
  { src: "/gallery/sample5.jpg", caption: "Counseling Session 5" },
  { src: "/gallery/sample6.jpg", caption: "Orientation Event 6" },
];

export default function Gallery() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Student Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div key={index} className="shadow-lg rounded-xl overflow-hidden">
            <img src={img.src} alt={img.caption} className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300" />
            <p className="text-center text-sm p-2 bg-gray-100">{img.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
