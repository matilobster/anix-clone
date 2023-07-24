import React from 'react';
// import { useRouter } from 'next/router';

// Import Swiper React components
import { Autoplay } from 'swiper/modules';
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SwiperNavButton from './SwiperNavButton';

interface SlideProps {
    children: React.ReactNode;
}

const Slides: React.FC<SlideProps> = ({ children }): JSX.Element => {
    return (
        <div className='w-full'>
            <Swiper
                slidesPerView={1}
                spaceBetween={350}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                grabCursor={true}
                loop={true}
                modules={[Autoplay]}
                className='relative z-0'
            >
                {children}
                <div className='flex justify-end absolute z-10 bottom-0 right-2'>
                    <SwiperNavButton></SwiperNavButton>
                </div>
            </Swiper>
        </div>
    );
};

export default Slides;
