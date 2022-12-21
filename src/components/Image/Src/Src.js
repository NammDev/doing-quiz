import { useState, forwardRef } from 'react'
import classNames from 'classnames/bind'
import images from '~/assets/images'
import styles from './Src.module.scss'
import PropTypes from 'prop-types'

const cx = classNames.bind(styles)

const ImageSrc = forwardRef(
  ({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('')

    const handleError = () => {
      setFallback(customFallback)
    }

    return (
      <img
        className={cx('wrapper', className)}
        ref={ref}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    )
  }
)

ImageSrc.propTypes = {
  src: PropTypes.any.isRequired,
}

export default ImageSrc
