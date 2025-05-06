import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Collections from './pages/Collections'
import Content from './pages/Content'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='px-4 sm-[5vw] md-[7vw] lg-[9vw]'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/collections" element={<Collections />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/content" element={<Content />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/orders" element={<Orders />}/>
        <Route path="/products/:productid" element={<Product />}/>
        <Route path="/placeOrder" element={<PlaceOrder />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App