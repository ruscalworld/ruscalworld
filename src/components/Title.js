import styles from './Title.module.sass'
import NavBar from '@/components/NavBar'
import { useTranslation } from 'react-i18next'

function Title() {
    const { t } = useTranslation()

    return (
        <div className={ styles.wrapper }>
            <div className={ styles.title }>
                <h1>RuscalWorld</h1>
                <p>{ t('title.slogan') }</p>
            </div>
            <NavBar/>
        </div>
    )
}

export default Title
