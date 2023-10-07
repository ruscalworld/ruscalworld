import { NextSeo } from 'next-seo'
import Title from '@/components/Title'
import { MDXRemote } from 'next-mdx-remote'
import SiteName from '@/components/SiteName'
import Contacts from '@/components/Contacts'
import TextPageLayout from '@/components/layout/TextPageLayout'
import PropTypes from 'prop-types'

export function TextPage({ source }) {
    return (
        <TextPageLayout>
            <NextSeo title={ source.frontmatter.title } description={ source.frontmatter.description }/>
            { source.frontmatter.title && <Title>{ source.frontmatter.title }</Title> }
            <MDXRemote { ...source } components={{ SiteName, Contacts }}/>
        </TextPageLayout>
    )
}

TextPage.propTypes = {
    source: PropTypes.object.isRequired,
}
