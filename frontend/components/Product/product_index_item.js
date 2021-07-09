import React from 'react'

class ProductIndexItem extends React.Component{
    constructor (props) {
        super(props);
    }
    
    render(){
        return(
            <li>
              {this.props.product.title}
              {this.props.product.description}
              {this.props.product.price}
            </li>
        )
    }
}

export default ProductIndexItem;