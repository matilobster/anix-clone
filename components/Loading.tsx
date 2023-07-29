import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Loading = () => {
    return (
        <div className='h-full flex justify-center items-center'>
            <ClipLoader color='#4F8D95' size={30} />
        </div>
    );
};

export default Loading;
