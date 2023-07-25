import { useState, useEffect } from 'react';
import { getSeasonAnimes } from '../services/animes';
import { Anime } from '../types/types';

export const useSeason = (): { animes: Anime[]; isLoading: boolean } => {
    const [animes, setAnimes] = useState<Anime[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getSeasonAnimes()
            .then((data) => {
                setAnimes(data.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
    }, []);

    return { animes, isLoading };
};
