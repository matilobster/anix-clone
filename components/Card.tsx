import { AiFillPlayCircle } from 'react-icons/ai';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import Button from './Button';
import SwiperNavButton from './SwiperNavButton';

type Props = {
    title?: string;
    desc?: string;
    photo?: string;
    precio?: number;
};

const Card = ({ title, desc, photo, precio }: Props): JSX.Element => {
    const animes = [
        {
            name: 'Jujustu Kaisen 2nd Season',
            image: 'https://areajugones.sport.es/wp-content/uploads/2023/03/jujutsu-kaisen-temporada-2.jpeg',
        },
        {
            name: 'Mushoku Tensei II: Isekai Ittara Honki Dasu',
            image: 'https://static.bunnycdn.ru/i/cache/images/6/66/66f02ab78e1b850366ff56353c5f2073.jpg',
        },
    ];

    return (
        <div className='h-fit w-full text-zinc-200 flex'>
            <div className='w-36 sm:w-48 lg:w-52'>
                <img
                    src={animes[1].image}
                    alt='jujutsu'
                    className='object-contain min-w-[104px]'
                />
            </div>
            <div
                className={`w-full relative bg-center bg-cover min-h-full`}
                style={{
                    backgroundImage: `url(${animes[0].image})`,
                }}
            >
                <div className='grid grid-rows-3 md:grid-rows-4 backdrop-blur-lg bg-zinc-900/80 h-full px-4 text-zinc-300/75'>
                    <h1 className='tittle text-sky-200/90 flex items-center text-base sm:text-lg lg:text-xl'>
                        {title}
                    </h1>
                    <h2 className='details'>detalles</h2>
                    <div className='description hidden md:flex h-8'>
                        descripcion
                    </div>
                    <div className='line-4 flex items-center '>
                        <div className='basis-10/12 flex space-x-2'>
                            <Button
                                size='medium'
                                appearance='blue'
                                icon={<AiFillPlayCircle />}
                            >
                                <div>Watch Now</div>
                            </Button>
                            <Button
                                size='medium'
                                appearance='gray'
                                icon={<BsFillBookmarkPlusFill />}
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