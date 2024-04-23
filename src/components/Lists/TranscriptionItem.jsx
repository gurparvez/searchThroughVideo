import React from 'react';

const TranscriptionItem = ({
    transcription,
    isSelected,
    onSelect,
    classname,
}) => {
    return (
        <div
            className={` ${isSelected ? '' : ''} ${classname}`}
            onClick={() => {
                onSelect(transcription?.time[0]);
            }}>
            <p>{transcription?.word}</p>
            <p>{`${transcription?.time[0]} - ${transcription?.time[1]}`}</p>
        </div>
    );
};

export default TranscriptionItem;
