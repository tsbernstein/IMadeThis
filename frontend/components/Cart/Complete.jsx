import React from 'react';
import { Link } from 'react-router-dom';


function Complete () {
    return (
        <div className='complete-container'>
            <div>Thank you</div>
            <div>for shopping with I Made This!</div>
            <div>Your order is being processed</div>
            <Link to='/' className='complete-home-link'><p>Continue Shopping</p></Link>
        </div>
    )
}

export default Complete;