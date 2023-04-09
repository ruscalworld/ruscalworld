import styles from './TextPageLayout.module.sass'
import NavBar from '@/components/NavBar'

export default function TextPageLayout({ children }) {
    return (
        <>
            <NavBar/>
            <main className={ styles.page }>
                { children }
            </main>
        </>
    )
}
