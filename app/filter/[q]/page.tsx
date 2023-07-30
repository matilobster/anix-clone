'use client';

import Card from '@/components/Card';
import Loading from '@/components/Loading';
import Sidebar from '@/components/Sidebar';
import { useFilter } from '@/hooks/useFilter';

export default function Filter({ params }: { params: { q: string } }) {
    const keyword = params.q;

    const { animes, isLoading } = useFilter(keyword);
    // console.log(animes);

    return (
        <div className='w-full h-full flex gap-3'>
            <div className='left-content w-full xl:w-[907px] xl:basis-10/12 mx-auto'>
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
            <div className='right-content xl:basis-2/12 hidden xl:flex'>
                <Sidebar>Most viewed</Sidebar>
            </div>
        </div>
    );
}
