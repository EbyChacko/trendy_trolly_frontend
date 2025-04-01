import React from 'react'
import NavBar from './Components/ui/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './components/home/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<MainLayout />} />
        <Route index element={<HomePage />} />
        <Route path='/products' element={<h1>Products</h1>} />
        <Route path='/about' element={<h1>About</h1>} />
        <Route path='/contact' element={<h1>Contact</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App