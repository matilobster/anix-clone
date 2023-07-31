'use client';

import Card from '@/components/SlideCard';
import Loading from '@/components/Loading';
import Sidebar from '@/components/Sidebar';
import { useFilter } from '@/hooks/useFilter';

export default function Filter({ params }: { params: { q: string } }) {
    const keyword = params.q;

    const { animes, isLoading } = useFilter(keyword);
    // console.log(animes);

    return (
        <div className='flex h-full w-full gap-3'>
            <div className='left-content mx-auto w-full xl:w-[907px] xl:basis-10/12'>
                <div className='top'>
                    {isLoading ? (
                        <Loading></Loading>
                    ) : (
                        <div>
                            {animes.map((anime, index: number) => (
                                <Card
                                    key={index}
                                    id={anime.mal_id}
                                    title={anime.title}
                                    image={anime.images.jpg.large_image_url}
                                    description={anime.synopsis}
                                    score={anime.score}
                                    type={anime.type}
                                    aired={anime.aired.string.substring(0, 11)}
                                    rating={anime.rating}
                                ></Card>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className='right-content hidden bg-white xl:flex xl:basis-2/12'>
                <Sidebar>Most viewed</Sidebar>
            </div>
        </div>
    );
}
