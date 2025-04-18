import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './Components/home/HomePage';
import NotFoundPage from './Components/ui/NotFoundPage';
import ProductPage from './Components/product/ProductPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='products/:slug' element={<ProductPage />} />
          <Route path='*' element={ <NotFoundPage /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App