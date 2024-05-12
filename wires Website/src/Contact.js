import React from 'react'
const Contact = () => {
  return (
    <section className="Contact">
      <h1 className='connectus'>Connect With Us</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d795.0015569187126!2d73.06169748807815!3d31.381072143764783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x289048207df3b387!2zMzHCsDIyJzUxLjkiTiA3M8KwMDMnNDQuMSJF!5e1!3m2!1sen!2s!4v1668949293302!5m2!1sen!2s"
        width="40%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
      <div className='footer'>
        <div className='main_office'>
          <h1>MAIN OFFICE</h1>
          <address>
            123 Anywhere St. <br />
            My City State <br />
            My Country <br />
            (123) 456-7890
          </address>
        </div>
        <div className='social_media'>
          <h1>Social Media</h1>
          <p><a href='https://www.facebook.com' target="_blank">FACBOOK</a></p>
          <p><a href='https://www.instagram.com' target="_blank">INSTAGRAM</a></p>
          <p><a href='https://www.twitter.com' target="_blank">TWITTER</a></p>
        </div>
        <a href='mailto:wireswebsite@gmail.com'>wireswebsite@gmail.com</a>
      </div>
    </section>
  );
};

export default Contact;