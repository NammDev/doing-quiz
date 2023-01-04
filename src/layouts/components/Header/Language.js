import classNames from 'classnames/bind'
import styles from './Language.module.scss'
import ButtonComponent from '~/components/Button/Button'
import { useTranslation } from 'react-i18next'

const cx = classNames.bind(styles)

function Language() {
  const { i18n } = useTranslation()
  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }
  return (
    <>
      <ButtonComponent primary onClick={() => changeLanguage('vn')}>
        Tieng Duc
      </ButtonComponent>
      <ButtonComponent primary onClick={() => changeLanguage('en')}>
        Tieng Anh
      </ButtonComponent>
    </>
  )
}

export default Language
