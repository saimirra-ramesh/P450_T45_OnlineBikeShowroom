import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
// import Nav from './components/Nav.js';
import Productpage from './components/Productpage';
import Producttilesview from './components/producttilesview';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddBike from './components/AddBike';
import ProductView from './components/ProductView';
import ProductUpdate from './components/ProductUpdate.js';
import Footer from './components/Footer.js';
import SearchResultPage from './components/SearchResultPage.js';


function App() {
  return (
    <div className='App'>
      <HashRouter>
        {/* <Nav onSearch={handleSearch} /> */}
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

          {/* To get search results on a separate page 
              To get search results as a part of the Nav bar itself, remove below line
          */}
          <Route path="/search-results" element={<SearchResultPage/>} />
        </Routes>

        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
