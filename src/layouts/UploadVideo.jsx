import React, { useState } from 'react';
import {
    Button,
    ButtonRed,
    Input,
    ShowImage,
    TextAria,
    UploadFile,
} from '../components/index.js';
import { useNavigate } from 'react-router-dom';

const UploadVideo = () => {
    const [uploadedFile, setUploadedFile] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [msg, setMsg] = useState(null);
    const navigate = useNavigate();

    const handleFileUpload = (file) => {
        setMsg('');
        console.log(file);
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

    const generateThumbnail = (videoFile) => {
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
    };

    const handleSubmit = () => {
        const data = {};
        data.title = title;
        data.description = description;
        data.file = uploadedFile;
        data.contenType = uploadedFile?.type;
        console.log(data);
    };

    return (
        <div className='flex flex-col w-full sm:p-10 py-10 px-4 *:my-5'>
            <h1>Upload Video</h1>
            <div className='w-full flex flex-col sm:flex-row'>
                <div className='flex w-full sm:w-1/2 justify-center'>
                    {thumbnail ? (
                        <ShowImage src={thumbnail} classname='' />
                    ) : (
                        <UploadFile
                            onFileUpload={handleFileUpload}
                            classname='w-full'
                        />
                    )}
                    {msg && (
                        <p className='text-red-700 dark:text-red-500'>{msg}</p>
                    )}
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
                        onChange={(e) => setDescription(e.target.value)}
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
        </div>
    );
};
export default UploadVideo;
