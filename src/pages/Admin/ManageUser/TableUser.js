import classNames from 'classnames/bind'
import styles from './ManageUser.module.scss'
import { BsPencilFill } from 'react-icons/bs'
import { TiDelete } from 'react-icons/ti'
import ReactPaginate from 'react-paginate'

const cx = classNames.bind(styles)

function TableUser({ listUsers, onUpdate, onDelete, pageCount, handlePageClick, currentPage }) {
  return (
    <>
      <table className={cx('content-table')}>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((user) => (
              <tr key={user.id} onClick={() => onUpdate(user)}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <ul className={cx('table-actions')}>
                    <li>
                      <BsPencilFill
                        size={16}
                        className='hover-big'
                        style={{ color: 'green' }}
                        onClick={() => onUpdate(user)}
                      />
                    </li>
                    <li>
                      <TiDelete
                        size={20}
                        onClick={() => onDelete(user)}
                        className='hover-big'
                        style={{ color: 'red' }}
                      />
                    </li>
                  </ul>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <ReactPaginate
        nextLabel='next >'
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel='< previous'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakLabel='...'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName='pagination'
        activeClassName='active'
        renderOnZeroPageCount={null}
        forcePage={currentPage - 1}
      />
    </>
  )
}

export default TableUser
