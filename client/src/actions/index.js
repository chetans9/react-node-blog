export const setLogin = () => {

    return {
        type: "LOGIN",
        payload: {
          username: null,
          first_name :null
        }

    }



}


export const setLogOut = () => {

    return {
        type: "LOGOUT",
        payload: {
          username: null,
        }

    }



}