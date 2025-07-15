import React from "react";

export default function AboutUs() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-6 overflow-hidden">
      {/* Decorative Circle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-30 -z-10 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 animate-fadeIn">
        {/* Text */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-blue-900">About Us</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">Our Services</h3>
              <p className="text-gray-700">
                We offer a wide range of educational consulting services to help you achieve academic and professional success. Our services include academic counseling, career guidance, exam preparation, getting admissions, Visa processing, Accommodation, documentation and many more.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">About Us</h3>
              <p className="text-gray-700">
                At Uditi Overseas Consultancy, we are dedicated to providing high-quality educational consulting services to students and professionals. Our team of experienced consultants has a proven track record of helping individuals reach their full potential.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">Career Counseling</h3>
              <p className="text-gray-700">
                We offer career counseling services for students and young professionals who are exploring their career options or seeking guidance on how to advance in their current field. Our counselors provide personalized advice and resources.
              </p>
            </div>
          </div>
        </div>

        {/* About Image */}
        <div className="md:w-1000px relative group">
          <img
            src="/sample-about.png"
            alt="About Uditi Overseas Consultancy"
            className="rounded-xl shadow-xl w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>


      {/* Our Counsellors */}
<div className="mt-20 max-w-7xl mx-auto text-center">
  <h3 className="text-3xl font-bold text-blue-900 mb-10">Our Team</h3>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    {[
      { img: "/counsellors/counsellor1.jpg", name: "Ravi Babu B", bio: "Expert in MBBS Abroad admissions." },
      { img: "/counsellors/counsellor2.jpg", name: "Counsellor 2", bio: "Specialist in visa & documentation." },
      { img: "/counsellors/counsellor3.jpg", name: "Counsellor 3", bio: "Career guidance and exam prep." },
      { img: "/counsellors/counsellor4.png", name: "Counsellor 4", bio: "Student support & accommodation." },
      { img: "/counsellors/counsellor4.png", name: "Counsellor 4", bio: "Student support & accommodation." },
    ].map((counsellor, idx) => (
      <div key={idx} className="relative flex flex-col items-center group">
        <img
          src={counsellor.img}
          alt={counsellor.name}
          className="w-40 h-40 object-cover rounded-full shadow-md cursor-pointer"
        />
        <p className="mt-4 text-lg font-medium text-gray-800">{counsellor.name}</p>

        {/* Tooltip */}
        <div className="absolute bottom-full mb-3 w-56 p-3 text-sm text-white bg-blue-800 rounded shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10 pointer-events-none">
          {counsellor.bio}
          {/* Arrow */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-3 h-3 bg-blue-800 rotate-45 -mt-1 shadow-md"></div>
        </div>
      </div>
    ))}
  </div>
</div>


    </section>
  );
}
