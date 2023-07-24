import React from 'react';
import { useRouter } from 'next/router';

// Import Swiper React components
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

interface SlideProps {
    children: React.ReactNode;
}

const Slides: React.FC<SlideProps> = ({ children }): JSX.Element => {
    const { push } = useRouter();
    // console.log(jobs);

    return (
        <>
            <Swiper
                className='mySwiper'
                modules={[Navigation]}
                navigation
                grabCursor={true}
                slidesPerView={1}
            >
                {children}
            </Swiper>
        </>
    );
};

export default Slides;
