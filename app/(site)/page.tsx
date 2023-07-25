'use client';

// Import Swiper React components
import { SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import Slides from '@/components/Slides';
import Card from '@/components/Card';
import { useTop10Season } from '@/hooks/useTop10Season';

export default function Home() {
    const { animes: top10, isLoading } = useTop10Season();

    return (
        <div className='w-full h-full'>
            <div className='top'>
                {isLoading && (
                    <span className='text-xl font-bold text-white'>
                        Cargando...
                    </span>
                )}
                <Slides>
                    {top10.map((anime, index: number) => (
                        <SwiperSlide key={index}>
                            <Card
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
    );
}
