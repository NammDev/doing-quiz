import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function ButtonComponent({
  to,
  href,
  primary,
  outline,
  className,
  left,
  right,
  children,
  ...passProp
}) {
  const attributes = { ...passProp }
  let Comp = 'button'
  if (to) {
    attributes.to = to
    Comp = Link
  } else if (href) {
    attributes.href = href
    Comp = 'a'
  }

  if (outline) {
    primary = false
  }

  const classes = cx('wrapper', {
    primary,
    outline,
    [className]: className,
  })

  return (
    <Comp className={classes} {...attributes}>
      {left && left}
      <span className={cx('title')}>{children}</span>
      {right && right}
    </Comp>
  )
}

ButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ButtonComponent
