import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./testimonial.css"; // 👈 We'll write some styles there

const testimonials = [
  {
    name: "Aarav Mehta",
    text: "Uditi Overseas guided me through the entire admission process. I'm now studying MBBS in Georgia!",
    image: "/images/students/aarav.jpg",
  },
  {
    name: "Diya Sharma",
    text: "The counseling sessions were extremely helpful. I got into my dream university in the UK.",
    image: "/images/students/diya.jpg",
  },
  {
    name: "Rohan Patel",
    text: "I’m pursuing Masters in the USA thanks to Uditi Overseas!",
    image: "/images/students/rohan.jpg",
  },
  {
    name: "Sneha Rao",
    text: "I got clarity and direction from Uditi’s experts. Highly recommend!",
    image: "/images/students/sample1.jpg",
  },
  {
    name: "Imran Khan",
    text: "From confusion to confirmation! MBBS in Russia made simple.",
    image: "/images/students/sample2.jpg",
  },
  {
    name: "Neha Jain",
    text: "Visa, admissions, accommodation – they handled it all.",
    image: "/images/students/sample3.jpg",
  },
  {
    name: "Rahul Das",
    text: "Now in Australia for my Masters – thank you Uditi!",
    image: "/images/students/sample4.jpg",
  },
  {
    name: "Fatima Noor",
    text: "Friendly and professional team. 10/10 service!",
    image: "/images/students/sample5.jpg",
  },
];

export default function TestimonialCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="testimonials" className="bg-blue-50 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">
        Success Stories
      </h2>

      {/* Arrows */}
      <div className="flex justify-end gap-4 mb-4">
        <button
          ref={prevRef}
          className="bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-800 transition"
          aria-label="Previous"
        >
          ◀
        </button>
        <button
          ref={nextRef}
          className="bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-800 transition"
          aria-label="Next"
        >
          ▶
        </button>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        centeredSlides={true}
        loop={true}
        slidesPerView={1.3}
        spaceBetween={20}
        breakpoints={{
          768: { slidesPerView: 1.8 },
          1024: { slidesPerView: 2.8 },
        }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i} className="testimonial-slide">
            <div className="bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 flex flex-col items-center text-center">
              <img
                src={t.image}
                alt={t.name}
                className="w-28 h-28 object-cover rounded-full mb-4 border border-blue-400"
              />
              <p className="text-gray-700 italic mb-2">“{t.text}”</p>
              <h4 className="text-blue-800 font-semibold">{t.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
