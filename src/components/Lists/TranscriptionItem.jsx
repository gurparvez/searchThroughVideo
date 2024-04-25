import React from 'react';

const TranscriptionItem = ({
    transcription,
    isSelected = false,
    onSelect,
    classname,
}) => {
    return (
        <div
            className={` ${isSelected ? '' : ''} hover:bg-gray-300 dark:hover:bg-gray-800 w-full px-4 py-2 border-b border-gray-200 transition-all first:rounded-t-lg last:rounded-b-lg last:border-none dark:border-gray-400 ${classname}`}
            onClick={() => {
                onSelect(transcription?.time[0]);
            }}>
            <p>{transcription?.word}</p>
            <p>{`${transcription?.time[0]} - ${transcription?.time[1]}`}</p>
        </div>
    );
};

export default TranscriptionItem;
