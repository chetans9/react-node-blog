const isLoggedIn = false;

const authState = (state = isLoggedIn, action) => {


    switch(action.type){

        case 'LOGIN' :


            
        state = true

        return state;


        
        case 'DECREMENT' :  return state + 1;


        default : return state

    }



}

export default changeNumber;