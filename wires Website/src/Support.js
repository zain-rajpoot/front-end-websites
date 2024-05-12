import React from 'react'
const Support = () => {
  return (
    <section className="Support">
      <div className='support_detail'>
        <h1>Expert Support</h1>
        <p>Fautlt phone battery? Slow laptop? We have in-house tech experts who can assist you.
          <br />
          <br />
          <br />
          Visit us</p>
        <br />
        <br />
        <h2>OUR LOCATION</h2>
        <p>  123 Anywhere St. <br />
          My City State <br />
          My Country <br />
          (123) 456-7890</p>
        <br />
        <p>  123 Anywhere St. <br />
          My City State <br />
          My Country <br />
          (123) 456-7890</p>
      </div>
      <div className='img_support'>
        <img src={require("./pics/support_img.png")} alt='Img not found' />
      </div>
    </section>
  );
};

export default Support;