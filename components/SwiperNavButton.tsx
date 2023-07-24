import React from 'react';
import { useSwiper } from 'swiper/react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

const SwiperNavButton = () => {
    const swiper = useSwiper();

    return (
        <div>
            <button onClick={() => swiper.slidePrev()}>
                <MdNavigateBefore
                    size={38}
                    className='text-zinc-400/75 transition duration-150 hover:text-[#95b6d0]'
                />
            </button>
            <button onClick={() => swiper.slideNext()}>
                <MdNavigateNext
                    size={38}
                    className='text-zinc-400/75 transition duration-150 hover:text-[#95b6d0]'
                />
            </button>
        </div>
    );
};

export default SwiperNavButton;
