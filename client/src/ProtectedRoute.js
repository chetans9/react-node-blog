import { Navigate, Outlet, useNavigate } from 'react-router-dom';

export default function ProtectedRoute() {

    localStorage.getItem('jwt');
    let userLoggedIn = localStorage.getItem('jwt');
    

  return (
      (userLoggedIn) ?   <Outlet></Outlet> : <Navigate to='/Login'></Navigate>
  )
}
