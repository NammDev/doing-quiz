import classNames from 'classnames/bind'
import styles from './UpdateQuestion.module.scss'
import Accordion from 'react-bootstrap/Accordion'

const cx = classNames.bind(styles)

function UpdateQuestion() {
  return (
    <Accordion className='custom-acc' flush>
      <Accordion.Header>
        <h2>Update Question</h2>
      </Accordion.Header>
      <Accordion.Body></Accordion.Body>
    </Accordion>
  )
}

export default UpdateQuestion
