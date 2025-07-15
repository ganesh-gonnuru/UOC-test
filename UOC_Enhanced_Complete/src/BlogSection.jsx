// BlogSection.jsx
import React from "react";

const blogs = [
  {
    title: "Top Countries to Study MBBS Abroad in 2025",
    excerpt: "Explore the best destinations for affordable and globally recognized medical education...",
    link: "#",
  },
  {
    title: "Visa Interview Tips: How to Succeed",
    excerpt: "Ace your student visa interview with these proven tips from experienced consultants...",
    link: "#",
  },
  {
    title: "Scholarship Opportunities for Indian Students",
    excerpt: "Learn about fully-funded and partial scholarships available across various universities...",
    link: "#",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-blue-900 mb-8">
          Latest Updates & Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-800">{blog.title}</h3>
              <p className="text-gray-700 text-sm mb-4">{blog.excerpt}</p>
              <a href={blog.link} className="text-blue-600 hover:underline text-sm font-medium">
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
