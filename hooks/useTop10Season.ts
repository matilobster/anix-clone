import { useState, useEffect } from 'react';
import { getTop10Season } from '../services/animes';
import { Anime } from '../types/types';

export const useTop10Season = (): { animes: Anime[]; isLoading: boolean } => {
    const [animes, setAnimes] = useState<Anime[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getTop10Season()
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
