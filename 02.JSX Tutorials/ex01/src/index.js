import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App.js';

if(process.env.NODE_ENV === 'production'){
  console.log = () => {};
  console.info = () => {};
  console.error = () => {};
  console.warn = () => {};
}

// console.log(process.env.NODE_ENV);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);