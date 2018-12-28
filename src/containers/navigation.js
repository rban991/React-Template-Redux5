import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import SignOut from './auth/signOut'

class Navigation extends React.Component {
    render() {
        const { auth } = this.props;﻿
        console.log(auth);

        return (
            <ul>
                <li><NavLink to='/Home'>Home</NavLink></li>
                <li><NavLink to='/Page1'>Page 1</NavLink></li>
                <li><NavLink to='/Page2'>Page 2</NavLink></li>
                { auth.uid ? <SignOut /> :     
                <div>
                <li><NavLink to='/Sign-In'>Sign In</NavLink></li>
                <li><NavLink to='/Sign-Up'>Sign Up</NavLink></li>
                </div> }
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth:  state.firebase.auth
    };
}

export default connect(mapStateToProps)(Navigation)