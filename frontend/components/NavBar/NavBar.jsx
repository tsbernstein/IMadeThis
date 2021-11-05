import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import Search from '../Search/search_container'

class NavBar extends React.Component {
    constructor(props){
        super(props);

        this.cartCount = this.cartCount.bind(this);
    }

    componentDidMount() {
        this.props.fetchCarts()
    }

    logoutButton() {
        return (
            <button className="log-button" onClick={this.props.logout}>Logout</button>
        )
    }

    sessionLinks = () => (
        <nav>
            <button className="log-button" onClick={() => this.props.openModal('login')}>Sign in</button>
            &nbsp;or&nbsp;
            <button className="log-button" onClick={() => this.props.openModal('signup')}>Sign up</button>
        </nav>
    )

    cartCount() {
        if (!this.props.itemCount){
            return null;
        } else {
            return (
                <div className='cart-count'>
                    {this.props.itemCount}
                </div>
            )
        }
    }

    render() {
        return(
            <div className="nav-container">
                <div className="nav-bar">
                    <header>
                        <Link to='/' className='home-link'><h1 className="logo">I Made This</h1></Link>
                    </header>

                    <div className="search">
                        <Search/>
                    </div>

                    <p className="welcome">{this.props.currentUser ? `${this.props.currentUser.first_name}` : ""}</p>

                    <div className="login-logout">
                        {this.props.currentUser ? this.logoutButton() : this.sessionLinks()}
                    </div>

                    <button className='shopping-cart'>
                        <Link to='/cart' className='cart-link'>
                            <FaShoppingCart className='cart-icon'/>
                            {this.cartCount()}
                        </Link>
                    </button>
                </div>
                <div className="category-nav">
                    <div className="category-nav-div">
                        <button className="category-button">
                            Back to School Trends
                        </button>
                    </div>
                    <div className="category-nav-div">
                        <button className="category-button">
                            Jewelry & Accessories
                        </button>
                    </div>
                    <div className="category-nav-div">
                        <button className="category-button">
                            Clothing & Shoes
                        </button>
                    </div>
                    <div className="category-nav-div">
                        <button className="category-button">
                            Home & Living
                        </button>
                    </div>
                    <div className="category-nav-div">
                        <button className="category-button">
                            Wedding & Party
                        </button>
                    </div>
                    <div className="category-nav-div">
                        <button className="category-button">
                            Toys & Entertainment
                        </button>
                    </div>
                    <div className="category-nav-div">
                        <button className="category-button">
                            Art & Collectibles
                        </button>
                    </div>
                    <div className="category-nav-div">
                        <button className="category-button">
                            Craft Supplies
                        </button>
                    </div>
                    <div className="category-nav-div">
                        <button className="category-button">
                            Gifts & Gift Cards
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;

