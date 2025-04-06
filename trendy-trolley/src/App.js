import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './Components/home/HomePage';
import NotFoundPage from './Components/ui/NotFoundPage';

const App = () => {
  return (
    <BrowserRouter>
    <div style={{color: 'black'}}>Test</div>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='*' element={ <NotFoundPage /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App