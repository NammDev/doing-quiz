import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import config from '~/config'

function AdminRoute({ children }) {
  const account = useSelector((state) => state.user.account)
  if (account.role !== 'ADMIN') {
    return <Navigate to={config.routes.notFound} />
  }
  return children
}

export default AdminRoute
