import classNames from 'classnames/bind'
import styles from './Language.module.scss'
import ButtonComponent from '~/components/Button/Button'
import { useTranslation } from 'react-i18next'

const cx = classNames.bind(styles)

function Language() {
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.languages[0]
  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }
  return (
    <>
      <ButtonComponent
        primary={currentLanguage === 'vn'}
        outline={currentLanguage !== 'vn'}
        onClick={() => changeLanguage('vn')}
      >
        {t('heading.language-vn')}
      </ButtonComponent>
      <ButtonComponent
        primary={currentLanguage === 'en'}
        outline={currentLanguage !== 'en'}
        onClick={() => changeLanguage('en')}
      >
        {t('heading.language-en')}
      </ButtonComponent>
    </>
  )
}

export default Language
