import React from 'react'
import { Link } from "react-router-dom";

export default function Errorpage() {
  return (
    <>
      <section className='Errorpage'>
        <div ><img className='emoji' src='https://emojipedia-us.s3.amazonaws.com/source/noto-emoji-animations/344/thinking-face_1f914.gif' /></div>
        <div>
          <h1><span>404 </span>
            <br /> PAGE NOT FOUND</h1>
          <br />
          <br />
          <p>Go Back to <Link to="/">Home</Link></p>
        </div>
      </section>
    </>
  )
}