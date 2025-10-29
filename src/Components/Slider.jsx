'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation , Autoplay ,Pagination } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

export default function Slider() {
  return (
    <>
    <div className='w-[80%] mx-auto mt-6'>
    <div>
      <Swiper
        modules={[Navigation,Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        loop
        autoplay={{
            delay: 3000,
          }}
        className="rounded-lg"
        breakpoints={{
          768: {   // لپ‌تاپ
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <a href='#'><img src="/images/card1.webp" className="w-full rounded-lg" alt="slide 1" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href='#'><img src="/images/card2.webp" className="w-full rounded-lg" alt="slide 2" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href='#'><img src="/images/card3.webp" className="w-full rounded-lg" alt="slide 3" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href='#'><img src="/images/card4.webp" className="w-full rounded-lg" alt="slide 3" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href='#'><img src="/images/card5.webp" className="w-full rounded-lg" alt="slide 3" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
    </>
  
  )
}