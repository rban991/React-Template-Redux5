import React from 'react';
// import './SocialLinks.css';
// import { Modal } from './Modal';

/*

<Modal show={this.state.isOpen}
                    onClose={this.toggleModal}>
                    
                </Modal>
*/


class SocialLinks extends React.Component {


    render() {
        return (
            <div className='StylesSocialLinks'>

                <a href='https://twitter.com/rban991?lang=en' target="_blank">
                    <img src="./assets/VS-Twitter.png" alt="..." className="VSTwitter" />
                </a>
            </div>
        );
    }
}
export default SocialLinks;