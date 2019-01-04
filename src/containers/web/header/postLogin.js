import React from 'react';
import { connect } from 'react-redux';
import { signOutUser } from '../../../actions/authActions';
import { bindActionCreators } from 'redux';
import '../../../styles/header.scss';
import '../../../styles/assets.scss';


class PostLogin extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Function Firing")
        this.props.actions.signOutUser();
    }

    render() {
        return (
            <div className='postLogin'>
            <button  className='authButtons' onClick={this.handleSubmit}>
                Sign Out
            </button>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        signOutUser
    }, dispatch)
})

export default connect(null, mapDispatchToProps)(PostLogin);