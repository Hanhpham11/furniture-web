import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Banner from './Banner';
import Introduce from './Introduce';
import Inspirations from './Inspirations';
import Share from './Share';
import OurProducts from './OurProducts';

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Introduce />
      <OurProducts />
      <Inspirations />
      <Share />
      <Footer />
    </div>
  );
}

export default Home;
