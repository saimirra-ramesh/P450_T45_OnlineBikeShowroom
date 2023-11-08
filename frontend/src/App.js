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
import EditBike from './components/EditBike';
import DeleteBike from './components/DeleteBike';


function App() {
  return (
    <div className='App'>
      <HashRouter>
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Productpage />} />
          <Route path="/tiles" element={<Producttilesview />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/add-bike" element={<AddBike />} />
          <Route path="/delete-bike" element={<DeleteBike />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
