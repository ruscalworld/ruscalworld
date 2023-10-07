import { TextPage } from '@/components/TextPage'

function CV({ source }) {
    return <TextPage source={ source }/>
}

export async function getStaticProps({ locale }) {
    const { getPageProps } = await import('@/lib/texts')
    return await getPageProps(`data/cv/${ locale }.mdx`)
}

export default CV
