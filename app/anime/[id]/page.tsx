'use client';

import React, { useState } from 'react';
import { useAnime } from '@/hooks/useAnime';
import Loading from '@/components/Loading';
import AnimeSidebar from '@/components/AnimeSidebar';
import {
    BsFillChatRightQuoteFill,
    BsFillMicFill,
    BsFillStarFill,
} from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

function anime({ params }: { params: { id: number } }) {
    const { anime, isLoading } = useAnime(params.id);

    const router = useRouter();

    let trailer = null;
    let image = 'https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png';

    const [toggle, setToggle] = useState<boolean>(true);

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
        <div className='flex h-full w-full gap-3'>
            <div className='left-content mx-auto w-full xl:w-[907px] xl:basis-10/12'>
                <div className='trailer-image flex aspect-video w-full justify-center'>
                    {isLoading ? (
                        <Loading></Loading>
                    ) : (
                        <div className='trailer-image flex aspect-video w-full justify-center'>
                            {trailer ? (
                                <iframe
                                    className='h-full w-full'
                                    src={trailer}
                                    title={anime?.title}
                                    allowFullScreen
                                    rel='1'
                                ></iframe>
                            ) : (
                                <div className='image flex aspect-video w-full items-center justify-center '>
                                    <img
                                        src={image}
                                        alt='no-image'
                                        className='h-full object-contain'
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <div className='right-content hidden xl:flex xl:basis-2/12'>
                <AnimeSidebar>
                    <div className='img flex justify-center pb-1'>
                        <Image
                            src={image}
                            loader={() => image}
                            height={330}
                            width={232}
                            alt='siebar-image'
                            priority={true}
                            quality={90}
                        ></Image>
                    </div>
                    <div className='tittle text-lg font-normal'>
                        {anime?.title}
                    </div>
                    <div className='nose flex items-center py-2'>
                        <div className='flex items-center gap-2'>
                            <div className='rated hidden h-5 items-center bg-white px-2 text-[12px] font-semibold text-black mix-blend-screen sm:flex'>
                                {anime?.rating?.substring(0, 2)}
                            </div>
                            <div className='quality flex h-5 items-center justify-center bg-ani-blue px-2 text-xs font-semibold text-black mix-blend-screen'>
                                HD
                            </div>
                            <div className='nose flex h-5 items-center gap-[2px] text-xs'>
                                <div className='flex h-full items-center gap-[2px] bg-[#4c4c4c] px-1 text-[10px] text-zinc-300/75'>
                                    <BsFillChatRightQuoteFill size={11} />4
                                </div>
                                <div className='flex h-5 items-center gap-[2px] bg-[#4c4c4c] px-1 text-zinc-300/75'>
                                    <BsFillMicFill size={12} /> 2
                                </div>
                                <div className='h-5 items-center gap-[2px] bg-[#4c4c4c] px-1 text-zinc-300/75'>
                                    23
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='description space-y-2 pb-2 text-[12px] text-zinc-400/70'>
                        <div
                            className={twMerge(
                                'h-fit text-ellipsis',
                                toggle
                                    ? 'line-clamp-3 '
                                    : 'line-clamp-none max-h-36 overflow-scroll',
                            )}
                        >
                            {anime?.synopsis}
                        </div>
                        <button
                            className='button w-fit bg-zinc-700 px-2 py-1 transition duration-100 hover:bg-zinc-600 hover:text-ani-blue'
                            onClick={() => setToggle(!toggle)}
                        >
                            {toggle ? 'view all' : 'view less'}
                        </button>
                    </div>
                    <div className='details relative h-40 space-y-2 pb-3 text-[12px] font-medium hover:h-fit '>
                        <div className='absolute z-10 h-40 w-full space-y-2 overflow-hidden bg-[#202020] opacity-50 hover:relative hover:z-50 hover:h-fit hover:opacity-100'>
                            <div className='flex'>
                                <div className='w-24'>Type:</div>
                                <div className='capitalize text-ani-blue'>
                                    {anime?.type}
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-24'>Country:</div>
                                <div className='capitalize text-ani-blue'>
                                    Japan
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-24'>Premiered:</div>
                                <div className='capitalize text-ani-blue'>
                                    {anime?.season} {anime?.year}
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-24'>Genre:</div>
                                <div className='capitalize text-ani-blue'>
                                    {anime?.genres.map((genre, i) => (
                                        <Link
                                            key={i}
                                            href={`/genre/${
                                                genre.mal_id
                                            }/${genre.name
                                                .replace(/ /g, '-')
                                                .toLowerCase()}`}
                                        >
                                            {(i ? ', ' : '') + genre.name}
                                        </Link>
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
                                <div className='capitalize text-ani-blue'>
                                    {anime?.studios.map((studio, i) => (
                                        <Link
                                            key={i}
                                            href={`/studio/${
                                                studio.mal_id
                                            }/${studio.name
                                                .replace(/ /g, '-')
                                                .toLowerCase()}`}
                                        >
                                            {(i ? ', ' : '') + studio.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='w-24'>Producers:</div>
                                <div className='w-44 capitalize text-ani-blue'>
                                    {anime?.producers.map((producer, i) => (
                                        <Link
                                            key={i}
                                            href={`/producer/${
                                                producer.mal_id
                                            }/${producer.name
                                                .replace(/ /g, '-')
                                                .toLowerCase()}`}
                                        >
                                            {(i ? ', ' : '') + producer.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='absolute inset-y-0 z-20 h-full w-full bg-gradient-to-t from-[#202020] from-25% hover:z-0 '></div>
                    </div>
                    <div className='stars h-36 bg-zinc-900/60 p-4'>
                        <div className='score'>
                            <div className='relative flex items-center gap-1 text-[14px]'>
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
