import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';
import axios from 'axios';
import './services/netwokSerivce';
store.subscribe(() => { console.log(store.getState())});

// if(process.env.REACT_APP_JWT_MODE === 'local'){

//   axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;

// }

axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {

  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
