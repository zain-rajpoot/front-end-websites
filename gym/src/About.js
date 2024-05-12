import React from 'react'
import "./About.css"
import man from './man.jpg';
import girl from './girl.jpg';
export default function About() {
    return (
        <>
            <div id='about_page'>
                <h1><span>About</span> Your Fit Family</h1>
                <p>This Gym was founded in 2001 by a husband & wife team, Bobby and Dora Graff.
                    Since then, we have expended to over 115 locations nationwide!
                </p>
                <br />
                <br />
                <a href='#'>Learn More</a>
            </div>
            <div id='about_img'>
            <img src={man} />
            <img src={girl}/>
            </div>
        </>
    );
}