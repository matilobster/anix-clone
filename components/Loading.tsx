import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Loading = () => {
    return (
        <div className='flex h-full items-center justify-center'>
            <ClipLoader color='#4F8D95' size={30} />
        </div>
    );
};

export default Loading;
