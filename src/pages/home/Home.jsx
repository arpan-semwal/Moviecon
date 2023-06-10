import React from 'react'
import "./style.scss";
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/trending';



const Home = () => {
  return (
    <div className='HomePage'>
      <HeroBanner />
      <Trending/>
      <div style={{height : 1000}}></div>
    </div>
  )
}

export default Home
