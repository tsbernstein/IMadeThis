import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import { BiArrowBack } from 'react-icons/bi'
import ReviewForm from '../Review/review_form';
import ReviewShow from '../Review/review_show'
// import EditForm from '../Review/edit_review_form_container';
import CreateForm from '../Review/new_review_form_container';

class ProductShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId);
    }

    render() {
        if (!this.props.product) return null;
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
                    <div className='reviews-form'>
                        <CreateForm productId={this.props.product.id}/>
                    </div>
                    <div className='reviews-show'>
                        <ReviewShow product={this.props.product} reviews={this.props.reviews}/>
                    </div>
                </div>
                <div className='show-info-container'>
                    <p className='show-seller'>Sold by: {this.props.product.seller.first_name}</p>
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