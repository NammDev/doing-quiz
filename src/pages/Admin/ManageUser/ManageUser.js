import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import { toast } from 'react-toastify'
import { getAllUsers } from '~/services'
import styles from './ManageUser.module.scss'
import TableUser from './TableUser'
import ModalCreateUser from './ModalCreateUser'
import ModalUpdateUser from './ModalUpdateUser'
import { RiAddFill } from 'react-icons/ri'
import ButtonComponent from '~/components/Button/Button'

const cx = classNames.bind(styles)

function ManageUser() {
  const [showModalCreate, setShowModalCreate] = useState(false)
  const [showModalUpdate, setShowModalUpdate] = useState(false)
  const [listUsers, setListUsers] = useState([])
  const [dataUpdate, setDataUpdate] = useState({})

  const fetchListUsers = async () => {
    const data = await getAllUsers()
    if (data.EC === 0) {
      setListUsers(data.DT)
    } else {
      toast(data.EM)
    }
  }

  useEffect(() => {
    fetchListUsers()
  }, [])

  const handleClickUpdate = (user) => {
    setShowModalUpdate(true)
    setDataUpdate(user)
  }

  return (
    <div className={cx('manage-user')}>
      <h2>ManagerUser</h2>
      <ButtonComponent
        onClick={() => setShowModalCreate(true)}
        className='btn-color'
        left={<RiAddFill />}
      >
        Create User
      </ButtonComponent>
      <ModalCreateUser
        show={showModalCreate}
        setShow={setShowModalCreate}
        fetchListUsers={fetchListUsers}
      />
      <ModalUpdateUser
        show={showModalUpdate}
        setShow={setShowModalUpdate}
        fetchListUsers={fetchListUsers}
        data={dataUpdate}
      />
      <TableUser listUsers={listUsers} onUpdate={handleClickUpdate} />
    </div>
  )
}

export default ManageUser
