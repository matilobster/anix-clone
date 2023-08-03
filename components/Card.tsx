import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { BiPlay } from 'react-icons/bi';
import { BsFillChatRightQuoteFill, BsFillMicFill } from 'react-icons/bs';

type Props = {
    id: number;
    title?: string;
    image: string;
    score?: number | null;
    type?: string;
    rating?: string | null;
};

const Card = ({
    id,
    title,
    image,
    score,
    type,
    rating,
}: Props): JSX.Element => {
    const router = useRouter();

    return (
        <div className='relative aspect-[9/16] w-full transition duration-200 hover:scale-[0.98] md:max-h-[392px] lg:max-h-[334px]'>
            <div className='absolute z-20 flex h-full w-full items-center justify-center'>
                <button
                    className='group -mt-12 flex h-full w-full items-center justify-center'
                    onClick={() => router.push('/anime/' + id)}
                >
                    <BiPlay
                        size={200}
                        className='opacity-0 transition duration-300 group-hover:scale-[0.4] group-hover:opacity-100'
                    ></BiPlay>
                </button>
            </div>
            <div className='relative h-4/5 w-full'>
                <Image
                    className='absolute z-0'
                    loader={() => image}
                    src={image}
                    fill={true}
                    alt='img'
                    unoptimized
                ></Image>

                <div className='absolute bottom-0 z-10 flex h-1/2 w-full items-end bg-gradient-to-t from-[#202020] from-25%'>
                    <div className='mb-6 flex w-full justify-center gap-[2px] text-[12px] text-zinc-300'>
                        <div className='flex h-5 items-center gap-[2px] bg-[#4c4c4c] px-1  '>
                            <BsFillChatRightQuoteFill size={11} /> 16
                        </div>
                        <div className='flex h-5 items-center gap-[2px] bg-[#4c4c4c] px-1'>
                            <BsFillMicFill size={12} /> 20
                        </div>
                        <div className='h-5 items-center gap-[2px] bg-[#3d3d3d] px-1 '>
                            ?
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 z-10 h-1/5 w-full bg-[#202020] px-2'>
                <div className='relative h-full'>
                    <div className='-mt-3 line-clamp-2 h-9 text-center text-[13px]/4 font-normal text-ani-blue'>
                        {title}
                    </div>
                    <div className='absolute bottom-0 flex items-end gap-2 text-xs text-zinc-400/80'>
                        <div>{type}</div>
                        <div>.</div>
                        <div>24 min</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
