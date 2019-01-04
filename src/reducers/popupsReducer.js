const initState = {
    showForgottenPasswordModal: false,
};

const popupsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SHOW_FORGOTTEN_PASSWORD':
            console.log('SHOW_FORGOTTEN_PASSWORD');
            return {
                ...state,
                showForgottenPasswordModal: true,
            }
            case 'CLOSE_FORGOTTEN_PASSWORD':
            console.log('CLOSE_FORGOTTEN_PASSWORD');
            return {
                ...state,
                showForgottenPasswordModal: false,
            };
        default:
            return state;
    }
}

export default popupsReducer;