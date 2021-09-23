import React from 'react';

class PriceWidget extends React.Component {
    constructor(props) {
        super(props)

        this.subtotal = this.subtotal.bind(this)
    }

    componentDidMount() {
        if (!Object.values(this.props.products).length){
            this.props.fetchProducts();
        }
    }

    subtotal() {
        let total = 0
        this.props.carts.forEach(cart => {
            total += (this.props.products[cart.product_id].price * cart.quantity) 
        })
        return total;
    }

    render() {
        if (!this.props.carts.length) return null;
        if (!Object.values(this.props.products).length) return null;
        
        return (
            <div className='price-widget-container'>
                <div className='items-total'>
                    <span>Item(s) total</span>
                    <span>{this.subtotal()}</span>
                </div>
                <div className='subtotal'>
                    <span>Subtotal</span>
                    <span>{this.subtotal()}</span>
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