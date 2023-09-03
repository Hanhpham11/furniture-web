import React from 'react';

import Header from '../component/Header';
import Footer from '../component/Footer';

import './Details.css';
import DetailsProduct from './DetailsProduct';
function Details() {
  return (
    <div className="flex flex-col">
      <Header />
      <DetailsProduct />
      <Footer />
    </div>
  );
}

export default Details;
