import React from "react";

class CartItem extends React.Component {
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.cartItemId)
    }

    handleClick(e) {
        this.props.deleteCart(this.props.cartId);
    }

    render() {
        if (!this.props.product) return null;

        return (
            <div>
                <div>
                    {this.props.product.title}
                </div>
                <div>
                    {this.props.product.description}
                </div>
                <div>
                    <img className='cart-item-image' src={this.props.product.photoUrl}/>
                </div>
                <div>
                    ${this.props.product.price}0
                </div>
                <button onClick={this.handleClick}>
                    Remove from cart
                </button>
            </div>
        )
    }
}

export default CartItem;