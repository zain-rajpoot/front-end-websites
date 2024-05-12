import React from 'react'
import img from './pics/pic2.png'
const Technology = () => {
    return (
        <section className='Technology'>
            <h1>All New Technology</h1>
            <p>The lorem ipsum is a placeholder text used in
                publishing and graphic design. This filler text is
                a short paragraph that contains all the letters of the alphabet.
                The characters are spread out evenly so that the reader's
                attention is focused on the layout of the text instead of its content.
                publishing and graphic design. This filler text is
                     <img src={img} className='tech_img' />
                a short paragraph that contains all the letters of the alphabet.
                The characters are spread out evenly so that the reader's
                The characters are spread out evenly so that the reader's
                attention is focused on the layout of the text instead of its content.
                publishing and graphic design. This filler text is
                a short paragraph that contains all the letters of the alphabet.
                The characters are spread out evenly so that the reader's
                attention is focused on the layout of the text instead of its content.</p>
        </section>
    );
};

export default Technology;