'use client'
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { useState, useRef } from 'react'

export default function Dropdown() {
    const [flag, setFlag] = useState(3)
  const menuRef = useRef(null)

  const para = (s) => {
    if (flag % 2 === 0) {
      s.children[1].style.transform = 'translateX(200px)'
      s.children[0].style.transform = 'rotate(45deg)'
      s.children[2].style.transform = 'rotate(-45deg)'
      menuRef.current.style.right = '0px'
    } else {
      s.children[1].style.transform = 'translateX(0px)'
      s.children[0].style.transform = 'rotate(0deg)'
      s.children[2].style.transform = 'rotate(0deg)'
      menuRef.current.style.right = '-700px'
    }
    setFlag(flag + 1)
  }

    return(
        <>
        <ul className=' hidden w-full md:flex justify-center items-center h-full *:ml-5'>
            <li className='flex justify-center items-center hover h-full relative '>
                <a href='#' className='ml-1 '>بلیت هواپیما</a>
                <IoIosArrowDown size={'25px'}/>
                <div className='transition-[1s] flex-col justify-center items-center hidden absolute top-[65px] shadow-xl bg-white p-3 gap-2 rounded-[5px] *:hover:bg-[#ddeaff] border-2 border-gray-200 z-30'>
                    <a href='#'>پرواز داخلی</a>
                    <a href='#'>پرواز خارجی</a>
                </div>
            </li>
            <li className='flex justify-center items-center text-center '>
                <a href='#'>بلیت قطار </a>
            </li>
            <li className='flex justify-center items-center text-center '>
                <a href='#'>بلیت اتوبوس</a>
            </li>
            <li className='flex justify-center items-center text-center hover h-full '>
                <a href='#' className='ml-1'>اقامت </a>
                <IoIosArrowDown size={'25px'}/>
            <div className='transition-[1s] flex-col justify-center items-center hidden absolute top-[65px] shadow-xl bg-white p-3 gap-2 rounded-[5px] *:hover:bg-[#ddeaff] *:w-full border-2 border-gray-200 z-30' >
			<a  href="#">هتل</a>
			<a  href="#">ویلا و اقامتگاه</a>	
		 </div>
            </li>
            <li className='flex justify-center items-center text-center '>
                <a href='#'>تور</a>
            </li>
            <li className='flex justify-center items-center text-center '>
                <a href='#'>ویزا </a>
            </li>
            <li className='flex justify-center items-center text-center hover h-full'>
                <a href='#' className='ml-1'>بیشتر </a>
                <IoIosArrowDown size={'25px'}/>
         <div className='transition-[1s] flex-col justify-center items-center hidden absolute top-[65px] shadow-xl bg-white p-3 gap-2 rounded-[5px] *:hover:bg-[#ddeaff] border-2 border-gray-200 z-30'>
			<a href="#">علی بابا پلاس</a>
			<a href="#">مجله علی بابا</a>
			<a href="#">بیمه مسافرتی</a>	
			</div>
            </li>        
        </ul>
        <div className='ham md:hidden flex' onClick={(e) => para(e.currentTarget)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className='items md:hidden flex' ref={menuRef}>
                <li><a href='#'>بلیت هواپیما</a></li>
                <li><a href='#'> بلیت قطار</a></li>
                <li><a href='#'>بلیت اتوبوس</a></li>
                <li><a href='#'>اقامت</a></li>
                <li><a href='#'>هتل</a></li>
                <li><a href='#'>ویلا و اقامتگاه</a></li>
                <li><a href='#'>تور</a></li>
                <li><a href='#'>ویزا</a></li>
            </ul>
        
        </>
    )
}
