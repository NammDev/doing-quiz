import classNames from 'classnames/bind'
import { BsPencilFill } from 'react-icons/bs'
import { TiDelete } from 'react-icons/ti'
import styles from './TableQuiz.module.scss'
import { useState, useEffect } from 'react'
import { getAllQuizForAdmin } from '~/services/quiz'
import ModalUpdateQuiz from './ModalUpdateQuiz'
import ModalDeleteQuiz from './ModalDeleteQuiz'

const cx = classNames.bind(styles)

function TableQuiz() {
  const [listQuiz, setListQuiz] = useState([])

  const [showModalUpdate, setShowModalUpdate] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)

  const [dataDelete, setDataDelete] = useState({})
  const [dataUpdate, setDataUpdate] = useState({})

  const fetchAPI = async () => {
    const data = await getAllQuizForAdmin()
    if (data.EC === 0) {
      setListQuiz(data.DT)
    }
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  const handleClickUpdate = (quiz) => {
    setShowModalUpdate(true)
    setDataUpdate(quiz)
  }

  const handleClickDelete = (quiz) => {
    setShowModalDelete(true)
    setDataDelete(quiz)
  }

  return (
    <>
      <table className={cx('content-table')}>
        <thead>
          <tr>
            <th>#</th>
            <th>Quiz Name</th>
            <th>Description</th>
            <th>Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listQuiz &&
            listQuiz.length > 0 &&
            listQuiz.map((quiz) => (
              <tr key={quiz.id} onClick={() => handleClickUpdate(quiz)}>
                <td>{quiz.id}</td>
                <td>{quiz.name}</td>
                <td>{quiz.description}</td>
                <td>{quiz.difficulty}</td>
                <td>
                  <ul className={cx('table-actions')}>
                    <li>
                      <BsPencilFill
                        size={16}
                        className='hover-big'
                        style={{ color: 'green' }}
                        onClick={() => handleClickUpdate(quiz)}
                      />
                    </li>
                    <li>
                      <TiDelete
                        size={20}
                        onClick={() => handleClickDelete(quiz)}
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
      <ModalUpdateQuiz
        show={showModalUpdate}
        setShow={setShowModalUpdate}
        data={dataUpdate}
        reRender={fetchAPI}
      />
      <ModalDeleteQuiz
        show={showModalDelete}
        setShow={setShowModalDelete}
        data={dataDelete}
        reRender={fetchAPI}
      />
    </>
  )
}

export default TableQuiz
