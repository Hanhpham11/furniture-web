import React from 'react'
import { useEffect, useState } from 'react';
import { ShopProvider } from '../context/ShopContext';
import Product from './Product';
import '../css/Reset.css';
function Shop() {
  return (
    <ShopProvider>
      <div>
        <Product/>
      </div>
    </ShopProvider>
  )
}

export default Shop