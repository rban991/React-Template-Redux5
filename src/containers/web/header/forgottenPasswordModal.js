import React from 'react';
import '../../../styles/popups.scss';
import { connect } from 'react-redux';
import { closeForgottenPassword } from '../../../actions/popupsActions';
import { bindActionCreators } from 'redux';
import { forgottenPassword } from '../../../actions/authActions';

class ForgottenPassword extends React.Component {
    state = {
        email: '',
    }
    

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    toggleModal = (event) => {
        this.props.actions.closeForgottenPassword();
    }

    handleForgottenPassword = (event) => {
        event.preventDefault();
        this.props.actions.forgottenPassword(this.state.email);
    }

    render() {
        const isInvalid =
            this.state.email === '' ||
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email) !== true;


        const RegModalInput = {
            'minHeight': '26px',
            'fontSize': '12px',
            'padding': '0 15px',
            'marginLeft': '35px',
            width: '-webkit-fill-available',
            'marginRight': '35px',
        };

        return (

            <div className="backdropStyle">
                <div className="modalStyle">
                    <a onClick={this.toggleModal} className='closeModal'><i className="fas fa-times" ></i></a>
                    <h4 className='modalHeading'>Forgotten Password</h4>
                    <p className='modalText'>Please enter your account's registered email address. Once validated, we will send instruction on how to re-access your account.</p>

                    <form onSubmit={this.handleForgottenPassword}>
                        <input style={RegModalInput}  type='email' className='inputText' id='email' placeholder='Email Address' value={this.state.email} onChange={this.handleChange}/>

                        <button className='modalButton' style={{ marginLeft: 35 }} onClick={this.toggleModal}>
                            Close <i className="fas fa-times"> </i>
                        </button>

                        <button className='modalButton' disabled={isInvalid} type="submit">
                            Submit
                        </button>

                    </form>
                    <p className='error' style={{ marginLeft: 35 }}> {this.state.error} </p>
                </div>
            </div>

        );
    }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        closeForgottenPassword,
        forgottenPassword,
    }, dispatch)
})

export default connect(null, mapDispatchToProps)(ForgottenPassword);
