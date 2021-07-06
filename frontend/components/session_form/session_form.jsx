import React from 'react'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            display_name: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <h2>{this.props.formType}</h2>
                    <label>Username:   
                        <input 
                        type='text'
                        onChange={this.update('username')}
                        value={this.state.username}
                        />
                    </label>
                    <br />
                    <label>Password:   
                        <input 
                        type='password'
                        onChange={this.update('password')}
                        value={this.state.password}
                        />
                    </label>
                    <br />
                    <label>Display Name:   
                        <input 
                        type='text'
                        onChange={this.update('display_name')}
                        value={this.state.display_name}
                        />
                    </label>
                    <br />
                    {this.renderErrors()}
                    <button type='submit'>{this.props.formType}</button>
                </form>
            </>
        )
    }
}

export default SessionForm;