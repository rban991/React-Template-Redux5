export function showForgottenPassword() {
    return dispatch => {
        dispatch({
            type: "SHOW_FORGOTTEN_PASSWORD",
        });
    }
}

export function closeForgottenPassword() {
    return dispatch => {
        dispatch({
            type: "CLOSE_FORGOTTEN_PASSWORD",
        });
    }
}