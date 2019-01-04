const initState = {
    authError: null,
    forgottenPasswordError: null,
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('LOGIN_ERROR');
            return {
                ...state,
                authError: 'Login failed'
            };
        case 'LOGIN_SUCCESS':
            console.log('LOGIN_SUCCESS');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('SIGNOUT_SUCCESS');
            return {
                state,
            }
        case 'SIGNUP_SUCCESS':
            console.log('SIGNUP_SUCCESS');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('SIGNUP_ERROR');
            return {
                ...state,
                authError: action.err.message
            }
        case 'FORGOTTEN_PASSWORD_SENT':
            console.log('FORGOTTEN_PASSWORD_SENT');
            return {
                ...state,
                forgottenPasswordError: null
            }
        case 'FORGOTTEN_PASSWORD_FAILED':
            console.log('FORGOTTEN_PASSWORD_FAILED');
            return {
                ...state,
                forgottenPasswordError: action.err.message
            }
        default:
            return state;
    }
}

export default authReducer;