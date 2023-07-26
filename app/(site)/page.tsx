'use client';

// Import Swiper React components
import { SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import Slides from '@/components/Slides';
import Card from '@/components/Card';
import { useTop10Season } from '@/hooks/useTop10Season';
import Sidebar from '@/components/Sidebar';

export default function Home() {
    const { animes: top10, isLoading } = useTop10Season();

    return (
        <div className='w-full h-full flex gap-3'>
            <div className='left-content w-full xl:w-[907px] xl:basis-10/12 mx-auto'>
                <div className='top'>
                    {isLoading && (
                        <span className='text-lg h-36 font-semibold text-white flex justify-center items-center'>
                            Cargando...
                        </span>
                    )}
                    <Slides>
                        {top10.map((anime, index: number) => (
                            <SwiperSlide key={index}>
                                <Card
                                    id={anime.mal_id}
                                    title={anime.title}
                                    image={anime.images.jpg.large_image_url}
                                    description={anime.synopsis}
                                    score={anime.score}
                                    type={anime.type}
                                    aired={anime.aired.string.substring(0, 11)}
                                    rating={anime.rating}
                                ></Card>
                            </SwiperSlide>
                        ))}
                    </Slides>
                </div>
            </div>
            <div className='right-content xl:basis-2/12 hidden xl:flex'>
                <Sidebar>Most viewed</Sidebar>
            </div>
        </div>
    );
}
