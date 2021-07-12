import React from 'react'

class ProductIndexItem extends React.Component{
    constructor (props) {
        super(props);
    }
    
    render(){
        return(
            <li>
              {this.props.product.title}
                <img src={product.image}/>
            </li>
        )
    }
}

export default ProductIndexItem;