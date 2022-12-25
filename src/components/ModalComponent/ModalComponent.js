import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import ButtonComponent from '../Button/Button'
import { RiAddFill } from 'react-icons/ri'

function ModalComponent({ children, onSubmit }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <ButtonComponent onClick={handleShow} className='btn-color' left={<RiAddFill />}>
        Create User
      </ButtonComponent>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <ButtonComponent onClick={handleClose} primary>
            Close
          </ButtonComponent>
          <ButtonComponent onClick={onSubmit} className='btn-color'>
            Create User
          </ButtonComponent>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalComponent
