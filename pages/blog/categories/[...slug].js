/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/link-passhref */
import { getAllNodes, getMdxPaths, getNode } from "next-mdx"
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function CategoryPage({ category, posts }) {
    return (
        <div className="site-container">
            <h1 className="text-4xl font-bold text-violet-400 mb-5 text-center">{ category.frontMatter.name }</h1>
            <div className="space-y-10">
                { posts.map((post) => {
                    return (
                        <article key={ post.url }>
                            <h2 className="text-2xl font-bold hover:text-violet-400">
                                <Link href={ post.url }>
                                    <p >{ post.frontMatter.title }</p>
                                </Link>
                            </h2>
                            <p>{ post.frontMatter.excerpt }</p>
                            <div className="text-gray-400">
                                <span>{ post.frontMatter.date }</span>
                            </div>
                            <div>
                                <Link href={ post.url }>
                                    <p className="flex rounded-full hover:text-violet-800">
                                        Devamını Oku  <AiOutlineArrowRight className='text-xl ml-1 mt-1' />
                                    </p>
                                </Link>
                            </div>
                        </article >
                    )
                }) }
            </div >
        </div >
    )
}

export async function getStaticPaths() {
    return {
        paths: await getMdxPaths("category"),
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const category = await getNode("category", context)

    if (!category) {
        return {
            notFound: true,
        }
    }

    const posts = await getAllNodes("post")

    return {
        props: {
            category,
            posts: posts.filter((post) =>
                post?.relationships?.category?.some(({ slug }) => slug === category.slug)
            ),
        },
    }
}