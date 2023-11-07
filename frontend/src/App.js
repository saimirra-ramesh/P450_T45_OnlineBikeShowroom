import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Productpage from './components/Productpage';
import Producttilesview from './components/producttilesview';
import Signup from './components/Signup';
import Login from './components/Login'; 

function App() {
  return (
    <div>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/product" element={<Productpage />} />
          <Route path="/tiles" element={<Producttilesview />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} /> 
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
