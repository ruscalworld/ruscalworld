import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import TextPageLayout from '@/components/layout/TextPageLayout'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import Title from '@/components/Title'

function Project(props) {
    return (
        <TextPageLayout>
            <Title>{ props.data.title }</Title>
            <div dangerouslySetInnerHTML={{ __html: props.content }}/>
        </TextPageLayout>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync('data/projects')
    const paths = files.map(file => ({ params: { name: path.parse(file).name } }))

    return { paths, fallback: false }
}

export async function getStaticProps(context) {
    const path = `data/projects/${ context.params.name }.md`

    const fileContents = fs.readFileSync(path, 'utf-8')
    const { content, data } = matter(fileContents)

    const text = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeSanitize)
        .use(rehypeStringify)
        .process(content)

    return {
        props: { data, content: String(text) }
    }
}

export default Project
