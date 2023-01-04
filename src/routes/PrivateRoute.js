import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

function PrivateRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
  const prevLocation = useLocation()
  if (!isAuthenticated) {
    return <Navigate to={`/login?redirectTo=${prevLocation.pathname}`} />
  }
  // authorized so return child components
  return children
}

export { PrivateRoute }
