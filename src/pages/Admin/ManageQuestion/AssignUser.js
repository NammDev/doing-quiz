import classNames from 'classnames/bind'
import styles from './AssignUser.module.scss'
import Accordion from 'react-bootstrap/Accordion'

const cx = classNames.bind(styles)

function AssignUser() {
  return (
    <Accordion className='custom-acc' flush>
      <Accordion.Header>
        <h2>Assign User</h2>
      </Accordion.Header>
      <Accordion.Body></Accordion.Body>
    </Accordion>
  )
}

export default AssignUser
