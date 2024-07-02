import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Jewellery from './components/Jewellery/Jewellery';
import Materials from './components/Materials/Materials';
import Regulations from './components/Regulations/Regulations';
import ContactTab from './components/Contact/ContactTab';
import { CartProvider } from './components/Navbar/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path='/materials' element={<Materials />} />
          <Route path='/regulations' element={<Regulations />} />
          <Route path='/contact' element={<ContactTab />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
