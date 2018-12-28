/* export const signInUser = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call 
        dispatch({
            type: 'SIGN-IN-USER',
        })
    }
}
*/

export function signInUser(credentials) {
    console.log("Action has been called - SIGNIN");
    console.log(credentials);
    return (dispatch, getState, { getFirebase }) => {

        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            console.log(dispatch)
            dispatch({ type: "LOGIN_SUCCESS" });
        }).catch((err) => {
            console.log(err)
            dispatch({ type: "LOGIN_ERROR", err });
        })
    }
}


export function signOutUser() {
    console.log("Action has been called - SIGNOUT");
    return (dispatch, getState, { getFirebase }) => {

        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            console.log(dispatch);
            dispatch({ type: "SIGNOUT_SUCCESS" });
        });
    }
}

export function signUpUser(newUser) {
    console.log("Action has been called - SIGNUP");
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firestName: newUser.firstName,
                lastName: newUser.lastName
            })
        }).then(() => {
            dispatch({ type: "SIGNUP_SUCCESS" })
        }).catch(err => {
            dispatch({ type: "SIGNUP_ERROR", err })
        })
    }
}