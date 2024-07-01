import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Materials from './components/Materials/Materials';
import Regulations from './components/Regulations/Regulations';
import { CartProvider } from './components/Navbar/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/materials' element={<Materials />} />
          <Route path='/regulations' element={<Regulations />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
