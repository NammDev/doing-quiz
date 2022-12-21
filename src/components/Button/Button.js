import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({ className, children }) {
  const classes = cx('wrapper', {
    [className]: className,
  })
  return <button className={classes}>{children}</button>
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Button
