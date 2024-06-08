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
                className={`relative w-full rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white ${classname}`}
            >
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
