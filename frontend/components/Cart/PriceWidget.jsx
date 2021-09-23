import React from 'react';

class PriceWidget extends React.Component {
    constructor(props) {
        super(props)
        this.products = []
    }

    render() {
        return (
            <div className='price-widget-container'>
                <div className='items-total'>
                    <span>Item(s) total</span>
                    <span>Price</span>
                </div>
                <div className='subtotal'>
                    <span>Subtotal</span>
                    <span>Price</span>
                </div>
                <div className='shipping'>
                    <span>Shipping</span>
                    <span>FREE</span>
                </div>
                <button className='checkout-button'>
                    Proceed to checkout
                </button>
            </div>
        )
    }
}

export default PriceWidget;