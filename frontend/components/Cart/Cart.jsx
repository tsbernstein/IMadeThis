import React from "react";
import CartItem from "./CartItemContainer";
import PriceWidget from "./PriceWidgetContainer";

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
                    <CartItem key={cart.id} cart={cart}/>
                )))}
                </ul>
                <PriceWidget carts={this.props.carts}/>
            </div>
        )
    }
}

export default Cart;