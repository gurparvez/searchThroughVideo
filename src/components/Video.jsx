import React, { useEffect, useRef } from 'react';

const Video = ({ src, subsSrc, currentTime }) => {
    const videoRef = useRef();

    const handleCurrentTimeChange = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = currentTime;
        }
    };

    useEffect(() => {
        handleCurrentTimeChange();
    }, [currentTime]);

    return (
        <div className='w-full h-96'>
            <video
                ref={videoRef}
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
