import React,{useEffect} from 'react';

export default function Viza() {
    useEffect(() => {
    const cards = document.querySelectorAll('.parallax-card');
    cards.forEach(card => {
        const img = card.querySelector('img');
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            img.style.transform = `translateX(${x * 20}px)`;
        });
        card.addEventListener('mouseleave', () => {
            img.style.transform = 'translateX(0)';
        });
    });
}, []);
    const viza = [
        {
            id: 1,
            img: '/images/duba.webp',
            h: 'ویزای توریستی دبی ',
            title: 'زمان پردازش: 1 تا 3 روز کاری',
            price: 'شروع قیمت از: 298درهم'
        },
        {
            id: 2,
            img: '/images/tayii2.webp',
            h: 'ویزای توریستی تایلند',
            title: 'زمان پردازش: 4 تا 7 روز کاری',
            price: 'شروع قیمت از: 60یورو'
        },
        {
            id: 3,
            img: '/images/holand2.webp',
            h: 'ویزای هلند',
            title: 'زمان پردازش: 21 روز کاری',
            price: 'شروع قیمت از: 110یورو'
        },
        {
            id: 4,
            img: '/images/paris2.webp',
            h: 'ویزای شینگن',
            title: 'زمان پردازش: 21 روز کاری',
            price: 'شروع قیمت از: 110یورو'
        },
        {
            id: 5,
            img: '/images/italia2.webp',
            h: 'ویزای ایتالیا',
            title: 'زمان پردازش: 21 روز کاری',
            price: 'شروع قیمت از: 110یورو'
        },
        {
            id: 6,
            img: '/images/canada2.webp',
            h: 'ویزای کانادا',
            title: 'زمان پردازش: 50 روز کاری',
            price: 'شروع قیمت از: 430یورو'
        },
    ]
    return (
        <>
            <section className='w-[80%] mx-auto flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-center gap-5  mt-16 items-center'>
                <div className='lg:w-[50%] w-full flex flex-col gap-6'>
                    <h1 className='text-2xl font-bold'>ویزا چیست؟</h1>
                    <p className='text-[17px]'>اگر عازم سفر خارجی باشید، حتما با ویزا سروکار خواهید داشت. ما اینجا درباره این صحبت می‌کنیم که ویزا دقیقا چیست و چرا برای سفر به کشورهای خارجی باید آن را درخواست کرد؟
                        برای پاسخ به سوال «ویزا چیست؟» و فهم بهتر آن با یک مثال پیش می‌رویم. تصور کنید می‌خواهید به خانه کسی بروید. در قدم اول چه کار می‌کنید؟ طبیعتا از صاحب‌خانه اجازه می‌گیرید؛ چون ورود به هر خانه‌ای، بدون اجازه صاحب‌خانه‌اش ممکن نیست. ویزا هم به‌نوعی اجازه صاحب‌خانه محسوب می‌شود.
                        ویزا یک مجوز است؛ مجوزی برای سفر به کشورهای خارجی. هر مسافری که بخواهد به کشوری خارجی سفر کند، در وهله اول باید از آن کشور اجازه بگیرد؛ یعنی به سفارتخانه کشور مقصدش مراجعه و درخواست ویزای آنجا را می‌کند.
                        اگر شما هم قصد سفر به کشورهای خارجی را دارید و می‌خواهید اطلاعات بیشتری درباره آن کسب کنید، این مطلب را تا انتها بخوانید.</p>
                </div>
                <div className='lg:w-[50%] w-full'>
                    <img src='/images/vizacard.webp' />
                </div>
            </section>

            <section className='w-[80%] mx-auto h-auto flex flex-wrap flex-col md:flex-row justify-center gap-5 mt-16 items-center'>
                {viza.map((vizacard) => (
                    <div
                        key={vizacard.id}
                        className='md:w-[25%] w-full perspective group'>
                        <div className='card relative border-2 border-gray-200 rounded-xl overflow-hidden transition-transform duration-500 transform-gpu group-hover:rotate-x-6 group-hover:-rotate-y-6 group-hover:shadow-2xl'>
                            <div className='relative overflow-hidden h-48'>
                                <img
                                    src={vizacard.img}
                                    className='object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-2'
                                />
                                <div className='absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                            </div>

                            <div className='p-4 bg-white relative z-10'>
                                <h1 className='font-bold text-lg mb-1 group-hover:text-blue-600 transition-colors duration-300'>{vizacard.h}</h1>
                                <p className='text-gray-600 text-sm mb-2'>{vizacard.title}</p>
                                <hr />
                                <h2 className='text-gray-800 mt-2 font-medium'>{vizacard.price}</h2>
                            </div>
                            <span className='absolute inset-0 bg-linear-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none'></span>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}
