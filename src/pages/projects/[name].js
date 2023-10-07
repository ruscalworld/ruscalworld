import { TextPage } from '@/components/TextPage'
import { getPagesPaths, getPagesProps } from '@/lib/texts'

function Project({ source }) {
    return <TextPage source={ source }/>
}

export async function getStaticPaths() {
    return await getPagesPaths('data/projects')
}

export async function getStaticProps(context) {
    return await getPagesProps('data/projects', context)
}

export default Project
