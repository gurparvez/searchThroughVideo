import { Button, List } from '../components/index.js';
import React from 'react';

const Home = () => {
    return (
        <div className="w-full sm:p-10 py-10 px-4 *:my-5" >
            <Button data="Upload New" classname="w-full sm:w-48" />
            <List>
                <li className='w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
                    Video
                </li>
                <li className='w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
                    Video
                </li>
                <li className='w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
                    Video
                </li>
            </List>
        </div>
    );
};

export default Home;
