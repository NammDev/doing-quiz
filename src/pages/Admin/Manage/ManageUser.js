import { ModalComponent } from '~/components/ModalComponent'
import { CreateUser } from '../Form'

function ManageUser() {
  return (
    <div className='manage-user'>
      <h1>ManagerUser</h1>
      <ModalComponent>
        <CreateUser />
      </ModalComponent>
      <h1>Table User</h1>
    </div>
  )
}

export default ManageUser
