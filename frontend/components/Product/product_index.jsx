import React from 'react';
import { Link } from 'react-router-dom'
import ProductIndexItem from './product_index_item_container';

class ProductIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    loggedInMessage() {
        if (!this.props.currentUser) {
            return (
                <>
                    <div className='yellow-bar-text'>
                        <h1 className='yellow-bar-text1'>Because everyone deserves something as unique as they are.</h1>
                    </div>

                    <div className='yellow-bar-text'>
                        <p className='yellow-bar-text2'>Shop special finds</p>
                    </div>
                </>
            )
        } else {
            return (
                <div className='yellow-bar-text'>
                    <h1 className='yellow-bar-text1'>
                        Welcome back, {this.props.currentUser.first_name}
                    </h1>
                </div>
            )
        }
    }

    render() {
        const indexedArr = this.props.products.slice(6, 12)
        const indexedArr2 = this.props.products.slice(0, 6)

        return (
            <>
            <div className='yellow-bar'>
                {this.loggedInMessage()}

                <div className='recommended'>
                    {indexedArr2.map((product, i) => (
                        <div className='index-container' key={product.title + i}>
                            <Link to={`/products/${product.id}`}>
                                <img className="index-image" src={product.photoUrl}/>
                            </Link>
                
                            <br/>
                
                            <p className='index-image-title' >{product.title}</p>
                        </div>
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
                ))}
                </div>
            </div>
            </>
        )
    }
}

export default ProductIndex;