import { AiFillPlayCircle } from 'react-icons/ai';
import {
    BsFillBookmarkPlusFill,
    BsFillChatRightQuoteFill,
    BsFillMicFill,
    BsFillPlayFill,
    BsFillStarFill,
} from 'react-icons/bs';
import { FaStopwatch } from 'react-icons/fa';
import Button from './Button';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
    id?: number;
    title?: string;
    image: string;
    description?: string;
    score?: number | null;
    type?: string;
    aired?: string;
    rating?: string | null;
};

const Card = ({
    id,
    title,
    image,
    description,
    score,
    type,
    aired,
    rating,
}: Props): JSX.Element => {
    return (
        <div className='relative h-full transition duration-200 hover:scale-[0.98]'>
            <div className='relative h-4/5 w-full'>
                <Image
                    className='absolute z-0'
                    loader={() => image}
                    src={image}
                    fill={true}
                    objectFit='cover'
                    objectPosition='center'
                    alt='img'
                ></Image>
                <div className='absolute bottom-0 z-10 flex h-1/2 w-full items-end bg-gradient-to-t from-[#202020] from-25%'>
                    <div className='flex w-full justify-center pb-5'>cc</div>
                </div>
            </div>
            <div className='absolute bottom-0 z-10 h-1/5 w-full bg-[#202020] px-2'>
                <div className='-mt-3 line-clamp-2 h-1/2 text-center text-[13px]/4 font-normal text-ani-blue'>
                    {title}
                </div>
                <div className='mt-3 flex gap-2 text-xs text-zinc-400/80'>
                    <div>{type}</div>
                    <div>.</div>
                    <div>24 min</div>
                </div>
            </div>
        </div>
    );
};

export default Card;
