import React from "react";
import CartItem from "./CartItemContainer";

class Cart extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        if(!this.props.carts.length) {
            this.props.fetchCarts();
        }
    }

    render() {
        return (
            <div className='cart-container'>
                <ul>{this.props.carts.map((cart => (
                    <CartItem cartItemId={cart.product_id}/>
                )))}
                </ul>
            </div>
        )
    }
}

export default Cart;