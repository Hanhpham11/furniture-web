import React from 'react';
import { useEffect, useState } from 'react';
import { ShopProvider } from '../context/ShopContext';
import Product from '../Shop/Product.js';
import '../css/Reset.css';
import Header from '../component/Header';
import Footer from '../component/Footer';
function Shop() {
  return (
    <ShopProvider>
      <div className="overflow-hidden font-sans">
        <Header />
        <Product />
        <Footer />
      </div>
    </ShopProvider>
  );
}

export default Shop;
