export function addBook(book) {
    console.log("Action has been called - ADD_BOOK");
    console.log(book);
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call 
        let firestore = getFirestore();
        firestore.collection('books').add({
            ...book,
        }).then(() => {
            console.log(dispatch)
            console.log(firestore.collection('books'))
            dispatch({ type: "ADD_BOOK", book });
        }).catch((err) => {
            console.log(err)
        })
    }
}


/*  USED TO BE 
 export function addBook(book) {
 return (dispatch, getState) => {
        // make async call 
        dispatch({
            type: 'ADD-BOOK',
            book
        });
    }
*/
