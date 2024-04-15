import React from 'react';
import ProgressBar from '../ProgressBar';

const VideoItem = ({ children, classname='', inProcessing=false, progress=0, props }) => {
    return (
        <div className={`${inProcessing ? "pointer-events-none opacity-70" : ""} ${classname}`} {...props}>
            {children}
            {
                inProcessing &&
                <ProgressBar progress={progress} />
            }
        </div>
    );
};
export default VideoItem;
