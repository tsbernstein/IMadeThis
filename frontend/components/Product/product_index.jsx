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
            <div className='yellow-bar'>
                <div className='yellow-bar-text'>
                    <h1 className='yellow-bar-text1'>Because everyone deserves something as unique as they are.</h1>
                </div>

                <div className='yellow-bar-text'>
                    <p Shop className='yellow-bar-text2'>Shop special finds</p>
                </div>

                <ul className='recommended'>
                    {this.props.products.map((product, i) => (
                        <ProductIndexItem product={product} id={product.title + i}/>
                    ))
                    }
                </ul>
            </div>
        )
    }
}

export default ProductIndex;