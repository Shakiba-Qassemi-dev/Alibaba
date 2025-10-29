'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
export default function Toor() {
  const [filter, setFilter] = useState('همه')
  const cards = [
    {
      id: 1,
      subtitle: 'تور خارجی',
      img: '/images/vietnam.webp',
      h: 'تور 9 روزه‌ی ویتنام',
      title: 'تور 9 روزه - پرواز - هتل 4 و 5 ستاره',
      price: '89/990/000 + 1190دلار'
    },
    {
      id: 2,
      subtitle: 'تور خارجی',
      img: '/images/chin.webp',
      h: ' تور 11 روزه چین ',
      title: 'تور 11 روزه - پرواز - هتل 5 ستاره  ',
      price: '62/800/000 + 1250دلار'
    },
    {
      id: 3,
      subtitle: ' تور خارجی ',
      img: '/images/shang.webp',
      h: 'چین (شانگهای، هانگژو، پکن)',
      title: '  تور 10 روزه- هواپیما- هتل 5  ستاره    ',
      price: '59/000/000 + 1190دلار'
    },
    {
      id: 4,
      subtitle: 'تور خارجی',
      img: '/images/russia.webp',
      h: 'تور 8 روزه روسیه (هتل 4 ستاره)',
      title: 'تور 8 روزه- پرواز - هتل‌ 4 ستاره',
      price: '29/990/000 + 695دلار'
    },
    {
      id: 5,
      subtitle: 'تور خارجی',
      img: '/images/keshti.webp',
      h: 'تور کشتی کروز خلیج فارس (امارات، قطر)',
      title: 'تور 8 روزه - پرواز - کشتی کروز  ',
      price: '19/500/000 + 1370دلار'
    },
    {
      id: 6,
      subtitle: 'تور داخلی',
      img: '/images/hormoz.webp',
      h: 'تور 4 روزه قشم، هنگام و هرمز',
      title: 'تور 4 روزه - پرواز - اقامتگاه بومگردی',
      price: '25/000/000 '
    },
    {
      id: 7,
      subtitle: 'تور داخلی',
      img: '/images/esfahan.webp',
      h: 'تور 6 روزه ریلی  یزد، شیراز و اصفهان ',
      title: 'تور 6 روزه _ هتل _ قطار',
      price: '16/200/000 '
    },
    {
      id: 8,
      subtitle: 'تور داخلی',
      img: '/images/chogha.webp',
      h: 'تور 4 روزه زیگورات،چغازنبیل تا شوشترو  ',
      title: 'تور 4 روزه - هتل سنتی - اتوبوس VIP',
      price: '10/800/000 '
    },
    {
      id: 9,
      subtitle: 'تور داخلی',
      img: '/images/hesel.webp',
      h: 'جنگل مشعل،مرداب هسل و ساحل خزر',
      title: 'تور یک روزه - اتوبوس',
      price: '2/800/000 '
    },
    {
      id: 10,
      subtitle: 'تور داخلی',
      img: '/images/kavir.webp',
      h: 'تور کویر مرنجاب vip (شهر اویی)',
      title: 'تور 2 روز و 1 شب -اتوبوس -اقامتگاه',
      price: '4/700/000 '
    },
    {
      id: 11,
      subtitle: 'نمایشگاه و رویداد',
      img: '/images/ghatar.webp',
      h: 'تور قطر (ویژه تماشای مسابقات قطر)',
      title: 'تور 4 روزه - پرواز - هتل 4ستاره  ',
      price: '46/700/000+1000دلار '
    },
  ]

  // فیلتر کردن بر اساس دسته
  const filteredCards = filter === 'همه' ? cards : cards.filter(card => card.subtitle === filter)

  return (
    <>
      <section className='w-[80%] mx-auto mt-16 p-6 rounded-xl'>
        {/* دکمه‌های فیلتر */}
        <div className='flex justify-center gap-4 mb-6'>
          {['همه', 'تور داخلی', 'تور خارجی', 'نمایشگاه و رویداد'].map(cat => (
            <a
              key={cat}
              onClick={() => setFilter(cat)}
              className={`cursor-pointer px-4 py-2 rounded-xl transition-all ${
                filter === cat ? 'bg-gray-600 text-white' : 'bg-gray-200 hover:bg-yellow-500'
              }`}
            >
              {cat}
            </a>
          ))}
        </div>

        {/* اسلایدر */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000 }}
          className="rounded-2xl "
          breakpoints={{
            640: {    // تبلت کوچک
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {   // لپ‌تاپ
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          
        >
          {filteredCards.map((card) => (
            <SwiperSlide key={card.id}>
           <a href='#'><div className='bg-white rounded-xl overflow-hidden flex flex-col gap-2 shadow-md'>
                <img src={card.img} alt={card.h} className='object-cover h-52 w-full' />
                <div className='p-4'>
                  <h1 className='font-bold text-lg'>{card.h}</h1>
                  <p className='text-sm text-gray-600 mt-1'>{card.title}</p>
                  <hr className='my-2'/>
                  <h2 className='text-green-700 font-semibold'>{card.price}</h2>
                </div>
              </div></a>
            </SwiperSlide>
          ))}
        </Swiper>

      </section>
    </>
  )
}
