'use client';

import Card from '@/components/Card';
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
        <div className='w-full h-full flex gap-3'>
            <div className='left-content w-full xl:w-[907px] xl:basis-10/12 mx-auto'>
                <div className='top h-12  text-ani-blue font-semibold text-xl'>
                    <span className='capitalize'>{name}</span> Anime
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
            <div className='right-content xl:basis-2/12 hidden xl:flex'>
                <Sidebar>Most viewed</Sidebar>
            </div>
        </div>
    );
}
