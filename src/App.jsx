import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
