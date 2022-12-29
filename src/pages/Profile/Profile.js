import styles from './Profile.module.scss'
import classNames from 'classnames/bind'
import { useSelector } from 'react-redux'
import ListQuiz from './ListQuiz'
import { useState, useEffect } from 'react'
import { getQuizByAccess } from '~/services/quiz'

const cx = classNames.bind(styles)

function Profile() {
  const account = useSelector((state) => state.user.account)

  const [listQuiz, setListQuiz] = useState([])

  const fetchApi = async () => {
    const data = await getQuizByAccess(account.access_token)
    if (data && data.EC === 0) {
      setListQuiz(data.DT)
    }
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div className='container'>
      <div className={cx('profile')}>
        <ListQuiz listQuiz={listQuiz} />
      </div>
    </div>
  )
}

export default Profile
