import '@/styles/globals.sass'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import ru from '@/i18n/ru.json'
import en from '@/i18n/en.json'
import { Navigation } from '@/components/Navigation'
import { Exo_2, Sofia_Sans } from 'next/font/google'
import { FontContext } from '@/components/FontProvider'
import { Analytics } from '@vercel/analytics/react'

const exo_2 = Exo_2({ subsets: [ 'cyrillic', 'latin' ] })
const sofia_sans_semi_condensed = Sofia_Sans({ subsets: [ 'cyrillic', 'latin' ] })

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

    // noinspection HtmlUnknownAttribute
    return (
        <>
            <Analytics/>
            <Navigation>
                <style jsx global>{`html { font-family: ${ exo_2.style.fontFamily } `}</style>
                <FontContext.Provider value={{ default: exo_2.className, highlight: sofia_sans_semi_condensed.className }}>
                    <Component { ...pageProps } />
                </FontContext.Provider>
            </Navigation>
        </>
    )
}
