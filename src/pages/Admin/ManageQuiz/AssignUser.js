import classNames from 'classnames/bind'
import styles from './AssignUser.module.scss'
import Select from 'react-select'
import { useState, useEffect } from 'react'
import { getAllQuizForAdmin } from '~/services/quiz'
import { getAllUsers } from '~/services/users'
import ButtonComponent from '~/components/Button/Button'
import { postAssignQuizForUser } from '~/services/quiz'
import { toast } from 'react-toastify'
import _ from 'lodash'

const cx = classNames.bind(styles)

function AssignUser() {
  const [selectedQuiz, setSelectedQuiz] = useState()
  const [listQuiz, setListQuiz] = useState([])
  const [selectedUser, setSelectedUser] = useState()
  const [listUser, setListUser] = useState([])

  const fetchQuizApi = async () => {
    const data = await getAllQuizForAdmin()
    if (data && data.EC === 0) {
      const newListQuiz = data.DT.map((q) => ({ value: q.id, label: `${q.id} - ${q.description}` }))
      setListQuiz(newListQuiz)
    }
  }

  const fetchUserApi = async () => {
    const res = await getAllUsers()
    if (res.EC === 0) {
      const newListUser = res.DT.map((u) => ({
        value: u.id,
        label: `${u.id} - ${u.username} - ${u.email}`,
      }))
      setListUser(newListUser)
    }
  }

  useEffect(() => {
    fetchQuizApi()
    fetchUserApi()
  }, [])

  const handleSubmitAssign = async () => {
    if (_.isEmpty(selectedQuiz)) {
      toast.error('Please Choose a Quiz to Assign!')
      return
    } else if (_.isEmpty(selectedUser)) {
      toast.error('Please Choose a User to Assign!')
      return
    }
    const res = await postAssignQuizForUser(selectedQuiz.value, selectedUser.value)
    if (res && res.EC === 0) {
      toast.success(res.EM)
      setSelectedQuiz({})
      setListUser({})
    } else {
      toast.error(res.EM)
    }
  }

  return (
    <div className={cx('assign')}>
      <div className='row'>
        <div className='col'>
          <h4>Select Quiz: </h4>
          <Select defaultValue={selectedQuiz} onChange={setSelectedQuiz} options={listQuiz} />
        </div>
        <div className='col'>
          <h4>Select User: </h4>
          <Select defaultValue={selectedUser} onChange={setSelectedUser} options={listUser} />
        </div>
      </div>
      <ButtonComponent classOriginal='btn-color' className={cx('btn')} onClick={handleSubmitAssign}>
        Assign Quiz
      </ButtonComponent>
    </div>
  )
}

export default AssignUser
