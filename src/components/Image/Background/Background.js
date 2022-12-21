import classNames from 'classnames/bind'
import styles from './Background.module.scss'
import { forwardRef } from 'react'


function ImageBackground({ className, url, ...passProp }, ref) {
  const passStyle = () => {
    return {
      backgroundImage: `url(${url})`,
    }
  }
  return <div ref={ref} style={passStyle()} {...passProp} className={cx('style', className)}></div>
}

export default forwardRef(ImageBackground)
