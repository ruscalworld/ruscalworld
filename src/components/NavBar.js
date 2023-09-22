import styles from './NavBar.module.sass'
import NavLink from '@/components/NavLink'
import { useElementState } from '@/components/Navigation'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

function NavBar() {
    const { pathname } = useRouter()
    const isMainPage = pathname === '/'

    return (
        <nav className={ styles.nav }>
            <div className={ styles.group }>
                { isMainPage && <ContactsLink/> }
            </div>
            <div className={ styles.group }>
                <LocaleSwitcher/>
            </div>
        </nav>
    )
}

function BiographyLink() {
    const { currentState, setState } = useElementState('biography')
    const { t } = useTranslation()
    return <NavLink onClick={ () => setState(!currentState) }>{ t('nav.biography') }</NavLink>
}

function ProjectsLink() {
    const { currentState, setState } = useElementState('projects')
    const { t } = useTranslation()
    return <NavLink onClick={ () => setState(!currentState) }>{ t('nav.projects') }</NavLink>
}

function ContactsLink() {
    const { currentState, setState } = useElementState('contacts')
    const { t } = useTranslation()
    return <NavLink onClick={ () => setState(!currentState) }>{ t('nav.contacts') }</NavLink>
}

function LocaleSwitcher() {
    const { locale, locales } = useRouter()

    function getNextLocale() {
        return locales.filter((v) => v !== locale)[0]
    }

    return <NavLink locale={ getNextLocale() }>{ locale }</NavLink>
}

export default NavBar
