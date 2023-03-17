import styles from './NavLink.module.sass'
import PropTypes from 'prop-types'
import Link from 'next/link'

function NavLink({ onClick, locale, children }) {
    return (
        <Link href='#' onClick={ onClick ?? (() => {}) } locale={ locale }>
            <div className={ styles.link }>
                { children }
            </div>
        </Link>
    )
}

NavLink.propTypes = {
    onClick: PropTypes.func,
}

export default NavLink
