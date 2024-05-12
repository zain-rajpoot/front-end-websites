import React from 'react'
import "./NoPage.css"
const NoPage = () => {
    return (
        <>
            <div className='NoPage'>
                <h4>🤔</h4>
                <h3>404 Error</h3>
                <h1>Sorry, This page is Not Found</h1>
                <br />
                <br />
                <p>Go to <a href='/'>Home</a></p>
            </div>
        </>
    );
};

export default NoPage;