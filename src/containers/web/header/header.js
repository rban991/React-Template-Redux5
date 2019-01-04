import React from 'react';
// import './Header.css';
// import Navigation from './Navigation/Navigation';
//import Authentication from './Authentication/Authentication';
import { Link } from "react-router-dom";
import styles from '../../../styles/header.scss';
import { connect } from 'react-redux';
import PostLogin from './postLogin';
import PreLogin from './preLogin';

class Header extends React.Component {
    render() {
        const { auth } = this.props;
        console.log(auth);
        return (
            <div>

                <Link to='/dashboard' style={{ border: '1px', padding: '3px' }}>
                    <img className="VSLogo" src="./assets/VSLogo.png" />
                </Link>
                { /*  <Authentication />
                <Navigation />
                <SocialLinks />
                */ }
                {auth.uid ? <PostLogin/> : <PreLogin/>  }
            </div >
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.firebase.auth
    };
}

export default connect(mapStateToProps)(Header)