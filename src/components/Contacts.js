import styles from './Contacts.module.sass'
import classNames from 'classnames'
import { faDiscord, faGithub, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import Contact from '@/components/Contact'

const contacts = [
    {
        icon: faTelegramPlane,
        link: 'https://t.me/ruscalworld',
        text: '/ruscalworld',
        title: 'Telegram',
    },
    {
        icon: faDiscord,
        text: 'RuscalWorld#7262',
        title: 'Discord',
    },
    {
        icon: faGithub,
        link: 'https://github.com/ruscalworld',
        text: '/ruscalworld',
        title: 'GitHub',
    },
]

export default function Contacts({ open }) {
    return (
        <div className={ classNames(styles.contacts, {
            [styles.open]: open,
        }) } style={{ gridTemplateColumns: `repeat(${ contacts.length }, 1fr)`}}>
            { contacts.map((contact, index) => (
                <Contact key={ index } open={ open } timeout={ open ? 100 * index : 100 } { ...contact }/>
            )) }
        </div>
    )
}
