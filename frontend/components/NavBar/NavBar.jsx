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
        this.props.fetchCarts();
    }

    componentDidUpdate() {
        this.props.fetchCarts();
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

    notLoggedCart() {
        return (
            <button className='shopping-cart' onClick={() => this.props.openModal('notloggedcart')}>
                <FaShoppingCart className='cart-icon'/>
            </button>
        )
    }

    loggedInCart() {
        return (
            <button className='shopping-cart'>
                <Link to='/cart' className='cart-link'>
                    <FaShoppingCart className='cart-icon'/>
                    {this.cartCount()}
                </Link>
            </button>
        )
    }

    cartCount() {
        if (!this.props.itemCount || !this.props.currentUser){
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

                    {this.props.currentUser ? this.loggedInCart() : this.notLoggedCart()}
                </div>
                <div className="category-nav">
                    <div className="category-nav-div">
                        <Link to='/categories'>
                            <button className="category-button">
                                Back to School Trends
                            </button>
                        </Link>
                    </div>
                    <div className="category-nav-div">
                        <Link to='/categories'>
                            <button className="category-button">
                                Jewelry & Accessories
                            </button>
                        </Link>
                    </div>
                    <div className="category-nav-div">
                        <Link to='/categories'>
                            <button className="category-button">
                                Clothing & Shoes
                            </button>
                        </Link>
                    </div>
                    <div className="category-nav-div">
                        <Link to='/categories'>
                            <button className="category-button">
                                Home & Living
                            </button>
                        </Link>
                    </div>
                    <div className="category-nav-div">
                        <Link to='/categories'>
                            <button className="category-button">
                                Wedding & Party
                            </button>
                        </Link>
                    </div>
                    <div className="category-nav-div">
                        <Link to='/categories'>
                            <button className="category-button">
                                Toys & Entertainment
                            </button>
                        </Link>
                    </div>
                    <div className="category-nav-div">
                        <Link to='/categories'>
                            <button className="category-button">
                                Art & Collectibles
                            </button>
                        </Link>
                    </div>
                    <div className="category-nav-div">
                        <Link to='/categories'>
                            <button className="category-button">
                                Craft Supplies
                            </button>
                        </Link>
                    </div>
                    <div className="category-nav-div">
                        <Link to='/categories'>
                            <button className="category-button">
                                Gifts & Gift Cards
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;

