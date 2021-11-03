import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import ReactStars from "react-rating-stars-component";

class ProductIndexItem extends React.Component{
    constructor (props) {
        super(props);

        this.averageReviews = this.averageReviews.bind(this);
    }

    // componentDidMount() {
    //   this.props.product.reviewIds.map(reviewId => (
    //     this.props.fetchReview(reviewId))
    //   )
    // }

    // All reviews getting added to each product from state.

    averageReviews() {
      let average = 0;

      this.props.reviews.forEach(review => (
        average += review.rating
      ));

      average = Math.floor(average / this.props.reviews.length);

      this.props.clearReviews();

      return (
        <span>
          <ReactStars
            value={average}
            color2='#000000'
            half={false}
            edit={false}
          ></ReactStars>
          <p>{this.props.reviews.length}</p>
        </span>
      )
    }
    
    render(){
        return (
            <div className='index-item-container'>
              <Link to={`/products/${this.props.product.id}`}>
                <img className="index-image" src={this.props.product.photoUrl}/>
              </Link>

              <p className='index-image-title' >{this.props.product.title}</p>
              <p>{this.props.product.seller.first_name}</p>
              <p>${parseFloat(this.props.product.price).toFixed(2)}</p>
              {/* <p>{this.averageReviews()}</p> */}
            </div>
        )
    }
}

export default withRouter(ProductIndexItem);