import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setLogin } from '../../actions/index';


function LoginComponent(props) {

    const dispatch = useDispatch();

    const [formState, setFormState] = useState({

        user_name: '',
        password: ''

    });
    let navigate = useNavigate();

    

    const handleInputChange = (event) => {
        setFormState((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
        }));
    };

    let submitForm = (e) => {
        e.preventDefault();

        axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/login`, formState).then((res) => {

            let token = res.data.token;

            localStorage.setItem('jwt', token);
            localStorage.setItem('authUser', res.data.user);

            //console.log(setLogin());

            dispatch(setLogin());
            navigate('/profile');


        }).catch((err) => {

            alert(err);
        });


    }

    return <div id="LoginForm">

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