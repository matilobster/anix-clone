'use client';

import Card from '@/components/SlideCard';
import Sidebar from '@/components/Sidebar';
import { useProducer } from '@/hooks/useProducer';

export default function Filter({
    params,
}: {
    params: { id: string; name: string };
}) {
    const name = params.name.replace(/-/g, ' ');
    const { animes, isLoading } = useProducer(params.id);

    return (
        <div className='flex h-full w-full gap-3'>
            <div className='left-content mx-auto w-full xl:w-[907px] xl:basis-10/12'>
                <div className='top h-12  text-xl font-semibold text-ani-blue'>
                    Animes by <span className='capitalize'>{name}</span>
                </div>
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
            </div>
            <div className='right-content hidden xl:flex xl:basis-2/12'>
                <Sidebar>Most viewed</Sidebar>
            </div>
        </div>
    );
}
