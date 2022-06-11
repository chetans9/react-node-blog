import './App.css';
//import Layout from './components/layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import Layout  from './components/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const responseSuccessHandler = response => {
    
  return response;
};

const responseErrorHandler = (error)  => {

  if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
    if(error.response.status == 401){

      localStorage.removeItem('jwt');
      localStorage.removeItem('authUser');
      
    }else if(error.response.status == 500){

    }
    console.error(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    console.error(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error("Error", error.message);
  }

  return Promise.reject(error);

}

axios.interceptors.response.use(
  response => responseSuccessHandler(response),
  error => responseErrorHandler(error)
);


function App() {

  return (
    <BrowserRouter>
          <div className="App">

            <Layout></Layout>
          </div>

    </BrowserRouter>

  );
}

export default App;
