import styles from './Contact.module.sass'
import { Transition } from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const transitions = {
    entering: {
        display: 'flex',
        opacity: 0,
        transform: 'translateY(24px)',
    },
    entered: {
        display: 'flex',
        opacity: 1,
    },
    exiting: {
        opacity: 0,
        display: 'flex',
    },
    exited: {
        opacity: 0,
        display: 'none',
    }
}

function Contact({ timeout, open, icon, link, title, text }) {
    return (
        <Transition in={ open } timeout={ timeout }>
            { state => (
                <Link href={ link ?? '#' }>
                    <div className={ styles.contact } style={{ ...transitions[state] }}>
                        <div className={ styles.iconWrapper }>
                            { icon && <FontAwesomeIcon icon={ icon }/> }
                        </div>
                        <div className={ styles.descriptionWrapper }>
                            <h6>{ title }</h6>
                            <p>{ text }</p>
                        </div>
                    </div>
                </Link>
            ) }
        </Transition>
    )
}

export default Contact
