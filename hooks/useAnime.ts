import { useState, useEffect } from 'react';
import { getAnimeByID } from '../services/animes';
import { Anime } from '../types/types';

export const useAnime = (id: number): { anime?: Anime; isLoading: boolean } => {
    const [anime, setAnime] = useState<Anime>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getAnimeByID(id)
            .then((data) => {
                setAnime(data.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
    }, []);

    return { anime, isLoading };
};
