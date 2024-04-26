import React from 'react';
import TranscriptionItem from './TranscriptionItem';

const TranscriptionList = ({
    transcripts,
    selectedResult,
    onSelect,
    classname,
    children,
}) => {
    return (
        <div>
            <ul
                className={`w-full relative text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white ${classname}`}>
                {transcripts?.map((transcript) => {
                    return (
                        <TranscriptionItem
                            transcription={transcript}
                            isSelected={transcript?.time[0] === selectedResult}
                            onSelect={onSelect}
                        />
                    );
                })}
                {children}
            </ul>
        </div>
    );
};

export default TranscriptionList;
