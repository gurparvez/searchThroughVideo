import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
    Home,
    ContactUs,
    Login,
    Register,
    UploadVideo,
    Recent,
    InProgress,
    ShowVideo,
} from './layouts';
import { Provider } from 'react-redux';
import store from './store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<Home />} />
                    <Route path='/contact' element={<ContactUs />} />
                    <Route path='/upload' element={<UploadVideo />} />
                    <Route path='/recent' element={<Recent />} />
                    <Route path='/inProgress' element={<InProgress />} />
                    <Route path='/videos/*'>
                        <Route path=':videoKey/*' element={<ShowVideo />} />
                    </Route>
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    </Provider>,
);
