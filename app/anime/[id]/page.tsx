'use client';

import React from 'react';
import { useAnime } from '@/hooks/useAnime';
import Loading from '@/components/Loading';
import AnimeSidebar from '@/components/AnimeSidebar';
import {
    BsFillChatRightQuoteFill,
    BsFillMicFill,
    BsFillStarFill,
} from 'react-icons/bs';

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
                <AnimeSidebar>
                    <div className='img flex justify-center pb-1'>
                        <img
                            src={image}
                            alt='sidebar-image'
                            className='h-[336px]'
                        />
                    </div>
                    <div className='tittle text-lg font-normal'>
                        {anime?.title}
                    </div>
                    <div className='nose py-2 flex items-center'>
                        <div className='flex items-center gap-2'>
                            <div className='rated hidden sm:flex items-center bg-white px-2 h-5 text-[12px] font-semibold text-black mix-blend-screen'>
                                {anime?.rating?.substring(0, 2)}
                            </div>
                            <div className='quality flex justify-center items-center bg-ani-blue h-5 px-2 text-xs font-semibold text-black mix-blend-screen'>
                                HD
                            </div>
                            <div className='nose flex text-xs h-5 items-center gap-[2px]'>
                                <div className='bg-[#4c4c4c] text-zinc-300/75 h-full flex items-center px-1 gap-[2px] text-[10px]'>
                                    <BsFillChatRightQuoteFill size={11} />4
                                </div>
                                <div className='bg-[#4c4c4c] text-zinc-300/75 h-5 flex items-center px-1 gap-[2px]'>
                                    <BsFillMicFill size={12} /> 2
                                </div>
                                <div className='bg-[#4c4c4c] text-zinc-300/75 h-5 items-center px-1 gap-[2px]'>
                                    23
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='description text-[12px] pb-2  text-zinc-400/70 space-y-2'>
                        <div className='h-8 hover:h-fit text-ellipsis overflow-hidden'>
                            {anime?.synopsis}
                        </div>

                        <div className='button bg-zinc-700 py-1 px-2 w-fit'>
                            view all
                        </div>
                    </div>
                    <div className='details h-40 hover:h-fit text-[12px] font-medium space-y-2 pb-3 overflow-hidden relative opacity-50 hover:opacity-100'>
                        <div className='z-10 hover:z-30 h-full w-full space-y-2'>
                            <div className='flex'>
                                <div className='w-24'>Type:</div>
                                <div className='text-ani-blue capitalize'>
                                    {anime?.type}
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-24'>Country:</div>
                                <div className='text-ani-blue capitalize'>
                                    Japan
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-24'>Premiered:</div>
                                <div className='text-ani-blue capitalize'>
                                    {anime?.season} {anime?.year}
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-24'>Genre:</div>
                                <div className='text-ani-blue capitalize'>
                                    {anime?.genres.map((genre, i) => (
                                        <span key={i}>
                                            {(i ? ', ' : '') + genre.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-24'>Date aired:</div>
                                <div className='capitalize'>
                                    {anime?.aired.string}
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-24'>Status:</div>
                                <div className='capitalize'>
                                    {anime?.status}
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-24'>Duration:</div>
                                <div className='capitalize'>
                                    {anime?.duration}
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-24'>Episodes:</div>
                                <div className='capitalize'>
                                    {anime?.episodes}
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-24'>Studios:</div>
                                <div className='text-ani-blue capitalize'>
                                    {anime?.studios.map((studio, i) => (
                                        <span key={i}>
                                            {(i ? ', ' : '') + studio.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-24'>Producers:</div>
                                <div className='text-ani-blue capitalize w-44'>
                                    {anime?.producers.map((producer, i) => (
                                        <span key={i}>
                                            {(i ? ', ' : '') + producer.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='absolute z-20 hover:opacity-0 hover:z-0 h-full w-full inset-y-0 left-0 bg-gradient-to-t from-[#202020] from-25%'></div>
                    </div>
                    <div className='stars h-36 bg-zinc-900/60 p-4'>
                        <div className='score'>
                            <div className='flex items-center gap-1 text-[14px] relative'>
                                <BsFillStarFill
                                    size={12}
                                    className='text-yellow-500'
                                />
                                {anime?.score}/10
                                <div className='voters text-xs text-zinc-500'>
                                    ({anime?.scored_by} voted)
                                </div>
                                <div className='absolute right-0 text-ani-blue'>
                                    Vote now
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimeSidebar>
            </div>
        </div>
    );
}

export default anime;
