'use client'
import { GoQuestion } from "react-icons/go";
import React, { useState } from 'react'
import Acc from '@/Components/Acc'
import Dropdown from '@/Components/Dropdown'
import Main from '@/Components/Main'
import Text from "@/Components/Text";
import Footer from "@/Components/Footer";
import Slider from "@/Components/Slider";
import Toor from "@/Components/Toor";
import Viza from "@/Components/Viza";

export default function page() {
  const [open, setOpen] = useState(false)

  const myopen = () => {
    setOpen(true)
  }

  const myclose = () => {
    setOpen(false)
  }
  return (
    <>
      <header className='w-full '>
        <nav className='w-full flex flex-col md:flex-row shadow-xl md:h-20'>
          <div className='md:w-[20%] w-full flex md:justify-center justify-end items-center p-4 md:p-0'><img src='/images/logo.webp'/></div>
          <div className='md:w-[40%] w-full'>
            <Dropdown />
          </div>
          <div className='md:w-[40%] flex-wrap md:flex-nowrap w-full flex justify-center gap-10 items-center'>
            <div className=' hover:bg-[#ddeaff] hover:rounded-[7px] p-1'>
              <a href="#" className='flex justify-center items-center gap-2'>مرکز پشتیبانی <img src="/images/icons8-question-25.png" /></a></div>
            <div className=' hover:bg-[#ddeaff] hover:rounded-[7px] p-1'>
              <a href="#" className='flex justify-center items-center gap-2'>سفر های من <img src="/images/icons8-carry-on-bag-25.png" />
              </a></div>
            < div  onClick={myopen} className=' hover:bg-[#ddeaff] hover:rounded-[7px]  p-1'>
              <a href="#" className='flex justify-center items-center gap-2'>ورود یا ثبت نام <img src="/images/icons8-person-25.png" /></a></div>
              <div className={`modal ${open ? 'active' : ''}`}>
                <div>
                <span onClick={myclose}>❌</span>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <h1 className="font-bold text-xl mt-10">ورود یا ثبت نام</h1>
                  <h2>برای ادامه شماره موبایل خود را وارد کنید.</h2>
                  <input type="phone" placeholder="شماره موبایل" className="mt-16 border-2 border-white px-4 py-2"/>
                  <span  className="text-[12px] mt-1">استفاده از علی‌بابا به معنی پذیرش قوانین و مقررات این سرویس است.</span>
               <a href="#" className="bg-white text-black px-14 py-2 mt-10 hover:bg-yellow-400">تایید و دریافت کد</a>
                </div>
                </div>
              </div>

          </div>
        </nav>
      </header>
      <div className='w-full'>
        <Main />
      </div>
      {/* سایر خدمات */}
      <div className='flex flex-col md:flex-row justify-center mt-[600px] md:mt-0 items-center w-[80%] mx-auto rounded-lg bg-white border-2 border-gray-300 p-6'>
        <a href='#' className="md:w-1/4 w-full flex md:justify-center items-center hover:shadow-xl/30 transition-[1s] ">
          <img src="/images/safarkart.webp" className="ml-2.5" /> سفر کارت سازمانی  </a>
        <a href='#' className="md:w-1/4 w-full flex md:justify-center items-center hover:shadow-xl/30 transition-[1s] ">
          <img src="/images/safar ghest.webp" className="ml-2.5 w-[50px] h-[50px]" />بیمه مسافرتی</a>
        <a href='#' className="md:w-1/4 w-full flex md:justify-center items-center hover:shadow-xl/30 transition-[1s]">
          <img src="/images/viza.webp" className="ml-2.5" />ویزای سفر</a>
        <a href='#' className="md:w-1/4 w-full flex md:justify-center items-center hover:shadow-xl/30 transition-[1s] ">
          <img src="/images/baggage.webp" className="ml-2.5" />تور گروهی </a>
      </div>
      {/* cards */}
      <Slider/>
      <div className='flex flex-col md:flex-row w-full  md:w-[80%] mx-auto justify-center items-center border-2 border-gray-300 mt-7 rounded-lg'>
        <div className='md:w-[25%] flex justify-center items-center p-4'><img src='/images/barcode.webp' /></div>
        <div className='md:w-[25%] flex flex-col gap-4 p-4'>
          <h3 className='font-bold text-2xl'>اپلیکیشن علی‌بابا</h3>
          <h4>سریع‌تر و مطمئن‌تر به سفر بروید</h4>
          <h4><a href='#' className='text-blue-400'>مشاهده ی لینک‌های دانلود ⬅️</a></h4>
        </div>
        <div className='md:w-[50%] flex justify-center items-center p-4'><img src='/images/banner1.webp' /></div>
      </div>
      {/* پرسش ها */}
      <div className="w-[80%] mx-auto mt-7"><h1 className="flex items-center gap-2 text-xl font-bold"><span><GoQuestion size={'28px'} className="text-cyan-700" /></span>پرسش های شما</h1></div>
      <section className='flex w-[80%] mx-auto justify-center items-center border-2 border-gray-300 mt-7 rounded-lg'>
        <Acc />
      </section>
      {/* توضیحات */}
      <div className="flex flex-col md:flex-row justify-center items-center w-[80%] mx-auto p-5 mt-15">
        <div className="w-full md:w-[50%] flex flex-col gap-5">
          <h1 className="text-xl font-bold">بلیط هواپیما</h1>
          <h4>علی‌بابا، رتبه یک خرید اینترنتی بلیط سفر</h4>
          <p>علی‌بابا، بزرگترین و معتبرترین پلتفرم خرید اینترنتی بلیط هواپیما، قطار و اتوبوس در کشور، از سال ۱۳۹۳ فعالیت خود را با هدف تسهیل خرید آنلاین خدمات سفر آغاز کرده و در این مدت توانسته است اعتماد و رضایت درصد بالایی از کاربران را جلب کند. این سامانه ابتدا با تمرکز بر فروش بلیط پرواز داخلی شروع به کار کرد و به‌طور تدریجی دامنه خدمات خود را به سایر محصولات گردشگری گسترش داد.
            امروز، علی بابا به یکی از معتبرترین و محبوب‌ترین سامانه‌های سفر در ایران تبدیل شده است. بر اساس نظرسنجی‌ها، 97.2 درصد از مشتریان علی‌بابا از کیفیت خدمات این پلتفرم رضایت کامل داشته و آن را به دوستان و آشنایان خود توصیه کرده‌اند. ویژگی‌هایی همچون سرعت و راحتی خرید آنلاین بلیط هواپیما داخلی، اعتبار و خوشنامی برند، امکان استرداد آنلاین بلیط هواپیما و پشتیبانی 24 ساعته در تمامی ایام هفته، موجب شده است که علی بابا جایگاه نخست در فروش بلیط در ایران را به خود اختصاص دهد.</p>
        </div>
        <div className="w-full md:w-[50%] flex justify-center">
          <img src="/images/banner2.webp" />
        </div>
      </div>
      <Text/>
      <Viza/>
      <Toor/>
     <Footer/>
    </>
  )
}
