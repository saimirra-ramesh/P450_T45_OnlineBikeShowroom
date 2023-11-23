import React from 'react';
// import { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Producttilesview from './components/producttilesview';
import Signup from './components/Signup';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword.js';
import Dashboard from './components/Dashboard';
import AddBike from './components/AddBike';
import ProductView from './components/ProductView';
import ProductUpdate from './components/ProductUpdate.js';
import Footer from './components/Footer.js';
import SearchResultPage from './components/SearchResultPage.js';
import Cart from './components/Cart.js';
import { AuthProvider } from './components/AuthContext.js';
import ComparePage from './components/ComparePage.js';
import { ToastContainer } from 'react-toastify';
import { CartProvider } from './components/CartContext';
import PaymentGateway from './components/paymentgateway';

function App() {
  return (
    <AuthProvider>
      
      <div className='App'>
        <HashRouter>
        <ToastContainer
          position="bottom-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="colored"
          />
          <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/tiles" element={<Producttilesview />} /> */}
            <Route path="/products/collection/:category" element={<Producttilesview />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/add-bike" element={<AddBike />} />
            <Route path="/products/:productId" element={<ProductView />} />
            <Route path="/products/:productId/update" element={<ProductUpdate />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/search-results" element={<SearchResultPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<PaymentGateway/>} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
          </Routes>
          </CartProvider>
          <Footer />
        </HashRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
