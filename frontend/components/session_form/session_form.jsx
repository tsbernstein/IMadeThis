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
        this.handleDemoUser = this.handleDemoUser.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    componentWillUnmount() {
        this.props.clearErrors();
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

    handleDemoUser(e) {
        e.preventDefault();
        const demoUser = {
            username: 'Demo',
            password: 'password',
            display_name: 'Demo User'
        }
        this.props.processForm(demoUser).then(() => this.props.closeModal())
    }

    render() {
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <h2>{this.props.formType}</h2>
                    <div onClick={this.props.closeModal} className='close-x'>X</div>
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
                    or
                    <button onClick={this.handleDemoUser}>
                        Demo Login
                    </button>
                </form>
            </>
        )
    }
}

export default SessionForm;