import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./testimonial.css"; // ✅ reuse same zoom effect styles

const homeImages = [
  {
    title: "MBBS in Georgia",
    image: "/images/home/mbbs.jpg",
  },
  {
    title: "Student Orientation",
    image: "/images/home/orientation.jpg",
  },
  {
    title: "Visa Approvals",
    image: "/images/home/visa.jpg",
  },
  {
    title: "Hostel Arrangements",
    image: "/images/home/hostel.jpg",
  },
  {
    title: "Classroom Interactions",
    image: "/images/home/classroom.jpg",
  },
  {
    title: "Campus Visit",
    image: "/images/home/university.jpg",
  },
];

export default function HomeSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-12 bg-white px-4">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Glimpses of Uditi Overseas
      </h2>

      <div className="flex justify-end gap-4 mb-4">
        <button
          ref={prevRef}
          className="bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-800 transition"
        >
          ◀
        </button>
        <button
          ref={nextRef}
          className="bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-800 transition"
        >
          ▶
        </button>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
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
        {homeImages.map((item, i) => (
          <SwiperSlide key={i} className="testimonial-slide">
            <div className="rounded-xl overflow-hidden shadow-md bg-white">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <p className="text-center py-3 text-blue-800 font-semibold">
                {item.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
