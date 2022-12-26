import Modal from 'react-bootstrap/Modal'
import ButtonComponent from '../Button/Button'

function ModalComponent({ heading, footer, children, onSubmit, onClose, show }) {
  return (
    <>
      <Modal backdrop='static' show={show} size='lg' onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <ButtonComponent onClick={onClose} primary>
            Close
          </ButtonComponent>
          <ButtonComponent onClick={onSubmit} className='btn-color'>
            {footer}
          </ButtonComponent>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalComponent
