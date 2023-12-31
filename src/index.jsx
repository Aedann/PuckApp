import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import DevicePage from './Components/DevicePage';
import Test from './Test';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter basename='/PuckApp/'>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/DevicePage/:Icon/:Name/:Distance' element={<DevicePage />} />
      <Route path='/Test/' element={<Test />} />
    </Routes>
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
//serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
