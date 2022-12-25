import { ModalComponent } from '~/components/ModalComponent'
import { CreateUser } from '../Form'
import styles from './ManageUser.module.scss'
import classNames from 'classnames/bind'
import * as searchService from '~/services/searchService'

const cx = classNames.bind(styles)

function ManageUser() {
  const handleSubmitCreateUser = () => {
    // validate
    // call API
    const fetchApi = async () => {
      const res = await searchService.getUser(1, 2)
      console.log(res.DT)
    }
    fetchApi()
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
