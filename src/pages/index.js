import styles from '@/styles/index.module.sass'
import Head from 'next/head'
import SiteName from '@/components/SiteName'
import classNames from 'classnames'
import { useElementState } from '@/components/Navigation'
import dynamic from 'next/dynamic'
import Contacts from '@/components/Contacts'

const CornerDecoration = dynamic(() => import('@/components/CornerDecoration'), { ssr: false })

export default function Index() {
    const { currentState: showContacts } = useElementState('contacts')

    return (
        <>
            <Head>
                <title>RuscalWorld</title>
                <meta name='description' content='Junior full-stack software engineer from Moscow.'/>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <CornerDecoration/>
            <main className={ styles.main }>
                <div className={ classNames(styles.titleWrapper) }>
                    <SiteName/>
                    <Contacts open={ showContacts }/>
                </div>
                <div>
                    <br/>
                </div>
            </main>
        </>
    )
}
