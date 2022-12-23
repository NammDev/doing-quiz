import { Sidebar } from '../components'

function AdminLayout({ children }) {
  return (
    <>
      <Sidebar />
      <div className='main'>{children}</div>
    </>
  )
}

export default AdminLayout
