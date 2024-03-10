import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks';
import { FunctionComponent } from 'react'
import MdxContent from '@/components/MdxContent';

export interface ParamsProp {
    identifier: string
}

export interface Props {
    params: ParamsProp
}

export const generateStaticParams: () => Promise<Array<ParamsProp>> = async () => {
    return allPosts.map(post => ({ identifier: post._raw.flattenedPath }))
}

export const Page: FunctionComponent<Props> = async (props) => {
    const post = allPosts.find(post => post._raw.flattenedPath === props.params.identifier)
    if (!post) return notFound()
    const MDXContent = useMDXComponent(post.body.code)
    return <MDXContent components={{ MdxContent: () => <MdxContent /> }} />
}

export default Page
