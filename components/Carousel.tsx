const Carousel = () => {
    const anime = {
        name: 'Jujustu Kaisen 2nd Season',
        image: 'https://areajugones.sport.es/wp-content/uploads/2023/03/jujutsu-kaisen-temporada-2.jpeg',
    };

    return (
        <div className='h-fit w-full text-zinc-500 flex'>
            <div className='bg-red-500 w-36 sm:w-40 lg:w-44'>
                <img
                    src={anime.image}
                    alt='jujutsu'
                    className='object-contain'
                />
            </div>
            <div
                className={`w-full relative bg-center bg-cover min-h-full`}
                style={{
                    backgroundImage: `url(${anime.image})`,
                }}
            >
                <div className='grid grid-rows-3 md:grid-rows-4 backdrop-blur-lg bg-zinc-900/80 h-full'>
                    <h1 className='tittle text-sky-200 text-lg flex items-center'>
                        {anime.name}
                    </h1>
                    <h2 className='details text-white'>detalles</h2>
                    <div className='description hidden md:flex'>
                        descripcion
                    </div>
                    <div className='text-white'>ver</div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
