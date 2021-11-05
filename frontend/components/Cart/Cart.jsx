import React from "react";
import CartItem from "./CartItemContainer";
import PriceWidget from "./PriceWidgetContainer";

class Cart extends React.Component {
    constructor(props){
        super(props)

        this.cartItems = this.cartItems.bind(this);
    }

    componentDidMount() {
        if(!this.props.carts.length) {
            this.props.fetchCarts();
        }
    }

    componentWillUnmount() {
        this.props.clearReviews()
    }

    cartItems() {
        return (
            <div className='cart-container'>
                <ul className='cart-items'>{this.props.carts.map((cart => (
                    <CartItem key={cart.id} cart={cart}/>
                )))}
                </ul>
                <PriceWidget carts={this.props.carts}/>
            </div>
        )
    }

    emptyCart() {
        return <div className='empty-cart'>Your cart is empty</div>
    }

    render() {
        const cartItems = this.cartItems();

        return (
            <>
                {!this.props.carts.length ? this.emptyCart() :  cartItems}
            </>
        )
    }
}

export default Cart;