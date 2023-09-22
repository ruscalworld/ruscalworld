import styles from '@/styles/index.module.sass'
import SiteName from '@/components/SiteName'
import classNames from 'classnames'
import { useElementState } from '@/components/Navigation'
import dynamic from 'next/dynamic'
import Contacts from '@/components/Contacts'
import { NextSeo } from 'next-seo'
import { useTranslation } from 'react-i18next'

const CornerDecoration = dynamic(() => import('@/components/CornerDecoration'), { ssr: false })

export default function Index() {
    const { currentState: showContacts } = useElementState('contacts')
    const { t } = useTranslation()

    return (
        <>
            <NextSeo title={ t('page.main.title') }/>
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
