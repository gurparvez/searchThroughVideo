import React from 'react';

const ShowImage = ({ src, classname }) => {
    return (
        <img
            className={`h-auto max-w-lg rounded-lg ${classname}`}
            src={src}
            alt='image description'
        />
    );
};
export default ShowImage;
