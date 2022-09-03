import React from 'react';
import type { NextPage } from 'next';
import HeroCarousel from '../components/Home/HeroCarousel';
import AuctionControls from '../components/Home/AuctionControls';
import CollectionCards from '../components/Home/Cards';

const Home: NextPage = () => (
  <div>
    <HeroCarousel className="w-full shadow-md container mx-auto" />
    <div className="container mx-auto mt-8">
      <AuctionControls
        className={`
          flex flex-col space-y-4 lg:space-y-0  lg:flex-row justify-between items-center
          container mx-auto py-8     
        `}
      />
    </div>
    <CollectionCards />
  </div>
);

export default Home;
