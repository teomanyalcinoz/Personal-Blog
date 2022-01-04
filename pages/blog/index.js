/* eslint-disable @next/next/link-passhref */
import Link from 'next/link'
import { getAllNodes } from 'next-mdx/server'
import { AiOutlineArrowRight } from 'react-icons/ai';

function BlogPage({ posts }) {
    return (
        <div className="site-container">
            <div className="space-y-10">
                { posts.map((post) => {
                    return (
                        <article key={ post.url }>
                            <h2 className="text-2xl font-bold hover:text-violet-400">
                                <p >{ post.frontMatter.title }</p>
                            </h2>
                            <p>{ post.frontMatter.excerpt }</p>
                            <div className="text-gray-400">
                                <span>{ post.frontMatter.date }</span>
                            </div>
                            <div>
                                <Link href={ post.url }>
                                    <button className="flex rounded-full hover:bg-violet-200">
                                        Devamını Oku  <AiOutlineArrowRight className='text-xl ml-1 mt-1' />
                                    </button>
                                </Link>
                            </div>
                        </article>
                    )
                }) }
            </div>
        </div>
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