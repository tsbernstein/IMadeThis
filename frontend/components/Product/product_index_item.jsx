import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import ReactStars from "react-rating-stars-component";

class ProductIndexItem extends React.Component{
    constructor (props) {
        super(props);
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
              <div className='index-review-average'>
                <ReactStars
                  value={this.props.average}
                  color2='#000000'
                  half={false}
                  edit={false}
                ></ReactStars>
                <span>({this.props.totalReviews})</span>
              </div>            
            </div>
        )
    }
}

export default withRouter(ProductIndexItem);