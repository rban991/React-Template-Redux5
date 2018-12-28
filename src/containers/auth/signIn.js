import React from 'react';
import { connect } from 'react-redux';
import { signInUser } from '../../actions/authActions';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom'

class SignIn extends React.Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
         e.preventDefault();
        // console.log(this.state);
        this.props.actions.signInUser(this.state);
    }

    render() {
        // console.log(this.props);
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/Home' />

        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input type='email' id='email' placeHolder='Email' onChange={this.handleChange}></input>
                    <input type='password' id='password' placeHolder='Password' onChange={this.handleChange}></input>
                    <button type='submit'>Sign In</button>
                </form>
                <div>
                    { authError ? <p>{authError}</p> : null }
                    </div>
            </div>
        );
    }
};

// Have to make sure the dispatch calls the function by wrapping it in braces ()

/* const mapDispatchToProps = (dispatch) => ({
    signInUser: () => dispatch(signInUser())
})
*/

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        signInUser
    }, dispatch)
})


const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth:  state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);