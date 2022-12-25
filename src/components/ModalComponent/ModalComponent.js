import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ButtonComponent from '../Button/Button'

function ModalComponent({ children, backdrop }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <ButtonComponent onClick={handleShow} className='btn-color'>
        Create User
      </ButtonComponent>

      <Modal backdrop={backdrop ? 'static' : undefined} show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <ButtonComponent onClick={handleClose} primary>
            Close
          </ButtonComponent>
          <ButtonComponent onClick={handleClose} className='btn-color'>
            Create User
          </ButtonComponent>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalComponent
