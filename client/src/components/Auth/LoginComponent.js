import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
// import { Navigate } from "react-router-dom";



function LoginComponent(props) {

    const myState = useSelector((state) => state.changeNumber);

    const [formState, setFormState] = useState({

        user_name : '',
        password : ''

    });

    const [number, setNumber] = useState(1);




    const handleInputChange = (event) => {
        setFormState((prevProps) => ({
          ...prevProps,
          [event.target.name]: event.target.value
        }));
      };

    let submitForm = (e) => {
        e.preventDefault();

        axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/login`, formState).then((res)=>{


        }).catch((err) => {

            alert(err);
        });


    }

    return <div id="LoginForm">

        <div>

            {myState}


        </div>

        <div className='row'>
            <div className='col-sm-6 offset-sm-3'>
                <form onSubmit={submitForm}>
                    <div className="mb-3">
                        <label htmlFor="user_name" className="form-label">User Name</label>
                        <input type="text" className="form-control" id="user_name" aria-describedby="user_name_help" name="user_name" onChange={handleInputChange} value={formState.user_name} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" onChange={handleInputChange} value={formState.password} />
                    </div>

                    <div className="mb-3">
                        
                        <input type="submit" className="btn btn-primary" id="submit" />
                    </div>
                </form>


            </div>

        </div>




    </div>;




}

export default LoginComponent;