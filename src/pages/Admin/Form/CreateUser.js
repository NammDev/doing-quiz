import Form from 'react-bootstrap/Form'
import styles from './CreateUser.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
function CreateUser() {
  return (
    <Form className={cx('form')}>
      <Form.Group className={cx('form-group-full')} controlId='userEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' />
      </Form.Group>

      <Form.Group className={cx('form-group-half')} controlId='userPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Password' />
      </Form.Group>

      <Form.Group className={cx('form-group-half')} controlId='userName'>
        <Form.Label>UserName</Form.Label>
        <Form.Control type='text' placeholder='Username' />
      </Form.Group>

      <Form.Group className={cx('form-group-half')} controlId='userImage'>
        <Form.Label>Pick User's Avatar</Form.Label>
        <Form.Control type='file' />
      </Form.Group>

      <Form.Group className={cx('form-group-half')} controlId='userRole'>
        <Form.Label>Role</Form.Label>
        <Form.Select>
          <option>Open this role menu</option>
          <option value='user'>USER</option>
          <option value='admin'>ADMIN</option>
        </Form.Select>
      </Form.Group>
    </Form>
  )
}

export default CreateUser
