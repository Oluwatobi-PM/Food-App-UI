import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'
import Spinner from "react-spinkit"

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus()

  if (checkingStatus) {
    return <Spinner
    name="ball-spin-fade-loader"
    color="blue"
    fadeIn="none"
    className="h-12 w-12 grid align-middle"
    />
  }

  return loggedIn ? <Outlet /> : <Navigate to='/' />
}

export default PrivateRoute
