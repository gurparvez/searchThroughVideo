import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchBar from '../components/SearchBars/SearchBar.jsx';
import {
    Container,
    FullPage,
    ShowError,
    Spinner,
    TranscriptionList,
} from '../components/index.js';
import Video from '../components/Video.jsx';
import video from '../api/videos.js';
import ErrorPopup from '../components/Popups/ErrorPopup.jsx';
import Search from '../Search.js';
import DescriptionBox from '../components/Containers/DescriptionBox.jsx';

const ShowVideo = () => {
    const { videoKey, ...remainingPath } = useParams();
    const fullKey = `videos/${videoKey}/${Object.values(remainingPath).join('/')}`;

    const [loading, setLoading] = useState(true);
    const [transcriptLoading, setTranscriptLoading] = useState(true);
    const [videoDetails, setVideoDetails] = useState(null);
    const [msg, setMsg] = useState(null);
    const [transcriptError, setTranscriptError] = useState(null);
    const [searchQuery, setSearchQuery] = useState(null);
    const [searchResult, setSearchResult] = useState(null);
    const [search, setSearch] = useState(null);
    const [selectedSearchResult, setSelectedSearchResult] = useState(null);

    const getUrlFromId = () => {
        video
            .get(fullKey)
            .then((res) => {
                setVideoDetails(res);
            })
            .catch((err) => {
                console.log(err);
                setMsg(err.response?.data?.detail);
            })
            .finally(() => setLoading(false));
    };

    const getTranscriptData = () => {
        setTranscriptError(null);
        setTranscriptLoading(true);
        try {
            video
                .getTranscripts(videoDetails?.transcript)
                .then((res) => {
                    setSearch(new Search(res));
                })
                .catch((err) => {
                    console.log(err);
                    setTranscriptError('Error while getting transcripts !!!');
                })
                .finally(() => {
                    setTranscriptLoading(false);
                });
        } catch (error) {
            console.log('Error :: getTranscriptData :: ', error);
        }
    };

    useEffect(() => {
        getUrlFromId();
    }, []);

    useEffect(() => {
        if (videoDetails) {
            getTranscriptData();
        }
    }, [videoDetails]);

    useEffect(() => {
        if (search) {
            setSearchResult(search?.search(searchQuery));
        }
    }, [searchQuery]);

    useEffect(() => {
        console.log(searchResult);
    }, [searchResult]);

    useEffect(() => {
        console.log(selectedSearchResult);
    }, [selectedSearchResult]);

    return (
        <Container>
            <h3>{videoDetails?.title}</h3>
            <div className='w-full flex flex-col sm:flex-row *:p-4'>
                <div className='w-full'>
                    {msg && <ErrorPopup error={msg} />}
                    {loading ? (
                        <div className='w-full relative flex justify-center items-center h-80 bg-gray-900'>
                            <Spinner
                                left='left-[45%]'
                                top='top-[45%]'
                                classname=''
                            />
                        </div>
                    ) : (
                        <div className='w-full *:my-2'>
                            {videoDetails?.processing ? (
                                <Video
                                    src={videoDetails?.url}
                                    subsSrc={videoDetails?.subtitle[1]}
                                    currentTime={
                                        selectedSearchResult
                                            ? selectedSearchResult
                                            : null
                                    }
                                />
                            ) : (
                                <Video src={videoDetails?.url} />
                            )}
                            <DescriptionBox
                                description={videoDetails?.description}
                            />
                        </div>
                    )}
                </div>
                <div className='w-full relative *:my-5'>
                    <SearchBar onSearch={setSearchQuery} />
                    {transcriptLoading && <FullPage left='left-0 top-0' />}
                    {transcriptError && <ShowError error={transcriptError} />}
                    {searchResult && (
                        <TranscriptionList
                            selectedResult={selectedSearchResult}
                            transcripts={searchResult}
                            onSelect={setSelectedSearchResult}
                        />
                    )}
                </div>
            </div>
        </Container>
    );
};

export default ShowVideo;
