import React, { useState } from 'react';
import {
    Button,
    ButtonRed,
    Container,
    Input,
    List,
    ShowImage,
    TextAria,
    UploadFile,
    VideoItem,
} from '../components/index.js';
import { useNavigate } from 'react-router-dom';
import video from '../api/videos.js';
import { useDispatch, useSelector } from 'react-redux';
import { put } from '../store/videoSlice.js';

const UploadVideo = () => {
    const [uploadedFile, setUploadedFile] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [msg, setMsg] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const videos = useSelector((state) => state.videos.videoData);

    const handleFileUpload = (file) => {
        setMsg('');
        const allowedFileTypes = [
            'video/mp4',
            'video/webm',
            'video/quicktime',
            'video/mpeg',
            'video/x-msvideo',
            'video/x-flv',
            'video/x-matroska',
        ];
        if (!allowedFileTypes.includes(file.type)) {
            setMsg('File not supported !');
            return;
        }
        setUploadedFile(file);
        setTitle(file?.name);
        generateThumbnail(file);
    };

    function generateThumbnail(videoFile) {
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.src = URL.createObjectURL(videoFile);

        video.onloadedmetadata = () => {
            // Set the height and width of the canvas
            const canvas = document.createElement('canvas');
            const aspectRatio = video.videoWidth / video.videoHeight;
            const width = 150; // Set the desired width of the thumbnail
            canvas.width = width;
            canvas.height = width / aspectRatio;

            const ctx = canvas.getContext('2d');
            // Draw the video frame onto the canvas
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Convert canvas to base64 image
            const thumbnailDataUrl = canvas.toDataURL('image/jpeg');
            setThumbnail(thumbnailDataUrl);
        };
    }

    const handleSubmit = () => {
        const data = {
            title,
            description,
            file: uploadedFile,
            contenType: uploadedFile?.type,
        };
        data.onProgress = function (progress) {
            const percentage = Math.round(
                (progress.loaded * 100) / progress.total,
            );
            setUploadProgress(percentage);
        };

        try {
            setIsProcessing(true);
            video
                .upload(data)
                .then((res) => {
                    const newVideosData = Object.assign([], videos);
                    newVideosData.push(res);
                    dispatch(put(newVideosData));
                    // TODO: navigate to video page of this video;
                    navigate('/');
                })
                .catch((err) => {
                    console.log('error: ', err);
                    setMsg(err.response?.data?.detail);
                })
                .finally(() => {
                    setIsProcessing(false);
                });
        } catch (error) {
            console.log('Error :: upload video :: ', error);
        }
    };

    return (
        <Container classname='flex flex-col'>
            <h1>Upload Video</h1>
            {isProcessing ? (
                <List>
                    <VideoItem
                        inProcessing={true}
                        progress={uploadProgress}
                        classname='w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
                        {title}
                    </VideoItem>
                </List>
            ) : (
                <>
                    <div className='w-full flex flex-col sm:flex-row'>
                        <div className='flex flex-col w-full sm:w-1/2 justify-center'>
                            {thumbnail ? (
                                <ShowImage src={thumbnail} classname='w-full' />
                            ) : (
                                <UploadFile
                                    onFileUpload={handleFileUpload}
                                    classname='w-full'
                                />
                            )}
                            {msg && <ShowError error={msg} className='p-4' />}
                        </div>
                        <div className='flex flex-col justify-center w-full sm:w-1/2 sm:px-10 *:py-4'>
                            <Input
                                label='Title'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <TextAria
                                label='Description'
                                value={description}
                                onchange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='w-full sm:w-auto self-end *:my-2 sm:*:mx-2 sm:*:my-0'>
                        <ButtonRed
                            children='Cancel'
                            onClick={() => navigate('/')}
                            classname='w-full sm:w-fit'
                        />
                        <Button
                            data='Upload'
                            onClick={handleSubmit}
                            classname='w-full sm:w-fit'
                        />
                    </div>
                </>
            )}
        </Container>
    );
};
export default UploadVideo;
