import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import ButtonComponent from '../Button/Button'
import { RiAddFill } from 'react-icons/ri'

function ModalComponent({ children, onSubmit, onClose, show, onShow }) {
  return (
    <>
      <ButtonComponent onClick={onShow} className='btn-color' left={<RiAddFill />}>
        Create User
      </ButtonComponent>

      <Modal backdrop='static' show={show} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <ButtonComponent onClick={onClose} primary>
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
