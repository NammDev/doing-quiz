import { Outlet } from 'react-router-dom'

function Admin() {
  return (
    <div className='admin'>
      <h1>Admin</h1>
      <div className='manage'>
        <Outlet />
      </div>
    </div>
  )
}

export default Admin
