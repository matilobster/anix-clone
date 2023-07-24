import React from 'react';
import Card from './Card';
import { useRouter } from 'next/router';

interface Anime {
    id: number;
    tittle: string;
    description: string;
    rating: number;
}

interface SlideProps {
    anime: Anime;
}

const Slider: React.FC<SlideProps> = ({ anime }) => {
    const { push } = useRouter();
    // console.log(job);

    return (
        <div
            onClick={() => {
                push('/previewCurso?id=' + anime.id);
            }}
        >
            <Card></Card>
        </div>
    );
};

export default Slider;
