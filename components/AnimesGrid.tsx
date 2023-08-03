import { Anime } from '@/types/types';
import Card from './Card';

interface AnimesGridProps {
    animes: Anime[];
}

const AnimesGrid: React.FC<AnimesGridProps> = ({ animes }) => {
    return (
        <div className='my-3 grid w-full grid-cols-2 gap-[6px] min-[478px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
            {animes.map((anime, index: number) => (
                <Card
                    id={anime.mal_id}
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
