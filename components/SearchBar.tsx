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
                <div className='bg-zinc-900 flex items-center h-8 w-full text-sm gap-1 px-2 border-[1px] border-zinc-700 '>
                    <BiSearch size={16} className='text-zinc-400 '></BiSearch>
                    <div className='w-full '>
                        <input
                            type='text'
                            name='search'
                            placeholder='Search anime...'
                            className='text-sky-200/50 font-light w-full bg-zinc-900 focus:outline-none '
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
