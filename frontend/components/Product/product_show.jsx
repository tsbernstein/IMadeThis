import React from 'react';
import { withRouter } from "react-router";

class ProductShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.productId);
    }

    render() {
        if (!this.props.product) return null;
        debugger;
        return (
            <div className="show-container">
                <p></p>
                <img className='show-image' src={this.props.product.photoUrl}/>
                <div className='show-info-container'>
                    <p>reviews placeholder</p>
                    <p>{this.props.product.title}</p>
                    <p>${this.props.product.price}</p>
                    <p>{this.props.product.description}</p>
                </div>
            </div>
        )
    }
}

export default withRouter(ProductShow);