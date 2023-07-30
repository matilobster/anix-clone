'use client';

// Import Swiper React components
import { SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import Slides from '@/components/Slides';
import Card from '@/components/Card';
import Sidebar from '@/components/Sidebar';
import Loading from '@/components/Loading';
import { top10Season } from '@/hooks/useTop10Season';

export default function Home() {
    const { animes: top10, isLoading } = top10Season();

    return (
        <div className='w-full h-full flex gap-3'>
            <div className='left-content w-full xl:w-[907px] xl:basis-10/12 mx-auto'>
                <div className='top h-40'>
                    {isLoading ? (
                        <Loading></Loading>
                    ) : (
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
                                        aired={anime.aired.string.substring(
                                            0,
                                            11
                                        )}
                                        rating={anime.rating}
                                    ></Card>
                                </SwiperSlide>
                            ))}
                        </Slides>
                    )}
                </div>
                {/* <div className=' h-fit w-full '>
                    <div className=''>hola</div>
                    <div className=''>
                        <div className='w-full h-40 hover:h-fit relative'>
                            <div className='bg-[#191919]]w-full h-40 hover:h-fit absolute hover:relative z-10 hover:z-50 overflow-hidden'>
                                <Link href={'/studio/569/mappa'}>
                                    <div className=' h-96'>mappa</div>
                                </Link>
                            </div>
                            <div className='bg-gradient-to-t from-[#191919] w-full h-full absolute z-20 hover:z-0 '></div>
                        </div>
                    </div>
                    <div className=''>chao</div>
                </div> */}
            </div>
            <div className='right-content xl:basis-2/12 hidden xl:flex'>
                <Sidebar>Most viewed</Sidebar>
            </div>
        </div>
    );
}
