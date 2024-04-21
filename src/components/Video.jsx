import React from 'react';

const Video = ({ src, subsSrc }) => {
    return (
        <div className='w-full h-96'>
            <video
                src={src}
                controls={true}
                className='w-full h-full'
                crossOrigin=''>
                {subsSrc && (
                    <track
                        label='English'
                        kind='subtitles'
                        srcLang='en'
                        src={subsSrc}
                    />
                )}
            </video>
        </div>
    );
};
export default Video;
