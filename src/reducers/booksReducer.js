// import { addBook } from '../actions/bookActions';

const initialState = {
    books: [
        { id: '1', author: 'Guy', blurb: 'Book about Guy Thomas', published: 2018, title: 'Guy Thomas Autobiography' },
        { id: '2', author: 'Joey Barton', blurb: 'Book about Guy Thomas', published: 2020, title: 'Joey Barton Autobiography' },
        { id: '3', author: 'Bobby Charlton', blurb: 'Famous Man Utd Guy', published: 2000, title: 'Sir Bobbys Autobiography' }
    ]
};

 export default function booksReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_BOOK": 
            console.log('Performed ADD_BOOK in Reducer successfully', action.book.author);
            return {
                ...state,
            };
        default:
            return state;
    }
}


/*
const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
        console.log('Performed ADD_BOOK in Reducer successfully', action.book)
    }
    return state
}

export default booksReducer;
*/