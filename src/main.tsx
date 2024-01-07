import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Gallery from './Gallery.tsx';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import {ALBUMS} from '../constants.ts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to={"/"+ALBUMS[0]} />} />
        <Route path="/:album" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
