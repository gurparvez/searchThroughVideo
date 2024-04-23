import React from 'react';
import TranscriptionItem from './TranscriptionItem';

const TranscriptionList = ({ transcripts, onSelect, classname, children }) => {
    return (
        <div>
            <ul className={`w-full relative text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white ${classname}`}>
                {transcripts?.map((transcript) => (
                    <TranscriptionItem transcription={transcript} onSelect={onSelect}  />
                ))}
                {children}
            </ul>
        </div>
    );
};

export default TranscriptionList;
