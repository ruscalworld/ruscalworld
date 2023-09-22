import '@/styles/globals.sass'
import i18n from 'i18next'
import { initReactI18next, useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import ru from '@/i18n/ru.json'
import en from '@/i18n/en.json'
import { Navigation } from '@/components/Navigation'
import { Exo_2 as Exo2, Sofia_Sans as SofiaSans } from 'next/font/google'
import { FontContext } from '@/components/FontProvider'
import { DefaultSeo } from 'next-seo'
import { Analytics } from '@vercel/analytics/react'

const exo2 = Exo2({ subsets: [ 'cyrillic', 'latin' ] })
const sofiaSans = SofiaSans({ subsets: [ 'cyrillic', 'latin' ] })

i18n
    .use(initReactI18next)
    .init({
        resources: { ru, en },
        fallbackLng: 'en',
    }).then()

export default function App({ Component, pageProps }) {
    const { locale } = useRouter()
    const { t } = useTranslation()

    useEffect(() => {
        i18n.changeLanguage(locale).then()
    }, [ locale ])

    // noinspection HtmlUnknownAttribute
    return (
        <>
            <DefaultSeo
                openGraph={{
                    type: 'website',
                    locale: locale,
                    url: 'https://ruscal.world',
                    siteName: 'RuscalWorld',
                }}
                titleTemplate={ t('meta.titleTemplate') }
                defaultTitle={ t('meta.defaultTitle') }
                description={ t('meta.description') }
                themeColor='#FFFF00'
            />
            <style jsx global>{ `html { font-family: ${ exo2.style.fontFamily } }` }</style>
            <Analytics/>
            <Navigation>
                <FontContext.Provider value={{ default: exo2.className, highlight: sofiaSans.className }}>
                    <Component { ...pageProps }/>
                </FontContext.Provider>
            </Navigation>
        </>
    )
}
