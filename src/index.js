import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import FirebaseProvider from './utils/firebase'
import App from './App';
import './tailwind.output.css';

ReactDOM.render(
  <FirebaseProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </FirebaseProvider>
  ,
  document.getElementById('root')
);
