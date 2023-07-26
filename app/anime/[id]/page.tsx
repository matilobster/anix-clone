'use client';

import Sidebar from '@/components/Sidebar';
import { useAnime } from '@/hooks/useAnime';
import React from 'react';

function anime({ params }: { params: { id: number } }) {
    const { anime, isLoading } = useAnime(params.id);

    return (
        <div className='w-full h-full flex gap-3'>
            <div className='left-content w-full xl:w-[907px] xl:basis-10/12 mx-auto'>
                {isLoading && (
                    <span className='text-lg h-36 font-semibold text-white flex justify-center items-center'>
                        Cargando...
                    </span>
                )}
                <div className='trailer'>{anime?.title}</div>
            </div>
            <div className='right-content xl:basis-2/12 hidden xl:flex'>
                <Sidebar>JUJUTSU</Sidebar>
            </div>
        </div>
    );
}

export default anime;
