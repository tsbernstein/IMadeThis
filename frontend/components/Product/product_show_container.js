import React from 'react'
import { connect } from 'react-redux'
import ProductShow from './product_show'
import { fetchProduct } from '../../actions/product_actions'

const mSTP = (state , ownProps) => {
    return {
        product: state.entities.products[ownProps.match.params.productId]
    }
}

const mDTP = dispatch => ({
    fetchProduct: (id) => dispatch(fetchProduct(id))
})

export default connect(mSTP, mDTP)(ProductShow);