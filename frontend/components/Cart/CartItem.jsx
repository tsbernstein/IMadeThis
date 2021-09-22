import React from "react";

class CartItem extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.cartItemId)
    }

    render() {
        if (!this.props.product.length) return null;

        return (
            <div>
                <div>
                    {this.props.product[0].title}
                </div>
                <div>
                    {this.props.product[0].description}
                </div>
                <div>
                    <img className='cart-item-image' src={this.props.product[0].photoUrl}/>
                </div>
                <div>
                    ${this.props.product[0].price}0
                </div>
            </div>
        )
    }
}

export default CartItem;