import { toast } from 'react-toastify'
import { deleteUser } from '~/services'
import { ModalComponent } from '~/components/ModalComponent'

function ModalDeleteUser({ show, setShow, data, fetchListUsers }) {
  const handleCloseModal = () => {
    setShow(false)
  }

  const deleteApi = async () => {
    const res = await deleteUser(data.id)
    if (res && res.EC === 0) {
      toast.success(res.EM)
      handleCloseModal()
      fetchListUsers()
    } else {
      toast.error(res.EM)
    }
  }

  const handleDeleteUser = () => {
    deleteApi()
  }
  return (
    <>
      <ModalComponent
        onSubmit={handleDeleteUser}
        onClose={handleCloseModal}
        show={show}
        heading='Delete User'
        footer='Delete User'
      >
        <b>{`Are you sure to delete user ${data.email}`}</b>
      </ModalComponent>
    </>
  )
}

export default ModalDeleteUser
