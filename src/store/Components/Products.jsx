import React from 'react';
import Mobiles from './Mobiles';
import Computers from './Computers';
import Fridge from './Fridge';
import Ac from './Ac';
import Kitchen from './Kitchen';
import Tv from './Tv';
import Men from './Men';
import Women from './Women'
import Watch from './Watch';
import Speaker from './Speaker';
import Footer from './Footer';

const Products = () => {
  return (
    <div className='productSection'>
      <Men />
      <Mobiles />
      <Computers />
      <Fridge />
      <Ac />
      <Women />
      <Kitchen />
      <Tv />
      <Watch />
      <Speaker />
      <Footer />
    </div>
  )
}

export default Products
