
import useAuth from '../hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'
import LoadingSpinner from '../components/shared/LoadingSpinner'

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) return <LoadingSpinner />
  if (user) return children
  return <Navigate to='/login' state={location.pathname} replace='true' />
}

export default PrivateRoute