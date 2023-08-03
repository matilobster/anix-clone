'use client';

import Loading from '@/components/Loading';
import Sidebar from '@/components/Sidebar';
import { useFilter } from '@/hooks/useFilter';
import AnimesGrid from '@/components/AnimesGrid';

export default function Filter({ params }: { params: { q: string } }) {
    const keyword = params.q;

    const { animes, isLoading } = useFilter(keyword);

    return (
        <div className='flex h-full w-full gap-3'>
            <div className='left-content mx-auto w-full xl:w-[907px] xl:basis-10/12'>
                <div className='top h-12  text-xl font-semibold text-ani-blue'>
                    Animes para: <span className='capitalize'>{keyword}</span>
                </div>
                {isLoading ? (
                    <Loading></Loading>
                ) : (
                    <AnimesGrid animes={animes}></AnimesGrid>
                )}
            </div>
            <div className='right-content hidden xl:flex xl:basis-2/12'>
                <Sidebar>Most viewed</Sidebar>
            </div>
        </div>
    );
}
