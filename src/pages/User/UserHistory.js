import { getHistory } from '~/services/auth'
import styles from './User.module.scss'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import _ from 'lodash'

const cx = classNames.bind(styles)

function UserHistory() {
  const [dataHistory, setDataHistory] = useState([])

  const fetchApi = async () => {
    const res = await getHistory()
    if (res && res.EC === 0) {
      const listHistory = res.DT.data.slice(0, 7).map((h) => {
        return {
          id: h.quizHistory.id,
          name: h.quizHistory.name,
          question: h.total_questions,
          correct: h.total_correct,
          date: h.updatedAt,
        }
      })
      setDataHistory(listHistory)
    }
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <table className={cx('content-table')}>
      <thead>
        <tr>
          <th>#</th>
          <th>Quiz Name</th>
          <th>Total Question</th>
          <th>Total Correct</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {dataHistory &&
          dataHistory.length > 0 &&
          dataHistory.map((h, index) => (
            <tr key={index}>
              <td>{h.id}</td>
              <td>{h.name}</td>
              <td>{h.question}</td>
              <td>{h.correct}</td>
              <td>{h.date}</td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default UserHistory
