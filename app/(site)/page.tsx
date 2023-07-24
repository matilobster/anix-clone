'use client';

import Card from '@/components/Card';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { MdOutlineNavigateNext } from 'react-icons/md';
import SwiperNavButton from '@/components/SwiperNavButton';

export default function Home() {
    return (
        <div className=''>
            <div className='top'>
                <Swiper
                    slidesPerView={1}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}
                    grabCursor={true}
                    loop={true}
                    // navigation={true}
                    modules={[Autoplay]}
                    // className='mySwiper'
                    className='relative z-0'
                >
                    <SwiperSlide>
                        <Card title='jujutsu'></Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card title='mushoku'></Card>
                    </SwiperSlide>
                    <div className='flex justify-end absolute z-10 bottom-0 right-2'>
                        <SwiperNavButton></SwiperNavButton>
                    </div>
                </Swiper>
            </div>
        </div>
    );
}
