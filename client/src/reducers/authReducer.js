const isLoggedIn = localStorage.getItem('jwt') ? true : false;

const authReducer = (state = isLoggedIn, action) => {

    switch (action.type) {
        case 'LOGIN':
            return true;

        case 'LOGOUT':
            localStorage.removeItem('jwt');
            localStorage.removeItem('authUser');
            return false;

        default:
            return state
    }
}

export default authReducer;