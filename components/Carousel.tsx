import { AiFillPlayCircle } from 'react-icons/ai';

const Carousel = () => {
    const anime = {
        name: 'Jujustu Kaisen 2nd Season',
        image: 'https://areajugones.sport.es/wp-content/uploads/2023/03/jujutsu-kaisen-temporada-2.jpeg',
    };

    return (
        <div className='h-fit w-full text-zinc-500 flex'>
            <div className='w-36 sm:w-48 lg:w-52'>
                <img
                    src={anime.image}
                    alt='jujutsu'
                    className='object-contain min-w-[104px]'
                />
            </div>
            <div
                className={`w-full relative bg-center bg-cover min-h-full`}
                style={{
                    backgroundImage: `url(${anime.image})`,
                }}
            >
                <div className='grid grid-rows-3 md:grid-rows-4 backdrop-blur-lg bg-zinc-900/80 h-full p-2'>
                    <h1 className='tittle text-sky-200/90 flex items-center '>
                        {anime.name}
                    </h1>
                    <h2 className='details text-white'>detalles</h2>
                    <div className='description hidden md:flex text-white'>
                        descripcion
                    </div>
                    <div className='flex items-center'>
                        <div className='boton w-28 h-8 flex justify-center items-center'>
                            <button className='bg-sky-200/90 w-full h-full py-1.5 text-sm text-zinc-800 rounded-sm flex justify-center items-center gap-1'>
                                <div>
                                    <AiFillPlayCircle
                                        size={14}
                                    ></AiFillPlayCircle>
                                </div>
                                <div className='text-xs font-medium'>
                                    Watch Now
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
