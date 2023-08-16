import React from 'react';
import { useEffect, useState } from 'react';
import { ShopProvider } from '../context/ShopContext';
import Product from './Product';
import '../css/Reset.css';
import Header from './Header';
import Footer from './Footer';
function Shop() {
  return (
    <ShopProvider>
      <div>
        <Header />
        <Product />
        <Footer />
      </div>
    </ShopProvider>
  );
}

export default Shop;
