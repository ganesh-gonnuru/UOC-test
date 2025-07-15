import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ContactForm() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedUniversity = params.get("university");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: selectedUniversity || "", // auto-filled from URL
    message: "",
  });

  // If URL param changes after component mounts
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      university: selectedUniversity || "",
    }));
  }, [selectedUniversity]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can integrate backend submission or email here
  };

  return (
    <section className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Contact Us</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="university"
          placeholder="University Name"
          value={formData.university}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded bg-gray-50"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />

        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
