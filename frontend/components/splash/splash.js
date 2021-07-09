import React from 'react'

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }


    render(){
        return (
            <div>
                <ul>
                    {this.props.products.map(
                        (product, i) => (
                            <li>{product.title}</li>
                        )
                    )}
                </ul>
            </div>
        )
    }
}

export default Splash