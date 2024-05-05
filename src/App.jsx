import { useState } from 'react'
import './App.css'
import BodyRoot from '../components/bodyRoot';
import ProductDetailPage from '../components/products/product-detail-page';
import { BrowserRouter , Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BodyRoot/>} />
        <Route path="/product-details/:id" element={<ProductDetailPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
