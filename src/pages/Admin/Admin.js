import { adminRoutes } from '~/routes'
import ManageUser from './ManageUser'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function Admin() {
  return (
    <div className='admin'>
      <h1>Admin</h1>
      <div className='manage'>
        <Routes>
          {adminRoutes.map((route, index) => {
            const Page = route.component
            return <Route key={index} path={route.path} element={<Page />} />
          })}
        </Routes>
      </div>
    </div>
  )
}

export default Admin
