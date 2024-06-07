import { Navigate } from 'react-router-dom'
import LoadingSpinner from '../components/shared/LoadingSpinner'
import useRole from '../hooks/useRole'
import PropTypes from 'prop-types'
const SellerRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <LoadingSpinner />
  if (role === 'seller') return children
  return <Navigate to='/dashboard' />
}

export default SellerRoute

SellerRoute.propTypes = {
  children: PropTypes.element,
}