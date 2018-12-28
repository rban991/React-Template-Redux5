import React from 'react';
import BookSummary from '../components/bookSummary'

export const BooksList = ({books}) => {
    return (
        <div>
            { books && books.map(book => {
               return (
                   <BookSummary book={book} key={book.id} />
               )
            })}
        </div>
    )
}

export default BooksList;