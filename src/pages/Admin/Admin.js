import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Admin() {
  return (
    <div className='admin'>
      <h1>Admin</h1>
      <div className='manage'>
        <Outlet />
      </div>
      <ToastContainer autoClose={2500} />
    </div>
  )
}

export default Admin
