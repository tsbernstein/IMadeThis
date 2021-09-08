import React from 'react';
import { FaSearch } from "react-icons/fa";

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: '',
            searching: false
        }
        this.update = this.update.bind(this);
        this.searchFilter = this.searchFilter.bind(this);
        this.toggle = this.toggle.bind(this);
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

    toggle() {
        if (this.state.searching) {
            document.getElementsByClassName('search-results')[0].style.display = 'block';
        } else {
            document.getElementsByClassName('search-results')[0].style.display = 'none';
        }
    }

    render() {
        let filteredProducts = this.searchFilter();
        if (this.state.searchTerm === '') {
            filteredProducts = [];
        }

        document.addEventListener('click', () => {
            if (document.activeElement === document.getElementsByClassName('search-bar-input')[0]) {
                this.setState({['searching']: true})
                this.toggle();
            } else {
                this.setState({['searching']: false})
                this.toggle();
            }
        })

        return (
            <div className='search-container'>
                <div className='search-bar'>
                    <input 
                        className='search-bar-input'
                        type="text" 
                        value={this.state.searchTerm}
                        onChange={this.update('searchTerm')} 
                        placeholder="Search for anything"
                    />
                    <button type="submit" className="search-button">
                        <FaSearch/>
                    </button>
                </div>
                <ul className='search-results'>
                    {filteredProducts.map(product => (
                        <li className='search-results-item' key={product.id}>{product.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Search;