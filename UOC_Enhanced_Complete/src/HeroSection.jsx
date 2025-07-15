import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[600px] text-center text-white px-5">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg text-red-500">
          Your Global Education Partner
        </h1>
        <p className="text-lg md:text-2xl lg:text-3xl mb-4 max-w-3xl drop-shadow-md text-white">
          Explore the best universities abroad with personalized guidance and end-to-end support.
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl mb-2 max-w-3xl drop-shadow-md">
          Study MBBS in
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl mb-4 max-w-3xl drop-shadow-md text-orange-400">
          Georgia | Russia | Vietnam
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl mb-2 max-w-3xl drop-shadow-md">
          Masters in
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl mb-6 max-w-3xl drop-shadow-md text-orange-400">
          USA | UK | Australia
        </p>
        <Link
          to="/contact"
          className="bg-blue-600 font-semibold text-white px-6 py-5 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Free Consultation
        </Link>
      </div>
    </section>
  );
}
