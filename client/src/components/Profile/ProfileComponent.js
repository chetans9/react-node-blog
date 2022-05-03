// import React from 'react';
import { useState } from 'react';
import ProfileSideBarComponent from './ProfileSideBarComponent';
// import axios from 'axios';

import { Link, Outlet } from 'react-router-dom';
import Messages from '../Partials/Messages';


function ProfileComponent(props) {
    
    return <>

        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active"><Link to="/profile">Profile</Link></li>
                </ol>
            </nav>
        </div>

        <div className='header'>
            <h4>Profile</h4>
        </div>
        <hr></hr>
        <Messages />

        <div className='row'>
            <div className='col-sm-3'>
                <ProfileSideBarComponent></ProfileSideBarComponent>
            </div>

            <div className='col-sm-8'>
                <Outlet></Outlet>
            </div>
        </div>
    </>



}

export default ProfileComponent;