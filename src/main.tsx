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
        <Route path="/rxportfolio/:album" element={<App />} />
        <Route path="*" element={<Navigate to={
          "/rxportfolio/" + ((typeof config.albums[0] === "string")
            ? config.albums[0] : config.albums[0][1])
        } />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
