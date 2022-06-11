import axios from 'axios';

if(process.env.REACT_APP_JWT_MODE === 'local'){

    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;
  
  }

  axios.defaults.headers.post['Content-Type'] = 'application/json';


const responseSuccessHandler = response => {
    
    return response;
  };


  const responseErrorHandler = (error)  => {

    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
      if(error.response.status == 401){

        alert("Unauthh");
  
        // localStorage.removeItem('jwt');
        // localStorage.removeItem('authUser');
        //window.location.href = "/Login";
        
      }else if(error.response.status == 500){
        window.location.href = "/error";
  
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




  