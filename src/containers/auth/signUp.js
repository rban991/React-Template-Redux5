import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUpUser } from '../../actions/authActions';
import { bindActionCreators } from 'redux';

class SignUp extends React.Component {
    state = {
        email: '',
        password: '',
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
        if (auth.uid) return <Redirect to='/Home' />

        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input type='text' id='firstName' placeHolder='First Name' onChange={this.handleChange}></input>
                    <input type='text' id='lastName' placeHolder='Last Name' onChange={this.handleChange}></input>
                    <input type='email' id='email' placeHolder='Email' onChange={this.handleChange}></input>
                    <input type='password' id='password' placeHolder='Password' onChange={this.handleChange}></input>
                    <button type='submit'>Sign Up</button>
                </form>
                <div>
                    {authError ? <p>{authError}</p> : null}
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
