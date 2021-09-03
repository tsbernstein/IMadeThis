import React from 'react';
import { FaSearch } from "react-icons/fa";

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: ''
        }
        this.update = this.update.bind(this);
        this.searchFilter = this.searchFilter.bind(this);
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    searchFilter() {
        const filteredProducts = this.props.products.filter(product => 
            (product.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        )
        return filteredProducts;
    }

    update(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value});
            this.searchFilter();
        }
    }

    render() {
        let filteredProducts = this.searchFilter();
        if (this.state.searchTerm === '') {
            filteredProducts = [];
        }
        return (
            <div>
                <div className='search-bar'>
                    <input 
                        type="text" 
                        value={this.state.searchTerm} 
                        onChange={this.update('searchTerm')} 
                        placeholder="Search for anything"
                    />
                    <button type="submit" className="search-button" >
                        <FaSearch/>
                    </button>
                </div>
                <ul className='search-results'>
                    {filteredProducts.map(product => (
                        <li key={product.id}>{product.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Search;