import React from 'react'
import MainPage from './Component/MainPage'
import { Router, Routes, Route } from 'react-router-dom'
import SecondPage from '../src/Component/SecondPage'
import Creacker from './Component/Creacker'

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/next" element={<SecondPage />} />
        <Route path="/Creacker" element={<Creacker />} />
      </Routes>

    </div>
  )
}

export default App