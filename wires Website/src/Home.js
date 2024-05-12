import React from 'react'
import headset from "./pics/home_headset.png"
const Home = () => {
  return (
    <>
      <div className='Home'>
        <div>
          <p>The Westmire</p>
          <h1>A56 Headset</h1>
          <button>Buy Now</button>
          <button disabled>Shop All</button>
        </div>
        <img src={headset} />
      </div>
    </>
  );
}

export default Home;