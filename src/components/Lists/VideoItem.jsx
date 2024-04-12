import React from 'react';

const VideoItem = ({ children, classname, props }) => {
    return (
        <div className={classname} {...props}>
            {children}
        </div>
    );
};
export default VideoItem;
