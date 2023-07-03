import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Star from './Star';
// import StarRating from './StarRating';
// import UsePopCorn from './UsePopCorn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5}/> */}
    {/* <JonasTask /> */}
    {/* {UsePopCorn} */}
  </React.StrictMode>
);

