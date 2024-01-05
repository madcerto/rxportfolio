import { useState } from 'react'
import './App.css'
import Header from './Header.tsx';
import Gallery from './Gallery.tsx';

function App() {

  return (
    <div className="flex">
      <Header />
      <Gallery />
    </div>
  )
}

export default App
