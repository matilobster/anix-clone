'use client';

// Import Swiper React components
import { SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import Slides from '@/components/Slides';
import Card from '@/components/Card';

export default function Home() {
    const animes = [
        {
            id: 0,
            tittle: 'Jujustu Kaisen 2nd Season',
            image: 'https://areajugones.sport.es/wp-content/uploads/2023/03/jujutsu-kaisen-temporada-2.jpeg',
            description: 'hola que pasa',
            rating: 8,
        },
        {
            id: 1,
            tittle: 'Mushoku Tensei II: Isekai Ittara Honki Dasu',
            image: 'https://static.bunnycdn.ru/i/cache/images/6/66/66f02ab78e1b850366ff56353c5f2073.jpg',
            description: 'hola que pasa',
            rating: 9,
        },
    ];

    return (
        <div className=''>
            <div className='top'>
                <Slides>
                    {animes.map((anime, index: number) => (
                        <SwiperSlide key={index}>
                            <Card
                                title={anime.tittle}
                                image={anime.image}
                                description={anime.description}
                                rating={anime.rating}
                            ></Card>
                        </SwiperSlide>
                    ))}
                </Slides>
            </div>
        </div>
    );
}
