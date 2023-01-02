import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import { getAmountUsers } from '~/services/users'
import styles from './ManageUser.module.scss'
import TableUser from './TableUser'
import ModalCreateUser from './ModalCreateUser'
import ModalUpdateUser from './ModalUpdateUser'
import { RiAddFill } from 'react-icons/ri'
import ButtonComponent from '~/components/Button/Button'
import ModalDeleteUser from './ModalDeleteUser'

const cx = classNames.bind(styles)
const PAGE_LIMIT = 4

function ManageUser() {
  const [showModalCreate, setShowModalCreate] = useState(false)
  const [showModalUpdate, setShowModalUpdate] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)

  const [dataUpdate, setDataUpdate] = useState({})
  const [dataDelete, setDataDelete] = useState({})

  const [listUsersPage, setListUsersPage] = useState([])
  const [pageCount, setPageCount] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)

  const fetchListUsersPage = async (page) => {
    const data = await getAmountUsers(page, PAGE_LIMIT)
    if (data.EC === 0) {
      setListUsersPage(data.DT.users)
      setPageCount(data.DT.totalPages)
    }
  }

  useEffect(() => {
    fetchListUsersPage(currentPage)
  }, [currentPage])

  const handleClickUpdate = (user) => {
    setShowModalUpdate(true)
    setDataUpdate(user)
  }

  const handleClickDelete = (user) => {
    setShowModalDelete(true)
    setDataDelete(user)
  }

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1)
  }

  const handleReRender = () => {
    if (currentPage === 1) {
      setCurrentPage(1)
      fetchListUsersPage(1)
    } else {
      setCurrentPage(1)
    }
  }

  const handleReRenderUpdate = () => {
    fetchListUsersPage(currentPage)
  }

  return (
    <div className={cx('manage-user')}>
      <div className={cx('table-user')}>
        <h2>Table User</h2>
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
          reRender={handleReRender}
        />
        <ModalUpdateUser
          show={showModalUpdate}
          setShow={setShowModalUpdate}
          reRender={handleReRenderUpdate}
          data={dataUpdate}
        />
        <ModalDeleteUser
          show={showModalDelete}
          setShow={setShowModalDelete}
          data={dataDelete}
          reRender={handleReRender}
        />
        <TableUser
          listUsers={listUsersPage}
          onUpdate={handleClickUpdate}
          onDelete={handleClickDelete}
          pageCount={pageCount}
          handlePageClick={handlePageClick}
          currentPage={currentPage}
        />
      </div>
    </div>
  )
}

export default ManageUser
