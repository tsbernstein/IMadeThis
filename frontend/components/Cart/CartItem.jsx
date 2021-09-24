import React from "react";

class CartItem extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.cart.quantity;

        this.handleClick = this.handleClick.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.cart.product_id)
    }

    handleClick(e) {
        this.props.deleteCart(this.props.cart.id);
    }

    update(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value});
            this.props.updateCart(this.props.cart).then(() => this.setState(this.props.cart.quantity));
        }
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
                <select name="quantity" id="quantity" onChange={this.update('quantity')}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <button onClick={this.handleClick}>
                    Remove from cart
                </button>
            </div>
        )
    }
}

export default CartItem;