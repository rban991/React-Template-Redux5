import React from 'react';


const BookSummary = ({book}) => {
    return (
        <div >
            <p >'{book.title}' published the year '{book.published}' by someone named '{book.author}'.</p> 
        </div>
    )
}

export default BookSummary;