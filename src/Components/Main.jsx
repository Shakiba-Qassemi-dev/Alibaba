'use client'
import React, { useState } from 'react';
import { MdAirplanemodeActive } from "react-icons/md";
import { IoEarthOutline } from "react-icons/io5";
import { FaTrainSubway, FaBus } from "react-icons/fa6";
import { BsBackpackFill } from "react-icons/bs";
import { RiHotelFill } from "react-icons/ri";
import { MdHolidayVillage } from "react-icons/md";
import Moving from './Moving';

export default function Main() {
  const [activeIndex, setActiveIndex] = useState(0);

  const links = [
    {
      icon: <MdAirplanemodeActive size={28} />,
      label: "پرواز داخلی",
      bg: "/images/back1.webp"
    },
    {
      icon: <IoEarthOutline size={28} />,
      label: "پرواز خارجی",
      bg: "/images/back2.webp"
    },
    {
      icon: <FaTrainSubway size={28} />,
      label: "قطار",
      bg: "/images/back3.webp"
    },
    {
      icon: <FaBus size={28} />,
      label: "اتوبوس",
      bg: "/images/back4.webp"
    },
    {
      icon: <BsBackpackFill size={28} />,
      label: "تور",
      bg: "/images/back5.webp"
    },
    {
      icon: <RiHotelFill size={28} />,
      label: "هتل",
      bg: "/images/back6.webp"
    },
    {
      icon: <MdHolidayVillage size={28} />,
      label: "ویلا و اقامتگاه",
      bg: "/images/back7.webp"
    },
  ];

  return (
    <section className="w-full relative h-auto md:h-[650px]">
      <div className="h-[250px] md:h-[55%] w-full bg-cover bg-center transition-all duration-500"
          style={{
            backgroundImage: `url(${links[activeIndex].bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
      </div>
      <div className="absolute top-[180px] md:top-[300px] left-1/2 -translate-x-1/2 w-[95%] md:w-[80%] flex flex-col justify-center items-center bg-white md:h-[300px] h-auto rounded-lg border border-gray-300 shadow-lg p-4 md:p-6 transition-all duration-500">
        
        {/* لینک‌ها */}
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-evenly items-center w-full gap-3 border-b border-gray-300 pb-4 md:pb-6">
          {links.map((link, i) => (
            <a
              key={i}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(i);
              }}
              className={`flex flex-col items-center justify-center p-3 rounded-xl text-sm md:text-base transition-all duration-300 ${
                activeIndex === i
                  ? "bg-gray-800 text-white scale-105 shadow-md"
                  : "bg-gray-200 hover:bg-gray-300 text-black"
              }`}
            >
              {link.icon}
              <h3>{link.label}</h3>
            </a>
          ))}
        </div>

        <div className='w-full mt-4 md:mt-6'>
          <Moving/>
        </div>
      </div>
    </section>
  );
}
