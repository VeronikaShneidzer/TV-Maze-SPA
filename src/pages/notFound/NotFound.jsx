import React, { useEffect } from 'react';

function NotFound() {
    useEffect(() => {
        document.title = 'Not found';
    }, []);

    return (
        <>
            Not found
        </>
    );
}

export default NotFound;
