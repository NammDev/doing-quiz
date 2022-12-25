import { ModalComponent } from '~/components/ModalComponent'
import { CreateUser } from '../Form'

function ManageUser() {
  return (
    <>
      <h1>ManagerUser</h1>
      <ModalComponent backdrop>
        <CreateUser />
      </ModalComponent>
    </>
  )
}

export default ManageUser
