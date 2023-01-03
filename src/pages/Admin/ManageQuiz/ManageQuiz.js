import classNames from 'classnames/bind'
import styles from './ManageQuiz.module.scss'
import TableQuiz from './TableQuiz'
import CreateQuiz from './CreateQuiz'
import AssignUser from './AssignUser'
import Accordion from 'react-bootstrap/Accordion'

const cx = classNames.bind(styles)

function ManageQuiz() {
  return (
    <div className={cx('manage-quiz')}>
      <Accordion defaultActiveKey='0' className='custom-acc' flush>
        <Accordion.Item eventKey='0' className={cx('component')}>
          <Accordion.Header>
            <h3>Create New Quiz</h3>
          </Accordion.Header>
          <Accordion.Body>
            <CreateQuiz />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1' className={cx('component')}>
          <Accordion.Header>
            <h3>Table List Quiz</h3>
          </Accordion.Header>
          <Accordion.Body>
            <TableQuiz />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2' className={cx('component')}>
          <Accordion.Header>
            <h3>Assign Quiz for User</h3>
          </Accordion.Header>
          <Accordion.Body>
            <AssignUser />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default ManageQuiz
