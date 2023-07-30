'use client';

import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
    const router = useRouter();

    const [keyword, setKeyword] = useState('');

    const handleChange = (e: any) => {
        setKeyword(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        router.push('/filter/' + keyword);
        setKeyword('');
    };

    return (
        <div className='w-full'>
            <form onSubmit={handleSubmit}>
                <div className='flex h-8 w-full items-center gap-1 border-[1px] border-zinc-700 bg-zinc-900 px-2 text-sm '>
                    <BiSearch size={16} className='text-zinc-400 '></BiSearch>
                    <div className='w-full '>
                        <input
                            type='text'
                            name='search'
                            placeholder='Search anime...'
                            className='w-full bg-zinc-900 font-light text-sky-200/50 focus:outline-none '
                            onChange={handleChange}
                            value={keyword}
                            required
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
