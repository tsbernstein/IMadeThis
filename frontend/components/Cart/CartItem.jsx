import React from "react";

class CartItem extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.cartItemId)
    }

    render() {
        // let product
        // if (!this.props.product.length) {
        //     product = null
        // } else {
        //     product = this.props.product[0]
        // }
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
                    {this.props.product[0].price}
                </div>
            </div>
        )
    }
}

export default CartItem;