'use client';

// Import Swiper React components
import { SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import Slides from '@/components/Slides';
import SlideCard from '@/components/SlideCard';
import Sidebar from '@/components/Sidebar';
import Loading from '@/components/Loading';
import { top10Season } from '@/hooks/useTop10Season';
import AnimesGrid from '@/components/AnimesGrid';

export default function Home() {
    const { animes: top10, isLoading } = top10Season();

    return (
        <div className='flex h-full w-full gap-3'>
            <div className='left-content mx-auto w-full space-y-4 xl:w-[907px] xl:basis-10/12'>
                <div className='top h-fit pb-10'>
                    {isLoading ? (
                        <Loading></Loading>
                    ) : (
                        <Slides>
                            {top10.map((anime, index: number) => (
                                <SwiperSlide key={index}>
                                    <SlideCard
                                        id={anime.mal_id}
                                        title={anime.title}
                                        image={anime.images.jpg.large_image_url}
                                        description={anime.synopsis}
                                        score={anime.score}
                                        type={anime.type}
                                        aired={anime.aired.string.substring(
                                            0,
                                            11,
                                        )}
                                        rating={anime.rating}
                                    ></SlideCard>
                                </SwiperSlide>
                            ))}
                        </Slides>
                    )}
                </div>
                <div className='mid'>
                    <div>
                        <div className='text-xl font-normal text-ani-blue'>
                            Recent Update
                            <hr className='h-px border-0 bg-ani-gray' />
                        </div>
                    </div>
                    {isLoading ? (
                        <Loading></Loading>
                    ) : (
                        <AnimesGrid animes={top10}></AnimesGrid>
                    )}
                </div>
            </div>

            <div className='right-content hidden xl:flex xl:basis-2/12'>
                <Sidebar>Most viewed</Sidebar>
            </div>
        </div>
    );
}
