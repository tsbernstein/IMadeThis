import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import ReviewForm from '../Review/review_form';
import ReviewShow from '../Review/review_show'
// import EditForm from '../Review/edit_review_form_container';
import CreateForm from '../Review/new_review_form_container';

class ProductShow extends React.Component{
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId);
    }

    handleClick(e) {
        let isInCart = false;

        this.props.carts.forEach(cart => {
            if (cart.product_id === this.props.product.id) {
                isInCart = true;
            }
        })

        if (!isInCart) {
            this.props.createCart({user_id: this.props.currentUser.id, product_id: this.props.product.id, quantity: 1});
        }
    }

    render() {
        if (!this.props.product) return null;
        return (
            <div className="show-container">
                <div className="show-column">
                    <div className="show-images">
                        <div className='small-show-image'>
                            <img className='show-image-small' src={this.props.product.photoUrl}/>
                        </div>
                        <div className="large-show-image">
                            <img className='show-image' src={this.props.product.photoUrl}/>
                        </div>
                    </div>
                    <div className='reviews-form'>
                        <CreateForm productId={this.props.product.id}/>
                    </div>
                    <div className='reviews-show'>
                        <ReviewShow product={this.props.product} reviews={this.props.reviews}/>
                    </div>
                </div>
                <div className='show-info-container'>
                    <p className='show-seller'>Sold by: {this.props.product.seller.first_name}</p>
                    <p>reviews placeholder</p>
                    <p className='show-title'>{this.props.product.title}</p>
                    <p className='show-price'>${this.props.product.price + 0}</p>
                    <p className='show-description'>{this.props.product.description}</p>
                    <button className='add-to-cart' onClick={this.handleClick}>
                        Add to cart
                    </button>
                </div>
            </div>
        )
    }
}

export default withRouter(ProductShow);