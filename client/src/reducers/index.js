import authReducer from "./authReducer";

import { combineReducers } from 'redux';
/**
 * Combine Reducers 
 */

const rootReducer = combineReducers({
    isLoggedIn : authReducer
});


export default rootReducer;