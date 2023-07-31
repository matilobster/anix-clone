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
    title: string;
    image: string;
    description?: string;
    score?: number | null;
    type?: string;
    aired?: string;
    rating?: string | null;
};

const SlideCard = ({
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
        <div className='flex h-fit w-full text-zinc-200 '>
            <div className='w-36 sm:w-48 lg:w-52'>
                <img
                    src={image}
                    alt='jujutsu'
                    className='min-w-[104px] object-contain'
                />
            </div>
            <div
                className={`relative min-h-full w-full bg-cover bg-center`}
                style={{
                    backgroundImage: `url(${image})`,
                }}
            >
                <div className='grid h-full w-full grid-rows-3 bg-zinc-900/80 px-4 text-zinc-300/80 backdrop-blur-lg md:grid-rows-4'>
                    <div className='tittle flex items-end text-base text-sky-200/90 sm:text-lg lg:text-xl'>
                        {title}
                    </div>
                    <div className='details flex items-center gap-3 text-sm lg:text-base xl:text-lg'>
                        <div className='rating hidden items-center gap-1 sm:flex'>
                            <BsFillStarFill size={10} />
                            {score}
                        </div>
                        <div className='category hidden items-center gap-1 sm:flex'>
                            <BsFillPlayFill size={14} />
                            {type}
                        </div>
                        <div className='release hidden items-center gap-1 md:flex'>
                            <FaStopwatch size={13} />
                            {aired}
                        </div>
                        <div className='rated hidden h-5 items-center border-[1px] border-solid border-current px-1 text-[10px] sm:flex'>
                            {rating?.substring(0, 2)}
                        </div>
                        <div className='quality hidden h-5 items-center bg-zinc-300/75 px-2 text-[11px] font-semibold text-black mix-blend-screen sm:flex'>
                            HD
                        </div>
                        <div className='nose flex h-5 items-center gap-[2px] text-xs'>
                            <div className='flex h-full items-center gap-[2px] bg-[#4c4c4c] px-1 text-[10px]'>
                                <BsFillChatRightQuoteFill size={11} />
                                1096
                            </div>
                            <div className='flex h-5 items-center gap-[2px] bg-[#4c4c4c] px-1'>
                                <BsFillMicFill size={12} /> 20
                            </div>
                            <div className='hidden h-5 items-center gap-[2px] bg-[#4c4c4c] px-1 xl:flex'>
                                ?
                            </div>
                        </div>
                    </div>
                    <div className='description -mt-2 hidden h-12 overflow-hidden text-ellipsis text-justify text-xs sm:flex md:h-14 md:text-sm'>
                        {description}
                    </div>
                    <div className='line-4 flex h-12 items-center'>
                        <div className='flex basis-10/12 space-x-2'>
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

export default SlideCard;
