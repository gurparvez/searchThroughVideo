import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./layouts/Home.jsx";
import ContactUs from "./layouts/ContactUs.jsx";
import Login from "./layouts/Login.jsx";

// TODO: Add a prettier config file

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
          <Route path='/' element={<App />}>
              <Route index element={<Home />} />
              <Route path='contact' element={<ContactUs />} />
          </Route>
          <Route path='/login' element={<Login />} />
      </Routes>
  </BrowserRouter>
)
