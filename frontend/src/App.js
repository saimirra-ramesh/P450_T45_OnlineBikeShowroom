import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import '../node_modules/font-awesome/css/font-awesome.min.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
