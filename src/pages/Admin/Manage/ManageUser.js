import { ModalComponent } from '~/components/ModalComponent'
import { CreateUser } from '../Form'
import styles from './ManageUser.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function ManageUser() {
  const handleSubmitCreateUser = () => {
    // validate
    // call API
    fetch('http://localhost:8081/api/v1/participant?page=1&limit=2')
      .then((res) => res.json())
      .then((json) => console.log(json))
  }

  return (
    <div className={cx('manage-user')}>
      <h2>ManagerUser</h2>
      <ModalComponent onSubmit={handleSubmitCreateUser}>
        <CreateUser />
      </ModalComponent>
      <p>Table User</p>
    </div>
  )
}

export default ManageUser
