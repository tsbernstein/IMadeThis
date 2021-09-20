import React from "react";
import { library } from "webpack";

class Cart extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            cartItems: []
        }

        // this.getCartItems = this.getCartItems.bind(this);
    }

    componentDidMount() {
        if(!this.props.carts.length) {
            this.props.fetchCarts();
        }
    }

    // getCartItems(cart) {
    //     const item = this.props.fetchProduct(cart.product_id)
    //     return (<li key={cart.id}>{item.name}</li>)
    // }

    render() {
        return (
            <div>
                <ul>{this.props.carts.map((cart => (
                    // this.getCartItems(cart)
                    <li>hello</li>
                )))}
                </ul>
            </div>
        )
    }
}

export default Cart;