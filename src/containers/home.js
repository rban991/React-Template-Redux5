import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { BooksList } from './booksList';
import CreateBook from '../components/createBook';
import { bindActionCreators } from 'redux';
// import * as Actions from '../actions';
import { Redirect } from 'react-router-dom'

class Home extends React.Component {
    render() {
        //  console.log(this.props )
       // const { books } = this.props;
       const { auth } = this.props;﻿
       if (!auth.uid) return <Redirect to='/Sign-In' />

        return (
            <div>
                <p>Homepage</p>
                <BooksList books={this.props.books} />
                <CreateBook />
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