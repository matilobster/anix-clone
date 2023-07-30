import { Animes, IdResponse } from '../types/types';

export const getTop10Season = async () => {
    const url = 'https://api.jikan.moe/v4/seasons/now?limit=10&filter=tv';
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

export const getAnimeByID = async (id: number) => {
    const url = 'https://api.jikan.moe/v4/anime/' + id;
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
        const data: IdResponse = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error);
        // console.log('error');
    }
};

export const getAnimeSearch = async (keyword: string) => {
    const url = 'https://api.jikan.moe/v4/anime?type=tv&q=' + keyword;
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

export const getAnimeByProducer = async (keyword: string) => {
    const url =
        'https://api.jikan.moe/v4/anime?order_by=popularity&producer=' +
        keyword;
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
