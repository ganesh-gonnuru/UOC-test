import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Mail, Phone, GraduationCap, User, Smartphone, MailCheck, FileText, MessageSquare, HelpCircle, DollarSign, BookOpenCheck } from "lucide-react";

const faqs = [
  {
    icon: HelpCircle,
    question: "What is the benefit of using Uditi Overseas Consultancy's college admissions counseling services?",
    answer:
      "Uditi Overseas Consultancy's college admissions counselors have years of experience working in college admissions and can provide valuable insights into the college application process. They help students identify their strengths and weaknesses, develop a strategic plan for applying to colleges, and increase their chances of getting accepted to top-choice schools.",
  },
  {
    icon: DollarSign,
    question: "Does Uditi Overseas Consultancy offer assistance with financial aid?",
    answer:
      "Yes, Uditi Overseas Consultancy offers assistance with financial aid and helps students and families navigate the complex process of applying. Our counselors identify scholarships, grants, and other funding opportunities students may be eligible for.",
  },
  {
    icon: BookOpenCheck,
    question: "What kind of test preparation services does Uditi Overseas Consultancy offer?",
    answer:
      "We provide test preparation services for standardized tests like the SAT, ACT, GRE, and GMAT. Our tutors offer personalized study plans, targeted skill improvement, and one-on-one guidance.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 px-6 bg-blue-50">
      <h2 className="text-3xl font-semibold text-center text-blue-900 mb-8">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-4 transition">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left text-blue-800 font-semibold text-lg"
            >
              {faq.question}
              {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {activeIndex === index && (
              <div className="mt-3 text-gray-700 transition">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
