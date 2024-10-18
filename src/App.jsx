import './App.css';
import React from 'react';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import Women from './pages/women/women';
import Men from './pages/men/men';
import Kids from './pages/kids/kids';
import Accessories from './pages/accessories/access';
import Footwear from './pages/footwear/footwear';
import Fragnances from './pages/fragnance/fragnance';
import About from './pages/about/about';
import Store from './pages/store address/store';
import Cart from './pages/cart/cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/cartcontext'; // Adjust the path if necessary

function App() {
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/women' element={<Women />} />
              <Route path='/men' element={<Men />} />
              <Route path='/kids' element={<Kids />} />
              <Route path='/accessories' element={<Accessories />} />
              <Route path='/fragnance' element={<Fragnances />} />
              <Route path='/footwear' element={<Footwear />} />
              <Route path='/about' element={<About />} />
              <Route path='/store' element={<Store />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
