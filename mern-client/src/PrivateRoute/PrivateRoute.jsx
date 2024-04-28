/*import{ Navigate }from 'react-router-dom'
import { useContext } from "react"
import { AuthContext } from "../contects/AuthProvider"
import { useLocation } from 'react-router-dom';
import { Spinner } from 'flowbite-react';


const PrivateRoute = ({children}) => {
      const{user,loading} =useContext(AuthContext)
      const location = useLocation();

      if(loading){
            return <div className="text-center">
            <Spinner aria-label="Center-aligned spinner example" />
          </div>
      }
      if (user){
           return children;  
      }
  return (
    <Navigate to="/login" state={{from:location}} replace></Navigate>
  )
}

export default PrivateRoute

*/
import { Navigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../contects/AuthProvider";
import { useLocation } from 'react-router-dom';
import { Spinner } from 'flowbite-react';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
        <p>Loading...</p>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return (
    <Navigate
      to={`/login?redirect=${encodeURIComponent(location.pathname + location.search)}`}
      replace
    />
  );
}

export default PrivateRoute;
