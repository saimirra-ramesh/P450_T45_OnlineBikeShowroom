import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Producttilesview from './components/producttilesview';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddBike from './components/AddBike';
import ProductView from './components/ProductView';
import ProductUpdate from './components/ProductUpdate.js';
import Footer from './components/Footer.js';
import SearchResultPage from './components/SearchResultPage.js';
import Cart from './components/Cart.js';


function App() {
  return (
    <div className='App'>
      <HashRouter>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tiles" element={<Producttilesview />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/add-bike" element={<AddBike />} />
          <Route path="/products/:productId" element={<ProductView />} />
          <Route path="/products/:productId/update" element={<ProductUpdate />} />
          <Route path="/search-results" element={<SearchResultPage/>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
