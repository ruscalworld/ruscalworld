import { serialize } from 'next-mdx-remote/serialize'

export async function getPagesPaths(rootPath) {
    const fs = await import('fs')
    const path = await import('path')

    const localeDirectories = await readLocaleDirectories(rootPath)
    const paths = []
    for (const locale of localeDirectories) {
        try {
            const files = fs.readdirSync(`${ rootPath }/${ locale }`)
            paths.push(...files.map(file => ({ params: { name: path.parse(file).name }, locale })))
        } catch (err) {
            console.warn(`Could not read directory for locale ${ locale } with root path ${ rootPath }`, err)
        }
    }

    return { paths, fallback: false }
}

async function readLocaleDirectories(rootPath) {
    try {
        const fs = await import('fs')
        return fs.readdirSync(rootPath)
    } catch (error) {
        console.warn(`Could not read path ${ rootPath }`, error)
        return []
    }
}

export async function getPagesProps(rootPath, { locale, params }) {
    const path = `${ rootPath }/${ locale }/${ params.name }.mdx`
    return getPageProps(path)
}

export async function getPageProps(path) {
    const fs = await import('fs')
    try {
        const fileContents = fs.readFileSync(path, 'utf-8')
        const source = await serialize(fileContents, { parseFrontmatter: true })
        return { props: { source } }
    } catch (error) {
        return { notFound: true }
    }
}
