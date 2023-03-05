import '@/styles/globals.sass'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import ru from '@/i18n/ru.json'
import en from '@/i18n/en.json'
import { Navigation } from '@/components/Navigation'

i18n
    .use(initReactI18next)
    .init({
        resources: { ru, en },
        fallbackLng: 'en',
    }).then()

export default function App({ Component, pageProps }) {
    const { locale } = useRouter()

    useEffect(() => {
        i18n.changeLanguage(locale).then()
    }, [ locale ])

    return (
        <Navigation>
            <Component { ...pageProps } />
        </Navigation>
    )
}
