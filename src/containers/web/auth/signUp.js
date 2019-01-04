import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUpUser } from '../../../actions/authActions';
import { bindActionCreators } from 'redux';
import '../../../styles/containers.scss';
import '../../../styles/registration.scss';

class SignUp extends React.Component {
    state = {
        email: '',
        password: '',
        passwordTwo: '',
        firstName: '',
        lastName: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //  console.log(this.state);
        this.props.actions.signUpUser(this.state);
    }

    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/Dashboard' />

        const isInvalid =
        this.state.password !== this.state.passwordTwo ||
        this.state.password === '' ||
        this.state.email === '' ||
        this.state.firstName === '' ||
        this.state.lastName === '' ||
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email) !== true;  

        return (
            <div>
                <div className='outerContainer' >
                    <div className='centerContainer'>
                        <img src="./assets/VS-Registration.png" alt="..." className="modalImage" />
                        <h4 className='RegHeading'>Create An Account</h4>
                        <p className='RegText' >Find and follow your chosen stocks easily by setting up an account below</p>
                        <form onSubmit={this.handleSubmit} >
                            <input className='RegInput' type='text' id='firstName' placeholder='First Name' onChange={this.handleChange}></input>
                            <input className='RegInput' type='text' id='lastName' placeholder='Last Name' onChange={this.handleChange}></input>
                            <input className='RegInput' type='email' id='email' placeholder='Email' onChange={this.handleChange}></input>
                            <input className='RegInput' type='password' id='password' placeholder='Password' onChange={this.handleChange}></input>
                            <input className='RegInput' type='password' id='passwordTwo' placeholder='Confirm Password' onChange={this.handleChange}></input>
                            <button className='RegButton'type='submit' disabled={isInvalid} >Sign Up  <i className="fas fa-user-plus"></i></button>
                        </form>
                        <div>
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        signUpUser
    }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
