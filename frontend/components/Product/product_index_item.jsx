import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";

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
              <p>{this.props.product.reviewIds.length}</p>
              <p>{parseFloat(this.props.product.price).toFixed(2)}</p>
            </div>
        )
    }
}

export default withRouter(ProductIndexItem);