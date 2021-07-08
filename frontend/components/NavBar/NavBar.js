import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props){
        super(props);
    }

    logoutButton() {
        return (
            <button onClick={this.props.logout}>Logout</button>
        )
    }

    sessionLinks = () => (
        <nav>
            <button onClick={() => this.props.openModal('login')}>Sign in</button>
            &nbsp;or&nbsp;
            <button onClick={() => this.props.openModal('signup')}>Sign up</button>
        </nav>
    )

    render() {
        return(
            <div className="nav-bar">
                <header>
                    <h1 className="logo">I Made This</h1>
                </header>

                <div className="login-logout">
                    {this.props.currentUser ? this.logoutButton() : this.sessionLinks()}
                </div>
            </div>
        )
    }
}

export default NavBar;

