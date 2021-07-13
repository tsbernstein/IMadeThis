import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import { BiArrowBack } from 'react-icons/bi'

class ProductShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId);
    }

    render() {
        if (!this.props.product) return null;
        debugger
        return (
            <div className="show-container">
                <div className="show-column">
                    <Link to='/' className='back-link'><p><BiArrowBack/> Back to search results</p></Link>
                    <div className="show-images">
                        <div className='small-show-image'>
                            <img className='show-image-small' src={this.props.product.photoUrl}/>
                        </div>
                        <div className="large-show-image">
                            <img className='show-image' src={this.props.product.photoUrl}/>
                        </div>
                    </div>
                </div>
                <div className='show-info-container'>
                    <p className='show-seller'>{this.props.product.seller.first_name}</p>
                    <p>reviews placeholder</p>
                    <p className='show-title'>{this.props.product.title}</p>
                    <p className='show-price'>${this.props.product.price + 0}</p>
                    <p className='show-description'>{this.props.product.description}</p>
                </div>
            </div>
        )
    }
}

export default withRouter(ProductShow);