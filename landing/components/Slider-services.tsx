"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { serviceData } from "@/data";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SliderServices = () => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Swiper */}
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        pagination={{ clickable: true }}
        navigation // <-- simple, Swiper crea los botones automáticamente
        modules={[Pagination, Navigation]}
        className="min-h-[280px] md:min-h-[340px] w-[270px] md:w-[550px]"
      >
        {serviceData.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="flex px-6 py-8 h-auto md:h-[290px] rounded-lg cursor-pointer 
                bg-gray-800/40 sm:flex-col gap-x-6 sm:gap-x-0 group 
                hover:bg-gray-800 transition-all duration-300 
                hover:border-secondary border-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className="mb-4 text-4xl text-secondary">{item.icon}</div>
              <div>
                <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderServices;
