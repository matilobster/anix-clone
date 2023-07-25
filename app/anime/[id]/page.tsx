import React from 'react';

function anime({ params }: { params: { id: string } }) {
    return <div>anime id: {params.id}</div>;
}

export default anime;
