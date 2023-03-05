import styles from './NavLink.module.sass'
import PropTypes from 'prop-types'

function NavLink({ onClick, children }) {
    return (
        <div className={ styles.link } onClick={ onClick ?? (() => {}) }>
            { children }
        </div>
    )
}

NavLink.propTypes = {
    onClick: PropTypes.func,
}

export default NavLink
