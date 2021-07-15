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
        const indexedArr = this.props.products.slice(6, 12)
        const indexedArr2 = this.props.products.slice(0, 6)
        return (
            <>
            <div className='yellow-bar'>
                <div className='yellow-bar-text'>
                    <h1 className='yellow-bar-text1'>Because everyone deserves something as unique as they are.</h1>
                </div>

                <div className='yellow-bar-text'>
                    <p className='yellow-bar-text2'>Shop special finds</p>
                </div>

                <div className='recommended'>
                    {indexedArr2.map((product, i) => (
                        <ProductIndexItem product={product} key={product.title + i}/>
                    ))
                }
                </div>
            </div>
            <div className="popular-items">
                <p>Popular gifts right now</p>
            </div>
            <div className='search-history-index'>
                    <div className='search-history-index-items'>
                    {indexedArr.map((product, i) => (
                        <ProductIndexItem product={product} key={product.title + i}/>
                    ))
                    }
                    </div>
            </div>
            </>
        )
    }
}

export default ProductIndex;