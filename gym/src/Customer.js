import React from 'react'
import './Customer.css'
import cumsomer1 from "./Customer1.jpg";
import cumsomer2 from "./Customer2.jpg";
import cumsomer3 from "./Customer3.jpg";
export default function Customer() {
    return (
        <>
            <div className='Customer'>
                <h1>Before and After</h1>
                <div className='cumstomers'>
                    <div className='cumstomers_detail1'>
                        <img src={cumsomer1} width="100%" />
                        <p>
                            Testimonials are short quotes from people who love your brand.
                            It's great way to convince customers to try your services.
                            <br />
                            <br />
                            Jhon Dhoe, 31
                        </p>
                    </div>
                    <div className='cumstomers_detail1'>
                        <img src={cumsomer2} width="100%" />
                        <p>
                            Testimonials are short quotes from people who love your brand.
                            It's great way to convince customers to try your services.
                            <br />
                            <br />
                            Jhon Dhoe, 31
                        </p>
                    </div>
                    <div className='cumstomers_detail1'>
                        <img src={cumsomer3} width="100%" />
                        <p>
                            Testimonials are short quotes from people who love your brand.
                            It's great way to convince customers to try your services.
                            <br />
                            <br />
                            Jhon Dhoe, 31
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
