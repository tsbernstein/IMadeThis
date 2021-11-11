import React from 'react';
import { Link } from 'react-router-dom';

class PriceWidget extends React.Component {
    constructor(props) {
        super(props)

        this.subtotal = this.subtotal.bind(this)
        this.clearCart = this.clearCart.bind(this);
    }

    componentDidMount() {
        if (!Object.values(this.props.products).length){
            this.props.fetchProducts();
        }
    }

    subtotal() {
        let total = 0
        this.props.carts.forEach(cart => (
            total += (this.props.products[cart.product_id]?.price * cart.quantity) 
        ))
        return total.toFixed(2);
    }

    calculateTax(subtotal) {
        let tax = 0.05;
        tax = (subtotal * tax);
        return tax.toFixed(2)
    }

    calculateTotal(tax, subtotal) {
        let total = (parseFloat(tax) + parseFloat(subtotal));
        return total.toFixed(2);
    }

    clearCart() {
        this.props.carts.forEach(cart => (
            this.props.deleteCart(cart.id)
        ));
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
                <div className='tax'>
                    <span>Tax</span>
                    <span>{this.calculateTax(this.subtotal())}</span>
                </div>
                <div className='total'>
                    <span>Total</span>
                    <span>{this.calculateTotal(this.calculateTax(this.subtotal()), this.subtotal())}</span>
                </div>
                <Link to='/complete' className='checkout-button-container'>
                    <button className='checkout-button' onClick={this.clearCart}>
                        Proceed to checkout
                    </button>
                </Link>
            </div>
        )
    }
}

export default PriceWidget;