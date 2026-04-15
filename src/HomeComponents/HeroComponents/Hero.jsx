import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  const slides = [
    "https://marketinghack4u.com/wp-content/uploads/2025/05/Ekart-Franchise-Cost.jpg",
    "https://themesbrand.com/toner/html/assets/images/small/img-1.jpg",
    "https://th.bing.com/th/id/OIP.LWQ6UEJ-4Ar8EPIKms_gGwHaEJ?w=278&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.VmlOufY3djq7htP0-Z4JmwHaDt?w=309&h=175&c=7&r=0&o=7&pid=1.7&rm=3",
    "https://th.bing.com/th/id/OIP.vJ5sqgGsIDo7ECyVQuT-awHaEl?w=294&h=182&c=7&r=0&o=7&pid=1.7&rm=3"
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 mt-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      //  slidesPerView={1.2}          // Partial next slide visible
        centeredSlides={true}        // Center the active slide
        spaceBetween={20}            // Gap between slides
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="py-8"
      >
        {slides.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
              <img
                src={src}
                alt={`slide-${idx}`}
                className="w-full h-full object-cover"
              />
              {/* Optional overlay text */}
              {idx === 0 && (
                <div className="absolute inset-0 bg-black/25 flex flex-col justify-center pl-6 text-white">
                  <h1 className="text-2xl md:text-4xl font-bold">Big Sale!</h1>
                  <p className="text-sm md:text-lg">Up to 50% Off Today</p>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
