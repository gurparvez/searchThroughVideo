import React from 'react';

const TranscriptionItem = ({
    transcription,
    isSelected = false,
    onSelect,
    classname,
}) => {
    console.log(isSelected);
    return (
        <div
            className={` ${isSelected ? 'bg-gray-300 dark:bg-gray-800' : ''} w-full border-b border-gray-200 px-4 py-2 transition-all first:rounded-t-lg last:rounded-b-lg last:border-none hover:cursor-pointer hover:bg-gray-300 dark:border-gray-400 dark:hover:bg-gray-800 ${classname}`}
            onClick={() => {
                onSelect(transcription?.time[0]);
            }}
        >
            <p>{transcription?.word}</p>
            <p>{`${transcription?.time[0]} - ${transcription?.time[1]}`}</p>
        </div>
    );
};

export default TranscriptionItem;
