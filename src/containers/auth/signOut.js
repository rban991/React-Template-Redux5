import React from 'react';
import { connect } from 'react-redux';
import { signOutUser } from '../../actions/authActions';
import { bindActionCreators } from 'redux';

class SignOut extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Function Firing")
        this.props.actions.signOutUser();
    }

    render() {
        return (
            <button onClick={this.handleSubmit}>
                Sign Out
            </button>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        signOutUser
    }, dispatch)
})

export default connect(null, mapDispatchToProps)(SignOut);