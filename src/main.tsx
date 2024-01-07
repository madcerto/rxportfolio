import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import config from '../config.json'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to={"/"+config.albums[0]} />} />
        <Route path="/:album" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
