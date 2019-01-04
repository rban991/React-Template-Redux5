import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { bindActionCreators } from 'redux';
// import * as Actions from '../actions';
import { Redirect } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <div>
                <p>Dashboard</p>
            </div>
        );
    }
};

function mapStateToProps(state) {
    console.log(state)
    return {
        books: state.firestore.ordered.books,
        auth:  state.firebase.auth
    };
}

// export default connect(mapStateToProps)(Home);


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'books' }
    ])
)(Home)



// import { composeWithDevTools } from "redux-devtools-extension";