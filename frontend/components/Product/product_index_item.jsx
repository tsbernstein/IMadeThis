import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";

class ProductIndexItem extends React.Component{
    constructor (props) {
        super(props);
    }
    
    render(){
        debugger
        return(
            <div className='index-container'>
              <Link to={`/products/${this.props.product.id}`}>
                <img className="index-image" src={this.props.product.photoUrl}/>
              </Link>

              <br/>

              <p>{this.props.product.title}</p>
            </div>
        )
    }
}

export default withRouter(ProductIndexItem);