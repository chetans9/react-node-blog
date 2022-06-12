import { Navigate, Outlet } from 'react-router-dom';
import { setLogout } from './actions/index';
import { useSelector } from 'react-redux';

export default function ProtectedRoute() {

    localStorage.getItem('jwt');
    //let userLoggedIn = localStorage.getItem('jwt');

    

    const { isLoggedIn }  = useSelector((state) => state);
    

  return (
      (isLoggedIn) ?   <Outlet></Outlet> : <Navigate to='/Login'></Navigate>
  )
}
