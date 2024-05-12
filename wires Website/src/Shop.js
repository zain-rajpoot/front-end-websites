import React from 'react'
import shop1 from './pics/shop1.png'
import shop2 from './pics/shop2.png'
import shop3 from './pics/shop3.png'
const Shop = () => {
  return (
    <>
      <div className="Shop">
        <h1>Shop By Category</h1>
        <div className="shop_product">
          <div className="product">
            <img src={shop1} />
            <h2>PHONES & ACESSORIES</h2>
            <p>Lorem ipsum, in graphical and textual context.</p>
          </div>
          <div className="product">
            <img src={shop2} />
            <h2>COMPUTER EDIUPMENTS</h2>
            <p>Lorem ipsum, in graphical and textual context.</p>
          </div>
          <div className="product">
            <img src={shop3} />
            <h2>MISCELLANEOUS ITEMS</h2>
            <p>Lorem ipsum, in graphical and textual context.</p>
          </div>
        </div>
        <div className='button'>
          <button disabled>Shop All</button>
        </div>
      </div>
    </>
  );
};

export default Shop;