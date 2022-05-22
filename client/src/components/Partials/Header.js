import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
  
  // let authUser = localStorage.getItem('jwt');

  const isLoggedIn = props.isLoggedIn;


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="appNavBar">
        <div className="container">
          <a className="navbar-brand" to="#!">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className='nav-item'>
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>


              <li className='nav-item'>


                <NavLink className="nav-link" to="/contact-us">Contact</NavLink>
              </li>

            {(isLoggedIn === true) ?

              <li className='nav-item'>
                <NavLink className="nav-link" to="/profile">Profile</NavLink>
              </li> : <li className='nav-item'>
                <NavLink className="nav-link" to="/Login">Login</NavLink>
              </li>}

            </ul>
          </div>
        </div>
      </nav>
      {/* <header className="py-5 bg-light border-bottom mb-4">
        <div className="container">
          <div className="text-center my-5">
            <h1 className="fw-bolder">Welcome to Blog Home!</h1>
            <p className="lead mb-0">A Bootstrap 5 starter layout for your next blog homepage</p>
          </div>
        </div>
      </header> */}
    </div>


  )


}

export default Header;