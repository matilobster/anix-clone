import { Anime } from '@/types/types';
import Card from './Card';

interface AnimesGridProps {
    animes: Anime[];
}

const AnimesGrid: React.FC<AnimesGridProps> = ({ animes }) => {
    return (
        <div className='my-3 grid aspect-[1/8] w-full grid-cols-2 gap-[6px] min-[478px]:aspect-[3/10] min-[478px]:grid-cols-3 md:aspect-[1/2] md:grid-cols-4 lg:aspect-[40/37] lg:grid-cols-6'>
            {animes.map((anime, index: number) => (
                <Card
                    title={anime.title}
                    image={anime.images.jpg.large_image_url}
                    type='TV'
                    key={index}
                ></Card>
            ))}
        </div>
    );
};

export default AnimesGrid;
