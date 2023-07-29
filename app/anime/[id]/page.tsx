'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import { useAnime } from '@/hooks/useAnime';
import Loading from '@/components/Loading';

function anime({ params }: { params: { id: number } }) {
    const { anime, isLoading } = useAnime(params.id);

    let trailer = null;
    let image = 'https://www.freeiconspng.com/uploads/no-image-icon-15.png';

    if (anime?.trailer.youtube_id) {
        trailer =
            'http://www.youtube.com/embed/' +
            anime?.trailer.youtube_id +
            '/?enablejsapi=1&wmode=opque&autoplay=0&modestbranding=1&showinfo=0&modestbranding=1';
    }
    if (anime?.images.jpg.large_image_url) {
        image = anime?.images.jpg.large_image_url;
    }

    return (
        <div className='w-full h-full flex gap-3'>
            <div className='left-content w-full xl:w-[907px] xl:basis-10/12 mx-auto'>
                <div className='trailer-image w-full aspect-video flex justify-center'>
                    {isLoading ? (
                        <Loading></Loading>
                    ) : (
                        <div className='trailer-image w-full aspect-video flex justify-center'>
                            {trailer ? (
                                <iframe
                                    className='w-full h-full'
                                    src={trailer}
                                    title={anime?.title}
                                    allow='clipboard-write; encrypted-media; gyroscope;'
                                    allowFullScreen
                                    rel='1'
                                ></iframe>
                            ) : (
                                <div className='image w-full aspect-video flex justify-center items-center '>
                                    <img
                                        src={image}
                                        alt='no-image'
                                        className='object-contain h-full'
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <div className='right-content xl:basis-2/12 hidden xl:flex'>
                <Sidebar>JUJUTSU</Sidebar>
            </div>
        </div>
    );
}

export default anime;
