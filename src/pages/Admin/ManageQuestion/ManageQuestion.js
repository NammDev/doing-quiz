import classNames from 'classnames/bind'
import styles from './ManageQuestion.module.scss'
import AddQuestion from './AddQuestion'
import UpdateQuestion from './UpdateQuestion'
import Accordion from 'react-bootstrap/Accordion'

const cx = classNames.bind(styles)

function ManageQuestion() {
  return (
    <div className={cx('manage-question')}>
      <Accordion defaultActiveKey='0' className='custom-acc' flush>
        <Accordion.Item eventKey='0' className={cx('component')}>
          <Accordion.Header>
            <h3>Add Question for Quiz</h3>
          </Accordion.Header>
          <Accordion.Body>
            <AddQuestion />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1' className={cx('component')}>
          <Accordion.Header>
            <h3>Update Question</h3>
          </Accordion.Header>
          <Accordion.Body>
            <UpdateQuestion />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default ManageQuestion
