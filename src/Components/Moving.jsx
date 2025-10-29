'use client'
import React, { useState } from "react";
import { LuArrowLeftRight } from "react-icons/lu";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_fa from "react-date-object/locales/gregorian_fa";


export default function Moving() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const change = () => {
    setFrom(to);
    setTo(from);
  };

  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [isGregorian, setIsGregorian] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row items-stretch w-full h-auto   overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-[40%] gap-3 p-4">

          {/* مبدأ */}
          <div className="flex flex-col w-full md:w-auto">
            <label className="mb-1 text-gray-600 text-sm"></label>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="مبدا"
              className="border border-black rounded-lg p-2 text-center w-full md:w-40 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

          {/* دکمه تعویض */}
          <button
            onClick={change}
            className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600 transition-all duration-200 mt-2 md:mt-0"
            title="جابه‌جایی مبدأ و مقصد"
          >
            <LuArrowLeftRight size={22} />
          </button>

          {/* مقصد */}
          <div className="flex flex-col w-full md:w-auto">
            <label className="mb-1 text-gray-600 text-sm"></label>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="مقصد"
              className="border border-black rounded-lg p-2 text-center w-full md:w-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>


        <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-[60%] gap-4 p-4">
          

            {/* تاریخ رفت */}
            <DatePicker
              value={departureDate}
              onChange={setDepartureDate}
              format="YYYY/MM/DD"
              calendar={isGregorian ? gregorian : persian}
              locale={isGregorian ? gregorian_fa : persian_fa}
              inputClass="border rounded-lg px-4 py-2 w-full md:w-40 text-center focus:outline-none"
              placeholder="تاریخ رفت"
            />

            {/* تاریخ برگشت */}
            <DatePicker
              value={returnDate}
              onChange={setReturnDate}
              format="YYYY/MM/DD"
              calendar={isGregorian ? gregorian : persian}
              locale={isGregorian ? gregorian_fa : persian_fa}
              inputClass="border rounded-lg px-4 py-2 w-full md:w-40 text-center focus:outline-none"
              placeholder="تاریخ برگشت"
            />
 
              <button className="bg-amber-400 px-8 py-2 rounded-md text-black hover:bg-amber-500 transition-all duration-300 w-full md:w-auto">
                <a href="#">جست و جو</a>
                </button>
            
          </div>
        </div>

      
    </>
  );
}


