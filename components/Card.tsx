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

type Props = {
    id?: number;
    title?: string;
    image?: string;
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
        <div className='h-fit w-full text-zinc-200 flex '>
            <div className='w-36 sm:w-48 lg:w-52'>
                <img
                    src={image}
                    alt='jujutsu'
                    className='object-contain min-w-[104px]'
                />
            </div>
            <div
                className={`w-full relative bg-center bg-cover min-h-full`}
                style={{
                    backgroundImage: `url(${image})`,
                }}
            >
                <div className='grid grid-rows-3 md:grid-rows-4 backdrop-blur-lg bg-zinc-900/80 h-full px-4 text-zinc-300/80 w-full'>
                    <div className='tittle text-sky-200/90 flex items-end text-base sm:text-lg lg:text-xl'>
                        {title}
                    </div>
                    <div className='details flex items-center gap-3 text-sm lg:text-base xl:text-lg'>
                        <div className='rating hidden sm:flex items-center gap-1'>
                            <BsFillStarFill size={10} />
                            {score}
                        </div>
                        <div className='category hidden sm:flex items-center gap-1'>
                            <BsFillPlayFill size={14} />
                            {type}
                        </div>
                        <div className='release hidden md:flex items-center gap-1'>
                            <FaStopwatch size={13} />
                            {aired}
                        </div>
                        <div className='rated hidden sm:flex items-center border-solid border-[1px] border-current px-1 h-5 text-[10px]'>
                            {rating?.substring(0, 2)}
                        </div>
                        <div className='quality hidden sm:flex items-center bg-zinc-300/75 h-5 px-2 text-[11px] font-semibold text-black mix-blend-screen'>
                            HD
                        </div>
                        <div className='nose flex text-xs h-5 items-center gap-[2px]'>
                            <div className='bg-[#4c4c4c] h-full flex items-center px-1 gap-[2px] text-[10px]'>
                                <BsFillChatRightQuoteFill size={11} />
                                1096
                            </div>
                            <div className='bg-[#4c4c4c] h-5 flex items-center px-1 gap-[2px]'>
                                <BsFillMicFill size={12} /> 20
                            </div>
                            <div className='bg-[#4c4c4c] h-5 xl:flex items-center px-1 gap-[2px] hidden'>
                                ?
                            </div>
                        </div>
                    </div>
                    <div className='description hidden sm:flex h-12 md:h-14 text-xs md:text-sm text-ellipsis overflow-hidden text-justify -mt-2'>
                        {description}
                    </div>
                    <div className='line-4 flex items-center h-12'>
                        <div className='basis-10/12 flex space-x-2'>
                            <Link href={'/anime/' + id}>
                                <Button
                                    size='medium'
                                    appearance='blue'
                                    icon={<AiFillPlayCircle />}
                                >
                                    <div>Watch Now</div>
                                </Button>
                            </Link>

                            <Button
                                size='medium'
                                appearance='gray'
                                icon={<BsFillBookmarkPlusFill />}
                                className='hidden sm:flex'
                            >
                                <div>Bookmark</div>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
