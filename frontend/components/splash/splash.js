import React from 'react'
import ProductIndex from '../Product/product_index_container'

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }


    render(){
        return (
            <div className='splash-container'>
                <ProductIndex/>
            </div>
        )
    }
}

export default Splash