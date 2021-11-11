import React from "react";

class CartItem extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.cart;

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
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.quantity !== this.state.quantity) {
            this.props.updateCart(this.state);
        }
    }

    render() {
        if (!this.props.product) return null;
        let price = parseFloat(this.props.product.price);

        return (
            <div className='cart-item-container'>
                <div>
                    <img className='cart-item-image' src={this.props.product.photoUrl}/>
                </div>
                <div className='cart-item-info-container'>
                    <div className='cart-item-title-container'>
                        <div>
                            {this.props.product.title}
                        </div>
                        <button className='remove-from-cart' onClick={this.handleClick}>
                            Remove
                        </button>
                    </div>
                    <select name="quantity" id="quantity" value={this.state.quantity} onChange={this.update('quantity')}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                    </select>
                    <div>
                        ${price.toFixed(2)}
                    </div>
                </div>
            </div>
        )
    }
}

export default CartItem;