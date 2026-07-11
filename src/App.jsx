import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Product from './components/Product'
import {Routes, Route} from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import SearchItem from './components/SearchItem';
import Cart from'./components/Cart';
import { items } from './components/Data';
import './App.css'

function App() {
  const [data, setdata] = useState([...items])
  const [cart, setCart]= useState([])
  const [showCart, setShowCart] = useState(false)
  return (
    <>
  
      <Navbar
        cart={cart}
        setData={setdata}
        showCart={showCart}
        setShowCart={setShowCart}
      />
  
      <Routes>
  
        <Route
          path='/'
          element={
            <Product
              cart={cart}
              setCart={setCart}
              items={data}
            />
          }
        />
  
        <Route
          path='/product/:id'
          element={
            <ProductDetail
              cart={cart}
              setCart={setCart}
            />
          }
        />
  
        <Route
          path='/search/:term'
          element={
            <SearchItem
              cart={cart}
              setCart={setCart}
            />
          }
        />
  
        <Route
          path='/cart'
          element={
            <Cart
              cart={cart}
              setCart={setCart}
            />
          }
        />
  
      </Routes>
  
    </>
  )
      
     
  
}

export default App