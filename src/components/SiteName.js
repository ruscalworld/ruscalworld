import styles from './SiteName.module.sass'
import NavBar from '@/components/NavBar'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'
import { useFonts } from '@/components/FontProvider'

function SiteName() {
    const { t } = useTranslation()
    const fonts = useFonts()

    return (
        <div className={ classNames(styles.wrapper, fonts.highlight) }>
            <div className={ styles.title }>
                <h1>RuscalWorld</h1>
                <p>{ t('title.slogan') }</p>
            </div>
            <NavBar/>
        </div>
    )
}

export default SiteName
