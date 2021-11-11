import React from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom'
import ReviewShow from '../Review/review_show'
import CreateForm from '../Review/new_review_form_container';
import ReactStars from "react-rating-stars-component";

class ProductShow extends React.Component{
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this);
        this.averageReviews = this.averageReviews.bind(this);
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

    averageReviews() {
        let average = 0;
  
        this.props.reviews.forEach(review => (
          average += review.rating
        ));
  
        average = Math.floor(average / this.props.reviews.length);
    
        return (
          <span className='average-reviews-show'>
            <p className='total-sales'>{this.props.reviews.length} sales</p>
            <ReactStars
              className='total-sales-reviews'
              value={average}
              color2='#000000'
              half={false}
              edit={false}
            ></ReactStars>
          </span>
        )
      }

    render() {
        if (!this.props.product) return null;
        let price = parseFloat(this.props.product.price);
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
                    {this.averageReviews()}
                    <p className='show-title'>{this.props.product.title}</p>
                    <p className='show-price'>${price.toFixed(2)}</p>
                    <p className='show-description'>{this.props.product.description}</p>
                    <Link to='/cart'>
                        <button className='add-to-cart' onClick={this.handleClick}>
                            Add to cart
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default withRouter(ProductShow);