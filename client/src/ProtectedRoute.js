import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute() {
  
    const { isLoggedIn }  = useSelector((state) => state);
  return (
      (isLoggedIn) ?   <Outlet></Outlet> : <Navigate to='/Login'></Navigate>
  )
}
