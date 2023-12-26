import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from './components/App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
