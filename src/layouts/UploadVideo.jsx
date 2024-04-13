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

    function generateThumbnail(file) {
        return new Promise((resolve) => {
            const canvas = document.createElement('canvas');
            const video = document.createElement('video');

            video.muted = true; // Mute the video to avoid sound
            video.src = URL.createObjectURL(file);

            video.onloadeddata = () => {
                const ctx = canvas.getContext('2d');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                ctx.drawImage(video, 0, 0);

                const thumbnailURL = canvas.toDataURL('image/jpeg'); // You can adjust the format here (e.g., "image/png")
                URL.revokeObjectURL(video.src); // Revoke the temporary object URL
                resolve(thumbnailURL);
            };
        });
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
            console.log(`Upload progress: ${percentage}%`);
        };
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
