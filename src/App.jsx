import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Dashboard2 from './pages/Dashboard2'
import Header from './components/Header'
import Blank from './pages/Blank'
import Register from './pages/Register'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard2 />} />
      <Route path='/login' element={<Blank />} />
      <Route path='/register' element={<Register />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
