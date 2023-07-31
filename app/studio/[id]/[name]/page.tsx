'use client';

import Sidebar from '@/components/Sidebar';
import { useProducer } from '@/hooks/useProducer';
import Loading from '@/components/Loading';
import AnimesGrid from '@/components/AnimesGrid';

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
