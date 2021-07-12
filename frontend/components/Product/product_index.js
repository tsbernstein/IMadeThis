import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        return (
            <ul>
                {this.props.products.map((product, i) => (
                    <ProductIndexItem product={product} id={product.title + i}/>
                ))
                }
            </ul>
        )
    }
}

export default ProductIndex;