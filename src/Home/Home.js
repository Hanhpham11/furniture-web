import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Banner from './Banner';
import Introduce from './Introduce';
import Inspirations from './Inspirations';

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Introduce />
      <Inspirations />
      <Footer />
    </div>
  );
}

export default Home;
