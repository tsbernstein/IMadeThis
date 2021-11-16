import React from 'react'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            first_name: ''
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
            email: 'Demo',
            password: 'password',
            first_name: 'Demo User'
        }
        this.props.login(demoUser).then(() => this.props.closeModal())
    }

    render() {
        const firstNamePropmt = (
            <div>
                <label>First Name
                <br />  
                    <input
                    className='form-input'
                    type='text'
                    onChange={this.update('first_name')}
                    value={this.state.first_name}
                    />
                </label>
                <br />
            </div>
        )

        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <div className='modal-top'>
                        <h3>{this.props.formType} to continue</h3>
                        <span onClick={this.props.closeModal} className='close-x'>X</span>
                    </div>
                    <p>Sign in or register with your email address</p>
                    {/* <div onClick={this.props.closeModal} className='close-x'>X</div> */}

                    <label>Email
                        <br />  
                        <input
                        className='form-input'
                        type='text'
                        onChange={this.update('email')}
                        value={this.state.email}
                        />
                    </label>
                    <br />
                    <label>Password
                    <br />  
                        <input
                        className='form-input'
                        type='password'
                        onChange={this.update('password')}
                        value={this.state.password}
                        />
                    </label>
                    <br />
                    {this.props.formType === 'Sign up' ? firstNamePropmt : null}
                    {this.renderErrors()}
                    <div className='log-button-modal-div'>
                        <button className="log-button-modal-continue" type='submit'>Continue</button>
                        <br/>
                    </div>
                    <br />
                    <div className='log-button-modal-OR'>
                        <span>
                        OR
                        </span>
                        <br/>
                    </div>
                        <br/>
                    <div className='log-button-modal-div'>
                        <button className="log-button-modal-demo" onClick={this.handleDemoUser}>
                            Demo Login
                        </button>
                    </div>
                </form>
            </>
        )
    }
}

export default SessionForm;