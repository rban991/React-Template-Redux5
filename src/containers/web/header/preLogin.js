import React from 'react';
import { connect } from 'react-redux';
import { signInUser, signInUserGoogle } from '../../../actions/authActions';
import { showForgottenPassword } from '../../../actions/popupsActions';
import { bindActionCreators } from 'redux';
import '../../../styles/header.scss';
import '../../../styles/assets.scss';
import { Redirect, Link, NavLink } from 'react-router-dom';

import ForgottenPassword from './forgottenPasswordModal';

class PreLogin extends React.Component {
    state = {
        email: localStorage.getItem('storedEmail') || "",
        password: '',
        rememberMe: localStorage.getItem('rememberMe') || false,
    }

    handleChange = (e) => {

        // Set my state
        this.setState({
            [e.target.id]: e.target.value
        })

         // Set rememberMe localStorage state subject to whether the box is ticked or not ?
        if ([e.target.id]=='rememberMe') {
            return localStorage.setItem("rememberMe", e.currentTarget.checked);
        }
    }

    handleSignIn = (event) => {
        event.preventDefault();

        // Set email as cookie
        localStorage.setItem("storedEmail", this.state.email);

        this.props.actions.signInUser(this.state);
    }

    handleGoogleSignIn = (event) => {
        console.log("Calling handleGoogleSignIn() Function")
        this.props.actions.signInUserGoogle();
    }

    toggleModal = (event) => {
        this.props.actions.showForgottenPassword();
    }

    render() {


/*
        // Setting a cookie for the users username 
        const existingUser = localStorage.getItem("storedEmail");
        if (existingUser) {
            this.setState({ email: existingUser })
            return;
        }
        */

        const { authError, auth, forgottenPasswordModal } = this.props;
        if (auth.uid) return <Redirect to='/Dashboard' />

        const isInvalid =
            this.state.email === '' ||
            this.state.password === '' ||
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email) !== true;

        const bottomRow = {
            display: 'inline-block',
            float: 'left',
            width: '155px',
            'marginTop': '1px',
        };

        return (
            <div className='preLogin' >
                <form className='floatLeft' onSubmit={this.handleSignIn}>
                    <input type='email' className='inputText' id='email' placeholder='Email' value={this.state.email} onChange={this.handleChange}></input>
                    <input type='password' className='inputText' id='password' placeholder='Password' value={this.state.password} onChange={this.handleChange}></input>
                    <button type='submit' className='authButtons' disabled={isInvalid}>Sign In</button>
                </form>

                <NavLink to='/Sign-Up' className='buttonActive' >
                    <button className='authButtons'>
                        Sign Up
                    </button>
                </NavLink>

                <div style={bottomRow}>

                    <label className='rememberMe' >
                        Remember me
                        </label>
                    <input
                        className='rememberMeCheckbox'
                        type="checkbox"
                        id='rememberMe'
                        onChange={this.handleChange}
                    />

                </div>

                <div style={bottomRow}>
                    <a className='forgottenPassword' onClick={this.toggleModal}>Forgotten your password ?</a>
                </div>

                <button className='VSGoogleSignInButton' onClick={this.handleGoogleSignIn} >
                    <img className="VSGoogleSignIn" src="./assets/GoogleButton.png" alt="..." />
                    <p className='GoogleSignInText'  >Sign in with Google</p>
                </button>

                <div>
                    {authError ? <p>{authError}</p> : null}
                </div>

                <div>
                    {forgottenPasswordModal ? <ForgottenPassword /> : null}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        signInUser,
        showForgottenPassword,
        signInUserGoogle
    }, dispatch)
})

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
        forgottenPasswordModal: state.popups.showForgottenPasswordModal,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PreLogin);