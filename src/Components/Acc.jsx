'use client'
import React from 'react'
import { GoQuestion } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

export default function Acc() {
    function para(e){
        const h1 = e.currentTarget;
        h1.nextElementSibling.classList.toggle('h')
        h1.children[0].classList.toggle('r')
    }
  return (
    <>
    <ul className='acc w-full *:cursor-pointer'>
        <li className='p-4'>
       <h1 onClick={para} className='flex items-center justify-between gap-2'>
        چند روز قبل از پرواز، بلیط هواپیما را بخریم؟ 
        <span><IoIosArrowDown size={'25px'}/></span>         
        </h1>
        <p>امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. اما گاهی اوقات قیمت بلیط هواپیما در روزهای نزدیک به پرواز ارزان‌تر می‌شود. بنابراین در صورتی که شرایطتان اجازه می‌دهد، رزرو آنلاین بلیط هواپیما را به روزهای نزدیک پرواز موکول کنید. البته اگر قصد سفر در ایام پرسفر نظیر تعطیلات را دارید، باید هر چه زودتر رزرو بلیط هواپیما را انجام دهید.
        </p>
        </li>

        <li className='p-4'>
       <h1 onClick={para} className='flex items-center justify-between gap-2'>
       در هر پرواز، میزان بار مجاز چقدر است؟
        <span><IoIosArrowDown size={'25px'}/></span>         
        </h1>
        <p>میزان مجاز بار به کلاس پرواز و کلاس نرخی بلیط بستگی دارد. هنگام خرید آنلاین بلیط هواپیما می‌توانید میزان بار مجاز را در اطلاعات بلیط ببینید. طبیعی است که اگر میزان بارتان بیش از حد مجاز باشد، باید جریمه پرداخت کنید.
        </p>
        </li>

        <li className='p-4'>
       <h1 onClick={para} className='flex items-center justify-between gap-2'>
       نرخ بلیط هواپیما برای نوزادان و کودکان زیر ۱۲ سال چگونه است؟
        <span><IoIosArrowDown size={'25px'}/></span>         
        </h1>
        <p>نرخ بلیط کودکان و نوزادان به کلاس پرواز و کلاس نرخی بستگی دارد. به صورت کلی، قیمت بلیط مسافر کودک (2 الی 12 سال) معادل 50 الی 100 درصد بلیط بزرگسال، و قیمت بلیط مسافر نوزاد (تا دو سال) 10 درصد بلیط بزرگسال است.   
        </p>
        </li>
        <li className='p-4'>
       <h1 onClick={para} className='flex items-center justify-between gap-2'>
       رزرو آنلاین بلیط هواپیما هزینه بیشتری از خرید حضوری دارد؟
        <span><IoIosArrowDown size={'25px'}/></span>         
        </h1>
        <p> خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز برخودار هستید.
        </p>
        </li>
        <li className='p-4'>
       <h1 onClick={para} className='flex items-center justify-between gap-2'>
       آیا پس از خرید اینترنتی بلیط هواپیما امکان استرداد آن وجود دارد؟
        <span><IoIosArrowDown size={'25px'}/></span>         
        </h1>
        <p>وقتی از علی‌بابا یعنی بهترین سایت خرید بلیط هواپیما ، بلیطتان را رزرو می‌کنید، خیالتان آسوده است که امکان استرداد وجه در صورت کنسل کردن بلیط وجود دارد. میزان جریمه را هم هنگام رزرو آنلاین بلیط هواپیما در قسمت قوانین استرداد بخوانید. میزان جریمه به نوع بلیط، کلاس پروازی، کلاس نرخی و... بستگی دارد. 
        </p>
        </li>


        <li className='p-4'>
       <h1 onClick={para} className='flex items-center justify-between gap-2'>
       آیا پس از خرید بلیط هواپیما، امکان تغییر نام یا نام خانوادگی وجود دارد؟
        <span><IoIosArrowDown size={'25px'}/></span>         
        </h1>
        <p> در پرواز داخلی یا خارجی، امکان تغییر نام و نام خانوادگی در بلیط سیستمی وجود ندارد. اما در بلیط چارتر، برخی از چارترکننده‌ها این تغییر را می‌پذیرند. 
        </p>
        </li>
        <li className='p-4'>
       <h1 onClick={para} className='flex items-center justify-between gap-2'>
       هنگامی که از سایت خرید بلیط هواپیما رزرو بلیط را انجام می‌دهیم، امکان انتخاب صندلی مورد نظرمان وجود دارد؟
        <span><IoIosArrowDown size={'25px'}/></span>         
        </h1>
        <p> 
        خیر؛ هنگام رزرو بلیط هواپیما داخلی یا خارجی امکان انتخاب صندلی وجود ندارد. البته در زمان چک‌این انتخاب محدوده صندلی امکان‌پذیر است.
        </p>
        </li>
    </ul>
    </>
  )
}
