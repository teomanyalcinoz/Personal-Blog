/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/link-passhref */
import Link from 'next/link'
import { getAllNodes } from 'next-mdx/server'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { positions } from '@mui/system';

function BlogPage({ posts }) {
    return (
        <div className="site-container">
            <h1 className="text-4xl font-bold  mb-5 text-center">Blog Yazıları</h1>
            <div className="space-y-10">
                { posts.map((post) => {
                    return (
                        <article key={ post.url }>
                            <button className=" px-4 font-semibold text-xl border-1 rounded-full text-violet-800 bg-violet-200">
                                { post.relationships.category?.map((category, index) => (
                                    <span fontWeight="semibold" key={ category.slug }>
                                        { index !== 0 && " and " }{ "  " }
                                        <Link href={ category.url }>{ category.frontMatter.name }</Link>
                                    </span>
                                )) }
                            </button>
                            <h2 className="text-2xl font-bold">
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
                                    <p className="flex font-semibold text-l rounded-full hover:text-violet-800">
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

export async function getStaticProps() {
    return {
        props: {
            posts: await getAllNodes('post')
        }
    }
}

export default BlogPage