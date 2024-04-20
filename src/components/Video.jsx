import React, { useState } from 'react';

const Video = ({ src, subsSrc }) => {
    return (
        <div className='w-full'>
            <video src={src} controls={true}>
                <track
                    label='English'
                    kind='subtitles'
                    srcLang='en'
                    src={subsSrc}
                />
            </video>
        </div>
    );
};
export default Video;
