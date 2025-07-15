// TrustBadges.jsx
import React from "react";
import { ShieldCheck, ThumbsUp, Briefcase, Globe } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    { icon: <ShieldCheck className="w-8 h-8 text-blue-700" />, title: "100% Visa Assistance" },
    { icon: <ThumbsUp className="w-8 h-8 text-green-600" />, title: "Trusted by 5000+ Students" },
    { icon: <Briefcase className="w-8 h-8 text-yellow-600" />, title: "10+ Years of Experience" },
    { icon: <Globe className="w-8 h-8 text-purple-600" />, title: "Global University Network" },
  ];

  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {badges.map((badge, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-2">{badge.icon}</div>
            <p className="text-base font-medium text-gray-700">{badge.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
