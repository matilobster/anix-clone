import { Animes } from '../types/types';

export const getSeasonAnimes = async () => {
    const url = 'https://api.jikan.moe/v4/seasons/now?limit=10';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Animes = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
        // console.log('error');
    }
};
