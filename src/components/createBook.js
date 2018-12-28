import React from 'react';
import { connect } from 'react-redux';
import { addBook } from '../actions/bookActions';
import { bindActionCreators } from 'redux';

export class CreateBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            blurb: '',
            published: '',
            title: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Runs handleSubmit() ");
        console.log(this.state);
        this.props.actions.addBook(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input type='text' id='author' placeholder='author' onChange={this.handleChange}></input>
                    <input type='text' id='blurb' placeholder='blurb' onChange={this.handleChange}></input>
                    <input type='number' id='published' placeholder='published' onChange={this.handleChange}></input>
                    <input type='text' id='title' placeholder='title' onChange={this.handleChange}></input>
                    <button type='submit'>AddBook</button>
                </form>
            </div>
        );
    }
};

// Much simpler way of hooking up my actions 
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        addBook
    }, dispatch)
})

export default connect(null, mapDispatchToProps)(CreateBook);
