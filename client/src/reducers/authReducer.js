const isLoggedIn = false;

const authReducer = (state = isLoggedIn, action) => {

    switch(action.type){
        case 'LOGIN' :
            return true;

        case 'LOGOUT' : 
            return false;

        default : 
        return state
    }
}

export default authReducer;