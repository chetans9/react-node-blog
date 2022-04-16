import { createStore } from 'redux';

import rootReducer from './reducers/index';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSIONS__ && window.__REDUX_DEVTOOLS_EXTENSIONS__());

export default store;