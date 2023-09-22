import fs from 'fs'
import path from 'path'
import TextPageLayout from '@/components/layout/TextPageLayout'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import SiteName from '@/components/SiteName'
import Contacts from '@/components/Contacts'
import Title from '@/components/Title'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

function Project({ source }) {
    return (
        <TextPageLayout>
            <NextSeo title={ source.frontmatter.title } description={ source.frontmatter.description }/>
            { source.frontmatter.title && <Title>{ source.frontmatter.title }</Title> }
            <MDXRemote { ...source } components={{ SiteName, Contacts }}/>
        </TextPageLayout>
    )
}

export async function getStaticPaths() {
    const localeDirectories = fs.readdirSync('data/projects')
    const paths = []
    for (const locale of localeDirectories) {
        const files = fs.readdirSync(`data/projects/${ locale }`)
        paths.push(...files.map(file => ({ params: { name: path.parse(file).name }, locale })))
    }

    return { paths, fallback: false }
}

export async function getStaticProps({ locale, params }) {
    const path = `data/projects/${ locale }/${ params.name }.mdx`

    const fileContents = fs.readFileSync(path, 'utf-8')
    const source = await serialize(fileContents, { parseFrontmatter: true })

    return {
        props: { source }
    }
}

export default Project
